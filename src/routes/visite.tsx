import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/visite")({
  component: Visite,
  head: () => ({
    meta: [
      { title: "Encontre-nos em Muriaé — Gastrô Dalí" },
      { name: "description", content: "Boulevard Center Shopping, Av. Dr. Passos, 180 — Centro, Muriaé/MG. Telefone (32) 99849-2121." },
    ],
  }),
});

function Visite() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
      <header className="mb-12 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Encontre o Dalí</p>
        <h1 className="mt-2 font-display text-4xl md:text-6xl">A coordenada exata da sua próxima refeição surreal</h1>
      </header>

      <div className="grid gap-8 md:grid-cols-5">
        <aside className="space-y-5 md:col-span-2">
          <div className="rounded-xl border border-border/60 bg-card p-6">
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-display text-lg">Endereço</h3>
                <p className="mt-1 text-sm text-foreground/85">
                  Boulevard Center Shopping<br />
                  Av. Dr. Passos, 180 — Centro<br />
                  Muriaé/MG, 36884-002
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card p-6">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-display text-lg">Telefone</h3>
                <a href="tel:+5532998492121" className="mt-1 block text-sm text-foreground/85 hover:text-primary">
                  (32) 99849-2121
                </a>
                <a
                  href="https://wa.me/5532998492121"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 block text-sm text-primary hover:underline"
                >
                  Chamar no WhatsApp →
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border/60 bg-card p-6">
            <div className="flex items-start gap-3">
              <Clock className="mt-1 h-5 w-5 text-primary" />
              <div>
                <h3 className="font-display text-lg">Horários</h3>
                <p className="mt-1 text-sm text-foreground/85">
                  Almoço & Jantar — todos os dias<br />
                  <span className="text-muted-foreground">Confirme horários especiais por telefone</span>
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://maps.app.goo.gl/xWTVT98CV3fyQi4QA"
            target="_blank"
            rel="noreferrer"
            className="block"
          >
            <Button className="w-full" size="lg">
              <Navigation className="h-4 w-4" /> Traçar rota no Google Maps
            </Button>
          </a>
        </aside>

        <div className="overflow-hidden rounded-xl border border-border/60 md:col-span-3">
          <iframe
            title="Localização Gastrô Dalí"
            src="https://www.google.com/maps?q=Boulevard+Center+Shopping+Av.+Dr.+Passos+180+Centro+Muria%C3%A9+MG&output=embed"
            width="100%"
            height="100%"
            className="aspect-square w-full md:aspect-auto md:h-[560px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
