import type { NavItem, Service, SocialLink } from "@/types";

export const siteConfig = {
  name: "GABRIEL CALISSTUS GABRIEL",
  title: "Backend Frontend Engineer Full-Stack Developer",
  tagline: "Building digital experience that matter's with modern technologies web solutions for Business",
  email: "gabrielgabriel9727@gmail.com",
  location: "Remote · Worldwide",
  availability: "Open to freelance & full-time",
  cvUrl: "/cv/gabriel-m-resume.pdf",
  heroVideo:
    "https://videos.pexels.com/video-files/7578612/7578612-uhd_2560_1440_25fps.mp4",
  heroPoster: "/images/hero-poster.svg",
  profileImage: "/RAIN.jpg",
  typingRoles: [
    "Creative Developer",
    "Full-Stack Engineer",
    "UI/UX Designer",
    "Problem Solver",
  ],
  about: {
    headline: "Crafting Modern Digital Experiences",
    paragraphs: [
      "Hello, I'm Gabriel Gabriel, professionally known as CALISSTUS. I am a passionate Full-Stack Developer who specializes in building beautiful, modern, scalable, and high-performance web applications.",
      "I enjoy solving real-world problems with technology, creating immersive user experiences, and continuously learning modern tools and frameworks to deliver exceptional results.",
      "From responsive interfaces to scalable backends, I focus on clean code, performance optimization, and creating premium user experiences that make a lasting impact.",
    ],
    stats: [
      { label: "Projects Completed", value: "15+" },
      { label: "Years of Experience", value: "5+" },
      { label: "Happy Clients", value: "20+" },
      { label: "Hours Coded", value: "2k+" },
    ],
  },
  seo: {
    title: "CALISSTUS | Creative Developer & Full-Stack Engineer",
    description:
      "Premium portfolio of CALISSTUS, a Creative Developer and Full-Stack Engineer specializing in Next.js, React, TypeScript, Three.js, and building exceptional digital experiences.",
    keywords: [
      "Full Stack Developer",
      "Creative Developer",
      "Next.js Developer",
      "React Developer",
      "Three.js",
      "TypeScript",
      "Portfolio",
    ],
    url: "https://calisstus.dev",
    ogImage: "/images/og-image.svg",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Experience", href: "/experience" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Articles", href: "/articles" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
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
    id: "frontend-dev",
    title: "Frontend Development",
    description:
      "Building responsive, interactive, and performant user interfaces with React, Next.js, and modern CSS frameworks.",
    icon: "layout",
  },
  {
    id: "backend-dev",
    title: "Backend Development",
    description:
      "Creating robust server-side applications with Node.js, Express, and scalable database architectures.",
    icon: "server",
  },
  {
    id: "fullstack-dev",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development from concept to deployment with modern technologies and best practices.",
    icon: "layers",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful user experiences with focus on accessibility, usability, and visual aesthetics.",
    icon: "palette",
  },
  {
    id: "api-dev",
    title: "API Development",
    description:
      "Building RESTful APIs and integrating third-party services for seamless data exchange and functionality.",
    icon: "plug",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    description:
      "Implementing AI-powered features and machine learning models to enhance application intelligence and automation.",
    icon: "sparkles",
  },
  {
    id: "optimization",
    title: "Website Optimization",
    description:
      "Improving website performance, SEO, and loading speeds for better user experience and search rankings.",
    icon: "zap",
  },
  {
    id: "portfolio-dev",
    title: "Portfolio Development",
    description:
      "Creating stunning personal portfolios and professional websites that showcase your work and skills effectively.",
    icon: "briefcase",
  },
];
