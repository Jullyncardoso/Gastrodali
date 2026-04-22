import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import ambiente from "@/assets/gallery-ambiente.png";
import bar from "@/assets/gallery-bar.png";

export const Route = createFileRoute("/historia")({
  component: Historia,
  head: () => ({
    meta: [
      { title: "Nossa História — Gastrô Dalí" },
      { name: "description", content: "Desde janeiro de 2023, o Gastrô Dalí transforma refeições em momentos surreais no coração de Muriaé." },
      { property: "og:image", content: ambiente },
    ],
  }),
});

function Historia() {
  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img src={ambiente} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-background/75" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 py-28 text-center md:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Nossa história</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl">Cada prato, uma tela em branco</h1>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-lg leading-relaxed text-foreground/90"
        >
          <p>
            O <span className="text-primary">Gastrô Dalí</span> nasceu em janeiro de 2023, no coração do bairro Barra, com o desejo de trazer para Muriaé uma gastronomia que foge do óbvio. Inspirados pelo surrealismo de Salvador Dalí, acreditamos que comer bem é uma arte que deve estimular todos os sentidos.
          </p>
          <p>
            Nossa trajetória começou com o desafio de unir a agilidade do dia a dia à sofisticação de sabores marcantes. Hoje, em nossos 3 anos de história, nos consolidamos como um ponto de encontro versátil: do almoço executivo que acolhe o paladar brasileiro aos hambúrgueres artesanais e petiscos criativos que dão vida às nossas noites.
          </p>
          <p>
            Aqui, cada prato é uma tela em branco onde combinamos ingredientes selecionados e um toque de ousadia. Seja para um almoço em família, um happy hour com amigos ou aquele lanche especial em casa, o Gastrô Dalí existe para transformar sua refeição em um <span className="italic text-primary">momento surreal</span>.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 gap-4">
          <img src={ambiente} alt="Ambiente" loading="lazy" className="h-72 w-full rounded-xl object-cover" />
          <img src={bar} alt="Bar" loading="lazy" className="h-72 w-full rounded-xl object-cover" />
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-border/60 pt-10 text-center">
          {[
            { n: "3", l: "Anos de história" },
            { n: "+50", l: "Pratos no cardápio" },
            { n: "1k+", l: "Avaliações 5★" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-display text-4xl text-primary md:text-5xl">{s.n}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
