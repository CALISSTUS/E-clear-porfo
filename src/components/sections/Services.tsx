"use client";

import { motion } from "framer-motion";
import { Code, Sparkles, Palette, Plug, Zap, Smartphone, TabletSmartphone } from "lucide-react";
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
              <ScrollReveal key={service.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <GlassCard className="p-8 h-full group hover:border-pink-neon/30 transition-all duration-500 hover:glow-pink">
                    <div
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-deep to-pink-neon flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      aria-hidden
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3
                      id={i === 0 ? "services-heading" : undefined}
                      className="text-xl font-bold text-white mb-3"
                    >
                      {service.title}
                    </h3>
                    <p className="text-white/60 leading-relaxed">
                      {service.description}
                    </p>
                  </GlassCard>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
