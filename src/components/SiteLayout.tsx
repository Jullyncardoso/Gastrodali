import { Header } from "./Header";
import { Footer } from "./Footer";
import { SplashScreen } from "./SplashScreen";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SplashScreen />
      <Header />
      <main className="flex-1 pt-0">{children}</main>
      <Footer />
    </div>
  );
}
