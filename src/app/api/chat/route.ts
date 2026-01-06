import { NextResponse } from "next/server";
import { buildPortfolioKnowledge } from "@/lib/portfolio-knowledge";

export const runtime = "nodejs";

type Body = {
  messages: { role: "user" | "assistant"; content: string }[];
};

const MODEL_CANDIDATES = [
  process.env.HF_MODEL, // custom model from env
  "meta-llama/Llama-3.1-8B-Instruct",
  "mistralai/Mistral-7B-Instruct-v0.3",
  "google/gemma-2-9b-it",
].filter(Boolean) as string[];

export async function POST(req: Request) {
  const token = process.env.HF_TOKEN;
  if (!token) {
    return NextResponse.json(
      { error: "Missing HF_TOKEN in .env.local" },
      { status: 500 }
    );
  }

  const url = "https://router.huggingface.co/v1/chat/completions";

  try {
    const body = (await req.json()) as Body;

    const context = buildPortfolioKnowledge();
    const system = `
You are "Happiness AI", a portfolio assistant and interview assistant for Happiness.

NON-NEGOTIABLE RULES:
1) Only answer using facts in PORTFOLIO CONTEXT.
2) Do not invent experience, metrics, or tools.
3) If information is missing, say so clearly.
4) Keep answers concise and professional.

ANSWER STYLE:
- For recruiter or interview questions, use a structured format:
  - Context (what/where)
  - Action (what you did)
  - Result (measurable outcome if available)
- Prefer metrics when present in the context.
- Keep responses under 80 words unless asked to go deeper.

PORTFOLIO CONTEXT:
${context}
`.trim();

    const cache = new Map<string, { text: string; ts: number }>();
    const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour

    const lastUser = body.messages.at(-1)?.content?.trim() ?? "";
    const cacheKey = lastUser.toLowerCase();

    const hit = cache.get(cacheKey);
    if (hit && Date.now() - hit.ts < CACHE_TTL_MS) {
      return NextResponse.json({ text: hit.text, cached: true });
    }

    let lastError: unknown = null;

    for (const model of MODEL_CANDIDATES) {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model,
          messages: [{ role: "system", content: system }, ...body.messages],
          temperature: 0.4,
          max_tokens: 250,
        }),
      });

      const raw = await res.text();

      if (!res.ok) {
        lastError = { status: res.status, model, raw };
        continue;
      }

      const data = JSON.parse(raw);
      const text =
        data?.choices?.[0]?.message?.content?.trim?.() ??
        "I couldn't generate a response.";

      cache.set(cacheKey, { text, ts: Date.now() });

      return NextResponse.json({ text, modelUsed: model });
    }

    return NextResponse.json(
      {
        error: "No supported model found for your enabled providers.",
        tried: MODEL_CANDIDATES,
        lastError,
      },
      { status: 500 }
    );
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Chat route error", details: errorMessage },
      { status: 500 }
    );
  }
}
