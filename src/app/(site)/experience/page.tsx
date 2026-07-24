import type { Metadata } from "next";
import { Experience } from "@/components/sections/Experience";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Experience",
  description: `Explore ${siteConfig.name}'s professional journey, experience, and certifications.`,
};

export default function ExperiencePage() {
  return (
    <PageWrapper>
      <Experience />
    </PageWrapper>
  );
}
