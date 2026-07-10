"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/content";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const duration = prefersReduced ? 0 : 2200;
    const timer = setTimeout(() => setIsLoading(false), duration);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          role="status"
          aria-label="Loading portfolio"
        >
          <motion.div
            className="relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-5xl md:text-6xl font-bold gradient-text-purple"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              {"</>"}
            </motion.div>
            <motion.div
              className="absolute -inset-4 rounded-full border border-purple-deep/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          <motion.p
            className="mt-6 text-white/50 text-sm tracking-widest uppercase"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {siteConfig.name}
          </motion.p>
          <motion.div
            className="mt-8 w-48 h-1 rounded-full bg-white/10 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-deep to-pink-neon rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
