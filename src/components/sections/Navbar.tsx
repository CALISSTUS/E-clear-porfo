"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/data/content";
import { cn } from "@/lib/cn";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

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

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || pathname !== "/"
          ? "glass-strong py-3 shadow-lg shadow-cyan-500/10 backdrop-blur-xl"
          : "py-5 bg-transparent"
      )}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-6 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-3 hover:scale-105 transition-transform duration-200"
          aria-label={`${siteConfig.name} - Home`}
        >
          <img 
            src="/logo.svg" 
            alt="CALISSTUS Logo" 
            className="w-10 h-10"
          />
          <span className="text-xl font-bold gradient-text tracking-tight">
            {siteConfig.name}
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1" role="list">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative px-3 py-2 text-sm font-medium rounded-full transition-all duration-200 hover:scale-105 active:scale-95",
                    active ? "text-white" : "text-white/60 hover:text-white"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/30 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all duration-200 hover:scale-105 active:scale-95"
        >
          Let's Talk
        </Link>

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
            transition={{ duration: 0.15 }}
          >
            <ul className="flex flex-col items-center gap-2 p-8" role="list">
              {navItems.map((item, i) => {
                const active = isActive(item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={cn(
                        "block px-6 py-3 text-lg font-medium rounded-xl transition-all duration-200 hover:scale-105 hover:bg-cyan-500/10",
                        active ? "text-cyan-400" : "text-white/70 hover:text-white"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="mt-4"
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium"
                >
                  Let's Talk
                </Link>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
