import type { Metadata } from "next";
import { Services } from "@/components/sections/Services";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { siteConfig } from "@/data/content";

export const metadata: Metadata = {
  title: "Services",
  description: `Web development, app development, and mobile application services by ${siteConfig.name}.`,
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <Services />
    </PageWrapper>
  );
}
