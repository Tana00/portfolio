"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";

export function Navbar() {
  const { name, resumeUrl } = portfolioData.personal;
  const { links } = portfolioData.navigation;

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/20 text-primary">
            <span className="material-symbols-outlined text-xl">code</span>
          </div>
          <span className="font-bold tracking-tight text-white">{name}</span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-text-dim transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Resume Button */}
        <Link
          href={resumeUrl}
          className="flex items-center gap-2 rounded border border-white/5 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[18px]">
            download
          </span>
          <span className="hidden sm:inline">Resume</span>
        </Link>
      </div>
    </nav>
  );
}
