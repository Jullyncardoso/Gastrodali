import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Plus } from "lucide-react";
import { menu } from "@/data/menu";
import { useCart, formatBRL } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/cardapio")({
  component: Cardapio,
  head: () => ({
    meta: [
      { title: "Cardápio — Gastrô Dalí" },
      { name: "description", content: "Almoço executivo, saladas, petiscos, hambúrgueres, especiais e bebidas. Monte seu pedido online." },
    ],
  }),
});

function Cardapio() {
  const { add } = useCart();
  const [active, setActive] = React.useState(menu[0].id);

  const handleAdd = (id: string, name: string) => {
    add(id);
    toast.success(`${name} adicionado ao pedido`);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <header className="mb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Cardápio</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">Surreal em cada garfada</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Toque em <span className="text-primary">+</span> para montar seu pedido e finalize na aba "Pedido".
        </p>
      </header>

      {/* Tabs */}
      <div className="sticky top-20 z-20 -mx-4 mb-10 overflow-x-auto border-b border-border/60 bg-background/85 px-4 backdrop-blur-xl">
        <div className="flex gap-1 py-2">
          {menu.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              onClick={() => setActive(c.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium uppercase tracking-wider transition ${
                active === c.id
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:bg-card hover:text-primary"
              }`}
            >
              {c.title}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        {menu.map((cat) => (
          <section key={cat.id} id={cat.id} className="scroll-mt-40">
            <h2 className="font-display text-3xl text-primary md:text-4xl">{cat.title}</h2>
            {cat.subtitle && <p className="mt-1 text-sm text-muted-foreground">{cat.subtitle}</p>}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {cat.items.map((item) => (
                <article
                  key={item.id}
                  className="group flex items-start justify-between gap-4 rounded-xl border border-border/60 bg-card p-5 transition hover:border-primary/50"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-lg">{item.name}</h3>
                      <span className="shrink-0 font-medium text-primary">{formatBRL(item.price)}</span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                  </div>
                  <Button
                    size="icon"
                    onClick={() => handleAdd(item.id, item.name)}
                    aria-label={`Adicionar ${item.name}`}
                    className="shrink-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
