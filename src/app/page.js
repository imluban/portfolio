import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <FeaturedProjects />
      <CTA />
    </>
  );
}