"use client";

import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <div className="relative w-full overflow-hidden border-y border-white/5 bg-background-dark py-10">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-background-dark to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-background-dark to-transparent" />

      {/* Track */}
      <div className="marquee">
        {/* Set 1 */}
        <div className="flex items-center gap-12 px-8">
          {skills.map((skill) => (
            <div
              key={`skill-1-${skill.name}`}
              className="flex shrink-0 items-center gap-2 opacity-50 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <span className="material-symbols-outlined text-4xl">
                {skill.icon}
              </span>
              <span className="text-xl font-bold whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {/* Set 2 (duplicate) */}
        <div className="flex items-center gap-12 px-8">
          {skills.map((skill) => (
            <div
              key={`skill-2-${skill.name}`}
              className="flex shrink-0 items-center gap-2 opacity-50 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100"
            >
              <span className="material-symbols-outlined text-4xl">
                {skill.icon}
              </span>
              <span className="text-xl font-bold whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
