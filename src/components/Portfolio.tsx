"use client";

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { LoadingScreen } from "@/components/animations/LoadingScreen";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { MouseGlow } from "@/components/animations/MouseGlow";
import { Particles } from "@/components/animations/Particles";
import { PageTransition } from "@/components/animations/PageTransition";

export function Portfolio() {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <MouseGlow />
      <Particles />
      <Navbar />
      <PageTransition>
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Services />
          <Contact />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
