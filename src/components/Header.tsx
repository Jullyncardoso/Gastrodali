import * as React from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

type NavLink = { hash?: string; to?: string; label: string };

const links: NavLink[] = [
  { to: "/cardapio", label: "Cardápio" },
  { hash: "historia", label: "História" },
  { hash: "galeria", label: "Galeria" },
  { hash: "avaliacoes", label: "Avaliações" },
  { hash: "visite", label: "Visite" },
];

export function Header() {
  const { count } = useCart();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToSection = (hash: string) => {
    setOpen(false);
    const scroll = () => {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    if (router.state.location.pathname !== "/") {
      router.navigate({ to: "/" }).then(() => setTimeout(scroll, 80));
    } else {
      scroll();
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Gastrô Dalí"
            className="h-12 w-12 object-contain transition-transform duration-500 group-hover:rotate-[8deg]"
          />
          <span className="hidden font-display text-xl tracking-wide text-foreground sm:inline">
            Gastrô Dalí
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                className="story-link text-sm font-medium tracking-wide text-foreground/75 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.label}
                onClick={() => goToSection(l.hash!)}
                className="story-link text-sm font-medium tracking-wide text-foreground/75 transition-colors hover:text-primary"
              >
                {l.label}
              </button>
            )
          )}
        </nav>
        <div className="flex items-center gap-2">
          <Link to="/checkout">
            <Button variant="default" size="sm" className="relative">
              <ShoppingBag className="h-4 w-4" />
              <span className="hidden sm:inline">Pedido</span>
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-secondary-foreground shadow-md">
                  {count}
                </span>
              )}
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3">
            {links.map((l) =>
              l.to ? (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm font-medium text-foreground/80 hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              ) : (
                <button
                  key={l.label}
                  onClick={() => goToSection(l.hash!)}
                  className="py-3 text-left text-sm font-medium text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </button>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
