import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "calisstus-fashion",
    title: "Calisstus Luxury Fashion",
    description:
      "Premium luxury fashion e-commerce — senator suits, agbada, ankara & streetwear for all ages.",
    longDescription:
      "A full-featured luxury fashion platform with shop, gallery, fashion shows, user accounts, wishlist, and order history. Built with a premium UI inspired by high-end designer brands.",
    category: "frontend",
    image: "/images/projects/calisstus-fashion.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://clothing-site-dx2s.vercel.app/",
    liveLabel: "Visit Website",
    featured: true,
    github: "https://github.com/gabrieldev/calisstus-fashion",
  },
  {
    id: "gtabletmusic",
    title: "G Tablet Music",
    description:
      "Music artist platform showcasing releases, media, and brand presence for G Tablet Music.",
    longDescription:
      "A modern music website built to highlight tracks, visuals, and artist identity with a sleek, responsive layout optimized for fans and collaborators.",
    category: "frontend",
    image: "/images/projects/gtabletmusic.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://gtabletmusic.vercel.app/",
    liveLabel: "Visit Website",
    featured: true,
    github: "https://github.com/gabrieldev/gtabletmusic",
  },
  {
    id: "world-staffing",
    title: "A.C Sicat International Manpower",
    description:
      "Global recruitment agency connecting skilled workers to international career opportunities.",
    longDescription:
      "A professional staffing platform for international recruitment, manpower placement, training programs, and employer hiring — serving workers and companies worldwide.",
    category: "fullstack",
    image: "/images/projects/world-staffing.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Supabase"],
    live: "https://world-staffing-site.vercel.app/",
    liveLabel: "Visit Website",
    featured: true,
    github: "https://github.com/gabrieldev/world-staffing",
  },
  {
    id: "luxe-gems",
    title: "Luxe Gems Elegance",
    description:
      "Premium jewelry e-commerce — iced out chains, rings, bracelets & VVS diamond collections.",
    longDescription:
      "A luxury jewelry storefront featuring collections, best sellers, product pages, and a premium dark aesthetic built for high-end fashion and hip-hop jewelry culture.",
    category: "frontend",
    image: "/images/projects/luxe-gems.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://luxe-gems-elegance.vercel.app/",
    liveLabel: "Visit Website",
    featured: true,
    github: "https://github.com/gabrieldev/luxe-gems",
  },
  {
    id: "ai-assistant",
    title: "AI Chat Assistant",
    description:
      "Intelligent AI-powered chatbot with natural language processing and context awareness.",
    longDescription:
      "An advanced AI assistant built with modern machine learning capabilities, featuring real-time responses, context memory, and multi-language support for enhanced user interactions.",
    category: "ai",
    image: "/images/projects/ai-assistant.jpg",
    tech: ["Next.js", "React", "TypeScript", "OpenAI API", "Node.js"],
    live: "https://ai-assistant.vercel.app/",
    liveLabel: "Try Demo",
    featured: true,
    github: "https://github.com/gabrieldev/ai-assistant",
  },
  {
    id: "task-manager",
    title: "Pro Task Manager",
    description:
      "Full-stack task management application with real-time collaboration features.",
    longDescription:
      "A comprehensive productivity tool featuring task boards, team collaboration, real-time updates, file attachments, and advanced filtering capabilities for efficient project management.",
    category: "fullstack",
    image: "/images/projects/task-manager.jpg",
    tech: ["Next.js", "React", "TypeScript", "PostgreSQL", "Prisma", "Socket.io"],
    live: "https://task-manager.vercel.app/",
    liveLabel: "Live Demo",
    featured: false,
    github: "https://github.com/gabrieldev/task-manager",
  },
  {
    id: "mobile-app",
    title: "Fitness Tracker Mobile",
    description:
      "Cross-platform mobile application for tracking workouts, nutrition, and health metrics.",
    longDescription:
      "A React Native mobile app with comprehensive fitness tracking, workout plans, nutrition logging, progress charts, and social features for fitness enthusiasts.",
    category: "mobile",
    image: "/images/projects/mobile-app.jpg",
    tech: ["React Native", "TypeScript", "Firebase", "Expo"],
    live: "https://fitness-tracker.app/",
    liveLabel: "Download App",
    featured: false,
    github: "https://github.com/gabrieldev/fitness-tracker",
  },
  {
    id: "ui-kit",
    title: "Premium UI Component Kit",
    description:
      "Comprehensive UI component library with modern design system and accessibility features.",
    longDescription:
      "A fully accessible, customizable component library featuring glassmorphism effects, smooth animations, dark mode support, and comprehensive documentation for rapid development.",
    category: "ui-design",
    image: "/images/projects/ui-kit.jpg",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Storybook"],
    live: "https://ui-kit.vercel.app/",
    liveLabel: "View Docs",
    featured: false,
    github: "https://github.com/gabrieldev/ui-kit",
  },
];

export const projectCategories = [
  { id: "all" as const, label: "All" },
  { id: "frontend" as const, label: "Frontend" },
  { id: "fullstack" as const, label: "Full Stack" },
  { id: "ai" as const, label: "AI" },
  { id: "mobile" as const, label: "Mobile" },
  { id: "ui-design" as const, label: "UI Design" },
];
