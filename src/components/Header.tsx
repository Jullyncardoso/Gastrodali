import * as React from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { ShoppingBag, Menu as MenuIcon, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { useCart } from "@/context/CartContext";

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
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={logo}
            alt="Gastrô Dalí"
            className="h-10 w-10 object-contain transition-transform duration-500 group-hover:rotate-[10deg]"
          />
          <span className="hidden font-body text-sm font-medium tracking-tight text-foreground sm:inline">
            Gastrô Dalí
          </span>
        </Link>
        <nav className="hidden items-center gap-10 lg:flex">
          {links.map((l) =>
            l.to ? (
              <Link
                key={l.label}
                to={l.to}
                className="text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:text-primary"
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ) : (
              <button
                key={l.label}
                onClick={() => goToSection(l.hash!)}
                className="text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/70 transition-colors hover:text-primary"
              >
                {l.label}
              </button>
            )
          )}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/checkout"
            className="relative inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-colors hover:bg-paper"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Pedido</span>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-bold text-secondary-foreground shadow-md">
                {count}
              </span>
            )}
          </Link>
          <button
            className="text-foreground lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-3">
            {links.map((l) =>
              l.to ? (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="py-3 text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/80 hover:text-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              ) : (
                <button
                  key={l.label}
                  onClick={() => goToSection(l.hash!)}
                  className="py-3 text-left text-[11px] font-medium uppercase tracking-[0.3em] text-foreground/80 hover:text-primary"
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
