"use client";

import { useEffect, useId } from "react";

export type CaseStudy = {
  projectName: string; // e.g. "Clouddley"
  subtitle: string; // e.g. "SaaS Cloud Dashboard"
  heroImageUrl: string;
  heroBadgeLabel?: string; // e.g. "Dashboard Overview"
  challenge: string;
  techStack: Array<{ icon: string; label: string }>;
  achievements: Array<{
    value: string; // "30%"
    label: string; // "Conversion Growth"
    trendIcon: "arrow_upward" | "arrow_downward";
    trendColorClass?: string; // default green
  }>;
  closingText: string;
  liveUrl?: string;
};

type Props = {
  open: boolean;
  onClose: () => void;
  data: CaseStudy;
};

export default function CaseStudyModal({ open, onClose, data }: Props) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    // optional: lock scroll
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background-dark/60 p-4 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={(e) => {
        // close on backdrop click
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-6xl overflow-hidden rounded-2xl bg-background-dark/90 shadow-2xl ring-1 ring-white/10 lg:flex lg:h-[85vh]">
        {/* LEFT: visuals */}
        <div className="relative w-full overflow-y-auto border-r border-white/5 bg-black/20 p-6 lg:w-3/5">
          <div className="flex flex-col gap-6">
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 shadow-lg">
              <div
                className="aspect-video w-full bg-cover bg-center"
                style={{ backgroundImage: `url('${data.heroImageUrl}')` }}
                aria-label="Case study hero image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {data.heroBadgeLabel ? (
                <div className="absolute bottom-4 left-4">
                  <span className="rounded border border-white/10 bg-black/50 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    {data.heroBadgeLabel}
                  </span>
                </div>
              ) : null}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-surface-dark p-4">
                <div className="mb-2 text-xs font-medium text-text-dim">
                  User Analytics Component
                </div>
                <div className="h-32 w-full rounded bg-white/5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%]" />
              </div>

              <div className="relative overflow-hidden rounded-xl border border-white/10 bg-surface-dark p-4">
                <div className="mb-2 text-xs font-medium text-text-dim">
                  Revenue Chart
                </div>
                <div className="flex h-32 items-end justify-between gap-1 px-2 pb-2">
                  <div className="h-[40%] w-full rounded-t-sm bg-primary/20" />
                  <div className="h-[70%] w-full rounded-t-sm bg-primary/40" />
                  <div className="h-[50%] w-full rounded-t-sm bg-primary/20" />
                  <div className="h-[90%] w-full rounded-t-sm bg-primary" />
                  <div className="h-[60%] w-full rounded-t-sm bg-primary/30" />
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0d1117] p-5 font-mono text-xs text-gray-300">
              <div className="mb-3 flex items-center gap-2 border-b border-white/5 pb-2">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="ml-2 text-[10px] text-text-dim">
                  useChartData.ts
                </span>
              </div>

              {/* kept as-is (static demo) */}
              <pre className="overflow-x-auto whitespace-pre">
                <span className="text-purple-400">export</span>{" "}
                <span className="text-red-400">const</span>{" "}
                <span className="text-blue-400">useChartData</span> = (
                <span className="text-orange-300">dataset</span>) =&gt; {"{"}
                {"\n"} <span className="text-purple-400">return</span>{" "}
                useMemo(() =&gt; {"{"}
                {"\n"} <span className="text-purple-400">return</span>{" "}
                dataset.map(d =&gt; ({"{"}
                {"\n"} <span className="text-blue-300">x</span>: d.timestamp,
                {"\n"} <span className="text-blue-300">y</span>: d.value *{" "}
                <span className="text-green-300">1.5</span>,{"\n"}{" "}
                <span className="text-blue-300">fill</span>: d.value &gt;{" "}
                <span className="text-green-300">50</span> ?{" "}
                <span className="text-green-300">&apos;#3178c6&apos;</span> :{" "}
                <span className="text-green-300">&apos;#4b5563&apos;</span>
                {"\n"} {"}"}));
                {"\n"} {"}"}, [dataset]);
                {"\n"}
                {"}"};
              </pre>
            </div>
          </div>
        </div>

        {/* RIGHT: content */}
        <div className="flex h-full w-full flex-col bg-surface-dark lg:w-2/5">
          <div className="flex items-center justify-between border-b border-white/10 p-6 backdrop-blur-md">
            <div>
              <h2 id={titleId} className="text-2xl font-bold text-white">
                {data.projectName}
              </h2>
              <p className="text-sm text-text-dim">{data.subtitle}</p>
            </div>

            <button
              onClick={onClose}
              className="rounded-full p-2 text-text-dim transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
              type="button"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            <div className="mb-8">
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                The Challenge
              </h3>
              <p className="text-lg leading-relaxed text-gray-300">
                {data.challenge}
              </p>
            </div>

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

            <div className="mb-8 rounded-xl border border-white/5 bg-background-dark/50 p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-text-dim">
                Key Achievements
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {data.achievements.map((a) => (
                  <div key={a.label}>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-white">
                        {a.value}
                      </span>
                      <span
                        className={`material-symbols-outlined text-sm ${
                          a.trendColorClass ?? "text-green-500"
                        }`}
                      >
                        {a.trendIcon}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-text-dim">{a.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm leading-relaxed text-text-dim">
              {data.closingText}
            </p>
          </div>

          <div className="border-t border-white/10 p-6 backdrop-blur-md">
            <a
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-600 hover:shadow-blue-500/40"
              href={data.liveUrl ?? "#"}
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
