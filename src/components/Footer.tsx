import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:grid-cols-12 md:px-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Gastrô Dalí" className="h-12 w-12 object-contain" />
            <span className="font-display text-2xl text-foreground">Gastrô Dalí</span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Cozinha autoral com alma mineira, no Boulevard Center Shopping de Muriaé.
          </p>
          <a
            href="https://www.instagram.com/gastrodali/"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary hover:text-paper"
          >
            <Instagram className="h-3.5 w-3.5" /> @gastrodali
          </a>
        </div>
        <div className="md:col-span-3">
          <h4 className="eyebrow mb-5">Contato</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>Boulevard Center<br />Av. Dr. Passos, 180<br />Centro, Muriaé/MG</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+5532998492121" className="hover:text-primary">(32) 99849-2121</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Almoço & Jantar, todos os dias</span>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="eyebrow mb-5">Navegue</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-foreground/80">
            <li><Link to="/cardapio" className="hover:text-primary">Cardápio</Link></li>
            <li><Link to="/" hash="historia" className="hover:text-primary">História</Link></li>
            <li><Link to="/" hash="galeria" className="hover:text-primary">Galeria</Link></li>
            <li><Link to="/" hash="avaliacoes" className="hover:text-primary">Avaliações</Link></li>
            <li><Link to="/" hash="visite" className="hover:text-primary">Visite</Link></li>
            <li><Link to="/checkout" className="hover:text-primary">Pedido</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
        © {new Date().getFullYear()} Gastrô Dalí · Muriaé · MG
      </div>
    </footer>
  );
}
