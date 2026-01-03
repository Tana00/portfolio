"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  const { hero } = portfolioData;
  return (
    <section className="swiss-grid relative flex min-h-[90vh] flex-col justify-center pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-transparent to-background-dark" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
            <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {hero.badge}
          </div>

          <h1 className="font-display text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl md:text-8xl">
            {hero.heading}{" "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              {hero.headingGradient}
            </span>
            {hero.subheading}
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-dim sm:text-xl">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href={hero.cta[0].href}
              className="flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:-translate-y-[2px]"
            >
              {hero.cta[0].label}
              <span className="material-symbols-outlined text-sm">
                {hero.cta[0].icon}
              </span>
            </Link>

            <a
              href={hero.cta[1].href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded border border-white/10 bg-surface-dark px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-white/20 hover:bg-white/5"
            >
              <span className="material-symbols-outlined text-xl">
                {hero.cta[1].icon}
              </span>
              {hero.cta[1].label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
