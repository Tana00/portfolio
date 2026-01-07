import { portfolioData } from "@/data/portfolio";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "All Projects | Happiness Oyinlola",
  description:
    "A curated archive of projects bridging sophisticated design and high-performance engineering.",
};

export default function ProjectsPage() {
  const { projects } = portfolioData;

  return (
    <main className="flex-1">
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-8 swiss-grid">
        <div className="absolute top-0 left-0 h-125 w-full bg-linear-to-b from-primary/5 to-transparent pointer-events-none" />

        {/* Heading */}
        <header className="mb-10 max-w-2xl">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Selected Works
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-dim">
            A curated archive of projects bridging sophisticated design and
            high-performance engineering.
          </p>
        </header>

        {/* Grid + filters + modal */}
        <ProjectsGrid projects={projects} />
      </div>
      <ContactSection />
    </main>
  );
}
