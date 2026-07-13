import type { Metadata } from "next";
import { Skills } from "@/components/sections/Skills";
import { PageWrapper } from "@/components/layout/PageWrapper";

export const metadata: Metadata = {
  title: "Skills",
  description: "APP WEBSITE DEVELOPMENT CENTER — technologies and tools I use to build modern applications.",
};

export default function SkillsPage() {
  return (
    <PageWrapper>
      <Skills />
    </PageWrapper>
  );
}
