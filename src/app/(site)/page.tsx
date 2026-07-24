import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Articles } from "@/components/sections/Articles";
import { Contact } from "@/components/sections/Contact";
import { AIChatbot } from "@/components/ui/AIChatbot";

export default function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Services />
      <Projects />
      <Testimonials />
      <Articles />
      <Contact />
      <AIChatbot />
    </main>
  );
}
