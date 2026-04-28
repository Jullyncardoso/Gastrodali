import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";
import { CartProvider } from "@/context/CartContext";
import { SiteLayout } from "@/components/SiteLayout";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-xl">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Gastrô Dalí" },
      { name: "description", content: "Cardápio executivo, hambúrgueres artesanais, petiscos e jantar especial no coração de Muriaé/MG. Peça pelo site." },
      { name: "author", content: "Gastrô Dalí" },
      { property: "og:title", content: "Gastrô Dalí" },
      { property: "og:description", content: "Cardápio executivo, hambúrgueres artesanais, petiscos e jantar especial no coração de Muriaé/MG. Peça pelo site." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Gastrô Dalí" },
      { name: "twitter:description", content: "Cardápio executivo, hambúrgueres artesanais, petiscos e jantar especial no coração de Muriaé/MG. Peça pelo site." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45dd52db-92d5-4135-a8e6-ea92c022426c/id-preview-912e6754--ff223602-663b-4b6a-89d7-8f8178b2e075.lovable.app-1777405112884.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/45dd52db-92d5-4135-a8e6-ea92c022426c/id-preview-912e6754--ff223602-663b-4b6a-89d7-8f8178b2e075.lovable.app-1777405112884.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <CartProvider>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
      <Toaster richColors position="top-center" />
    </CartProvider>
  );
}
