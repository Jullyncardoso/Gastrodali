import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatBRL } from "@/context/CartContext";

export const Route = createFileRoute("/pedido-confirmado")({
  component: Confirmado,
  head: () => ({
    meta: [
      { title: "Pedido recebido — Gastrô Dalí" },
      { name: "description", content: "Seu pedido foi recebido. Em breve nossa equipe entrará em contato." },
    ],
  }),
});

type Pedido = {
  cliente: {
    nome: string;
    telefone: string;
    pagamento: string;
  };
  itens: Array<{ nome: string; qty: number; subtotal: number }>;
  total: number;
};

function Confirmado() {
  const [pedido, setPedido] = React.useState<Pedido | null>(null);

  React.useEffect(() => {
    try {
      const raw = sessionStorage.getItem("dali-last-order");
      if (raw) setPedido(JSON.parse(raw));
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="mx-auto max-w-2xl px-4 py-20 md:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="text-center"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/15">
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </div>
        <h1 className="mt-6 font-display text-4xl md:text-5xl">Pedido recebido!</h1>
        <p className="mt-3 text-foreground/85">
          {pedido?.cliente?.nome ? `Obrigado, ${pedido.cliente.nome.split(" ")[0]}! ` : "Obrigado! "}
          Em instantes nossa equipe entrará em contato para confirmar a entrega.
        </p>
      </motion.div>

      {pedido && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 rounded-xl border border-border/60 bg-card p-6"
        >
          <h2 className="font-display text-xl">Resumo do pedido</h2>
          <ul className="mt-4 divide-y divide-border/60 text-sm">
            {pedido.itens.map((i, idx) => (
              <li key={idx} className="flex justify-between py-2">
                <span>
                  {i.qty}× {i.nome}
                </span>
                <span className="text-muted-foreground">{formatBRL(i.subtotal)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between border-t border-border/60 pt-4">
            <span className="text-sm uppercase tracking-widest text-muted-foreground">Total</span>
            <span className="font-display text-xl text-primary">{formatBRL(pedido.total)}</span>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Pagamento: <span className="capitalize text-foreground">{pedido.cliente.pagamento}</span> · Contato: {pedido.cliente.telefone}
          </p>
        </motion.div>
      )}

      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <a href="tel:+5532998492121">
          <Button variant="outline" size="lg" className="w-full sm:w-auto">
            <Phone className="h-4 w-4" /> Falar com o restaurante
          </Button>
        </a>
        <Link to="/">
          <Button size="lg" className="w-full sm:w-auto">Voltar ao início</Button>
        </Link>
      </div>
    </div>
  );
}
