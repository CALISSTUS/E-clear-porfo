"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Search } from "lucide-react";
import { articles, articleCategories } from "@/data/articles";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/cn";

function ArticleCard({ article, index }: { article: typeof articles[0]; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group h-full"
    >
      <Link href={`/articles/${article.id}`} className="block h-full">
        <GlassCard className="overflow-hidden h-full flex flex-col hover:border-cyan-deep/30 transition-all duration-300 hover:glow-cyan">
          <div className="relative h-48 overflow-hidden">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              loading="lazy"
            />
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-cyan-deep/90 text-white text-xs font-medium backdrop-blur-sm">
              {article.category}
            </div>
          </div>

          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-4 text-xs text-white/50 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {new Date(article.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readingTime}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
              {article.title}
            </h3>

            <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {article.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs rounded-md bg-cyan-deep/10 text-cyan-400 border border-cyan-deep/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center gap-1 text-sm text-cyan-400 font-medium group-hover:gap-2 transition-all">
              Read more <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </GlassCard>
      </Link>
    </motion.article>
  );
}

export function Articles() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = articles.filter((article) => {
    const matchesCategory = activeCategory === "all" || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featured = articles.filter((a) => a.featured);

  return (
    <section
      id="articles"
      className="section-padding relative"
      aria-labelledby="articles-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,128,255,0.06)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="Articles"
          title="Latest Insights"
          subtitle="Thoughts, tutorials, and insights on web development, AI, and technology."
        />

        {/* Search bar */}
        <ScrollReveal delay={0.1}>
          <div className="mb-8 max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-4 py-3 rounded-xl glass border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-cyan-500/50 transition-colors"
              />
            </div>
          </div>
        </ScrollReveal>

        {/* Category filter */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {articleCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-deep to-blue-ocean text-white glow-cyan"
                    : "glass text-white/60 hover:text-white"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Featured articles */}
        {searchQuery === "" && activeCategory === "all" && featured.length > 0 && (
          <ScrollReveal delay={0.2}>
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featured.map((article, i) => (
                  <ArticleCard key={article.id} article={article} index={i} />
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* All articles */}
        <ScrollReveal delay={0.25}>
          <motion.div
            id="articles-heading"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No articles found matching your criteria.</p>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
