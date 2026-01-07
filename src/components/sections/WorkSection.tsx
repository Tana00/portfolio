"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import {
  CaseStudyModal,
  type CaseStudyData,
} from "@/components/ui/CaseStudyModal";
import type { Project } from "@/types/portfolio";
import Link from "next/link";

export function WorkSection() {
  const { projects } = portfolioData;

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const caseStudyData = useMemo<CaseStudyData | null>(() => {
    if (!selected) return null;

    // ✅ Map existing Project model into the modal data.
    return {
      projectName: selected.title,
      subtitle: selected.subtitle ?? selected.title,
      heroImageUrl: selected.image?.src,
      heroBadgeLabel: selected.image?.caption,

      challengeText:
        selected.caseStudy?.challengeText ??
        selected.description ??
        "Case study details coming soon.",

      techStack: (selected.tags ?? []).map((t) => ({
        icon: "code_blocks",
        label: t,
      })),
      images: selected.caseStudy?.images ?? [],
      achievements: selected.caseStudy?.achievements ?? [
        { value: "30%", label: "Conversion Growth", trendIcon: "arrow_up" },
        { value: "90%", label: "Error Reduction", trendIcon: "arrow_down" },
      ],

      closingText: selected.caseStudy?.closingText,
      liveUrl: selected.caseStudy?.liveUrl ?? "#",
      btnLabel: selected.caseStudy?.btnLabel,
      architecture: selected.caseStudy?.architecture,
    };
  }, [selected]);

  function openCaseStudy(project: Project) {
    setSelected(project);
    setOpen(true);
  }

  function closeCaseStudy() {
    setOpen(false);
    // optional: clear after close animation; for now just clear immediately
    setSelected(null);
  }

  return (
    <>
      <section
        className="mx-auto max-w-7xl px-6 py-24 lg:px-8"
        id="work"
        aria-labelledby="work-heading"
      >
        <div className="mb-16">
          <h2
            id="work-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Selected Works
          </h2>
          <p className="mt-4 text-text-dim max-w-2xl">
            High-fidelity engineering showcasing performance and design system
            integration.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              imagePosition={index % 2 === 0 ? "left" : "right"}
              onOpenCaseStudy={openCaseStudy}
              variant="feature"
            />
          ))}
        </div>

        <div className="mt-20 flex w-full justify-center">
          <Link
            className="group flex items-center gap-2 rounded border border-accent-blue/30 bg-accent-blue/10 px-10 py-4 text-sm font-semibold text-accent-blue backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-accent-blue hover:text-white hover:shadow-lg hover:shadow-accent-blue/25"
            href="/projects"
          >
            <span>View All Projects</span>
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>

      <CaseStudyModal
        open={open}
        onClose={closeCaseStudy}
        data={caseStudyData}
      />
    </>
  );
}
