import { Testimonials } from "@/components/sections/Testimonials";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { siteConfig } from "@/data/content";

export const metadata = {
  title: `Testimonials | ${siteConfig.name}`,
  description: "What clients say about working with CALISSTUS.",
};

export default function TestimonialsPage() {
  return (
    <PageWrapper>
      <Testimonials />
    </PageWrapper>
  );
}
