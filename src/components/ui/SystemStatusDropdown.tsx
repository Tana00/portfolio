"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Gauge, ShieldCheck } from "lucide-react";

type LighthouseData = {
  scores: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  metrics: {
    lcp: string;
    tbt: string;
    cls: string;
    speedIndex: string;
  };
  fetchedAt: string;
};

function ScoreRing({ value, label }: { value: number; label: string }) {
  const normalized = Math.max(0, Math.min(100, value));
  const dash = `${normalized}, 100`;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative flex items-center justify-center">
        <svg className="h-16 w-16 -rotate-90 transform" viewBox="0 0 36 36">
          <path
            className="text-white/10"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
          />
          <path
            className="text-accent-blue drop-shadow-[0_0_8px_rgba(49,120,198,0.6)]"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="currentColor"
            strokeDasharray={dash}
            strokeWidth={2.5}
          />
        </svg>
        <span className="absolute text-sm font-bold text-white">
          {normalized}
        </span>
      </div>
      <span className="text-[10px] font-medium text-text-dim/80">{label}</span>
    </div>
  );
}

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-text-dim">{label}</span>
      <div className="flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
        <span className="text-white font-mono">{value}</span>
      </div>
    </div>
  );
}

export function SystemStatusDropdown({
  urlToAudit,
  closeMobileMenu,
}: {
  urlToAudit: string;
  closeMobileMenu: () => void;
}) {
  const detailsRef = useRef<HTMLDetailsElement | null>(null);
  const [data, setData] = useState<LighthouseData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [, forceTick] = useState(0);

  const overall = useMemo(() => {
    if (!data) return 0;
    const { performance, accessibility, bestPractices } = data.scores;
    return Math.round((performance + accessibility + bestPractices) / 3);
  }, [data]);

  async function fetchData() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `/api/lighthouse?url=${encodeURIComponent(urlToAudit)}`,
        { cache: "no-store" }
      );
      const json = await res.json();

      if (!res.ok) {
        setError(json?.error ?? "Failed to fetch Lighthouse data");
        return;
      }

      setData(json as LighthouseData);
    } catch {
      setError("Network error while fetching Lighthouse data");
    } finally {
      setLoading(false);
    }
  }

  function timeAgo(iso?: string) {
    if (!iso) return "—";

    const diffMs = Date.now() - new Date(iso).getTime();
    const diffSec = Math.max(0, Math.floor(diffMs / 1000));

    if (diffSec < 10) return "Just now";
    if (diffSec < 60) return `${diffSec}s ago`;

    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) return `${diffMin} min${diffMin === 1 ? "" : "s"} ago`;

    const diffHr = Math.floor(diffMin / 60);
    return `${diffHr} hr${diffHr === 1 ? "" : "s"} ago`;
  }

  useEffect(() => {
    const id = window.setInterval(() => forceTick((x) => x + 1), 15_000);
    return () => window.clearInterval(id);
  }, []);

  // open -> fetch once
  useEffect(() => {
    const el = detailsRef.current;
    if (!el) return;

    const onToggle = () => {
      if (el.open && !data && !loading) {
        fetchData();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") el.open = false;
    };

    const onClickOutside = (e: MouseEvent) => {
      if (!el.open) return;
      if (!detailsRef.current) return;

      const target = e.target as Node;
      if (detailsRef.current.contains(target)) return;

      detailsRef.current.open = false;
    };

    el.addEventListener("toggle", onToggle);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onClickOutside);

    return () => {
      el.removeEventListener("toggle", onToggle);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onClickOutside);
    };
  }, [data, loading]);

  return (
    <details ref={detailsRef} className="sm:relative group">
      <summary
        onClick={() => {
          // close drawer when Status is tapped
          closeMobileMenu?.();
        }}
        className="list-none cursor-pointer outline-none"
      >
        <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-text-dim hover:bg-white/10 hover:text-white transition-all ring-1 ring-transparent focus:ring-accent-blue/50">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue" />
          </span>
          <span className="hidden lg:inline">System Status</span>
          <span className="lg:hidden">Status</span>
        </div>
      </summary>

      <div className="absolute right-0 top-full mt-4 w-full sm:w-105 origin-top-right rounded-xl border border-white/10 bg-background-dark/95 p-6 shadow-2xl backdrop-blur-xl ring-1 ring-white/10 z-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Gauge size={20} strokeWidth={2.75} className="text-accent-blue" />
            <h3 className="text-sm font-semibold text-white">
              Lighthouse Score
            </h3>
          </div>

          <span className="rounded bg-accent-blue/10 px-2 py-0.5 text-[10px] font-medium text-accent-blue border border-accent-blue/20 tracking-wide">
            {loading ? "CHECKING..." : `EXCELLENT ${overall || 0}%`}
          </span>
        </div>

        {error ? (
          <div className="rounded-lg border border-white/10 bg-white/5 p-3 text-xs text-text-dim">
            <div className="flex items-center justify-between gap-3">
              <span>{error}</span>
              <button
                type="button"
                onClick={fetchData}
                className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold text-white hover:bg-white/10"
              >
                Retry
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 gap-6 mb-8 px-2 sm:grid-cols-4 sm:gap-2">
              <ScoreRing
                value={data?.scores.performance ?? 0}
                label="Performance"
              />
              <ScoreRing
                value={data?.scores.accessibility ?? 0}
                label="Accessibility"
              />
              <ScoreRing
                value={data?.scores.bestPractices ?? 0}
                label="Best Practices"
              />
              <ScoreRing value={data?.scores.seo ?? 0} label="SEO" />
            </div>

            <div className="rounded-lg bg-surface-dark border border-white/5 p-4 mb-5">
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 text-xs">
                <MetricRow
                  label="Largest Contentful Paint"
                  value={data?.metrics.lcp ?? "—"}
                />
                <MetricRow
                  label="Total Blocking Time"
                  value={data?.metrics.tbt ?? "—"}
                />
                <div className="col-span-2 h-px bg-white/5" />
                <MetricRow
                  label="Cumulative Layout Shift"
                  value={data?.metrics.cls ?? "—"}
                />
                <MetricRow
                  label="Speed Index"
                  value={data?.metrics.speedIndex ?? "—"}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] text-text-dim/60">
              <div className="flex items-center gap-1.5 text-text-dim">
                <ShieldCheck
                  size={18}
                  strokeWidth={2.75}
                  className="text-accent-blue"
                />
                <span>Verified by Lighthouse</span>
              </div>

              <span>
                Audit:{" "}
                <span className="text-text-dim font-medium">
                  {timeAgo(data?.fetchedAt)}
                </span>
              </span>
            </div>

            <div className="mt-4 flex gap-2">
              <button
                type="button"
                onClick={fetchData}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-semibold text-white hover:bg-white/10 transition-colors"
              >
                Refresh
              </button>
            </div>
          </>
        )}
      </div>
    </details>
  );
}
