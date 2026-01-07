import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <SkillsSection />
      <ImpactSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
