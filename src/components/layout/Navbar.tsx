"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { SystemStatusDropdown } from "@/components/ui/SystemStatusDropdown";

export function Navbar() {
  const { name } = portfolioData.personal;
  const { links } = portfolioData.navigation;

  const [open, setOpen] = useState(false);

  // Close on Escape
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo and Brand */}
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary/20 text-primary">
            <Image src="/logo.png" alt="Logo" width={40} height={30} />
          </div>
          <span className="font-bold tracking-tight text-white text-sm sm:text-base">
            {name}
          </span>
        </Link>

        {/* Desktop Navigation Links */}
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

        {/* Right side actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <SystemStatusDropdown
            urlToAudit={process.env.NEXT_PUBLIC_APP_URL || ""}
            closeMobileMenu={() => setOpen(false)}
          />

          {/* Resume Button (only text hidden on xs) */}
          <Link
            href="/Happiness_Oyinlola_cv.pdf"
            className="hidden md:flex items-center gap-2 rounded border border-white/5 bg-white/5 px-3 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10 sm:px-4"
            rel="noopener noreferrer"
            download
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Resume</span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded border border-white/5 bg-white/5 p-2 text-white transition hover:bg-white/10 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu (dropdown panel) */}
      <div
        id="mobile-nav"
        className={`md:hidden overflow-hidden border-t border-white/5 bg-background-dark/95 backdrop-blur-md transition-[max-height,opacity] duration-200 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-3">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded px-3 py-2 text-sm font-medium text-text-dim transition hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-3 border-t border-white/5 pt-3">
            <Link
              href="/Happiness_Oyinlola_cv.pdf"
              onClick={() => setOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded border border-white/5 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white/10"
              rel="noopener noreferrer"
              download
            >
              <Download className="h-4 w-4" />
              <span>Download Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
