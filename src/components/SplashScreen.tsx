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
    }, 2400);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: "easeInOut" } }}
        >
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-1/4 top-1/3 h-80 w-80 rounded-full bg-secondary/40 blur-3xl animate-shimmer" />
            <div className="absolute right-1/4 bottom-1/3 h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-shimmer" />
          </div>
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.img
              src={logo}
              alt="Gastrô Dalí"
              className="h-44 w-44 object-contain md:h-56 md:w-56"
              initial={{ filter: "blur(10px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 1.1 }}
            />
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.1em" }}
              animate={{ opacity: 1, letterSpacing: "0.5em" }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-6 font-body text-[11px] uppercase text-primary"
            >
              Uma experiência surreal
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
