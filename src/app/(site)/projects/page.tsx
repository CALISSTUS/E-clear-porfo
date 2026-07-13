import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Projects",
  description: `Featured web projects and applications built by ${siteConfig.name}.`,
};

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <Projects />
    </PageWrapper>
  );
}
