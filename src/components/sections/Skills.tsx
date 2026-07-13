"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/cn";

const categoryLabels = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & AI",
  design: "Design",
};

const categoryColors = {
  frontend: "from-purple-deep to-purple-neon",
  backend: "from-blue-subtle to-purple-deep",
  tools: "from-pink-neon to-purple-deep",
  design: "from-pink-neon to-blue-subtle",
};

function SkillBar({ name, level, category }: (typeof skills)[0]) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    const bar = ref.current.querySelector(".skill-fill");
    if (!bar) return;

    gsap.fromTo(
      bar,
      { width: "0%" },
      { width: `${level}%`, duration: 1.2, ease: "power3.out" }
    );
  }, [isInView, level]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs text-white/40 font-mono">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <div
          className={cn(
            "skill-fill h-full rounded-full bg-gradient-to-r w-0",
            categoryColors[category]
          )}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const categories = ["frontend", "backend", "tools", "design"] as const;

  return (
    <section
      id="skills"
      className="section-padding relative"
      aria-labelledby="skills-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(108,59,255,0.08)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="Skills"
          title="APP WEBSITE DEVELOPMENT CENTER"
          subtitle="Technologies and tools I use to build fast, beautiful, and intelligent applications."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, catIndex) => {
            const categorySkills = skills.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <ScrollReveal key={category} delay={catIndex * 0.1}>
                <GlassCard className="p-6 md:p-8 h-full hover:border-purple-deep/30 transition-colors duration-300">
                  <h3
                    id={catIndex === 0 ? "skills-heading" : undefined}
                    className="text-lg font-semibold text-white mb-6 flex items-center gap-3"
                  >
                    <span
                      className={cn(
                        "w-1 h-6 rounded-full bg-gradient-to-b",
                        categoryColors[category]
                      )}
                      aria-hidden
                    />
                    {categoryLabels[category]}
                  </h3>
                  <div className="space-y-5">
                    {categorySkills.map((skill, i) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                      >
                        <SkillBar {...skill} />
                      </motion.div>
                    ))}
                  </div>
                </GlassCard>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {skills.map((skill) => (
              <Link
                key={skill.name}
                href="/contact"
                prefetch
                className="px-4 py-2 rounded-full glass text-sm text-white/70 hover:text-white hover:border-purple-deep/50 hover:glow-purple transition-all duration-150 cursor-pointer active:scale-95"
              >
                {skill.name}
              </Link>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
