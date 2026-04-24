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
  Music,
  Wine,
  Flame,
  Eye,
} from "lucide-react";
// Real photos from the restaurant
import photoEyesArch from "@/assets/photo-eyes-arch.jpg";
import photoNeonDali from "@/assets/photo-neon-dali.jpg";
import photoBoothEyes from "@/assets/photo-booth-eyes.jpg";
import photoPicanha from "@/assets/photo-picanha.jpg";
import picanhaChapa from "@/assets/picanha-chapa.jpg";
import photoBurger from "@/assets/photo-burger-coke.jpg";
import photoPizza from "@/assets/photo-pizza-wine.jpg";
import photoWineMenu from "@/assets/photo-wine-menu.jpg";
import photoDrinkMona from "@/assets/photo-drink-mona.jpg";
import photoBand from "@/assets/photo-band-live.jpg";
import fachada from "@/assets/gallery-fachada.png";
import deck from "@/assets/gallery-deck.png";
import { MeltingClock } from "@/components/dali/MeltingClock";
import { Ant, Mustache } from "@/components/dali/Ant";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Gastrô Dalí · Bistrô surrealista em Muriaé/MG" },
      {
        name: "description",
        content:
          "Cozinha autoral, hambúrgueres artesanais, drinks, vinhos e música ao vivo num ambiente inspirado em Salvador Dalí. Boulevard Center, Muriaé.",
      },
      { property: "og:image", content: photoEyesArch },
      { name: "twitter:image", content: photoEyesArch },
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

