import type { Metadata } from "next";
import { About } from "@/components/sections/About";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — ${siteConfig.title}.`,
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  );
}
