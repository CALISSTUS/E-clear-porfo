import type { NavItem, Service, SocialLink } from "@/types";

export const siteConfig = {
  name: "GABRIEL TABLET",
  title: "Vibe Coding Full Stack Developer",
  tagline: "Building Digital Experiences That Matter",
  email: "gabrielgabriel9727@gmail.com",
  location: "Remote · Worldwide",
  availability: "Open to freelance & full-time",
  cvUrl: "/cv/gabriel-m-resume.pdf",
  heroVideo:
    "https://videos.pexels.com/video-files/7578612/7578612-uhd_2560_1440_25fps.mp4",
  heroPoster: "/images/hero-poster.svg",
  profileImage: "/images/profile.svg",
  typingRoles: [
    "Full Stack Developer",
    "AI Engineer",
    "UI/UX Enthusiast",
    "Problem Solver",
  ],
  about: {
    headline: "Crafting the future with code, AI, and intentional design.",
    paragraphs: [
      "I'm a Vibe Coding Full Stack Developer who builds fast, accessible, and visually striking web applications. I combine modern frameworks with AI-assisted workflows to ship production-ready products at exceptional velocity.",
      "From responsive interfaces to scalable backends and Supabase-powered architectures, I focus on clean code, performance, and experiences that feel premium from the first interaction.",
      "When I'm not shipping features, I'm exploring new AI tools, refining UI systems, and pushing the boundaries of what solo developers can build with Cursor, Lovable, and a relentless builder mindset.",
    ],
    stats: [
      { label: "Projects Delivered", value: "24+" },
      { label: "Years Coding", value: "3+" },
      { label: "Client Satisfaction", value: "100%" },
    ],
  },
  seo: {
    title: "GABRIEL TABLET | Vibe Coding Full Stack Developer",
    description:
      "Premium portfolio of GABRIEL TABLET, a Vibe Coding Full Stack Developer specializing in Next.js, React, TypeScript, AI-powered apps, and futuristic UI/UX.",
    keywords: [
      "Full Stack Developer",
      "Vibe Coding",
      "Next.js Developer",
      "React Developer",
      "AI Engineer",
      "TypeScript",
      "Portfolio",
    ],
    url: "https://gabrieldev.com",
    ogImage: "/images/og-image.svg",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/gabrieldev",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/gabrieldev",
    icon: "linkedin",
  },
  {
    name: "X",
    href: "https://x.com/gabrieldev",
    icon: "x",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/1234567890",
    icon: "whatsapp",
  },
  {
    name: "Email",
    href: "mailto:gabrielgabriel9727@gmail.com",
    icon: "email",
  },
];

export const services: Service[] = [
  {
    id: "mobile-app",
    title: "MOBILE APPLICATION",
    description:
      "iOS and Android mobile applications with intuitive UI, offline support, push notifications, and seamless performance on every device.",
    icon: "tablet-smartphone",
  },
  {
    id: "app-dev",
    title: "APP DEVELOPMENT",
    description:
      "Native and cross-platform mobile apps — from concept to App Store and Play Store deployment.",
    icon: "smartphone",
  },
  {
    id: "web-dev",
    title: "Web Development",
    description:
      "High-performance, responsive websites and web apps built with Next.js, React, and Tailwind CSS — optimized for speed and conversion.",
    icon: "code",
  },
  {
    id: "ai-apps",
    title: "AI-Powered Applications",
    description:
      "Intelligent products that integrate AI workflows, automation, and modern tooling to deliver smarter user experiences.",
    icon: "sparkles",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Futuristic, glassmorphic interfaces with micro-interactions, accessibility-first patterns, and premium visual polish.",
    icon: "palette",
  },
  {
    id: "api",
    title: "API Integration",
    description:
      "Robust REST API design, third-party integrations, and Supabase backends that scale with your product.",
    icon: "plug",
  },
  {
    id: "automation",
    title: "Automation",
    description:
      "Workflow automation, CI/CD pipelines, and AI-assisted development pipelines that accelerate delivery.",
    icon: "zap",
  },
];
