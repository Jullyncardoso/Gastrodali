import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Phone } from "lucide-react";
import hero from "@/assets/gallery-ambiente.png";
import burger from "@/assets/gallery-burger.png";
import tropeiro from "@/assets/gallery-tropeiro.png";
import batata from "@/assets/gallery-batata.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gastrô Dalí — Gastronomia surreal em Muriaé/MG" },
      { name: "description", content: "Almoço executivo, hambúrgueres artesanais e jantar especial no Boulevard Center Shopping. Peça pelo site." },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
});

function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Ambiente do Gastrô Dalí" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
        </div>
        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col items-start justify-center px-4 py-20 md:px-8">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-primary"
          >
            Muriaé · MG
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="max-w-3xl font-display text-5xl leading-[1.05] md:text-7xl"
          >
            Comer bem é uma <span className="italic text-primary">arte surreal</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-6 max-w-xl text-base text-foreground/85 md:text-lg"
          >
            Inspirados por Salvador Dalí, transformamos cada prato em uma tela em branco — do almoço executivo aos hambúrgueres artesanais que dão vida às nossas noites.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/cardapio">
              <Button size="lg" className="group">
                Ver cardápio <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/checkout">
              <Button size="lg" variant="outline">Fazer pedido</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Assinaturas</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Pratos que viraram tradição</h2>
          </div>
          <Link to="/cardapio" className="hidden text-sm text-primary hover:underline md:inline">Ver tudo →</Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: burger, title: "Burgão Dalí", desc: "Costela bovina 180g, cogumelos confitados e brioche artesanal." },
            { img: tropeiro, title: "Tropeiro Executivo", desc: "Tradição mineira com tempero da casa, todos os dias no almoço." },
            { img: batata, title: "Batata Canoa", desc: "Crocante, dourada e servida com nossa maionese de tabasco." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group overflow-hidden rounded-xl border border-border/60 bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SOBRE */}
      <section className="border-y border-border/60 bg-card/50">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 md:grid-cols-2 md:px-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Desde 2023</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl">Onde o paladar encontra o surrealismo</h2>
            <p className="mt-6 text-foreground/85">
              Nascemos no bairro Barra com o desejo de trazer para Muriaé uma gastronomia que foge do óbvio. Hoje, em nossos 3 anos, somos um ponto de encontro versátil — do almoço executivo às noites de hambúrguer artesanal.
            </p>
            <div className="mt-8">
              <Link to="/historia"><Button variant="outline">Conheça nossa história</Button></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <img src={burger} alt="" loading="lazy" className="h-64 w-full rounded-lg object-cover" />
            <img src={batata} alt="" loading="lazy" className="mt-8 h-64 w-full rounded-lg object-cover" />
          </div>
        </div>
      </section>

      {/* CTA VISITE */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8">
        <div className="grid gap-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-secondary/40 to-card p-8 md:grid-cols-3 md:p-12">
          <div className="md:col-span-2">
            <Star className="h-6 w-6 text-primary" />
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Venha viver uma noite surreal</h2>
            <p className="mt-3 max-w-xl text-foreground/85">
              Estamos no Boulevard Center Shopping, em Muriaé. Reserve sua mesa ou peça pelo site — o sabor chega até você.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <a href="tel:+5532998492121" className="flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 p-3 text-sm hover:border-primary">
              <Phone className="h-4 w-4 text-primary" /> (32) 99849-2121
            </a>
            <Link to="/visite" className="flex items-center gap-3 rounded-lg border border-border/60 bg-background/40 p-3 text-sm hover:border-primary">
              <MapPin className="h-4 w-4 text-primary" /> Boulevard Center, Muriaé
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
