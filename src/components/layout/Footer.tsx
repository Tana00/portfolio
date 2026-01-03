"use client";

import Link from "next/link";
import { portfolioData } from "@/data/portfolio";
import {
  LinkedInIcon,
  GitHubIcon,
  TwitterIcon,
} from "@/components/ui/SocialIcons";

export function Footer() {
  const { copyright, socials } = portfolioData.footer;

  const socialIconMap: Record<string, React.ReactNode> = {
    LinkedIn: <LinkedInIcon />,
    GitHub: <GitHubIcon />,
    Twitter: <TwitterIcon />,
  };

  return (
    <footer className="relative border-t border-white/5 bg-surface-dark py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-7xl border-t border-white/5 px-6 pt-8 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-text-dim">{copyright}</p>
            <div className="flex gap-6">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-text-dim transition-colors hover:text-primary"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  {socialIconMap[social.name] || (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
