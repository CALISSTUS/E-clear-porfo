import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "calisstus-fashion",
    title: "Calisstus Luxury Fashion",
    description:
      "Premium luxury fashion e-commerce — senator suits, agbada, ankara & streetwear for all ages.",
    longDescription:
      "A full-featured luxury fashion platform with shop, gallery, fashion shows, user accounts, wishlist, and order history. Built with a premium UI inspired by high-end designer brands.",
    category: "web",
    image: "/images/projects/calisstus-fashion.svg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://clothing-site-dx2s.vercel.app/",
    liveLabel: "Visit Website",
    featured: true,
  },
  {
    id: "nexus-dashboard",
    title: "Nexus AI Dashboard",
    description:
      "Real-time analytics dashboard with AI-powered insights and glassmorphic UI.",
    longDescription:
      "A production SaaS dashboard featuring live data visualization, AI-generated summaries, role-based access, and a fully responsive dark-mode interface built for speed.",
    category: "ai",
    image: "/images/projects/nexus-dashboard.svg",
    tech: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "OpenAI"],
    github: "https://github.com/gabrieldev/nexus-dashboard",
    live: "https://nexus-dashboard.vercel.app",
    featured: true,
  },
  {
    id: "shopwave",
    title: "ShopWave Commerce",
    description:
      "Modern e-commerce platform with cart, checkout, and admin panel.",
    longDescription:
      "Full-stack storefront with product filtering, Stripe-ready checkout flow, inventory management, and optimized Lighthouse scores across all pages.",
    category: "fullstack",
    image: "/images/projects/shopwave.svg",
    tech: ["Next.js", "React", "Node.js", "Supabase", "REST APIs"],
    github: "https://github.com/gabrieldev/shopwave",
    live: "https://shopwave.vercel.app",
    featured: true,
  },
  {
    id: "flowsync",
    title: "FlowSync Collaboration",
    description:
      "Real-time team workspace with live cursors and task boards.",
    longDescription:
      "Collaborative productivity app with WebSocket-powered presence, kanban boards, and seamless mobile experience for distributed teams.",
    category: "web",
    image: "/images/projects/flowsync.svg",
    tech: ["React", "TypeScript", "Node.js", "Tailwind CSS", "Vercel"],
    github: "https://github.com/gabrieldev/flowsync",
    live: "https://flowsync.vercel.app",
    featured: true,
  },
  {
    id: "autopipe",
    title: "AutoPipe DevOps",
    description:
      "CI/CD automation toolkit with visual pipeline builder.",
    longDescription:
      "Developer automation platform that streamlines deployments, environment management, and GitHub Actions workflows through an intuitive visual interface.",
    category: "fullstack",
    image: "/images/projects/autopipe.svg",
    tech: ["Next.js", "Python", "Git/GitHub", "REST APIs", "Vercel"],
    github: "https://github.com/gabrieldev/autopipe",
    live: "https://autopipe.vercel.app",
    featured: false,
  },
  {
    id: "mindforge",
    title: "MindForge AI Studio",
    description:
      "AI content generation studio with prompt templates and history.",
    longDescription:
      "Creative AI workspace featuring prompt engineering tools, output history, export options, and a premium dark UI designed for content creators.",
    category: "ai",
    image: "/images/projects/mindforge.svg",
    tech: ["Next.js", "TypeScript", "AI Tools", "Cursor AI", "Tailwind CSS"],
    github: "https://github.com/gabrieldev/mindforge",
    live: "https://mindforge.vercel.app",
    featured: false,
  },
  {
    id: "pixelcraft",
    title: "PixelCraft Portfolio",
    description:
      "Dynamic portfolio builder with theme customization engine.",
    longDescription:
      "No-code portfolio generator with drag-and-drop sections, live preview, SEO optimization, and one-click Vercel deployment for developers.",
    category: "web",
    image: "/images/projects/pixelcraft.svg",
    tech: ["React", "Next.js", "Lovable", "Tailwind CSS", "Vercel"],
    github: "https://github.com/gabrieldev/pixelcraft",
    live: "https://pixelcraft.vercel.app",
    featured: false,
  },
];

export const projectCategories = [
  { id: "all" as const, label: "All Projects" },
  { id: "web" as const, label: "Web Apps" },
  { id: "ai" as const, label: "AI Products" },
  { id: "fullstack" as const, label: "Full Stack" },
];
