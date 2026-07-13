"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Code, Sparkles, Palette, Plug, Zap, Smartphone, TabletSmartphone, ArrowRight } from "lucide-react";
import { services } from "@/data/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const iconMap = {
  "tablet-smartphone": TabletSmartphone,
  smartphone: Smartphone,
  code: Code,
  sparkles: Sparkles,
  palette: Palette,
  plug: Plug,
  zap: Zap,
};

export function Services() {
  return (
    <section
      id="services"
      className="section-padding relative"
      aria-labelledby="services-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(255,79,216,0.06)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="Services"
          title="What I Can Build For You"
          subtitle="End-to-end development services from concept to deployment."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Code;
            return (
              <ScrollReveal key={service.id} delay={i * 0.05}>
                <Link
                  href={`/contact?service=${encodeURIComponent(service.title)}`}
                  prefetch
                  className="block h-full group cursor-pointer"
                >
                  <GlassCard className="p-8 h-full hover:border-pink-neon/40 transition-all duration-150 hover:glow-pink hover:-translate-y-1 active:scale-[0.99]">
                    <div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-deep to-pink-neon flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-150"
                      aria-hidden
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3
                      id={i === 0 ? "services-heading" : undefined}
                      className="text-xl font-bold text-white mb-3 group-hover:text-pink-neon transition-colors duration-150"
                    >
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-purple-neon font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-150">
                      Get started <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                    </span>
                  </GlassCard>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
