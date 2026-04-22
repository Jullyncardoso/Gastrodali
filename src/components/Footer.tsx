import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Gastrô Dalí" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/40" />
            <span className="font-display text-2xl">Gastrô Dalí</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Gastronomia surreal no coração de Muriaé. Onde cada prato é uma obra de arte.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Contato</h4>
          <ul className="space-y-3 text-sm text-foreground/85">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>Boulevard Center Shopping<br />Av. Dr. Passos, 180 — Centro, Muriaé/MG</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+5532998492121" className="hover:text-primary">(32) 99849-2121</a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>Almoço & Jantar — todos os dias</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">Navegue</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm text-foreground/85">
            <li><Link to="/cardapio" className="hover:text-primary">Cardápio</Link></li>
            <li><Link to="/" hash="historia" className="hover:text-primary">História</Link></li>
            <li><Link to="/" hash="galeria" className="hover:text-primary">Galeria</Link></li>
            <li><Link to="/" hash="avaliacoes" className="hover:text-primary">Avaliações</Link></li>
            <li><Link to="/" hash="visite" className="hover:text-primary">Visite-nos</Link></li>
            <li><Link to="/checkout" className="hover:text-primary">Pedido</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gastrô Dalí — Muriaé/MG. Todos os direitos reservados.
      </div>
    </footer>
  );
}
