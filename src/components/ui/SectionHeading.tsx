"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  label,
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-purple-neon mb-3">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-white/60 text-lg leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
