"use client";

import { useEffect, useId } from "react";
import Image from "next/image";

type TechStackItem = { icon: string; label: string };
type Achievement = {
  value: string;
  label: string;
  trendIcon?: "arrow_upward" | "arrow_downward";
  trendColorClass?: string;
};

export type CaseStudyData = {
  projectName: string;
  subtitle?: string;
  heroImageUrl: string;
  heroBadgeLabel?: string;

  challengeTitle?: string;
  challengeText: string;

  techStack?: TechStackItem[];

  achievementsTitle?: string;
  achievements?: Achievement[];
  images: Array<{
    src: string;
    alt: string;
    caption: string;
  }>;
  closingText?: string;
  liveUrl?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  data: CaseStudyData | null;
};

export function CaseStudyModal({ open, onClose, data }: Props) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open || !data) return null;

  console.log("CaseStudyModal data:", data);

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-background-dark/60 backdrop-blur-md p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-background-dark/90 shadow-2xl ring-1 ring-white/10 lg:flex lg:h-[85vh]">
        {/* LEFT */}
        <div className="relative w-full overflow-y-auto bg-black/20 p-6 lg:w-3/5 border-r border-white/5">
          <div className="flex flex-col gap-6">
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 shadow-lg">
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${data.heroImageUrl}')` }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              {data.heroBadgeLabel ? (
                <div className="absolute bottom-4 left-4">
                  <span className="rounded bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm border border-white/10">
                    {data.heroBadgeLabel}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {data.images.map((img, index) => (
                <figure
                  key={index}
                  className="overflow-hidden rounded-xl border border-white/10 bg-surface-dark p-4"
                >
                  {img.caption && (
                    <figcaption className="mb-2 text-xs font-medium text-text-dim">
                      {img.caption}
                    </figcaption>
                  )}
                  <div className="h-32 w-full rounded bg-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full object-cover"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex h-full w-full flex-col bg-surface-dark lg:w-2/5">
          <div className="flex items-center justify-between border-b border-white/10 p-6 backdrop-blur-md">
            <div>
              <h2 id={titleId} className="text-2xl font-bold text-white">
                {data.projectName}
              </h2>
              {data.subtitle ? (
                <p className="text-sm text-text-dim">{data.subtitle}</p>
              ) : null}
            </div>

            <button
              className="rounded-full p-2 text-text-dim transition-colors hover:bg-white/10 hover:text-white"
              onClick={onClose}
              type="button"
              aria-label="Close"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            <div className="mb-8">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                {data.challengeTitle ?? "The Challenge"}
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">
                {data.challengeText}
              </p>
            </div>

            {data.techStack?.length ? (
              <div className="mb-8">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-dim">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.techStack.map((t) => (
                    <span
                      key={t.label}
                      className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white transition-colors hover:bg-white/10"
                    >
                      <span className="material-symbols-outlined mr-1.5 text-sm">
                        {t.icon}
                      </span>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}

            {data.achievements?.length ? (
              <div className="mb-8 rounded-xl bg-background-dark/50 border border-white/5 p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-dim">
                  {data.achievementsTitle ?? "Key Achievements"}
                </h3>

                <div className="grid grid-cols-2 gap-6">
                  {data.achievements.map((a) => (
                    <div key={a.label}>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-white">
                          {a.value}
                        </span>
                        {a.trendIcon ? (
                          <span
                            className={`material-symbols-outlined text-sm ${
                              a.trendColorClass ?? "text-green-500"
                            }`}
                          >
                            {a.trendIcon}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-xs text-text-dim">{a.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {data.closingText ? (
              <p className="text-sm leading-relaxed text-text-dim">
                {data.closingText}
              </p>
            ) : null}
          </div>

          <div className="border-t border-white/10 p-6 backdrop-blur-md">
            <a
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 hover:shadow-blue-500/40"
              href={data.liveUrl}
              target={data.liveUrl ? "_blank" : undefined}
              rel={data.liveUrl ? "noreferrer" : undefined}
            >
              Visit Live Site
              <span className="material-symbols-outlined text-lg">
                open_in_new
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
