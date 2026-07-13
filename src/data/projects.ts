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
    image: "/images/projects/calisstus-fashion.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://clothing-site-dx2s.vercel.app/",
    liveLabel: "Visit Website",
    featured: true,
  },
  {
    id: "gtabletmusic",
    title: "G Tablet Music",
    description:
      "Music artist platform showcasing releases, media, and brand presence for G Tablet Music.",
    longDescription:
      "A modern music website built to highlight tracks, visuals, and artist identity with a sleek, responsive layout optimized for fans and collaborators.",
    category: "web",
    image: "/images/projects/gtabletmusic.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://gtabletmusic.vercel.app/",
    liveLabel: "Visit Website",
    featured: true,
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
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://world-staffing-site.vercel.app/",
    liveLabel: "Visit Website",
    featured: true,
  },
  {
    id: "luxe-gems",
    title: "Luxe Gems Elegance",
    description:
      "Premium jewelry e-commerce — iced out chains, rings, bracelets & VVS diamond collections.",
    longDescription:
      "A luxury jewelry storefront featuring collections, best sellers, product pages, and a premium dark aesthetic built for high-end fashion and hip-hop jewelry culture.",
    category: "web",
    image: "/images/projects/luxe-gems.jpg",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    live: "https://luxe-gems-elegance.vercel.app/",
    liveLabel: "Visit Website",
    featured: true,
  },
];

export const projectCategories = [
  { id: "all" as const, label: "All Projects" },
  { id: "web" as const, label: "Web Apps" },
  { id: "ai" as const, label: "AI Products" },
  { id: "fullstack" as const, label: "Full Stack" },
];
