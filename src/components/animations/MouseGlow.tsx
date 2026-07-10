"use client";

import { useEffect, useRef } from "react";
import { useIsDesktop } from "@/hooks/useMediaQuery";

export function MouseGlow() {
  const isDesktop = useIsDesktop();
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDesktop) return;

    const glow = glowRef.current;
    if (!glow) return;

    const onMove = (e: MouseEvent) => {
      glow.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      ref={glowRef}
      className="mouse-glow fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0 opacity-30"
      style={{
        background:
          "radial-gradient(circle, rgba(108,59,255,0.15) 0%, rgba(255,79,216,0.08) 40%, transparent 70%)",
      }}
      aria-hidden
    />
  );
}
