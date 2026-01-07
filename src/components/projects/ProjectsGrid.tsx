"use client";

import { useMemo, useState } from "react";
import type { Project } from "@/types/portfolio";
import { ProjectCard } from "@/components/ui/ProjectCard";
import {
  CaseStudyModal,
  type CaseStudyData,
} from "@/components/ui/CaseStudyModal";

type Props = {
  projects: Project[];
};

export function ProjectsGrid({ projects }: Props) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => p.category && set.add(p.category));
    return ["All Projects", ...Array.from(set)];
  }, [projects]);

  const [active, setActive] = useState(categories[0]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (active === "All Projects") return projects;
    return projects.filter((p) => p.category === active);
  }, [projects, active]);

  const caseStudyData = useMemo<CaseStudyData | null>(() => {
    if (!selected) return null;

    return {
      projectName: selected.title,
      subtitle: selected.subtitle ?? selected.title,
      heroImageUrl: selected.image?.src,
      heroBadgeLabel: selected.image?.caption,

      challengeTitle: "Challenge",
      challengeText:
        selected.caseStudy?.challengeText ??
        selected.description ??
        "Case study details coming soon.",

      techStack: (selected.tags ?? []).map((t) => ({
        icon: "code_blocks",
        label: t,
      })),

      achievementsTitle: "Key Achievements",
      achievements: selected.caseStudy?.achievements ?? [],
      images: selected.caseStudy?.images ?? [],

      closingText: selected.caseStudy?.closingText,
      liveUrl:
        selected.caseStudy?.liveUrl ?? selected.caseStudy?.liveUrl ?? "#",
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
    setSelected(null);
  }

  return (
    <>
      {/* Filters */}
      <div className="mb-12 flex flex-wrap gap-2">
        {categories.map((c) => {
          const isActive = c === active;
          return (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={[
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                isActive
                  ? "bg-white text-background-dark hover:bg-white/90"
                  : "bg-surface-dark border border-white/5 text-text-dim hover:text-white hover:border-white/20",
              ].join(" ")}
              type="button"
            >
              {c}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="grid"
            onOpenCaseStudy={openCaseStudy}
          />
        ))}
      </div>

      <CaseStudyModal
        open={open}
        onClose={closeCaseStudy}
        data={caseStudyData}
      />
    </>
  );
}
