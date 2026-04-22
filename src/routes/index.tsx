import { createFileRoute, Link } from "@tanstack/react-router";
import * as React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Star,
  MapPin,
  Phone,
  Navigation,
  Quote,
  Instagram,
  Utensils,
} from "lucide-react";
import hero from "@/assets/gallery-ambiente.png";
import bar from "@/assets/gallery-bar.png";
import fachada from "@/assets/gallery-fachada.png";
import neon from "@/assets/gallery-neon.png";
import deck from "@/assets/gallery-deck.png";
import mural from "@/assets/gallery-mural.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gastrô Dalí · Cozinha autoral em Muriaé/MG" },
      {
        name: "description",
        content:
          "Tropeiro no almoço, hambúrgueres artesanais e drinks à noite no Boulevard Center. Peça pelo site.",
      },
      { property: "og:image", content: fachada },
      { name: "twitter:image", content: fachada },
    ],
  }),
});

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-12 bg-primary" />
      <span className="eyebrow">{children}</span>
    </div>
  );
}

function Chapter({ title }: { n?: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-6">
      <div className="h-px w-12 bg-primary" />
      <span className="eyebrow">{title}</span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

function Home() {
  const reduce = useReducedMotion();
  const heroRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "25%"]);
  const fadeY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  return (
    <div className="overflow-hidden">
      {/* ================= HERO ================= */}
      <section
        ref={heroRef}
        className="relative grid min-h-screen grid-cols-1 lg:grid-cols-12"
      >
        {/* Left text column */}
        <motion.div
          style={{ y: fadeY }}
          className="relative z-10 flex flex-col justify-center px-6 pb-20 pt-32 md:px-12 lg:col-span-7 lg:px-20 lg:pb-0 lg:pt-0"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-10"
          >
            <Eyebrow>N° 01 · Muriaé · MG · Est. 2023</Eyebrow>
          </motion.div>

          <h1 className="font-display text-[3.5rem] font-light leading-[0.92] md:text-7xl lg:text-[7.5rem]">
            {["Cozinha", "autoral,"].map((w, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 1.1,
                  delay: 0.3 + i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="block"
              >
                {w}
              </motion.span>
            ))}
            <motion.em
              initial={{ opacity: 0, y: 60, filter: "blur(14px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="not-italic"
            >
              <span className="italic text-gold-shine">alma mineira.</span>
            </motion.em>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-10 max-w-md text-base leading-relaxed text-foreground/65"
          >
            Um bistrô de bairro no Boulevard Center. Tropeiro no almoço,
            hambúrguer artesanal e drinks à noite, feitos por quem gosta de
            receber bem.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.2 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/cardapio"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-paper"
            >
              Ver cardápio
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/checkout"
              className="inline-flex items-center gap-2 border border-foreground/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Fazer pedido
            </Link>
          </motion.div>

          {/* signature */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-foreground/40"
          >
            <span>↓ Role para descobrir</span>
          </motion.div>
        </motion.div>

        {/* Right image column */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] overflow-hidden lg:col-span-5 lg:h-auto"
        >
          <motion.img
            src={fachada}
            alt="Fachada do Gastrô Dalí à noite"
            style={{ y: heroY }}
            className="absolute inset-0 h-[120%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-background/20 lg:to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30" />
          <div className="absolute inset-0 bg-grain opacity-30" />

          {/* caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-10 right-6 z-10 max-w-[14rem] text-right md:right-10"
          >
            <div className="eyebrow mb-2">A casa</div>
            <div className="font-display text-3xl italic text-foreground">
              Boulevard Center
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border md:grid-cols-4">
          {[
            { n: "3", l: "Anos de história" },
            { n: "+50", l: "Pratos no cardápio" },
            { n: "1k+", l: "Avaliações 5★" },
            { n: "★★★★★", l: "Na nossa praça" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-background px-6 py-10 text-center md:py-14"
            >
              <div className="font-display text-4xl text-primary md:text-5xl">
                {s.n}
              </div>
              <div className="eyebrow mt-3">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= HISTÓRIA — com foto de fundo ================= */}
      <section
        id="historia"
        className="relative scroll-mt-24 overflow-hidden px-6 py-32 md:px-12 lg:px-20"
      >
        <HistoriaBackground />

        <div className="relative z-10 mx-auto max-w-7xl">
          <Chapter n="02" title="Nossa história" />

          <div className="grid gap-16 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="md:col-span-5"
            >
              <h2 className="font-display text-5xl leading-[1] md:text-7xl">
                Cada prato,
                <br />
                <em className="text-gold-shine">uma assinatura.</em>
              </h2>
              <p className="mt-8 max-w-md text-foreground/75">
                Técnica de bistrô, ingredientes locais e o afeto da mesa
                mineira. Sem firulas, com cuidado.
              </p>
            </motion.div>

            <div className="space-y-6 md:col-span-7">
              {[
                {
                  year: "Janeiro 2023",
                  title: "O começo",
                  text: "O Gastrô Dalí abriu as portas com a vontade de oferecer em Muriaé uma cozinha que foge do óbvio. Um cardápio enxuto, executado com técnica e afeto.",
                },
                {
                  year: "2024",
                  title: "Tradição e ousadia",
                  text: "Unimos a agilidade do dia a dia à sofisticação de sabores marcantes. Do almoço executivo aos hambúrgueres artesanais que dão vida às noites.",
                },
                {
                  year: "Hoje",
                  title: "Casa cheia",
                  text: "Cada prato é fruto de testes, ingredientes selecionados e um toque de ousadia. Almoço em família, happy hour ou jantar a dois.",
                },
              ].map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="group grid grid-cols-[auto_1fr] gap-8 border border-border/60 bg-background/70 p-7 backdrop-blur-md transition-all duration-500 hover:border-primary/60 hover:bg-background/85"
                >
                  <div className="font-display text-2xl italic text-primary/60">0{i + 1}</div>
                  <div>
                    <div className="eyebrow mb-3">{b.year}</div>
                    <h3 className="font-display text-2xl text-foreground md:text-3xl">
                      {b.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/75">
                      {b.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CARDÁPIO TEASER — refinado ================= */}
      <section
        className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-20"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, color-mix(in oklab, var(--burgundy) 18%, var(--background)) 50%, var(--background) 100%)",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-grain opacity-40" />
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, color-mix(in oklab, var(--gold) 18%, transparent), transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        <div className="mx-auto max-w-7xl">
          <Chapter n="03" title="O cardápio" />

          <div className="grid items-end gap-10 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-8"
            >
              <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
                Da boca pra
                <br />
                <em className="text-gold-shine">memória.</em>
              </h2>
              <p className="mt-8 max-w-xl text-foreground/70">
                Sete famílias de sabor: tropeiro executivo, clássicos do dia,
                saladas, petiscos pra dividir, especiais da casa, sandubas
                artesanais e bebidas.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-4 md:text-right"
            >
              <Link
                to="/cardapio"
                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground transition-all duration-500 hover:bg-paper hover:tracking-[0.4em]"
              >
                <Utensils className="h-3.5 w-3.5" />
                Explorar cardápio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[
              { name: "Tropeiro", desc: "Executivo do dia", color: "burgundy" },
              { name: "Clássicos", desc: "Sabor de casa" },
              { name: "Saladas", desc: "Frescor e leveza" },
              { name: "Compartilhar", desc: "Pra mesa toda", color: "burgundy" },
              { name: "Especiais", desc: "Assinatura do chef" },
              { name: "Sandubas", desc: "Artesanais", color: "burgundy" },
              { name: "Bebidas", desc: "Cervejas e drinks" },
              { name: "+ você", desc: "Monte seu pedido" },
            ].map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden border border-border bg-background p-7 transition-colors duration-500 hover:border-primary"
                style={
                  c.color === "burgundy"
                    ? {
                        background:
                          "linear-gradient(135deg, color-mix(in oklab, var(--burgundy) 20%, var(--background)) 0%, var(--background) 100%)",
                      }
                    : undefined
                }
              >
                <div className="mb-3 font-display text-sm italic text-primary/60">0{i + 1}</div>
                <div className="font-display text-2xl text-foreground">{c.name}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/45">
                  {c.desc}
                </div>
                <ArrowRight className="absolute bottom-5 right-5 h-4 w-4 text-primary/0 transition-all duration-500 group-hover:text-primary group-hover:translate-x-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALERIA — 6 fotos únicas ================= */}
      <section
        id="galeria"
        className="relative scroll-mt-24 px-6 py-32 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <Chapter n="04" title="A galeria" />

          <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl leading-[1] md:col-span-7 md:text-7xl"
            >
              Pequenas pausas
              <br />
              <em className="text-gold-shine">no nosso canto.</em>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-foreground/70 md:col-span-5"
            >
              Detalhes do nosso ambiente, da fachada e do bar. O que você vê é
              o que vai encontrar quando chegar.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:grid-rows-2">
            {[
              { src: deck, alt: "Área externa", cls: "md:col-span-3 md:row-span-2 aspect-[4/5] md:aspect-auto" },
              { src: fachada, alt: "Fachada iluminada", cls: "md:col-span-2 aspect-square" },
              { src: neon, alt: "Letreiro neon", cls: "md:col-span-1 aspect-square" },
              { src: bar, alt: "Bar do Gastrô Dalí", cls: "md:col-span-1 aspect-square" },
              { src: hero, alt: "Ambiente interno", cls: "md:col-span-2 aspect-square" },
              { src: mural, alt: "Mural colorido", cls: "md:col-span-2 aspect-square" },
            ].map((p, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden border border-border ${p.cls}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[35%] transition-all duration-[1400ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
                <figcaption className="absolute bottom-4 left-4 right-4 translate-y-2 font-display text-lg italic text-paper opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {p.alt}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AVALIAÇÕES — carrossel ================= */}
      <ReviewsCarousel />

      {/* ================= VISITE ================= */}
      <section
        id="visite"
        className="relative scroll-mt-24 overflow-hidden px-6 py-32 md:px-12 lg:px-20"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse at top right, color-mix(in oklab, var(--gold) 10%, transparent), transparent 60%)",
          }}
        />

        <div className="mx-auto max-w-7xl">
          <Chapter n="06" title="Encontre o Dalí" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-3xl font-display text-5xl leading-[1] md:text-7xl"
          >
            Onde o seu próximo
            <br />
            <em className="text-gold-shine">encontro acontece.</em>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-12">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-px border border-border md:col-span-5"
            >
              <div className="flex items-start gap-4 bg-background p-7 transition-colors hover:bg-muted/40">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <div className="eyebrow mb-2">Endereço</div>
                  <div className="text-sm text-foreground/85">
                    Boulevard Center Shopping<br />
                    Av. Dr. Passos, 180, Centro<br />
                    Muriaé/MG · 36884-002
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background p-7 transition-colors hover:bg-muted/40">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <div className="eyebrow mb-2">Contato</div>
                  <div className="text-sm text-foreground/85">
                    <a href="tel:+5532998492121" className="block hover:text-primary">
                      (32) 99849-2121
                    </a>
                    <a
                      href="https://wa.me/5532998492121"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-primary hover:underline"
                    >
                      Chamar no WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background p-7">
                <Instagram className="mt-1 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <div className="eyebrow mb-2">Instagram</div>
                  <a
                    href="https://www.instagram.com/gastrodali/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    @gastrodali
                  </a>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/xWTVT98CV3fyQi4QA"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-center gap-3 bg-primary px-8 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground transition-all duration-500 hover:bg-paper hover:tracking-[0.4em]"
              >
                <Navigation className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
                Como chegar
              </a>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative overflow-hidden border border-border bg-background md:col-span-7"
            >
              <div
                className="pointer-events-none absolute inset-0 -z-0 opacity-50"
                style={{
                  background:
                    "radial-gradient(circle at 80% 20%, color-mix(in oklab, var(--burgundy) 35%, transparent), transparent 60%)",
                }}
              />
              <div className="relative z-10 p-8 md:p-12">
                <div className="eyebrow mb-3">Horário de funcionamento</div>
                <h3 className="font-display text-3xl text-foreground md:text-4xl">
                  Te esperamos
                  <em className="text-gold-shine"> todos os dias.</em>
                </h3>

                <div className="mt-10 divide-y divide-border/70">
                  {[
                    { day: "Segunda a sexta", hours: "10:00 — 00:00" },
                    { day: "Sábado", hours: "10:00 — 00:00" },
                    { day: "Domingo", hours: "15:00 — 00:00" },
                  ].map((row, i) => (
                    <motion.div
                      key={row.day}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-baseline justify-between gap-6 py-5"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-sm italic text-primary/50">
                          0{i + 1}
                        </span>
                        <span className="font-display text-xl text-foreground md:text-2xl">
                          {row.day}
                        </span>
                      </div>
                      <div className="flex flex-1 items-baseline">
                        <div className="mx-4 hidden h-px flex-1 bg-border/60 sm:block" />
                        <span className="font-display text-xl text-primary md:text-2xl">
                          {row.hours}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <p className="mt-10 max-w-md text-sm text-foreground/55">
                  Almoço, happy hour e jantar. Em datas especiais, confirme por
                  telefone ou WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section
        className="relative overflow-hidden border-t border-border px-6 py-32 md:px-12 lg:px-20"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, color-mix(in oklab, var(--burgundy) 22%, var(--background)) 100%)",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-grain opacity-40" />
        <motion.div
          aria-hidden
          animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-40 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-5xl text-center"
        >
          <Star className="mx-auto h-6 w-6 text-primary" />
          <h2 className="mt-8 font-display text-5xl leading-[1] md:text-7xl">
            Sua mesa está
            <br />
            <em className="text-gold-shine">à sua espera.</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-foreground/75">
            Reserve, peça pelo site ou apareça no Boulevard Center. O sabor
            chega até você.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/checkout"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground transition-all duration-500 hover:bg-paper hover:tracking-[0.4em]"
            >
              Fazer pedido
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="tel:+5532998492121"
              className="inline-flex items-center gap-2 border border-foreground/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <Phone className="h-3.5 w-3.5" /> (32) 99849-2121
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

/* ----------------- Subcomponents ----------------- */

function HistoriaBackground() {
  const ref = React.useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", reduce ? "-10%" : "15%"]);
  return (
    <div ref={ref} className="absolute inset-0 -z-10">
      <motion.img
        src={bar}
        alt=""
        aria-hidden
        style={{ y }}
        className="absolute inset-0 h-[120%] w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="absolute inset-0 bg-grain opacity-50" />
    </div>
  );
}

function ReviewsCarousel() {
  const reviews = React.useMemo(
    () => [
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
    ],
    [],
  );
  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + reviews.length) % reviews.length);
  };

  React.useEffect(() => {
    const id = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % reviews.length);
    }, 6500);
    return () => clearInterval(id);
  }, [reviews.length]);

  const current = reviews[index];

  return (
    <section
      id="avaliacoes"
      className="relative scroll-mt-24 overflow-hidden border-y border-border px-6 py-32 md:px-12 lg:px-20"
      style={{
        background:
          "linear-gradient(180deg, color-mix(in oklab, var(--burgundy) 25%, var(--background)) 0%, var(--background) 100%)",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-grain opacity-40" />
      <div className="mx-auto max-w-5xl">
        <Chapter n="05" title="Vozes da casa" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center font-display text-5xl leading-[1] md:text-7xl"
        >
          O que dizem
          <br />
          <em className="text-gold-shine">de nós.</em>
        </motion.h2>

        <div className="relative min-h-[22rem] md:min-h-[18rem]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: direction * 60, filter: "blur(8px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -direction * 60, filter: "blur(8px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-3xl text-center"
            >
              <Quote className="mx-auto mb-8 h-10 w-10 text-primary/60" />
              <div className="mb-6 flex justify-center gap-1 text-primary">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-2xl leading-snug text-foreground md:text-4xl">
                “{current.text}”
              </blockquote>
              <figcaption className="mt-8 text-sm uppercase tracking-[0.4em] text-primary">
                {current.name}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Avaliação anterior"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground/70 transition-all hover:border-primary hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Avaliação ${i + 1}`}
                className={`h-1 transition-all duration-500 ${
                  i === index ? "w-8 bg-primary" : "w-2 bg-border hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Próxima avaliação"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground/70 transition-all hover:border-primary hover:text-primary"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
