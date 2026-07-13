"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/data/content";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  const dismiss = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    const visited = sessionStorage.getItem("portfolio-visited");
    if (visited) {
      setIsLoading(false);
      return;
    }

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const duration = prefersReduced ? 0 : 700;
    const timer = setTimeout(() => {
      dismiss();
      sessionStorage.setItem("portfolio-visited", "1");
    }, duration);

    return () => clearTimeout(timer);
  }, [dismiss]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.button
          type="button"
          onClick={() => {
            dismiss();
            sessionStorage.setItem("portfolio-visited", "1");
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background cursor-pointer"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-label="Loading portfolio — click to skip"
        >
          <motion.div
            className="text-5xl md:text-6xl font-bold gradient-text-purple"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            {"</>"}
          </motion.div>
          <p className="mt-4 text-white/40 text-xs tracking-widest uppercase">
            {siteConfig.name} · Tap to enter
          </p>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
