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

function Chapter({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-12 flex items-baseline gap-6">
      <span className="chapter-num text-3xl md:text-4xl">{n}</span>
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
            <div className="eyebrow mb-2">Capítulo 01</div>
            <div className="font-display text-3xl italic text-foreground">
              A casa
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

      {/* ================= HISTÓRIA ================= */}
      <section
        id="historia"
        className="relative scroll-mt-24 px-6 py-32 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
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
              <p className="mt-8 max-w-md text-foreground/65">
                Técnica de bistrô, ingredientes locais e o afeto da mesa
                mineira. Sem firulas, com cuidado.
              </p>
            </motion.div>

            <div className="space-y-12 md:col-span-7">
              {[
                {
                  year: "Janeiro 2023",
                  title: "O começo",
                  text: "O Gastrô Dalí abriu as portas com a vontade de oferecer em Muriaé uma cozinha que foge do óbvio. Um cardápio enxuto, executado com técnica e afeto.",
                },
                {
                  year: "2024",
                  title: "Tradição & ousadia",
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
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="group grid grid-cols-[auto_1fr] gap-8 border-t border-border pt-8 transition-colors hover:border-primary/40"
                >
                  <div className="eyebrow whitespace-nowrap text-foreground/50">
                    0{i + 1}
                  </div>
                  <div>
                    <div className="eyebrow mb-3">{b.year}</div>
                    <h3 className="font-display text-3xl text-foreground md:text-4xl">
                      {b.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-foreground/65">{b.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CARDÁPIO TEASER ================= */}
      <section className="relative overflow-hidden border-y border-border bg-muted/40 px-6 py-32 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-grain opacity-40" />
        <div className="absolute -left-32 top-1/2 -z-10 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-primary/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-12 md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-7"
            >
              <Chapter n="03" title="O cardápio" />
              <h2 className="font-display text-5xl leading-[1] md:text-7xl">
                Sete capítulos
                <br />
                <em className="text-gold-shine">para sua mesa.</em>
              </h2>
              <p className="mt-8 max-w-xl text-foreground/65">
                Tropeiro Executivo, Clássicos do Dia, Saladas, Pra Compartilhar,
                Especiais, Sandubas e Bebidas. Monte seu pedido em poucos cliques.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-5"
            >
              <Link
                to="/cardapio"
                className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-paper"
              >
                Explorar cardápio
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px border border-border bg-border md:grid-cols-4 lg:grid-cols-7">
            {[
              "Tropeiro",
              "Clássicos",
              "Saladas",
              "Compartilhar",
              "Especiais",
              "Sandubas",
              "Bebidas",
            ].map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="bg-background px-6 py-8 text-center transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <div className="chapter-num mb-2 text-sm">0{i + 1}</div>
                <div className="font-display text-xl">{c}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALERIA ================= */}
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
              className="text-foreground/65 md:col-span-5"
            >
              Detalhes do nosso ambiente, da fachada e do bar. O que você vê é
              o que vai encontrar quando chegar.
            </motion.p>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: (i % 5) * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative overflow-hidden border border-border ${p.span ?? ""}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover grayscale-[40%] transition-all duration-[1400ms] ease-out group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AVALIAÇÕES ================= */}
      <section
        id="avaliacoes"
        className="relative scroll-mt-24 border-t border-border bg-muted/30 px-6 py-32 md:px-12 lg:px-20"
      >
        <div className="absolute inset-0 -z-10 bg-grain opacity-40" />
        <div className="mx-auto max-w-7xl">
          <Chapter n="05" title="Vozes da casa" />

          <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl leading-[1] md:col-span-7 md:text-7xl"
            >
              O que dizem
              <br />
              <em className="text-gold-shine">de nós.</em>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="md:col-span-5"
            >
              <div className="flex items-center gap-2 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-sm text-foreground/65">
                Centenas de experiências memoráveis na nossa praça.
              </p>
            </motion.div>
          </div>

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
                className="group relative border border-border bg-background p-7 transition-all duration-500 hover:border-primary/60"
              >
                <Quote className="absolute right-5 top-5 h-7 w-7 text-primary/20 transition-colors group-hover:text-primary/50" />
                <div className="mb-4 flex gap-0.5 text-primary">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-current" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-foreground/85">
                  {r.text}
                </blockquote>
                <figcaption className="mt-5 font-display text-lg italic text-primary">
                  {r.name}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VISITE ================= */}
      <section
        id="visite"
        className="relative scroll-mt-24 px-6 py-32 md:px-12 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <Chapter n="06" title="Encontre o Dalí" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16 max-w-3xl font-display text-5xl leading-[1] md:text-7xl"
          >
            A coordenada exata da sua
            <br />
            <em className="text-gold-shine">próxima boa refeição.</em>
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-12">
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-px border border-border md:col-span-5"
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
                  title: "Instagram",
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
                  className="flex items-start gap-4 bg-background p-7 transition-colors hover:bg-muted/40"
                >
                  <Icon className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <div>
                    <div className="eyebrow mb-2">{title}</div>
                    <div className="text-sm text-foreground/85">{body}</div>
                  </div>
                </div>
              ))}

              <a
                href="https://maps.app.goo.gl/xWTVT98CV3fyQi4QA"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-primary px-8 py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-paper"
              >
                <Navigation className="h-3.5 w-3.5" /> Traçar rota no Maps
              </a>
            </motion.aside>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="overflow-hidden border border-border md:col-span-7"
            >
              <iframe
                title="Localização Gastrô Dalí"
                src="https://www.google.com/maps?q=Boulevard+Center+Shopping+Av.+Dr.+Passos+180+Centro+Muria%C3%A9+MG&output=embed"
                width="100%"
                height="100%"
                className="aspect-square w-full grayscale-[40%] md:aspect-auto md:h-[640px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="relative overflow-hidden border-t border-border bg-muted/30 px-6 py-32 md:px-12 lg:px-20">
        <div className="absolute inset-0 -z-10 bg-grain opacity-40" />
        <div className="absolute -right-32 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-primary/15 blur-[160px]" />

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
          <p className="mx-auto mt-6 max-w-xl text-foreground/65">
            Reserve, peça pelo site ou apareça no Boulevard Center. O sabor
            chega até você.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/checkout"
              className="group inline-flex items-center gap-3 bg-primary px-8 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-primary-foreground transition-colors hover:bg-paper"
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
