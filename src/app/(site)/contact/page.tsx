import type { Metadata } from "next";
import { Contact } from "@/components/sections/Contact";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} at ${siteConfig.email} for projects and collaborations.`,
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <Contact />
    </PageWrapper>
  );
}
