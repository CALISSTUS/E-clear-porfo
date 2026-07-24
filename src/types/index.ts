export type SocialLink = {
  name: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "whatsapp" | "email";
};

export type Skill = {
  name: string;
  category: "frontend" | "backend" | "tools" | "design";
  level: number;
};

export type ProjectCategory = "all" | "frontend" | "fullstack" | "ai" | "mobile" | "ui-design";

export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: Exclude<ProjectCategory, "all">;
  image: string;
  tech: string[];
  github?: string;
  live: string;
  liveLabel?: string;
  featured: boolean;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};
