import { Suspense } from "react";
import type { Metadata } from "next";
import { getAllMeta } from "@/lib/posts";
import { InsightsBrowser } from "@/components/InsightsBrowser";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives and practical observations on leadership, organizational change, AI adoption, organizational effectiveness, career growth, and the future of work.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const posts = getAllMeta();

  return (
    <div className="u-container" style={{ paddingTop: "clamp(3rem, 7vw, 5rem)", paddingBottom: "clamp(4rem, 9vw, 7rem)" }}>
      <header className="max-w-3xl">
        <p className="eyebrow">Insights</p>
        <h1 className="mt-5" style={{ fontSize: "var(--text-4xl)" }}>
          Thinking out loud about work.
        </h1>
        <p className="mt-6" style={{ fontSize: "var(--text-xl)", color: "var(--muted)", lineHeight: 1.5 }}>
          Practical perspectives on leadership, organizational change, AI, and the
          shifting shape of work — drawn from two decades inside real transformation.
        </p>
      </header>

      <div className="mt-12">
        <Suspense fallback={<p style={{ color: "var(--muted)" }}>Loading…</p>}>
          <InsightsBrowser posts={posts} />
        </Suspense>
      </div>
    </div>
  );
}
