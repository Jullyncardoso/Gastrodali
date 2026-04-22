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
    }, 2600);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute left-1/4 top-1/3 h-72 w-72 rounded-full bg-secondary blur-3xl animate-shimmer" />
            <div className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-primary blur-3xl animate-shimmer" />
          </div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.img
              src={logo}
              alt="Gastrô Dalí"
              className="h-44 w-44 rounded-full object-cover shadow-2xl ring-4 ring-primary/40 md:h-56 md:w-56"
              initial={{ filter: "blur(8px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 1 }}
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-4 font-display text-sm tracking-[0.4em] text-primary uppercase"
            >
              Uma experiência surreal
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
