import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export function SplashScreen() {
  const [show, setShow] = React.useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("dali-splash-seen");
  });

  React.useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => {
      sessionStorage.setItem("dali-splash-seen", "1");
      setShow(false);
    }, 3000);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[var(--ink)]"
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "circle(0% at 50% 50%)",
            transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
          }}
        >
          {/* layered backdrop */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--ink)] via-[var(--burgundy)] to-[var(--ink)]" />
          <div className="absolute inset-0 bg-grain opacity-[0.15]" />

          {/* gold orbs */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute left-1/4 top-1/3 h-[28rem] w-[28rem] rounded-full bg-secondary/30 blur-[120px]"
          />
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.6, delay: 0.2, ease: "easeOut" }}
            className="absolute right-1/4 bottom-1/3 h-[28rem] w-[28rem] rounded-full bg-secondary/20 blur-[140px]"
          />

          {/* concentric ring sweep */}
          <svg
            className="pointer-events-none absolute inset-0 m-auto h-[90vmin] w-[90vmin]"
            viewBox="0 0 400 400"
            fill="none"
          >
            {[160, 140, 120, 100].map((r, i) => (
              <motion.circle
                key={r}
                cx="200"
                cy="200"
                r={r}
                stroke="oklch(0.72 0.15 80)"
                strokeOpacity={0.25 - i * 0.04}
                strokeWidth="0.6"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.2 + i * 0.15, ease: "easeOut" }}
              />
            ))}
          </svg>

          {/* rotating typographic ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="absolute h-[32rem] w-[32rem] animate-spin-slow"
          >
            <svg viewBox="0 0 200 200" className="h-full w-full">
              <defs>
                <path
                  id="splashRing"
                  d="M 100, 100 m -86, 0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0"
                />
              </defs>
              <text className="fill-secondary/70 text-[7px] tracking-[0.55em] font-body uppercase">
                <textPath href="#splashRing">
                  Gastrô Dalí · Surreal · Autoral · Muriaé MG · Desde 2023 · Gastrô Dalí ·
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Logo center reveal */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0, filter: "blur(20px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.img
              src={logo}
              alt="Gastrô Dalí"
              className="h-48 w-48 object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] md:h-64 md:w-64"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            />
          </motion.div>

          {/* bottom flourish */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2"
          >
            <div className="flex items-center gap-3 text-secondary/80">
              <span className="h-px w-12 bg-secondary/50" />
              <span className="font-display text-sm italic tracking-[0.3em]">
                est. 2023
              </span>
              <span className="h-px w-12 bg-secondary/50" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
