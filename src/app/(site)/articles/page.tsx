import { Articles } from "@/components/sections/Articles";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { siteConfig } from "@/data/content";

export const metadata = {
  title: `Articles | ${siteConfig.name}`,
  description: "Latest insights, tutorials, and thoughts on web development, AI, and technology.",
};

export default function ArticlesPage() {
  return (
    <PageWrapper>
      <Articles />
    </PageWrapper>
  );
}
