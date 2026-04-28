import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart, formatBRL } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

export const Route = createFileRoute("/checkout")({
  component: Checkout,
  head: () => ({
    meta: [
      { title: "Finalizar Pedido, Gastrô Dalí" },
      { name: "description", content: "Conclua seu pedido online no Gastrô Dalí." },
    ],
  }),
});

const schema = z
  .object({
    nome: z.string().trim().min(3, "Informe seu nome completo").max(120),
    telefone: z
      .string()
      .trim()
      .min(10, "Telefone inválido")
      .max(20)
      .regex(/^[\d\s()+-]+$/, "Use apenas números e símbolos comuns"),
    email: z.string().trim().email("E-mail inválido").max(255).or(z.literal("")).optional(),
    tipoEntrega: z.enum(["delivery", "balcao"], {
      message: "Escolha como deseja receber",
    }),
    logradouro: z.string().trim().max(160).optional().or(z.literal("")),
    numero: z.string().trim().max(20).optional().or(z.literal("")),
    bairro: z.string().trim().max(80).optional().or(z.literal("")),
    complemento: z.string().trim().max(120).optional().or(z.literal("")),
    referencia: z.string().trim().max(160).optional().or(z.literal("")),
    pagamento: z.enum(["credito", "debito", "dinheiro", "pix"], {
      message: "Escolha a forma de pagamento",
    }),
    troco: z.string().trim().max(20).optional().or(z.literal("")),
    observacoes: z.string().trim().max(500).optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.tipoEntrega === "delivery") {
      if (!data.logradouro || data.logradouro.trim().length < 3) {
        ctx.addIssue({ code: "custom", path: ["logradouro"], message: "Informe o logradouro" });
      }
      if (!data.numero || data.numero.trim().length < 1) {
        ctx.addIssue({ code: "custom", path: ["numero"], message: "Informe o número" });
      }
      if (!data.bairro || data.bairro.trim().length < 2) {
        ctx.addIssue({ code: "custom", path: ["bairro"], message: "Informe o bairro" });
      }
    }
  });

type FormData = z.infer<typeof schema>;

