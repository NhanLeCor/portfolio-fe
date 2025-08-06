import { HeroSection } from "./HeroSection";
import { ProjectsSection } from "./ProjectSection";

export default function HomePage() {
  return (
    <div className="bg-[#f9faff]">
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}