function Chapter({ title }: { title: string }) {
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
            <Eyebrow>Muriaé · MG</Eyebrow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.6, rotate: -8 }}
            animate={{ opacity: 0.9, scale: 1, rotate: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 -ml-1"
          >
            <Mustache className="h-7 w-24 text-neon-orange animate-sway" />
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
              <span className="italic text-gold-shine">alma surrealista.</span>
            </motion.em>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-10 max-w-md text-base leading-relaxed text-foreground/70"
          >
            Onde o tempo derrete e o sabor permanece. Bistrô-galeria no Boulevard
            Center: tropeiro de dia, hambúrgueres, vinhos, drinks autorais e
            música ao vivo à noite.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="mt-6 max-w-sm border-l-2 border-neon-orange/70 pl-4 font-display text-sm italic text-foreground/80"
          >
            “O surrealismo é destrutivo, mas destrói apenas o que limita nossa
            visão.”
            <span className="mt-1 block text-[10px] uppercase tracking-[0.4em] text-neon-orange/80 not-italic">
              Salvador Dalí
            </span>
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
              className="inline-flex items-center gap-2 border border-foreground/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-neon-orange hover:text-neon-orange"
            >
              Fazer pedido
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-16 flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-foreground/40"
          >
            <span>↓ Role para descobrir</span>
          </motion.div>
        </motion.div>

        {/* Right image column — REAL PHOTO */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[60vh] overflow-hidden lg:col-span-5 lg:h-auto"
        >
          <motion.img
            src={photoEyesArch}
            alt="Salão do Gastrô Dalí com mural de olhos e mesa amarela surrealista"
            style={{ y: heroY }}
            className="absolute inset-0 h-[120%] w-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-background/10 lg:to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/20" />
          <div className="absolute inset-0 bg-grain opacity-30" />

          <motion.div
            initial={{ opacity: 0, y: -30, rotate: -12 }}
            animate={{ opacity: 1, y: 0, rotate: -8 }}
            transition={{ duration: 1.6, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-6 top-10 z-10 hidden md:block"
          >
            <MeltingClock className="h-40 w-48 text-neon-orange animate-melt drop-shadow-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="absolute bottom-10 right-6 z-10 max-w-[14rem] text-right md:right-10"
          >
            <div className="eyebrow mb-2">A casa onírica</div>
            <div className="font-display text-3xl italic text-paper">
              Boulevard Center
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= MARQUEE — frase de efeito em movimento ================= */}
      <div className="relative overflow-hidden border-y border-border bg-gradient-to-r from-burgundy/30 via-background to-burgundy/30 py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, dup) => (
            <div key={dup} className="flex items-center gap-10 pr-10">
              {[
                "O tempo derrete · o sabor permanece",
                "Cozinha autoral",
                "Hambúrgueres artesanais",
                "Vinhos selecionados",
                "Música ao vivo",
                "Drinks surrealistas",
                "Almoço executivo",
              ].map((t, i) => (
                <span key={`${dup}-${i}`} className="flex items-center gap-10">
                  <span className="font-display text-2xl italic text-foreground/80 md:text-3xl">
                    {t}
                  </span>
                  <Mustache className="h-4 w-12 text-neon-orange/80" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= MARCHING ANTS divider ================= */}
      <div className="relative h-10 overflow-hidden border-b border-border bg-background">
        <div className="pointer-events-none absolute inset-0 flex items-center text-neon-orange/40">
          <div className="flex gap-10 animate-ant-march whitespace-nowrap">
            {Array.from({ length: 14 }).map((_, i) => (
              <Ant key={i} className="h-3 w-6 shrink-0" />
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* ================= STATS ================= */}
      <section className="border-b border-border">
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
          <Chapter title="Nossa história" />

          <div className="grid gap-16 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className="md:col-span-5"
            >
              <h2 className="font-display text-5xl leading-[1] md:text-7xl">
                A persistência
                <br />
                <em className="text-gold-shine">do sabor.</em>
              </h2>
              <p className="mt-8 max-w-md text-foreground/80">
                Inspirados em Salvador Dalí, fazemos da mesa um pequeno
                manifesto: técnica de bistrô, ingrediente local e um toque de
                imaginação em cada prato.
              </p>

              <div className="mt-10 flex items-center gap-4 text-neon-orange/80">
                <Mustache className="h-6 w-20 animate-sway" />
                <span className="font-display text-sm italic">
                  cozinha como obra
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="md:col-span-7"
            >
              <p className="font-display text-2xl leading-relaxed text-foreground/90 md:text-3xl">
                Nascemos em Muriaé com uma vontade simples:{" "}
                <em className="text-neon-orange/90">servir uma cozinha que foge do óbvio</em>
                , sem perder o aconchego de uma mesa em casa.
              </p>

              <div className="mt-10 grid gap-8 border-l-2 border-neon-orange/40 pl-8 text-foreground/75 md:grid-cols-2">
                <p className="text-sm leading-relaxed">
                  Cada prato começa numa ideia, passa por testes, ganha ajustes
                  e só chega à mesa quando faz sentido. Ingredientes
                  selecionados, técnica de bistrô e a liberdade de ousar,
                  porque é assim que a gente gosta de comer.
                </p>
                <p className="text-sm leading-relaxed">
                  Do almoço executivo ao hambúrguer da noite, do happy hour
                  ao jantar a dois, queremos que cada visita seja diferente
                  da anterior. A casa é sua. O sabor é nosso recado.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-foreground/60">
                <span className="font-display text-base italic text-gold">
                  cozinha autoral
                </span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="font-display text-base italic text-gold">
                  ingredientes locais
                </span>
                <span className="h-1 w-1 rounded-full bg-border" />
                <span className="font-display text-base italic text-gold">
                  feita à mão, todo dia
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= EXPERIÊNCIA — três pilares com fotos reais ================= */}
      <section className="relative overflow-hidden border-t border-border px-6 py-32 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <Chapter title="A experiência" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-3xl font-display text-5xl leading-[1] md:text-7xl"
          >
            Três mundos
            <br />
            <em className="text-gold-shine">numa só casa.</em>
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                img: photoBoothEyes,
                icon: Eye,
                tag: "Ambiente",
                title: "Salão-galeria",
                desc: "Mesas em arcos, olhos que observam, mostarda Dalí. Cada canto é cenário.",
              },
              {
                img: photoPicanha,
                icon: Flame,
                tag: "Cozinha",
                title: "Brasa & autoria",
                desc: "Picanha na chapa, hambúrgueres no ponto e tropeiro mineiro com toque francês.",
              },
              {
                img: photoBand,
                icon: Music,
                tag: "Noite",
                title: "Música ao vivo",
                desc: "Acoustic Rock'n'Roll, MPB e voz & violão para acompanhar o vinho.",
              },
            ].map((p, i) => {
              const Icon = p.icon;
              return (
                <motion.article
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8 }}
                  className="group relative overflow-hidden border border-border bg-card"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center border border-paper/30 bg-background/60 backdrop-blur-sm text-neon-orange">
                      <Icon className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="relative p-7">
                    <div className="eyebrow mb-3">{p.tag}</div>
                    <h3 className="font-display text-3xl text-foreground">
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      {p.desc}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= ASSINATURA — pratos em destaque (split layouts) ================= */}
      <section
        className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-20"
        style={{
          background:
            "linear-gradient(180deg, var(--background) 0%, color-mix(in oklab, var(--burgundy) 18%, var(--background)) 50%, var(--background) 100%)",
        }}
      >
        <div className="absolute inset-0 -z-10 bg-grain opacity-40" />
        <div className="mx-auto max-w-7xl">
          <Chapter title="Sabores assinatura" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20 max-w-3xl font-display text-5xl leading-[1] md:text-7xl"
          >
            Pratos que
            <br />
            <em className="text-gold-shine">viram saudade.</em>
          </motion.h2>

          <div className="space-y-24">
            {[
              {
                img: photoBurger,
                tag: "01 · Hamburgueria",
                title: "O hambúrguer da casa",
                desc: "Blend 180g, queijo derretido, alface crocante, tomate fresco e fritas douradas. Servido com molho da casa.",
                price: "a partir de R$ 32",
                accent: "neon-orange",
              },
              {
                img: picanhaChapa,
                tag: "02 · Brasa",
                title: "Picanha na chapa",
                desc: "Cortes nobres selados, cebola roxa, tomate e cheiro-verde. O som da chapa é parte do prato.",
                price: "a partir de R$ 89",
                accent: "burgundy",
              },
              {
                img: photoPizza,
                tag: "03 · Forno",
                title: "Pizza & vinho",
                desc: "Massa fina, calabresa artesanal e mussarela em ponto certo. Acompanhada de uma taça de tinto selecionado.",
                price: "a partir de R$ 54",
                accent: "mustard",
              },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className={`grid items-center gap-10 md:grid-cols-12 ${
                  i % 2 === 1 ? "md:[&>figure]:order-2" : ""
                }`}
              >
                <motion.figure
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.6 }}
                  className="relative overflow-hidden border border-border md:col-span-7"
                >
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                  <div
                    className="absolute inset-0 mix-blend-overlay opacity-30"
                    style={{
                      background: `linear-gradient(135deg, var(--${p.accent}), transparent 60%)`,
                    }}
                  />
                </motion.figure>

                <div className="md:col-span-5">
                  <div className="eyebrow mb-4" style={{ color: `var(--${p.accent})` }}>
                    {p.tag}
                  </div>
                  <h3 className="font-display text-4xl leading-tight text-foreground md:text-6xl">
                    {p.title}
                  </h3>
                  <p className="mt-6 text-foreground/75">{p.desc}</p>
                  <div className="mt-8 flex items-baseline justify-between border-b border-border pb-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-foreground/50">
                      {p.price}
                    </span>
                    <Link
                      to="/cardapio"
                      className="group inline-flex items-center gap-2 font-display text-sm italic text-primary hover:text-neon-orange"
                    >
                      Ver no cardápio
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NEON QUOTE — foto real do letreiro ================= */}
      <section className="relative h-[80vh] overflow-hidden border-y border-border">
        <motion.img
          src={photoNeonDali}
          alt='Frase em neon: "O surrealismo é destrutivo, mas destrói apenas o que considera algemas que limitam nossa visão" Dalí'
          initial={{ scale: 1.08 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="absolute inset-0 h-full w-full object-cover object-center"
          style={{ objectPosition: "center 35%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/55 to-background/30" />
        <div className="absolute inset-0 bg-grain opacity-30" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            <Eyebrow>Manifesto</Eyebrow>
            <blockquote className="mt-8 font-display text-4xl leading-[1.05] text-paper md:text-6xl">
              “O surrealismo destrói apenas
              <br />
              <em className="text-neon">as algemas</em> que limitam
              <br />
              nossa visão.”
            </blockquote>
            <div className="mt-8 text-xs uppercase tracking-[0.4em] text-neon-orange">
              Salvador Dalí
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CARDÁPIO TEASER ================= */}
      <section className="relative overflow-hidden px-6 py-32 md:px-12 lg:px-20">
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -right-40 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-y-1/2 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent, color-mix(in oklab, var(--neon-orange) 18%, transparent), transparent 60%)",
            filter: "blur(80px)",
          }}
        />

        <div className="mx-auto max-w-7xl">
          <Chapter title="O cardápio" />

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
              <p className="mt-8 max-w-xl text-foreground/75">
                Sete famílias de sabor: tropeiro executivo, clássicos, saladas,
                petiscos pra dividir, especiais, sandubas artesanais e bebidas.
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
                className="group relative overflow-hidden border border-border bg-background p-7 transition-colors duration-500 hover:border-neon-orange"
                style={
                  c.color === "burgundy"
                    ? {
                        background:
                          "linear-gradient(135deg, color-mix(in oklab, var(--burgundy) 20%, var(--background)) 0%, var(--background) 100%)",
                      }
                    : undefined
                }
              >
                <div className="mb-3 font-display text-sm italic text-neon-orange/70">
                  0{i + 1}
                </div>
                <div className="font-display text-2xl text-foreground">
                  {c.name}
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-foreground/45">
                  {c.desc}
                </div>
                <ArrowRight className="absolute bottom-5 right-5 h-4 w-4 text-neon-orange/0 transition-all duration-500 group-hover:text-neon-orange group-hover:translate-x-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BAR & VINHOS — split com 2 fotos ================= */}
      <section className="relative overflow-hidden border-y border-border">
        <div className="grid md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
            className="relative aspect-[4/5] overflow-hidden md:aspect-auto md:min-h-[36rem]"
          >
            <img
              src={photoWineMenu}
              alt="Carta de vinhos do Gastrô Dalí"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative flex flex-col justify-center px-6 py-20 md:px-12 lg:px-20"
            style={{
              background:
                "linear-gradient(135deg, color-mix(in oklab, var(--burgundy) 28%, var(--background)) 0%, var(--background) 100%)",
            }}
          >
            <Eyebrow>Carta de vinhos</Eyebrow>
            <h2 className="mt-8 font-display text-5xl leading-[1] md:text-7xl">
              Tintos que
              <br />
              <em className="text-gold-shine">conversam.</em>
            </h2>
            <p className="mt-6 max-w-md text-foreground/75">
              Argentinos, chilenos e portugueses selecionados a dedo. Da taça
              acessível ao rótulo de assinatura, sempre o pareamento certo.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-px bg-border max-w-md">
              {[
                { l: "Rótulos", v: "32+" },
                { l: "Países", v: "5" },
                { l: "Por taça", v: "8" },
                { l: "Drinks", v: "20+" },
              ].map((s) => (
                <div key={s.l} className="bg-background p-6">
                  <div className="font-display text-3xl text-neon-orange">
                    {s.v}
                  </div>
                  <div className="eyebrow mt-2">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex items-center gap-3 text-foreground/60">
              <Wine className="h-4 w-4 text-neon-orange" />
              <span className="font-display text-sm italic">
                “Não bebo vinho. Eu o desperto.” Dalí
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= GALERIA — 9 fotos REAIS, sem repetir ================= */}
      <section
        id="galeria"
        className="relative scroll-mt-24 px-6 py-32 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <Chapter title="A galeria" />

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
              Cada imagem é uma cena real do nosso dia. O que você vê aqui é
              exatamente o que vai encontrar.
            </motion.p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:auto-rows-[14rem]">
            {[
              { src: photoEyesArch, alt: "Mural de olhos e mesa amarela", cls: "md:col-span-3 md:row-span-2" },
              { src: photoBoothEyes, alt: "Booth com mural de olhos", cls: "md:col-span-3" },
              { src: photoBurger, alt: "Hambúrguer artesanal com fritas", cls: "md:col-span-2" },
              { src: photoPicanha, alt: "Picanha na chapa de pedra", cls: "md:col-span-1" },
              { src: photoNeonDali, alt: "Frase em neon de Dalí", cls: "md:col-span-2 md:row-span-2" },
              { src: photoPizza, alt: "Pizza de calabresa com vinho", cls: "md:col-span-2" },
              { src: photoDrinkMona, alt: "Drink autoral com Mona Lisa", cls: "md:col-span-1" },
              { src: photoWineMenu, alt: "Carta de vinhos e cardápio", cls: "md:col-span-2" },
              { src: photoBand, alt: "Banda Acoustic Rock'n'Roll ao vivo", cls: "md:col-span-3" },
              { src: fachada, alt: "Fachada do Gastrô Dalí", cls: "md:col-span-3" },
            ].map((p, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.8,
                  delay: (i % 6) * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative overflow-hidden border border-border ${p.cls}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[20%] transition-all duration-[1400ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
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

      {/* ================= AVALIAÇÕES ================= */}
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
              "radial-gradient(ellipse at top right, color-mix(in oklab, var(--neon-orange) 10%, transparent), transparent 60%)",
          }}
        />

        <div className="mx-auto max-w-7xl">
          <Chapter title="Encontre o Dalí" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-3xl font-display text-5xl leading-[1] md:text-7xl"
          >
            Sua próxima
            <br />
            <em className="text-gold-shine">história começa aqui.</em>
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
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-neon-orange" />
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
                <Phone className="mt-1 h-4 w-4 shrink-0 text-neon-orange" />
                <div>
                  <div className="eyebrow mb-2">Contato</div>
                  <div className="text-sm text-foreground/85">
                    <a href="tel:+5532998492121" className="block hover:text-neon-orange">
                      (32) 99849-2121
                    </a>
                    <a
                      href="https://wa.me/5532998492121"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-block text-neon-orange hover:underline"
                    >
                      Chamar no WhatsApp →
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-background p-7">
                <Instagram className="mt-1 h-4 w-4 shrink-0 text-neon-orange" />
                <div>
                  <div className="eyebrow mb-2">Instagram</div>
                  <a
                    href="https://www.instagram.com/gastrodali/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-neon-orange hover:underline"
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
                    { day: "Segunda a sexta", hours: "10:00 às 00:00" },
                    { day: "Sábado", hours: "10:00 às 00:00" },
                    { day: "Domingo", hours: "15:00 às 00:00" },
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
                        <span className="font-display text-sm italic text-neon-orange/60">
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
          className="absolute -right-40 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-neon-orange/15 blur-[160px]"
        />

        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.55 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute left-6 top-12 hidden md:block"
        >
          <MeltingClock className="h-28 w-32 text-neon-orange animate-melt" time="11:55" />
        </motion.div>
        <motion.div
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="pointer-events-none absolute bottom-12 right-10 hidden rotate-12 md:block"
        >
          <MeltingClock className="h-24 w-28 text-primary animate-float-slow" time="00:07" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-5xl text-center"
        >
          <Star className="mx-auto h-6 w-6 text-neon-orange" />
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
              className="inline-flex items-center gap-2 border border-foreground/25 px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-foreground transition-colors hover:border-neon-orange hover:text-neon-orange"
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
        src={deck}
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
        <Chapter title="Vozes da casa" />

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
              <Quote className="mx-auto mb-8 h-10 w-10 text-neon-orange/70" />
              <div className="mb-6 flex justify-center gap-1 text-neon-orange">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="font-display text-2xl leading-snug text-foreground md:text-4xl">
                “{current.text}”
              </blockquote>
              <figcaption className="mt-8 text-sm uppercase tracking-[0.4em] text-neon-orange">
                {current.name}
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <button
            onClick={() => go(-1)}
            aria-label="Avaliação anterior"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground/70 transition-all hover:border-neon-orange hover:text-neon-orange"
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
                  i === index ? "w-8 bg-neon-orange" : "w-2 bg-border hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Próxima avaliação"
            className="flex h-12 w-12 items-center justify-center border border-border text-foreground/70 transition-all hover:border-neon-orange hover:text-neon-orange"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
