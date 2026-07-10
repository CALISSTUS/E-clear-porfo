"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/content";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";

const sectionIds = navItems.map((item) => item.href.replace("#", ""));

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "glass-strong py-3 shadow-lg shadow-purple-deep/5" : "py-5 bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="text-xl font-bold gradient-text-purple tracking-tight"
          aria-label={`${siteConfig.name} - Home`}
        >
          {"</>"}
          <span className="text-white ml-1 text-sm md:text-base tracking-wide">
            {siteConfig.name}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1" role="list">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-purple-deep/20 border border-purple-deep/30 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-purple-deep to-pink-neon text-white hover:shadow-[0_0_20px_rgba(108,59,255,0.4)] transition-shadow"
        >
          Hire Me
        </a>

        <button
          type="button"
          className="md:hidden p-2 text-white/80 hover:text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-expanded={isMobileOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
        >
          {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            className="md:hidden fixed inset-0 top-[60px] glass-strong z-40"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col items-center gap-2 p-8" role="list">
              {navItems.map((item, i) => {
                const id = item.href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <a
                      href={item.href}
                      onClick={handleNavClick}
                      className={cn(
                        "block px-6 py-3 text-lg font-medium rounded-xl transition-colors",
                        isActive ? "text-purple-neon" : "text-white/70 hover:text-white"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-4"
              >
                <a
                  href="#contact"
                  onClick={handleNavClick}
                  className="inline-flex px-8 py-3 rounded-full bg-gradient-to-r from-purple-deep to-pink-neon text-white font-medium"
                >
                  Hire Me
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
