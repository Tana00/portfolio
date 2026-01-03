import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { WorkSection } from "@/components/sections/WorkSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ChatWidget } from "@/components/ui/ChatWidget";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        <HeroSection />
        <SkillsSection />
        <ImpactSection />
        <WorkSection />
        <ContactSection />
      </main>

      <Footer />

      {/* Chat Widget - Fixed position */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
        <ChatWidget />
      </div>
    </div>
  );
}
