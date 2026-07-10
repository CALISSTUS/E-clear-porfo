"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useIsDesktop } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const isDesktop = useIsDesktop();
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktop) return;

    const cursor = cursorRef.current;
    const ring = ringRef.current;
    if (!cursor || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      cursor.style.opacity = "1";
      ring.style.opacity = "1";
    };

    const onLeave = () => {
      cursor.style.opacity = "0";
      ring.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 rounded-full bg-pink-neon pointer-events-none z-[9999] mix-blend-screen opacity-0 transition-opacity"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="custom-cursor fixed top-0 left-0 w-10 h-10 rounded-full border border-purple-deep/60 pointer-events-none z-[9998] opacity-0 transition-opacity"
        aria-hidden
      />
    </>
  );
}
