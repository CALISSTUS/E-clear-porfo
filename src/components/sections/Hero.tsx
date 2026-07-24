"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { RotatingLogo } from "@/components/ui/RotatingLogo";
import EarthBackground from "@/components/animations/EarthBackground";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <EarthBackground />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-28 md:py-32">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <RotatingLogo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan-400" aria-hidden />
            <Link
              href="/contact"
              className="hover:text-white transition-colors duration-200"
            >
              {siteConfig.availability}
            </Link>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            <span className="gradient-text">{siteConfig.name}</span>
          </motion.h1>

          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            Creative Developer
          </motion.h2>

          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-cyan-400/90 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.45 }}
          >
            Full-Stack Engineer
          </motion.h3>

          <motion.p
            className="text-lg md:text-xl text-white/60 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Building fast, beautiful, scalable digital experiences with modern technologies and exceptional user experiences.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <Button href="/projects" size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:scale-105 transition-all duration-200">
              View Projects
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-200">
              Contact Me
            </Button>
            <Button href={siteConfig.cvUrl} variant="outline" size="lg" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:scale-105 transition-all duration-200">
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>

          <SocialIcons links={socialLinks} className="justify-center" />
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 1.2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Button
          href="/about"
          variant="ghost"
          size="sm"
          className="text-white/40 hover:text-white hover:scale-110 transition-all duration-200"
          aria-label="Scroll to explore"
        >
          <ArrowDown className="w-6 h-6" aria-hidden />
        </Button>
      </motion.div>
    </section>
  );
}
