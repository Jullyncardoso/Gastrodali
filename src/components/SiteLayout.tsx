import { Header } from "./Header";
import { Footer } from "./Footer";
import { SplashScreen } from "./SplashScreen";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SplashScreen />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
