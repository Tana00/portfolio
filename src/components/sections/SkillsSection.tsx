"use client";

import { portfolioData } from "@/data/portfolio";

export function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <div className="w-full border-y border-white/5 bg-background-dark py-10 overflow-hidden relative">
      <div className="absolute left-0 top-0 z-10 h-full w-20 bg-linear-to-r from-background-dark to-transparent" />
      <div className="absolute right-0 top-0 z-10 h-full w-20 bg-linear-to-l from-background-dark to-transparent" />

      <div className="flex marquee-content w-[200%]">
        {/* First set of skills */}
        <div className="flex w-1/2 justify-around items-center gap-12 px-8">
          {skills.map((skill) => (
            <div
              key={`skill-1-${skill.name}`}
              className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-4xl">
                {skill.icon}
              </span>
              <span className="font-bold text-xl">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex w-1/2 justify-around items-center gap-12 px-8">
          {skills.map((skill) => (
            <div
              key={`skill-2-${skill.name}`}
              className="flex items-center gap-2 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <span className="material-symbols-outlined text-4xl">
                {skill.icon}
              </span>
              <span className="font-bold text-xl">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
