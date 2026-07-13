"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { TypingEffect } from "@/components/animations/TypingEffect";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        video.muted = true;
        await video.play();
      } catch {
        /* autoplay blocked */
      }
    };

    playVideo();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={siteConfig.heroPoster}
          aria-hidden
        >
          <source src={siteConfig.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,59,255,0.15)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/70 mb-8"
        >
          <Sparkles className="w-4 h-4 text-pink-neon" aria-hidden />
          <Link
            href="/contact"
            prefetch
            className="hover:text-white transition-colors duration-150"
          >
            {siteConfig.availability}
          </Link>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <span className="gradient-text">{siteConfig.tagline}</span>
        </motion.h1>

        <motion.div
          className="text-lg md:text-xl text-white/60 mb-10 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          <TypingEffect
            words={siteConfig.typingRoles}
            className="text-purple-neon/90 font-mono"
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Button href="/projects" size="lg">
            View Projects
          </Button>
          <Button href="/contact" variant="outline" size="lg">
            Hire Me
          </Button>
        </motion.div>

        <SocialIcons links={socialLinks} className="justify-center" />
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
          className="text-white/40 hover:text-white"
          aria-label="Go to About page"
        >
          <ArrowDown className="w-6 h-6" aria-hidden />
        </Button>
      </motion.div>
    </section>
  );
}
