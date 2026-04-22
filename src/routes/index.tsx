import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Star,
  MapPin,
  Phone,
  Clock,
  Navigation,
  Quote,
  Instagram,
  Utensils,
  Sparkles,
} from "lucide-react";
import hero from "@/assets/gallery-ambiente.png";
import burger from "@/assets/gallery-burger.png";
import tropeiro from "@/assets/gallery-tropeiro.png";
import batata from "@/assets/gallery-batata.png";
import picanha from "@/assets/gallery-picanha.png";
import iscas from "@/assets/gallery-iscas.png";
import bar from "@/assets/gallery-bar.png";
import fachada from "@/assets/gallery-fachada.png";
import neon from "@/assets/gallery-neon.png";
import deck from "@/assets/gallery-deck.png";
import mural from "@/assets/gallery-mural.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gastrô Dalí — Gastronomia surreal em Muriaé/MG" },
      {
        name: "description",
        content:
          "Almoço executivo, hambúrgueres artesanais e jantar especial no Boulevard Center Shopping. Peça pelo site.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.4em] text-primary">
      <span className="h-px w-8 bg-primary/60" />
      {children}
    </span>
  );
}

function Home() {
  const reduce = useReducedMotion();
  const heroRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.15]);
  const heroFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  return (
    <div className="overflow-hidden">
      {/* ============== HERO ============== */}
      <section ref={heroRef} className="relative isolate min-h-screen">
        <motion.div
          style={{ y: heroY, scale: heroScale, opacity: heroFade }}
          className="absolute inset-0 -z-10"
        >
          <img
            src={hero}
            alt="Ambiente do Gastrô Dalí à noite"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_85%)]" />
        </motion.div>

        {/* floating decorative orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px] animate-shimmer" />
          <div className="absolute -right-20 bottom-1/4 h-96 w-96 rounded-full bg-secondary/40 blur-[140px] animate-shimmer" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-4 py-24 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <SectionEyebrow>Muriaé · Minas Gerais · Desde 2023</SectionEyebrow>
          </motion.div>

          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] md:text-7xl lg:text-[5.5rem]">
            {"Comer bem é uma".split(" ").map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="mr-3 inline-block"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.1, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="block italic text-primary"
            >
              arte surreal.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-foreground/85 md:text-lg"
          >
            Inspirados por Salvador Dalí, transformamos cada prato em uma tela em
            branco — do almoço executivo aos hambúrgueres artesanais que dão vida às
            nossas noites no Boulevard Center.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link to="/cardapio">
              <Button size="lg" className="group h-12 px-8 text-base">
                Ver cardápio{" "}
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/checkout">
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-primary/40 bg-background/30 px-8 text-base backdrop-blur"
              >
                Fazer pedido
              </Button>
            </Link>
          </motion.div>

          {/* hero stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute bottom-10 left-4 right-4 mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 border-t border-primary/15 pt-6 md:left-8 md:right-8"
          >
            {[
              { n: "3", l: "Anos de história" },
              { n: "+50", l: "Pratos no cardápio" },
              { n: "1k+", l: "Avaliações 5★" },
              { n: "★★★★★", l: "Na nossa praça" },
            ].map((s) => (
              <div key={s.l} className="flex flex-col">
                <span className="font-display text-2xl text-primary md:text-3xl">
                  {s.n}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.l}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============== ASSINATURAS ============== */}
      <section id="assinaturas" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-28 md:px-8">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-16 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
            <SectionEyebrow>Assinaturas da casa</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              Pratos que viraram <span className="italic text-primary">tradição</span>
            </h2>
          </motion.div>
          <motion.div variants={fadeUp} transition={{ duration: 0.7 }}>
            <Link
              to="/cardapio"
              className="group inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-primary"
            >
              Cardápio completo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              img: burger,
              title: "Burgão Dalí",
              desc: "Costela bovina 180g, cogumelos confitados e brioche artesanal.",
              tag: "Noite",
            },
            {
              img: tropeiro,
              title: "Tropeiro Executivo",
              desc: "Tradição mineira com tempero da casa — todos os dias no almoço.",
              tag: "Almoço",
            },
            {
              img: picanha,
              title: "Picanha do Mestre",
              desc: "Grelhada na ponta da brasa, fritas, arroz e tropeiro.",
              tag: "Especial",
            },
          ].map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-primary backdrop-blur">
                  {c.tag}
                </span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="font-display text-2xl">{c.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ============== HISTÓRIA ============== */}
      <section id="historia" className="relative scroll-mt-24 border-y border-border/60 bg-card/40">
        <div className="absolute inset-0 -z-10 opacity-40">
          <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl gap-16 px-4 py-28 md:grid-cols-12 md:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="md:col-span-5 md:sticky md:top-28 md:self-start"
          >
            <SectionEyebrow>Nossa história</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-6xl">
              Cada prato, uma <span className="italic text-primary">tela em branco</span>
            </h2>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-primary/15 pt-8">
              {[
                { n: "3", l: "Anos" },
                { n: "+50", l: "Pratos" },
                { n: "1k+", l: "5★" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl text-primary md:text-4xl">{s.n}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            className="space-y-10 md:col-span-7"
          >
            {[
              {
                year: "Janeiro 2023",
                title: "O começo no bairro Barra",
                text: "O Gastrô Dalí nasceu com o desejo de trazer para Muriaé uma gastronomia que foge do óbvio. Inspirados pelo surrealismo de Salvador Dalí, acreditamos que comer bem é uma arte que estimula todos os sentidos.",
              },
              {
                year: "2024",
                title: "Tradição & ousadia",
                text: "Unimos a agilidade do dia a dia à sofisticação de sabores marcantes. Do almoço executivo que acolhe o paladar brasileiro aos hambúrgueres artesanais que dão vida às noites.",
              },
              {
                year: "Hoje",
                title: "Um momento surreal",
                text: "Cada prato é uma tela em branco onde combinamos ingredientes selecionados e um toque de ousadia. Seja almoço em família, happy hour ou um lanche especial — existimos para transformar refeições em momentos.",
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="relative rounded-2xl border border-border/60 bg-background/40 p-8 backdrop-blur transition hover:border-primary/40"
              >
                <span className="absolute -left-3 top-8 hidden h-6 w-6 rotate-45 border-l border-t border-border/60 bg-background/40 md:block" />
                <p className="text-[10px] uppercase tracking-[0.35em] text-primary">{b.year}</p>
                <h3 className="mt-3 font-display text-2xl md:text-3xl">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-foreground/85">{b.text}</p>
                <span className="mt-6 block text-xs text-muted-foreground">
                  0{i + 1} / 03
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============== GALERIA ============== */}
      <section id="galeria" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <SectionEyebrow>Galeria</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Imagens que <span className="italic text-primary">abrem o apetite</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Pequenas paradas surreais em cada visita ao Gastrô Dalí.
          </p>
        </motion.div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4">
          {[
            { src: deck, alt: "Área do shopping com cadeiras laranja", span: "md:col-span-2 md:row-span-2" },
            { src: picanha, alt: "Picanha grelhada com fritas" },
            { src: burger, alt: "Hambúrguer artesanal com cebola crispy" },
            { src: neon, alt: "Letreiro neon com relógio derretido", span: "md:row-span-2" },
            { src: mural, alt: "Deck externo com mural colorido" },
            { src: iscas, alt: "Iscas de alcatra com fritas" },
            { src: tropeiro, alt: "Tropeiro com batata canoa" },
            { src: bar, alt: "Drinks autorais no bar" },
            { src: fachada, alt: "Fachada iluminada do Gastrô Dalí" },
            { src: batata, alt: "Batata canoa com chopp gelado" },
          ].map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 5) * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-xl border border-border/60 ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ============== CARDÁPIO TEASER ============== */}
      <section className="relative overflow-hidden border-y border-border/60">
        <div className="absolute inset-0 -z-10">
          <img src={fachada} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background" />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-28 md:grid-cols-2 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionEyebrow>Cardápio</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              Sete seções para sua <span className="italic text-primary">jornada</span>
            </h2>
            <p className="mt-6 text-foreground/85">
              Tropeiro Executivo, Clássicos do Dia, Saladas, Pra Compartilhar,
              Especiais, Sandubas e Bebidas. Monte seu pedido em poucos cliques.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/cardapio">
                <Button size="lg" className="group h-12 px-8">
                  <Utensils className="h-4 w-4" /> Explorar cardápio
                  <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/checkout">
                <Button size="lg" variant="outline" className="h-12 px-8">
                  <Sparkles className="h-4 w-4" /> Fazer pedido
                </Button>
              </Link>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { img: burger, label: "Sandubas" },
              { img: tropeiro, label: "Tropeiro" },
              { img: iscas, label: "Compartilhar" },
              { img: bar, label: "Bebidas" },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-xl border border-border/60 ${i % 2 === 1 ? "mt-8" : ""}`}
              >
                <img
                  src={c.img}
                  alt={c.label}
                  loading="lazy"
                  className="aspect-square h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background/85 via-background/10 to-transparent p-4">
                  <span className="font-display text-lg">{c.label}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== AVALIAÇÕES ============== */}
      <section id="avaliacoes" className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <SectionEyebrow>Vozes surreais</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              O que <span className="italic text-primary">dizem</span> de nós
            </h2>
          </div>
          <div className="flex items-center gap-2 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              Centenas de experiências memoráveis
            </span>
          </div>
        </motion.div>

        <div className="columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
          {[
            { name: "Jhennifer Ramos", text: "EXCELENTE!!! Comida maravilhosa, e atendimento impecável." },
            { name: "Stael Gusman", text: "Ambiente agradável, excelente atendimento, chopp super gelado!" },
            { name: "Renato Gribel", text: "Uma experiência ímpar, comida deliciosa, ambiente sem igual e atendimento fora da curva!" },
            { name: "Ariel Dario De Los Santos", text: "Espectacular!!! Atendimento e gastronomia de qualidade e aquela vista mágica." },
            { name: "Larissa Cerqueira", text: "Lugar agradável, atendimento cordial, música boa, chopp gelado e comida deliciosa!" },
            { name: "Nathália Vegi Carvalho", text: "Sem defeitos! Não existe um prato sequer que tenha provado até hoje que não tenha amado." },
            { name: "Brenda Nascimento", text: "Excelente, ambiente muito acolhedor. Comidas de dar água na boca, bom preço e qualidade." },
            { name: "Ana Pacheco", text: "A comida é impecável e os garçons são extremamente atenciosos." },
            { name: "Samara Lopes", text: "Atendimento muito bom, comida excelente e o melhor: não demora." },
            { name: "Isaque Rodrigues", text: "Comida maravilhosa, ambiente lindo e confortável." },
            { name: "Mariana Linhares", text: "Ambiente gostoso, excelente atendimento e refeições muito saborosas." },
            { name: "Nivaldo Trassato", text: "Excelente atendimento, cordialidade, alegria e educação." },
          ].map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 6) * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40"
            >
              <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/15 transition-colors group-hover:text-primary/30" />
              <div className="mb-3 flex gap-0.5 text-primary">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/90">
                {r.text}
              </blockquote>
              <figcaption className="mt-4 font-display text-base text-primary">
                — {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ============== VISITE ============== */}
      <section id="visite" className="relative scroll-mt-24 border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-28 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 max-w-2xl"
          >
            <SectionEyebrow>Encontre o Dalí</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              A coordenada exata da sua próxima{" "}
              <span className="italic text-primary">refeição surreal</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-5">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4 md:col-span-2"
            >
              {[
                {
                  Icon: MapPin,
                  title: "Endereço",
                  body: (
                    <>
                      Boulevard Center Shopping
                      <br />
                      Av. Dr. Passos, 180 — Centro
                      <br />
                      Muriaé/MG · 36884-002
                    </>
                  ),
                },
                {
                  Icon: Phone,
                  title: "Telefone & WhatsApp",
                  body: (
                    <>
                      <a href="tel:+5532998492121" className="block hover:text-primary">
                        (32) 99849-2121
                      </a>
                      <a
                        href="https://wa.me/5532998492121"
                        target="_blank"
                        rel="noreferrer"
                        className="mt-1 block text-primary hover:underline"
                      >
                        Chamar no WhatsApp →
                      </a>
                    </>
                  ),
                },
                {
                  Icon: Clock,
                  title: "Horários",
                  body: (
                    <>
                      Almoço & Jantar — todos os dias
                      <br />
                      <span className="text-muted-foreground">
                        Confirme horários especiais por telefone
                      </span>
                    </>
                  ),
                },
                {
                  Icon: Instagram,
                  title: "Siga o Dalí",
                  body: (
                    <a
                      href="https://www.instagram.com/gastrodali/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      @gastrodali
                    </a>
                  ),
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-xl border border-border/60 bg-background/50 p-5 backdrop-blur transition hover:border-primary/40"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-display text-lg">{title}</h3>
                      <div className="mt-1 text-sm text-foreground/85">{body}</div>
                    </div>
                  </div>
                </div>
              ))}

              <a
                href="https://maps.app.goo.gl/xWTVT98CV3fyQi4QA"
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button className="h-12 w-full" size="lg">
                  <Navigation className="h-4 w-4" /> Traçar rota no Google Maps
                </Button>
              </a>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="overflow-hidden rounded-xl border border-border/60 md:col-span-3"
            >
              <iframe
                title="Localização Gastrô Dalí"
                src="https://www.google.com/maps?q=Boulevard+Center+Shopping+Av.+Dr.+Passos+180+Centro+Muria%C3%A9+MG&output=embed"
                width="100%"
                height="100%"
                className="aspect-square w-full md:aspect-auto md:h-[640px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============== CTA FINAL ============== */}
      <section className="mx-auto max-w-7xl px-4 py-28 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-secondary/40 via-card to-card p-10 md:p-16"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-shimmer" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-secondary/40 blur-3xl animate-shimmer" />
          <div className="relative grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <Star className="h-7 w-7 text-primary" />
              <h2 className="mt-4 font-display text-3xl md:text-5xl">
                Venha viver uma <span className="italic text-primary">noite surreal</span>
              </h2>
              <p className="mt-4 max-w-xl text-foreground/85">
                Reserve sua mesa, peça pelo site ou apareça no Boulevard Center —
                o sabor chega até você.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/checkout">
                <Button size="lg" className="h-12 w-full">
                  Fazer pedido agora
                </Button>
              </Link>
              <a
                href="tel:+5532998492121"
                className="flex items-center justify-center gap-3 rounded-lg border border-border/60 bg-background/40 p-3 text-sm hover:border-primary"
              >
                <Phone className="h-4 w-4 text-primary" /> (32) 99849-2121
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
