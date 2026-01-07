"use client";

import { useState, useEffect, useId } from "react";
import { ExternalLink, LayoutDashboard, Network, X } from "lucide-react";
import { Icon } from "./Icon";
import { IconName } from "@/components/Icons";
import { ArchitectureData } from "@/types/portfolio";
import { CaseStudyArchitecture } from "./CaseStudyArchitecture";

type TechStackItem = { icon: IconName; label: string };
type Achievement = {
  value: string;
  label: string;
  trendIcon?: IconName;
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
  btnLabel?: string;
  architecture?: ArchitectureData;
};

type Props = {
  open: boolean;
  onClose: () => void;
  data: CaseStudyData | null;
};

export function CaseStudyModal({ open, onClose, data }: Props) {
  const titleId = useId();
  const [projectView, setProjectView] = useState<"ui" | "architecture">("ui");

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

  return (
    <div
      className="fixed overflow-auto inset-0 z-50 flex items-center justify-center bg-background-dark/60 backdrop-blur-md p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl overflow-auto xl:overflow-hidden rounded-2xl bg-background-dark/90 shadow-2xl ring-1 ring-white/10 xl:flex h-full xl:h-[90vh]">
        {/* LEFT */}
        <div className="relative w-full overflow-y-auto bg-black/20 p-6 xl:w-3/5 border-r border-white/5">
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-text-dim">
                  Project View
                </span>
              </div>
              <div className="flex items-center rounded-lg border border-white/10 bg-surface-dark p-1">
                <button
                  onClick={() => setProjectView("ui")}
                  className={`flex items-center gap-2 rounded px-3 py-1.5 text-xs font-medium text-white ${
                    projectView === "ui" ? "bg-white/10" : "bg-transparent"
                  } transition-colors shadow-sm cursor-pointer`}
                >
                  <LayoutDashboard className="w-3.5 h-3.5" />
                  UI
                </button>
                {data.architecture ? (
                  <button
                    onClick={() => setProjectView("architecture")}
                    className={`flex items-center gap-2 rounded px-3 py-1.5 text-xs ${
                      projectView === "architecture"
                        ? "bg-white/10 text-white"
                        : "bg-transparent"
                    } font-medium text-text-dim hover:text-white transition-colors cursor-pointer`}
                  >
                    <Network className="w-3.5 h-3.5" />
                    Architecture
                  </button>
                ) : null}
              </div>
            </div>

            {projectView === "ui" ? (
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
            ) : data.architecture ? (
              <CaseStudyArchitecture arch={data.architecture} />
            ) : null}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div className="relative h-40 w-full overflow-hidden rounded bg-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-size-[250%_250%,100%_100%]">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex xl:h-full w-full flex-col bg-surface-dark xl:w-2/5">
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
              <X size={26} />
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
                      <Icon name={t.icon} className="h-3.5 w-3.5 mr-1.5" />
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
                          <Icon
                            name={a.trendIcon}
                            className={`h-3.5 w-3.5 ${
                              a.trendIcon === "arrow_up"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          />
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

          {data.liveUrl ? (
            <div className="border-t border-white/10 p-6 backdrop-blur-md">
              <a
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 hover:shadow-blue-500/40"
                href={data.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                {data.btnLabel || "Visit Live Site"}
                {/* Visit Live Site */}
                <ExternalLink size={18} />
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
