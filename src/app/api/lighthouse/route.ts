import { NextResponse } from "next/server";

export const runtime = "nodejs"; // keep it on Node (safe default)

type CategoryKey = "performance" | "accessibility" | "best-practices" | "seo";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "Missing url" }, { status: 400 });
  }

  const key = process.env.PAGESPEED_API_KEY;
  if (!key) {
    return NextResponse.json(
      { error: "Missing PAGESPEED_API_KEY in env" },
      { status: 500 }
    );
  }

  const api = new URL(
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
  );
  api.searchParams.set("url", url);
  api.searchParams.set("strategy", "mobile");

  // repeatable params are allowed (v5 supports multiple category params)
  api.searchParams.append("category", "performance");
  api.searchParams.append("category", "accessibility");
  api.searchParams.append("category", "best-practices");
  api.searchParams.append("category", "seo");

  api.searchParams.set("key", key);

  const res = await fetch(api.toString(), {
    // you can cache a bit to avoid hammering PSI
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    return NextResponse.json(
      { error: "Failed to fetch PageSpeed Insights", details: text },
      { status: 500 }
    );
  }

  const json = await res.json();

  const categories = json?.lighthouseResult?.categories ?? {};
  const audits = json?.lighthouseResult?.audits ?? {};

  const score = (k: CategoryKey) =>
    Math.round(((categories?.[k]?.score ?? 0) as number) * 100);

  return NextResponse.json({
    scores: {
      performance: score("performance"),
      accessibility: score("accessibility"),
      bestPractices: score("best-practices"),
      seo: score("seo"),
    },
    metrics: {
      lcp: audits["largest-contentful-paint"]?.displayValue ?? "—",
      tbt: audits["total-blocking-time"]?.displayValue ?? "—",
      cls: audits["cumulative-layout-shift"]?.displayValue ?? "—",
      speedIndex: audits["speed-index"]?.displayValue ?? "—",
    },
    fetchedAt: new Date().toISOString(),
  });
}
