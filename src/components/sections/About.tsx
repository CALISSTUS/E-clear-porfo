"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Parallax } from "@/components/animations/Parallax";

export function About() {
  return (
    <section
      id="about"
      className="section-padding relative"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="About Me"
          title="Turning Ideas Into Reality"
          subtitle={siteConfig.about.headline}
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <Parallax speed={0.2}>
            <div className="relative flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80">
                <div className="absolute inset-0 rounded-full neon-border animate-pulse" />
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Image
                    src={siteConfig.profileImage}
                    alt={`${siteConfig.name} profile photo`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 288px, 320px"
                    loading="lazy"
                  />
                </motion.div>
                <div className="absolute -bottom-2 -right-2 glass px-4 py-2 rounded-full text-sm flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden />
                  Available
                </div>
              </div>
            </div>
            </Parallax>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2}>
            <GlassCard strong className="p-8 md:p-10">
              <div className="flex items-center gap-2 text-white/50 text-sm mb-6">
                <MapPin className="w-4 h-4" aria-hidden />
                {siteConfig.location}
              </div>

              <h3 id="about-heading" className="text-2xl font-bold text-white mb-6">
                Hello, I'm Gabriel Gabriel
              </h3>

              <div className="space-y-4 text-white/70 leading-relaxed">
                {siteConfig.about.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-white/10">
                {siteConfig.about.stats.map((stat) => (
                  <Link
                    key={stat.label}
                    href="/projects"
                    prefetch
                    className="text-center group cursor-pointer hover:scale-105 transition-transform duration-150"
                  >
                    <div className="text-2xl md:text-3xl font-bold gradient-text-cyan group-hover:text-cyan-400 transition-colors duration-150">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-white/50 mt-1 group-hover:text-white/70 transition-colors duration-150">
                      {stat.label}
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/projects" variant="secondary" size="md">
                  View Projects
                </Button>
                <Button href="/contact" size="md">
                  Hire Me
                </Button>
                <a
                  href={siteConfig.cvUrl}
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/10 border border-white/10 transition-all duration-150 active:scale-[0.97] cursor-pointer"
                >
                  Download CV
                </a>
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
