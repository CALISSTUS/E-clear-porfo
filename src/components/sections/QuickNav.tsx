"use client";

import Link from "next/link";
import {
  User,
  Code2,
  FolderKanban,
  Briefcase,
  Mail,
  ArrowRight,
} from "lucide-react";
import { navItems } from "@/data/content";
import { cn } from "@/lib/cn";

const iconMap: Record<string, React.ElementType> = {
  "/": Code2,
  "/about": User,
  "/skills": Code2,
  "/projects": FolderKanban,
  "/services": Briefcase,
  "/contact": Mail,
};

const descriptions: Record<string, string> = {
  "/about": "My story & background",
  "/skills": "Tech stack & tools",
  "/projects": "Live websites I built",
  "/services": "What I can build for you",
  "/contact": "Let's work together",
};

export function QuickNav() {
  const items = navItems.filter((item) => item.href !== "/");

  return (
    <section className="relative z-10 px-6 pb-20 -mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {items.map((item) => {
            const Icon = iconMap[item.href] ?? ArrowRight;
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch
                className={cn(
                  "group glass rounded-2xl p-5 text-left transition-all duration-150",
                  "hover:border-purple-deep/50 hover:glow-purple hover:-translate-y-1",
                  "active:scale-[0.98] cursor-pointer"
                )}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-deep to-pink-neon flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-150">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-purple-neon transition-colors duration-150">
                  {item.label}
                </h3>
                <p className="text-white/40 text-xs leading-snug">
                  {descriptions[item.href]}
                </p>
                <ArrowRight className="w-4 h-4 text-purple-neon mt-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
