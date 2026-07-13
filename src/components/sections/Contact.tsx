"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, Copy, Mail, Send } from "lucide-react";
import { siteConfig, socialLinks } from "@/data/content";
import type { ContactFormData } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { cn } from "@/lib/cn";

type FormErrors = Partial<Record<keyof ContactFormData, string>>;

function validateForm(data: ContactFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim()) errors.name = "Name is required";
  else if (data.name.trim().length < 2)
    errors.name = "Name must be at least 2 characters";

  if (!data.email.trim()) errors.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email";

  if (!data.subject.trim()) errors.subject = "Subject is required";

  if (!data.message.trim()) errors.message = "Message is required";
  else if (data.message.trim().length < 10)
    errors.message = "Message must be at least 10 characters";

  return errors;
}

export function Contact() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service) {
      setForm((prev) => ({
        ...prev,
        subject: prev.subject || `Inquiry: ${service}`,
      }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        // Fallback: open mailto if API not configured
        if (response.status === 503) {
          const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
            `From: ${form.name} (${form.email})\n\n${form.message}`
          )}`;
          window.location.href = mailtoLink;
          setIsSuccess(true);
          setForm({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setIsSuccess(false), 5000);
          return;
        }
        throw new Error(data.message || "Failed to send message.");
      }

      setIsSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Failed to send. Please email directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable */
    }
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-purple-deep/50 focus:bg-white/8 transition-all outline-none";

  return (
    <section
      id="contact"
      className="section-padding relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Contact"
          title="Let's Build Something Great"
          subtitle="Have a project in mind? Send a message — it goes directly to my inbox at gabrielgabriel9727@gmail.com."
        />

        <div className="grid lg:grid-cols-5 gap-8">
          <ScrollReveal direction="left" className="lg:col-span-2">
            <GlassCard strong className="p-8 h-full">
              <h3
                id="contact-heading"
                className="text-2xl font-bold text-white mb-6"
              >
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-white/50 text-sm mb-2">Email</p>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-purple-neon shrink-0" aria-hidden />
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white hover:text-purple-neon transition-colors break-all"
                    >
                      {siteConfig.email}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="p-2 rounded-lg glass hover:border-purple-deep/40 transition-colors shrink-0"
                      aria-label={copied ? "Email copied" : "Copy email address"}
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-white/60" />
                      )}
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-white/50 text-sm mb-4">Connect</p>
                  <SocialIcons links={socialLinks} size="lg" />
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/50 text-sm mb-1">Status</p>
                  <p className="text-green-400 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden />
                    {siteConfig.availability}
                  </p>
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.2} className="lg:col-span-3">
            <GlassCard className="p-8">
              <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                      Name <span className="text-pink-neon">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={cn(inputClasses, errors.name && "border-red-500/50")}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                      Email <span className="text-pink-neon">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={cn(inputClasses, errors.email && "border-red-500/50")}
                      placeholder="you@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-5">
                  <label htmlFor="subject" className="block text-sm text-white/60 mb-2">
                    Subject <span className="text-pink-neon">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className={cn(inputClasses, errors.subject && "border-red-500/50")}
                    placeholder="Project inquiry"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-red-400 text-xs mt-1" role="alert">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                    Message <span className="text-pink-neon">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={cn(
                      inputClasses,
                      "resize-none",
                      errors.message && "border-red-500/50"
                    )}
                    placeholder="Tell me about your project..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-red-400 text-xs mt-1" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4" aria-hidden />
                      Send Message
                    </>
                  )}
                </Button>

                {submitError && (
                  <motion.p
                    className="mt-4 text-red-400 text-sm"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="alert"
                  >
                    {submitError} — or email{" "}
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-purple-neon underline"
                    >
                      {siteConfig.email}
                    </a>{" "}
                    directly.
                  </motion.p>
                )}

                {isSuccess && (
                  <motion.p
                    className="mt-4 text-green-400 text-sm flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    role="status"
                  >
                    <Check className="w-4 h-4" aria-hidden />
                    Message sent! I&apos;ll get back to you at {siteConfig.email} soon.
                  </motion.p>
                )}
              </form>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
