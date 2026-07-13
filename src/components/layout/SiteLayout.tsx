"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LoadingScreen } from "@/components/animations/LoadingScreen";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { MouseGlow } from "@/components/animations/MouseGlow";
import { Particles } from "@/components/animations/Particles";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <MouseGlow />
      <Particles />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
