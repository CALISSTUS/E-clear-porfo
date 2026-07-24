export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  readingTime: string;
  date: string;
  featured: boolean;
  image: string;
}

export const articles: Article[] = [
  {
    id: "building-modern-web-apps",
    title: "Building Modern Web Applications with Next.js 15",
    excerpt: "Explore the latest features in Next.js 15 and how they can help you build faster, more efficient web applications.",
    content: "Next.js 15 brings exciting new features that revolutionize how we build web applications. From improved performance to enhanced developer experience, this version is a game-changer for modern web development.",
    category: "Development",
    tags: ["Next.js", "React", "Web Development"],
    readingTime: "8 min read",
    date: "2024-12-15",
    featured: true,
    image: "/images/articles/nextjs-15.jpg",
  },
  {
    id: "threejs-3d-experiences",
    title: "Creating Immersive 3D Experiences with Three.js",
    excerpt: "Learn how to create stunning 3D web experiences using Three.js and React Three Fiber for modern websites.",
    content: "Three.js has become the go-to library for creating 3D experiences on the web. Combined with React Three Fiber, it offers a powerful way to build immersive 3D interfaces that captivate users.",
    category: "3D Graphics",
    tags: ["Three.js", "React", "WebGL"],
    readingTime: "10 min read",
    date: "2024-12-10",
    featured: true,
    image: "/images/articles/threejs.jpg",
  },
  {
    id: "ai-integration-guide",
    title: "A Complete Guide to AI Integration in Web Apps",
    excerpt: "Discover how to integrate AI capabilities into your web applications using modern APIs and machine learning models.",
    content: "AI integration is transforming web development. From chatbots to content generation, learn how to leverage AI to create smarter, more responsive applications.",
    category: "AI",
    tags: ["AI", "Machine Learning", "API Integration"],
    readingTime: "12 min read",
    date: "2024-12-05",
    featured: false,
    image: "/images/articles/ai-integration.jpg",
  },
  {
    id: "typescript-best-practices",
    title: "TypeScript Best Practices for Large Scale Applications",
    excerpt: "Master TypeScript patterns and practices for building maintainable, scalable applications.",
    content: "TypeScript offers powerful type safety that can significantly improve code quality. Learn the best practices for using TypeScript effectively in large-scale projects.",
    category: "Development",
    tags: ["TypeScript", "Best Practices", "Architecture"],
    readingTime: "7 min read",
    date: "2024-11-28",
    featured: false,
    image: "/images/articles/typescript.jpg",
  },
  {
    id: "performance-optimization",
    title: "Web Performance Optimization Strategies",
    excerpt: "Essential techniques for optimizing web performance and improving user experience.",
    content: "Performance is crucial for user experience. Discover proven strategies for optimizing load times, rendering performance, and overall web application speed.",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Vitals"],
    readingTime: "9 min read",
    date: "2024-11-20",
    featured: false,
    image: "/images/articles/performance.jpg",
  },
];

export const articleCategories = [
  { id: "all", label: "All Articles" },
  { id: "Development", label: "Development" },
  { id: "3D Graphics", label: "3D Graphics" },
  { id: "AI", label: "AI" },
  { id: "Performance", label: "Performance" },
];
