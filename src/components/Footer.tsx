import Link from "next/link";
import { categories, nav, site } from "@/lib/site";
import { Monogram } from "./Monogram";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--rule)", background: "var(--bg-2)" }}>
      <div className="u-container" style={{ paddingBlock: "4rem" }}>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5" style={{ color: "var(--fg)" }}>
              <Monogram />
              <span style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem" }}>{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm" style={{ color: "var(--muted)", fontSize: "var(--text-sm)", lineHeight: 1.7 }}>
              Perspectives on leadership, organizational change, AI, and the future of work — from {site.author}.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="eyebrow" style={{ fontFamily: "var(--font-sans)" }}>Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline text-sm" style={{ color: "var(--fg-2)" }}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="eyebrow" style={{ fontFamily: "var(--font-sans)" }}>Topics</h4>
            <ul className="mt-4 grid grid-cols-1 gap-2.5">
              {categories.map((c) => (
                <li key={c}>
                  <Link
                    href={`/insights?category=${encodeURIComponent(c)}`}
                    className="link-underline text-sm"
                    style={{ color: "var(--fg-2)" }}
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between" style={{ borderTop: "1px solid var(--rule)", paddingTop: "1.5rem" }}>
          <p style={{ color: "var(--faint)", fontSize: "var(--text-xs)" }}>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href={site.social.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline" style={{ color: "var(--faint)", fontSize: "var(--text-xs)" }}>LinkedIn</a>
            <a href={`mailto:${site.email}`} className="link-underline" style={{ color: "var(--faint)", fontSize: "var(--text-xs)" }}>{site.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
