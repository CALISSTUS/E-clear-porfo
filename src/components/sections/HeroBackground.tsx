"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const showcaseProjects = projects.filter((project) => project.featured).slice(0, 4);

const layout = [
  {
    className: "top-[8%] left-[-4%] md:left-[2%] w-[52vw] max-w-[340px] md:max-w-[420px]",
    rotate: -10,
    delay: 0,
    y: [0, -14, 0] as number[],
  },
  {
    className: "top-[12%] right-[-6%] md:right-[1%] w-[48vw] max-w-[320px] md:max-w-[380px]",
    rotate: 8,
    delay: 0.4,
    y: [0, 12, 0] as number[],
  },
  {
    className: "bottom-[14%] left-[-2%] md:left-[4%] w-[50vw] max-w-[330px] md:max-w-[400px]",
    rotate: 7,
    delay: 0.8,
    y: [0, 10, 0] as number[],
  },
  {
    className: "bottom-[10%] right-[-4%] md:right-[3%] w-[46vw] max-w-[310px] md:max-w-[370px]",
    rotate: -8,
    delay: 1.2,
    y: [0, -12, 0] as number[],
  },
];

export function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-background" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,59,255,0.12)_0%,transparent_55%)]" />

      {showcaseProjects.map((project, index) => {
        const slot = layout[index];
        if (!slot) return null;

        return (
          <motion.div
            key={project.id}
            className={`absolute ${slot.className}`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: slot.y,
            }}
            transition={{
              opacity: { duration: 0.8, delay: slot.delay },
              scale: { duration: 0.8, delay: slot.delay },
              y: {
                duration: 7 + index,
                repeat: Infinity,
                ease: "easeInOut",
                delay: slot.delay,
              },
            }}
            style={{ rotate: slot.rotate }}
          >
            <div className="rounded-xl overflow-hidden border border-white/15 shadow-[0_24px_80px_rgba(0,0,0,0.55)] bg-[#0c0c12]">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-white/[0.06] border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/90" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400/90" />
                <span className="ml-2 h-2 flex-1 max-w-[120px] rounded-full bg-white/10" />
              </div>
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 50vw, 420px"
                  priority={index < 2}
                />
              </div>
            </div>
          </motion.div>
        );
      })}

      <div className="absolute inset-0 bg-gradient-to-b from-background/35 via-background/62 to-background/95" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(5,5,8,0.72)_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(108,59,255,0.08)_0%,transparent_70%)]" />
    </div>
  );
}
