import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

export function SplashScreen() {
  const [show, setShow] = React.useState(() => {
    if (typeof window === "undefined") return true;
    return !sessionStorage.getItem("dali-splash-v3");
  });
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => {
      sessionStorage.setItem("dali-splash-v3", "1");
      setShow(false);
    }, 2200);
    return () => clearTimeout(t);
  }, [show]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden"
          style={{ background: "var(--ink)" }}
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -40,
            transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
          }}
        >
          {/* subtle gold orb */}
          <motion.div
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute h-[40rem] w-[40rem] rounded-full"
            style={{
              background:
                "radial-gradient(circle, color-mix(in oklab, var(--gold) 35%, transparent) 0%, transparent 65%)",
              filter: "blur(40px)",
            }}
          />

          {/* Logo */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.img
              src={logo}
              alt="Gastrô Dalí"
              className="h-44 w-44 object-contain md:h-56 md:w-56"
              style={{ filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.6))" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "8rem", opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              className="mt-8 h-px"
              style={{ background: "var(--gold)" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="mt-4 text-[11px] uppercase tracking-[0.5em]"
              style={{ color: "var(--gold)", fontFamily: "var(--font-body)" }}
            >
              est. 2023
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
