"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import { Icon } from "../ui/Icon";

export function HeroSection() {
  const { hero } = portfolioData;

  return (
    <section className="relative flex min-h-[90vh] flex-col justify-center pt-24">
      {/* Grid background is expensive; only enable from sm and up */}
      <div className="swiss-grid absolute inset-0 hidden sm:block" />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-background-dark via-transparent to-background-dark" />

      {/* Glow blob: reduce blur + hide on mobile */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 hidden h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl opacity-60 sm:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            {hero.badge}
          </div>

          <h1 className="font-display text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-7xl md:text-8xl">
            {hero.heading}{" "}
            <span className="bg-linear-to-r from-primary to-blue-400 bg-clip-text text-transparent">
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
              {hero.cta[0].icon && (
                <Icon name={hero.cta[0].icon} className="h-4 w-4" />
              )}
            </Link>

            <a
              href={hero.cta[1].href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded border border-white/10 bg-surface-dark px-6 py-3.5 text-base font-medium text-white transition-colors hover:border-white/20 hover:bg-white/5"
            >
              {hero.cta[1].icon && (
                <Icon name={hero.cta[1].icon} className="h-4 w-4" />
              )}
              {hero.cta[1].label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
