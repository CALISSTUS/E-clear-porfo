"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <GlassCard className="p-8 h-full hover:border-cyan-deep/30 transition-all duration-300 hover:glow-cyan">
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-cyan-400 text-cyan-400" />
          ))}
        </div>

        <Quote className="w-8 h-8 text-cyan-400/30 mb-4" />

        <p className="text-white/80 leading-relaxed mb-6 italic">
          "{testimonial.content}"
        </p>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-deep to-cyan-neon flex items-center justify-center text-white font-bold text-lg">
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-white font-semibold">{testimonial.name}</h4>
            <p className="text-white/60 text-sm">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </GlassCard>
    </ScrollReveal>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-padding relative"
      aria-labelledby="testimonials-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(0,128,255,0.06)_0%,transparent_50%)]" />

      <div className="max-w-7xl mx-auto relative">
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          subtitle="Feedback from clients I've had the pleasure of working with."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
