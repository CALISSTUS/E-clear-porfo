"use client";

import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import type { SocialLink } from "@/types";
import { cn } from "@/lib/cn";
import { GitHubIcon, LinkedInIcon, XIcon, WhatsAppIcon } from "@/components/ui/Icons";

const iconMap = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  whatsapp: WhatsAppIcon,
  email: Mail,
};

interface SocialIconsProps {
  links: SocialLink[];
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "w-9 h-9",
  md: "w-11 h-11",
  lg: "w-13 h-13",
};

const iconSizeMap = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function SocialIcons({ links, size = "md", className }: SocialIconsProps) {
  return (
    <div className={cn("flex items-center gap-3", className)} role="list">
      {links.map((link, i) => {
        const Icon = iconMap[link.icon];
        return (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${link.name}`}
            role="listitem"
            className={cn(
              "glass rounded-full flex items-center justify-center text-white/70 hover:text-white hover:border-purple-deep/50 transition-all duration-300 hover:glow-purple",
              sizeMap[size]
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon className={iconSizeMap[size]} />
          </motion.a>
        );
      })}
    </div>
  );
}
