"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { categories } from "@/lib/site";
import { ArticleRow } from "./Article";
import type { PostMeta } from "@/lib/types";

export function InsightsBrowser({ posts }: { posts: PostMeta[] }) {
  const params = useSearchParams();
  const initial = params.get("category") ?? "All";
  const [active, setActive] = useState(initial);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const inCat = active === "All" || p.category === active;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q);
      return inCat && inQuery;
    });
  }, [posts, active, query]);

  const tabs = ["All", ...categories];

  return (
    <div>
      {/* Search */}
      <div className="relative mb-6">
        <svg className="absolute left-0 top-1/2 -translate-y-1/2" width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ color: "var(--faint)" }} aria-hidden>
          <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
          <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search insights…"
          aria-label="Search insights"
          className="w-full bg-transparent outline-none"
          style={{
            paddingLeft: "1.75rem",
            paddingBlock: "0.75rem",
            borderBottom: "1px solid var(--rule)",
            fontSize: "var(--text-lg)",
            fontFamily: "var(--font-display)",
            color: "var(--fg)",
          }}
        />
      </div>

      {/* Category filter */}
      <div className="flex flex-wrap gap-x-2 gap-y-2 mb-4" role="tablist" aria-label="Filter by topic">
        {tabs.map((t) => {
          const on = active === t;
          return (
            <button
              key={t}
              role="tab"
              aria-selected={on}
              onClick={() => setActive(t)}
              className="text-sm transition-all"
              style={{
                padding: "0.4rem 0.85rem",
                borderRadius: 999,
                border: `1px solid ${on ? "var(--fg)" : "var(--rule)"}`,
                background: on ? "var(--fg)" : "transparent",
                color: on ? "var(--bg)" : "var(--muted)",
                fontWeight: on ? 600 : 450,
              }}
            >
              {t}
            </button>
          );
        })}
      </div>

      <p className="mb-2" style={{ color: "var(--faint)", fontSize: "var(--text-sm)" }}>
        {filtered.length} {filtered.length === 1 ? "article" : "articles"}
        {active !== "All" && <> in {active}</>}
      </p>

      {filtered.length > 0 ? (
        <div>
          {filtered.map((p) => (
            <ArticleRow key={p.slug} post={p} />
          ))}
        </div>
      ) : (
        <div style={{ paddingBlock: "4rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", color: "var(--fg)" }}>
            Nothing here yet.
          </p>
          <p className="mt-2" style={{ color: "var(--muted)" }}>
            Try a different topic or clear your search.
          </p>
          <button
            onClick={() => { setActive("All"); setQuery(""); }}
            className="link-underline mt-4 text-sm"
            style={{ color: "var(--accent)", fontWeight: 600 }}
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
