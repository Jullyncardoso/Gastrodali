import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/avaliacoes")({
  component: Avaliacoes,
  head: () => ({
    meta: [
      { title: "Vozes Surreais — Avaliações | Gastrô Dalí" },
      { name: "description", content: "O que nossos clientes dizem sobre a experiência no Gastrô Dalí em Muriaé." },
    ],
  }),
});

const reviews = [
  { name: "Jhennifer Ramos", text: "EXCELENTE!!! Comida maravilhosa, e atendimento impecável, combo perfeito para o local se tornar agradável." },
  { name: "Stael Gusman", text: "Ambiente agradável, excelente atendimento, chopp super gelado! Tudo uma delícia! Recomendo!" },
  { name: "Renato Gribel", text: "Uma experiência ímpar, comida deliciosa, ambiente sem igual e atendimento fora da curva!" },
  { name: "Ariel Dario De Los Santos", text: "Espectacular!!! Atendimento e gastronomia de qualidade e aquela vista mágica." },
  { name: "Larissa Cerqueira", text: "Lugar agradável, atendimento cordial, música boa, chopp gelado e comida deliciosa!" },
  { name: "Nathália Vegi Carvalho", text: "Sem defeitos! Não existe um prato sequer que tenha provado até hoje que não tenha amado. Ambiente gostoso, aconchegante e descontraído." },
  { name: "Brenda Nascimento Silva", text: "Excelente, ambiente muito acolhedor, atendimento excepcional. Comidas de dar água na boca, bom preço e qualidade." },
  { name: "Ana Pacheco", text: "A comida é impecável e os garçons são extremamente atenciosos." },
  { name: "Fernanda Lima", text: "O atendimento top; principalmente do rapaz que está no seu primeiro dia. Yuri e Júlio." },
  { name: "Samara Lopes", text: "Atendimento muito bom, todos muito educados. Comida excelente e o melhor que não demora." },
  { name: "Jéssica Bani", text: "É a segunda vez que viemos e fomos atendidos pelo Maylon. O atendimento dele é excepcional, arrasa demais." },
  { name: "Isaque Rodrigues", text: "Comida maravilhosa, ambiente lindo e confortável. Yago é o atendente mais alegre que já vi." },
  { name: "Nane S60", text: "Atendimento de primeira, ambiente muito agradável, música boa, vale muito a pena." },
  { name: "Fabio A.", text: "Apresentação perfeita, aroma perfeito. Maionese saborosa e o sanduíche impecável." },
  { name: "Dayana Guedes", text: "Atendimento maravilhoso, colaboradores muito educados e solícitos. Comida muito boa." },
  { name: "Nivaldo Muniz Trassato", text: "Excelente atendimento, cordialidade, alegria e educação. O Sr. Júlio é alguém que me fará voltar." },
  { name: "Mariana Linhares", text: "Ambiente gostoso, excelente atendimento e refeições muito saborosas. Vocês estão de parabéns em todos os detalhes." },
];

function Avaliacoes() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Vozes surreais</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">O que nossos clientes dizem</h1>
        <div className="mt-4 flex items-center gap-2 text-primary">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-current" />
          ))}
          <span className="ml-2 text-sm text-muted-foreground">Centenas de experiências memoráveis</span>
        </div>
      </header>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
            className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-6 transition hover:border-primary/50"
          >
            <Quote className="absolute right-4 top-4 h-8 w-8 text-primary/15 transition-colors group-hover:text-primary/30" />
            <div className="mb-3 flex gap-0.5 text-primary">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <blockquote className="text-sm leading-relaxed text-foreground/90">{r.text}</blockquote>
            <figcaption className="mt-4 font-display text-base text-primary">— {r.name}</figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  );
}
