"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Award, GraduationCap, Briefcase } from "lucide-react";

const typeIcons = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

const typeColors = {
  work: "from-cyan-deep to-cyan-neon",
  education: "from-blue-ocean to-cyan-deep",
  certification: "from-cyan-neon to-blue-subtle",
};

export function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative"
      aria-labelledby="experience-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,128,255,0.08)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="Experience"
          title="My Journey"
          subtitle="A timeline of my professional experience, education, and certifications."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-deep via-cyan-neon to-blue-ocean transform md:-translate-x-1/2" />

          <div className="space-y-8">
            {experience.map((item, index) => {
              const Icon = typeIcons[item.type];
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className={`relative flex flex-col md:flex-row gap-6 md:gap-12 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-deep to-cyan-neon transform -translate-x-1/2 shadow-[0_0_20px_rgba(0,255,255,0.5)] z-10" />

                    {/* Content */}
                    <div className={`ml-12 md:ml-0 flex-1 ${isEven ? 'md:text-right' : ''}`}>
                      <GlassCard className="p-6 hover:border-cyan-deep/30 transition-colors duration-300">
                        <div className={`flex items-center gap-3 mb-3 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${typeColors[item.type]} bg-opacity-20`}>
                            <Icon className="w-5 h-5 text-cyan-400" />
                          </div>
                          <span className="text-sm font-mono text-cyan-400">{item.year}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-lg font-semibold text-cyan-400/90 mb-3">{item.company}</p>
                        <p className="text-white/70 leading-relaxed">{item.description}</p>
                      </GlassCard>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
