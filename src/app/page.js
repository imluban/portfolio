import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import CTA from "@/components/sections/CTA";
import GithubSection from "@/components/sections/GithubSection";
import GithubProfile from "@/components/sections/GithubProfile";
import FounderStatement from "@/components/sections/FounderStatement";
import CurrentFocus from "@/components/sections/CurrentFocus";
import TechStack from "@/components/sections/TechStack";
import LiquidDivider from "@/components/sections/LiquidDivider";
import MatrixProgress from "@/components/ui/MatrixProgress";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function HomePage() {
  return (
    <>
      <MatrixProgress />
      <ScrollToTop />
      <Hero />
      <About />
      <FounderStatement />
      <CurrentFocus />
      <Experience />
      <LiquidDivider />
      <FeaturedProjects />
      <TechStack />
      <GithubProfile />
      <GithubSection />
      <CTA />
    </>
  );
}