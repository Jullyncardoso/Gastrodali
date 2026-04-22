import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { menu } from "@/data/menu";
import { useCart, formatBRL } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/cardapio")({
  component: Cardapio,
  head: () => ({
    meta: [
      { title: "Cardápio, Gastrô Dalí" },
      {
        name: "description",
        content:
          "Almoço executivo, saladas, petiscos, hambúrgueres, especiais e bebidas. Monte seu pedido online.",
      },
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
    <div className="relative">
      {/* decorative orbs */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[40rem] overflow-hidden">
        <div className="absolute left-1/4 top-20 h-96 w-96 rounded-full bg-secondary/15 blur-[120px]" />
        <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 max-w-3xl"
        >
          <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.45em] text-secondary">
            <span className="h-px w-10 bg-secondary/70" /> Cardápio
          </span>
          <h1 className="mt-5 font-display text-5xl md:text-7xl">
            Surreal em cada{" "}
            <span className="italic text-primary">garfada</span>
          </h1>
          <p className="mt-5 text-muted-foreground">
            Toque em <span className="font-medium text-secondary">+</span> para
            montar seu pedido e finalize na aba "Pedido".
          </p>
        </motion.header>

        {/* Tabs */}
        <div className="sticky top-20 z-20 -mx-4 mb-12 overflow-x-auto border-b border-border bg-background/90 px-4 backdrop-blur-xl">
          <div className="flex gap-2 py-3">
            {menu.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                onClick={() => setActive(c.id)}
                className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  active === c.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-foreground/70 hover:bg-secondary/15 hover:text-primary"
                }`}
              >
                {c.title}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-20">
          {menu.map((cat, ci) => (
            <motion.section
              key={cat.id}
              id={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="scroll-mt-40"
            >
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-display text-2xl text-secondary/60">
                  0{ci + 1}
                </span>
                <div>
                  <h2 className="font-display text-4xl text-primary md:text-5xl">
                    {cat.title}
                  </h2>
                  {cat.subtitle && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {cat.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {cat.items.map((item, i) => (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                    className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-secondary/60 hover:shadow-[var(--shadow-gold)]"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-xl text-primary md:text-2xl">
                          {item.name}
                        </h3>
                        <span className="shrink-0 font-display text-lg font-medium text-secondary">
                          {formatBRL(item.price)}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <Button
                      size="icon"
                      onClick={() => handleAdd(item.id, item.name)}
                      aria-label={`Adicionar ${item.name}`}
                      className="shrink-0 rounded-full transition-transform duration-300 group-hover:scale-110"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
}