function Checkout() {
  const { detailed, total, count, setQty, remove, clear } = useCart();
  const navigate = useNavigate();
  const [submitting, setSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      pagamento: undefined as unknown as FormData["pagamento"],
      tipoEntrega: "delivery",
    },
  });

  const pagamento = watch("pagamento");
  const tipoEntrega = watch("tipoEntrega");

  const onSubmit = async (data: FormData) => {
    if (count === 0) {
      toast.error("Adicione itens ao pedido antes de finalizar");
      return;
    }
    setSubmitting(true);

    const pedido = {
      cliente: data,
      itens: detailed.map((d) => ({
        id: d.item.id,
        nome: d.item.name,
        qty: d.qty,
        preco: d.item.price,
        subtotal: d.subtotal,
      })),
      total,
      criado_em: new Date().toISOString(),
    };

    try {
      sessionStorage.setItem("dali-last-order", JSON.stringify(pedido));
    } catch {
      // ignore
    }

    // Envio para Pipedream (Trello)
    const enderecoCompleto =
      data.tipoEntrega === "delivery"
        ? [
            `${data.logradouro}, ${data.numero}`,
            data.bairro,
            data.complemento,
            data.referencia ? `Ref: ${data.referencia}` : "",
          ]
            .filter(Boolean)
            .join(" - ")
        : "Retirada no balcão";

    const itensTexto = detailed
      .map((d) => `${d.qty}x ${d.item.name} (${formatBRL(d.subtotal)})`)
      .join(", ");

    const agora = new Date();
    const dataFormatada = agora.toLocaleDateString("pt-BR");
    const horaFormatada = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

    try {
      await fetch("https://eos6u8bz6wmwd2t.m.pipedream.net", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          titulo: `${data.nome} - ${dataFormatada} - ${horaFormatada}`,
          descricao: [
            `Cliente: ${data.nome}`,
            `Itens: ${itensTexto}`,
            `Total: ${formatBRL(total)}`,
            `Pagamento: ${data.pagamento}${data.pagamento === "dinheiro" ? ` (troco para: ${data.troco || "não necessário"})` : ""}`,
            `Tipo: ${data.tipoEntrega === "delivery" ? "Delivery" : "Retirada no balcão"}`,
            `Endereço: ${enderecoCompleto}`,
            `WhatsApp: ${data.telefone}`,
            `E-mail: ${data.email || "—"}`,
            `Obs: ${data.observacoes || "Nenhuma"}`,
          ].join("\n"),
          cliente: data.nome,
          telefone: data.telefone,
          email: data.email || "",
          tipoEntrega: data.tipoEntrega,
          endereco: enderecoCompleto,
          pagamento: data.pagamento,
          troco: data.troco || "",
          observacoes: data.observacoes || "",
          itens: itensTexto,
          total: total.toFixed(2),
          criado_em: agora.toISOString(),
        }),
      });
    } catch (error) {
      console.error("Erro ao enviar pedido para o Pipedream/Trello", error);
      toast.error("Pedido salvo, mas houve um problema ao notificar a equipe.");
    }

    clear();
    setSubmitting(false);
    navigate({ to: "/pedido-confirmado" });
  };

  if (count === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center md:px-8">
        <ShoppingBag className="mx-auto h-12 w-12 text-primary" />
        <h1 className="mt-4 font-display text-3xl">Seu pedido está vazio</h1>
        <p className="mt-2 text-muted-foreground">Comece pelo nosso cardápio.</p>
        <Link to="/cardapio" className="mt-6 inline-block">
          <Button size="lg">Ver cardápio</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Finalizar pedido</p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Quase lá</h1>
      </header>

      <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          <Section title="Seus dados">
            <Field label="Nome completo *" error={errors.nome?.message}>
              <Input {...register("nome")} placeholder="Como devemos te chamar" />
            </Field>
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Telefone *" error={errors.telefone?.message}>
                <Input {...register("telefone")} placeholder="(32) 99999-9999" />
              </Field>
              <Field label="E-mail" error={errors.email?.message}>
                <Input type="email" {...register("email")} placeholder="opcional" />
              </Field>
            </div>
          </Section>

          <Section title="Como deseja receber?">
            <RadioGroup
              value={tipoEntrega}
              onValueChange={(v) => setValue("tipoEntrega", v as FormData["tipoEntrega"], { shouldValidate: true })}
              className="grid grid-cols-1 gap-3 md:grid-cols-2"
            >
              {[
                { v: "delivery", l: "Delivery", d: "Entregamos no seu endereço" },
                { v: "balcao", l: "Retirada no balcão", d: "Buscar no restaurante" },
              ].map((opt) => (
                <Label
                  key={opt.v}
                  className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition ${
                    tipoEntrega === opt.v ? "border-primary bg-primary/10" : "border-border/60 hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem value={opt.v} className="mt-1" />
                  <div>
                    <p className="text-sm font-medium">{opt.l}</p>
                    <p className="text-xs text-muted-foreground">{opt.d}</p>
                  </div>
                </Label>
              ))}
            </RadioGroup>
            {errors.tipoEntrega && <p className="text-xs text-destructive">{errors.tipoEntrega.message}</p>}
          </Section>

          {tipoEntrega === "delivery" && (
            <Section title="Endereço de entrega">
              <div className="grid gap-5 md:grid-cols-[1fr_140px]">
                <Field label="Logradouro *" error={errors.logradouro?.message}>
                  <Input {...register("logradouro")} placeholder="Rua, avenida..." />
                </Field>
                <Field label="Número *" error={errors.numero?.message}>
                  <Input {...register("numero")} placeholder="123" />
                </Field>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Bairro *" error={errors.bairro?.message}>
                  <Input {...register("bairro")} placeholder="Centro" />
                </Field>
                <Field label="Complemento" error={errors.complemento?.message}>
                  <Input {...register("complemento")} placeholder="Apto, bloco, casa..." />
                </Field>
              </div>
              <Field label="Ponto de referência" error={errors.referencia?.message}>
                <Input {...register("referencia")} placeholder="Próximo a..." />
              </Field>
            </Section>
          )}

          <Section title="Pagamento">
            <RadioGroup
              value={pagamento}
              onValueChange={(v) => setValue("pagamento", v as FormData["pagamento"], { shouldValidate: true })}
              className="grid grid-cols-2 gap-3 md:grid-cols-4"
            >
              {[
                { v: "credito", l: "Crédito" },
                { v: "debito", l: "Débito" },
                { v: "dinheiro", l: "Dinheiro" },
                { v: "pix", l: "PIX" },
              ].map((opt) => (
                <Label
                  key={opt.v}
                  className={`flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition ${
                    pagamento === opt.v ? "border-primary bg-primary/10" : "border-border/60 hover:border-primary/50"
                  }`}
                >
                  <RadioGroupItem value={opt.v} />
                  <span className="text-sm font-medium">{opt.l}</span>
                </Label>
              ))}
            </RadioGroup>
            {errors.pagamento && <p className="text-xs text-destructive">{errors.pagamento.message}</p>}

            {pagamento === "dinheiro" && (
              <Field label="Troco para" error={errors.troco?.message}>
                <Input {...register("troco")} placeholder="Ex.: R$ 100,00 (deixe em branco se não precisar)" />
              </Field>
            )}
          </Section>

          <Section title="Observações">
            <Textarea
              {...register("observacoes")}
              placeholder="Alguma preferência, retirar ingredientes, ponto da carne..."
              rows={4}
            />
          </Section>

          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
            {submitting ? "Enviando..." : `Concluir pedido — ${formatBRL(total)}`}
          </Button>
        </form>

        {/* CART SUMMARY */}
        <aside className="lg:sticky lg:top-24 lg:h-fit">
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <h2 className="font-display text-2xl">Seu pedido</h2>
            <ul className="mt-5 divide-y divide-border/60">
              {detailed.map((d) => (
                <li key={d.item.id} className="flex gap-3 py-4">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{d.item.name}</p>
                    <p className="text-xs text-muted-foreground">{formatBRL(d.item.price)} un</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button type="button" size="icon" variant="outline" className="h-7 w-7" onClick={() => setQty(d.item.id, d.qty - 1)}>
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-6 text-center text-sm">{d.qty}</span>
                      <Button type="button" size="icon" variant="outline" className="h-7 w-7" onClick={() => setQty(d.item.id, d.qty + 1)}>
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button type="button" size="icon" variant="ghost" className="ml-auto h-7 w-7 text-destructive" onClick={() => remove(d.item.id)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  <span className="shrink-0 text-sm font-medium">{formatBRL(d.subtotal)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-5">
              <span className="text-sm uppercase tracking-widest text-muted-foreground">Total</span>
              <span className="font-display text-2xl text-primary">{formatBRL(total)}</span>
            </div>
            <Link to="/cardapio" className="mt-4 block text-center text-xs text-primary hover:underline">
              + Adicionar mais itens
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-border/60 bg-card p-6">
      <h2 className="mb-5 font-display text-xl">{title}</h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label className="text-xs uppercase tracking-wider text-muted-foreground">{label}</Label>
      {children}
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
