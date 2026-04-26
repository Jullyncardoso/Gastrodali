import { createFileRoute } from "@tanstack/react-router";
import * as React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { menu } from "@/data/menu";
import { useCart, formatBRL } from "@/context/CartContext";
import { toast } from "sonner";

export const Route = createFileRoute("/cardapio")({
  component: Cardapio,
  head: () => ({
    meta: [
      { title: "Cardápio · Gastrô Dalí" },
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
      {/* Hero */}
      <section className="relative border-b border-border px-6 pb-16 pt-32 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-grain opacity-30" />
        <div className="absolute -left-32 top-32 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[140px]" />
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <div className="h-px w-12 bg-primary" />
            <span className="eyebrow">O cardápio · Muriaé · MG</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-4xl font-display text-5xl leading-[0.95] md:text-8xl"
          >
            O sabor que
            <br />
            <em className="text-gold-shine">vira saudade.</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 max-w-xl text-foreground/65"
          >
            Toque em <span className="font-medium text-primary">+</span> para
            montar seu pedido e finalize na aba "Pedido".
          </motion.p>
        </div>
      </section>

      {/* Sticky tabs */}
      <div className="sticky top-20 z-30 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 md:px-12 lg:px-20">
          <div className="flex gap-1 py-3">
            {menu.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActive(c.id)}
                className={`whitespace-nowrap border px-5 py-2 text-[10px] font-semibold uppercase tracking-[0.3em] transition-all duration-300 ${
                  active === c.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-transparent text-foreground/60 hover:border-border hover:text-primary"
                }`}
              >
                {c.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sections - only the active one */}
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 lg:px-20">
        {menu.filter((cat) => cat.id === active).map((cat) => (
          <motion.section
            key={cat.id}
            id={cat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-12 flex items-center gap-6 border-b border-border pb-8">
              <div className="h-px w-12 bg-primary" />
              <div className="flex-1">
                <h2 className="font-display text-4xl text-primary md:text-6xl">
                  {cat.title}
                </h2>
                {cat.subtitle && (
                  <p className="mt-2 text-sm text-foreground/55">
                    {cat.subtitle}
                  </p>
                )}
              </div>
            </div>
            <div className="grid gap-px bg-border md:grid-cols-2">
              {cat.items.map((item, i) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                  className="group flex items-start justify-between gap-6 bg-background p-7 transition-colors hover:bg-muted/40"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className="font-display text-xl text-foreground md:text-2xl">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="hidden h-px w-8 bg-border sm:block" />
                        <span className="shrink-0 font-display text-lg text-primary">
                          {formatBRL(item.price)}
                        </span>
                      </div>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/55">
                      {item.description}
                    </p>
                  </div>
                  <button
                    onClick={() => handleAdd(item.id, item.name)}
                    aria-label={`Adicionar ${item.name}`}
                    className="flex h-10 w-10 shrink-0 items-center justify-center border border-primary/40 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </motion.article>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
