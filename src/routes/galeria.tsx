import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import burger from "@/assets/gallery-burger.png";
import tropeiro from "@/assets/gallery-tropeiro.png";
import bar from "@/assets/gallery-bar.png";
import batata from "@/assets/gallery-batata.png";
import ambiente from "@/assets/gallery-ambiente.png";
import picanha from "@/assets/gallery-picanha.png";
import fachada from "@/assets/gallery-fachada.png";
import neon from "@/assets/gallery-neon.png";
import iscas from "@/assets/gallery-iscas.png";

export const Route = createFileRoute("/galeria")({
  component: Galeria,
  head: () => ({
    meta: [
      { title: "Galeria — Gastrô Dalí" },
      { name: "description", content: "Conheça nosso ambiente, drinks e os pratos que fazem do Gastrô Dalí uma experiência única em Muriaé." },
      { property: "og:image", content: ambiente },
    ],
  }),
});

const photos = [
  { src: ambiente, alt: "Ambiente noturno do Gastrô Dalí", span: "md:col-span-2 md:row-span-2" },
  { src: picanha, alt: "Picanha grelhada com fritas, arroz e feijão tropeiro" },
  { src: burger, alt: "Hambúrguer artesanal com cebola crispy" },
  { src: neon, alt: "Letreiro neon com frase de Dalí e relógio derretido", span: "md:row-span-2" },
  { src: fachada, alt: "Fachada do Gastrô Dalí à noite com a placa iluminada" },
  { src: iscas, alt: "Iscas de alcatra com fritas e maionese verde" },
  { src: tropeiro, alt: "Petisco com batata canoa e tiras de alcatra" },
  { src: bar, alt: "Drinks autorais no bar" },
  { src: batata, alt: "Batata canoa com maionese e chopp gelado" },
];

function Galeria() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Galeria</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">Imagens que abrem o apetite</h1>
        <p className="mt-4 text-muted-foreground">
          Pequenas paradas surreais em cada visita ao Gastrô Dalí.
        </p>
      </header>

      <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:grid-cols-4">
        {photos.map((p, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`group overflow-hidden rounded-xl border border-border/60 ${p.span ?? ""}`}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
