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
  Sparkles,
} from "lucide-react";
import hero from "@/assets/gallery-ambiente.png";
import bar from "@/assets/gallery-bar.png";
import fachada from "@/assets/gallery-fachada.png";
import neon from "@/assets/gallery-neon.png";
import deck from "@/assets/gallery-deck.png";
import mural from "@/assets/gallery-mural.png";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gastrô Dalí, Cozinha autoral em Muriaé/MG" },
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
    <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.45em] text-secondary">
      <span className="h-px w-10 bg-secondary/70" />
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
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const logoRot = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 25]);
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 0.85]);

  return (
    <div className="overflow-hidden">
      {/* ============== HERO ============== */}
      <section ref={heroRef} className="relative isolate min-h-[100vh] overflow-hidden bg-[var(--ink)] text-primary-foreground">
        {/* Background image with deep tint */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 -z-10">
          <img
            src={fachada}
            alt="Fachada do Gastrô Dalí"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--ink)]/95 via-[var(--ink)]/80 to-[var(--burgundy)]/85" />
          <div className="absolute inset-0 bg-grain opacity-[0.18]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
        </motion.div>

        {/* Gold orbs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-32 top-1/4 h-[34rem] w-[34rem] rounded-full bg-secondary/25 blur-[160px] animate-shimmer" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-secondary/20 blur-[140px] animate-drift" />
        </div>

        <div className="relative mx-auto grid min-h-[100vh] max-w-7xl grid-cols-1 items-center gap-10 px-4 py-24 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-10 bg-secondary" />
              <span className="text-[10px] font-medium uppercase tracking-[0.5em] text-secondary">
                Muriaé · MG · Est. 2023
              </span>
            </motion.div>

            <h1 className="mt-8 font-display text-5xl leading-[0.98] md:text-7xl lg:text-[6rem]">
              {"Cozinha autoral".split(" ").map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 1,
                    delay: 0.3 + i * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mr-3 inline-block"
                >
                  {w}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="block italic text-gold-shine"
              >
                com alma mineira.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 md:text-lg"
            >
              Tropeiro no almoço, hambúrguer artesanal e drinks à noite. Um bistrô
              de bairro no Boulevard Center, feito por quem gosta de receber bem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 1.15 }}
              className="mt-12 flex flex-wrap items-center gap-4"
            >
              <Link to="/cardapio">
                <Button
                  size="lg"
                  variant="secondary"
                  className="group h-12 px-8 text-base shadow-[var(--shadow-gold)]"
                >
                  Ver cardápio{" "}
                  <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/checkout">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 border-primary-foreground/30 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Fazer pedido
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Logo medallion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ rotate: logoRot, scale: logoScale }}
            className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center"
          >
            <div className="absolute inset-0 animate-spin-slow">
              <svg viewBox="0 0 200 200" className="h-full w-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -88, 0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0"
                  />
                </defs>
                <text className="fill-secondary/80 text-[7.5px] tracking-[0.55em] font-body uppercase">
                  <textPath href="#circlePath">
                    Gastrô Dalí · Cozinha Autoral · Muriaé MG · Desde 2023 ·
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-6 rounded-full border border-secondary/40" />
            <div className="absolute inset-10 rounded-full border border-secondary/15" />
            <div className="absolute inset-14 rounded-full bg-gradient-to-br from-secondary/30 via-transparent to-secondary/10 blur-2xl animate-shimmer" />
            <motion.img
              src={logo}
              alt="Gastrô Dalí"
              className="relative z-10 h-3/4 w-3/4 object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        {/* hero stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="relative mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 border-t border-secondary/30 px-4 py-8 md:px-8"
        >
          {[
            { n: "3", l: "Anos de história" },
            { n: "+50", l: "Pratos no cardápio" },
            { n: "1k+", l: "Avaliações 5★" },
            { n: "★★★★★", l: "Na nossa praça" },
          ].map((s) => (
            <div key={s.l} className="flex flex-col">
              <span className="font-display text-3xl text-secondary md:text-4xl">
                {s.n}
              </span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-primary-foreground/60">
                {s.l}
              </span>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ============== HISTÓRIA ============== */}
      <section id="historia" className="relative scroll-mt-24 border-y border-border bg-cream/60">
        <div className="absolute inset-0 -z-10 opacity-50">
          <div className="absolute left-1/3 top-0 h-72 w-72 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
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
            <h2 className="mt-5 font-display text-4xl leading-[1.05] md:text-6xl">
              Cada prato, uma{" "}
              <span className="italic text-primary">tela em branco</span>
            </h2>
            <p className="mt-6 max-w-md text-foreground/75">
              O Gastrô nasceu da vontade de transformar refeições cotidianas em
              experiências memoráveis, com técnica, afeto e um toque de loucura.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-secondary/30 pt-8">
              {[
                { n: "3", l: "Anos" },
                { n: "+50", l: "Pratos" },
                { n: "1k+", l: "5★" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl text-primary md:text-4xl">{s.n}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
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
            className="space-y-8 md:col-span-7"
          >
            {[
              {
                year: "Janeiro 2023",
                title: "O começo",
                text: "O Gastrô Dalí nasceu com a vontade de trazer para Muriaé uma cozinha que foge do óbvio. Técnica de bistrô, ingredientes locais e o afeto da mesa mineira em cada prato.",
              },
              {
                year: "2024",
                title: "Tradição & ousadia",
                text: "Unimos a agilidade do dia a dia à sofisticação de sabores marcantes. Do almoço executivo que acolhe o paladar brasileiro aos hambúrgueres artesanais que dão vida às noites.",
              },
              {
                year: "Hoje",
                title: "Casa cheia",
                text: "Cada prato é fruto de testes, ingredientes selecionados e um toque de ousadia. Almoço em família, happy hour ou jantar a dois: existimos para transformar refeições em momentos.",
              },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                variants={fadeUp}
                transition={{ duration: 0.7 }}
                className="group relative rounded-2xl border border-border bg-card/80 p-8 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-[var(--shadow-gold)]"
              >
                <span className="absolute -left-3 top-8 hidden h-6 w-6 rotate-45 border-l border-t border-border bg-card md:block" />
                <p className="text-[10px] uppercase tracking-[0.4em] text-secondary">
                  {b.year}
                </p>
                <h3 className="mt-3 font-display text-3xl text-primary md:text-4xl">
                  {b.title}
                </h3>
                <p className="mt-3 leading-relaxed text-foreground/80">{b.text}</p>
                <span className="mt-6 block text-xs font-medium text-muted-foreground">
                  0{i + 1} / 03
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============== GALERIA ============== */}
      <section
        id="galeria"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-28 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-2xl"
        >
          <SectionEyebrow>Galeria</SectionEyebrow>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            Pequenas pausas{" "}
            <span className="italic text-primary">surreais</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Detalhes do nosso ambiente, da fachada e do bar.
          </p>
        </motion.div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[240px] md:grid-cols-4">
          {[
            { src: deck, alt: "Área externa com cadeiras laranja", span: "md:col-span-2 md:row-span-2" },
            { src: neon, alt: "Letreiro neon com relógio derretido" },
            { src: bar, alt: "Bar do Gastrô Dalí" },
            { src: mural, alt: "Mural colorido no deck externo", span: "md:col-span-2" },
            { src: hero, alt: "Ambiente interno aconchegante" },
            { src: fachada, alt: "Fachada iluminada do Gastrô Dalí" },
          ].map((p, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: (i % 5) * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-border shadow-sm ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ============== CARDÁPIO TEASER ============== */}
      <section className="relative overflow-hidden border-y border-border bg-gradient-to-br from-primary via-primary to-[oklch(0.30_0.12_22)] text-primary-foreground">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary/40 blur-3xl animate-drift" />
          <div className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-secondary/30 blur-3xl animate-drift" />
        </div>
        <div className="mx-auto max-w-7xl px-4 py-28 text-center md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.45em] text-secondary">
              <span className="h-px w-10 bg-secondary" /> Cardápio
            </span>
            <h2 className="mx-auto mt-5 max-w-4xl font-display text-4xl leading-tight md:text-6xl">
              Sete seções para sua{" "}
              <span className="italic text-secondary">jornada do paladar</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-primary-foreground/85">
              Tropeiro Executivo, Clássicos do Dia, Saladas, Pra Compartilhar,
              Especiais, Sandubas e Bebidas. Monte seu pedido em poucos cliques.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ show: { transition: { staggerChildren: 0.07 } } }}
            className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3"
          >
            {[
              "Tropeiro Executivo",
              "Clássicos do Dia",
              "Monte sua Salada",
              "Para Compartilhar",
              "Especiais",
              "Sandubas",
              "Bebidas",
            ].map((c) => (
              <motion.span
                key={c}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="rounded-full border border-secondary/40 bg-primary-foreground/5 px-5 py-2 text-sm font-medium text-primary-foreground/90 backdrop-blur transition hover:border-secondary hover:bg-secondary hover:text-secondary-foreground"
              >
                {c}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            <Link to="/cardapio">
              <Button
                size="lg"
                variant="secondary"
                className="group h-12 px-8 shadow-[var(--shadow-gold)]"
              >
                Explorar cardápio
                <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/checkout">
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-primary-foreground/40 bg-transparent px-8 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <Sparkles className="h-4 w-4" /> Fazer pedido
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ============== AVALIAÇÕES ============== */}
      <section
        id="avaliacoes"
        className="relative mx-auto max-w-7xl scroll-mt-24 px-4 py-28 md:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <SectionEyebrow>Vozes da casa</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl md:text-6xl">
              O que <span className="italic text-primary">dizem</span> de nós
            </h2>
          </div>
          <div className="flex items-center gap-2 text-secondary">
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
            { name: "Ariel Dario De Los Santos", text: "Espetacular! Atendimento e gastronomia de qualidade e aquela vista mágica." },
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
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-secondary/60 hover:shadow-[var(--shadow-gold)]"
            >
              <Quote className="absolute right-4 top-4 h-9 w-9 text-secondary/20 transition-colors group-hover:text-secondary/50" />
              <div className="mb-3 flex gap-0.5 text-secondary">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed text-foreground/85">
                {r.text}
              </blockquote>
              <figcaption className="mt-4 font-display text-lg italic text-primary">
                {r.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* ============== VISITE ============== */}
      <section
        id="visite"
        className="relative scroll-mt-24 border-t border-border bg-cream/60"
      >
        <div className="mx-auto max-w-7xl px-4 py-28 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 max-w-2xl"
          >
            <SectionEyebrow>Encontre o Dalí</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl md:text-6xl">
              A coordenada exata da sua próxima{" "}
              <span className="italic text-primary">boa refeição</span>
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
                      Av. Dr. Passos, 180, Centro
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
                        className="mt-1 block text-secondary hover:underline"
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
                      Almoço & Jantar, todos os dias
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
                      className="text-secondary hover:underline"
                    >
                      @gastrodali
                    </a>
                  ),
                },
              ].map(({ Icon, title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-secondary/60 hover:shadow-[var(--shadow-gold)]"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="mt-0.5 h-5 w-5 text-secondary" />
                    <div>
                      <h3 className="font-display text-xl text-primary">{title}</h3>
                      <div className="mt-1 text-sm text-foreground/80">{body}</div>
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
              className="overflow-hidden rounded-2xl border border-border shadow-sm md:col-span-3"
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
          className="relative overflow-hidden rounded-3xl border border-secondary/30 bg-gradient-to-br from-cream via-card to-secondary/10 p-10 shadow-[var(--shadow-gold)] md:p-16"
        >
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/25 blur-3xl animate-shimmer" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-shimmer" />
          <div className="relative grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <Star className="h-7 w-7 text-secondary" />
              <h2 className="mt-4 font-display text-3xl md:text-5xl">
                Venha viver uma{" "}
                <span className="italic text-primary">noite memorável</span>
              </h2>
              <p className="mt-4 max-w-xl text-foreground/80">
                Reserve sua mesa, peça pelo site ou apareça no Boulevard Center.
                O sabor chega até você.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/checkout">
                <Button size="lg" className="h-12 w-full shadow-[var(--shadow-elegant)]">
                  Fazer pedido agora
                </Button>
              </Link>
              <a
                href="tel:+5532998492121"
                className="flex items-center justify-center gap-3 rounded-lg border border-border bg-background/60 p-3 text-sm transition hover:border-secondary hover:bg-card"
              >
                <Phone className="h-4 w-4 text-secondary" /> (32) 99849-2121
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
