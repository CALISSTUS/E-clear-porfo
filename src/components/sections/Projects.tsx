"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/Icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/cn";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group h-full"
    >
      <GlassCard className="overflow-hidden h-full flex flex-col hover:border-purple-deep/30 transition-all duration-500 hover:glow-purple">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block h-52 overflow-hidden"
          aria-label={`Open ${project.title} website`}
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
        </a>

        <div className="p-6 flex flex-col flex-1">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-bold text-white mb-2 group-hover:text-purple-neon transition-colors hover:underline"
          >
            {project.title}
          </a>
          <p className="text-white/60 text-sm leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs rounded-md bg-purple-deep/10 text-purple-neon border border-purple-deep/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass text-sm text-white/80 hover:text-white hover:border-purple-deep/40 transition-all"
                aria-label={`View ${project.title} on GitHub`}
              >
                <GitHubIcon className="w-4 h-4" />
                GitHub
              </a>
            )}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-purple-deep to-pink-neon text-sm text-white font-medium hover:shadow-[0_0_20px_rgba(108,59,255,0.4)] transition-shadow",
                project.github ? "flex-1" : "w-full"
              )}
              aria-label={`Open ${project.title} website`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden />
              {project.liveLabel ?? "Live Demo"}
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const featured = projects.filter((p) => p.featured);

  return (
    <section
      id="projects"
      className="section-padding relative"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Portfolio"
          title="Featured Projects"
          subtitle="A selection of web applications, AI products, and full-stack solutions built with modern technologies."
        />

        <ScrollReveal>
          <div className="mb-12 hidden md:block">
            <Swiper
              modules={[Autoplay, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                slideShadows: false,
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="!pb-12"
              aria-label="Featured projects carousel"
            >
              {featured.map((project) => (
                <SwiperSlide key={project.id} className="!w-[380px]">
                  <ProjectCard project={project} index={0} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div
            className="flex flex-wrap justify-center gap-2 mb-10"
            role="tablist"
            aria-label="Project categories"
          >
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-purple-deep to-pink-neon text-white glow-purple"
                    : "glass text-white/60 hover:text-white"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div
          id="projects-heading"
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
