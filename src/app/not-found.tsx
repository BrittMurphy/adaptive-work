import Link from "next/link";

export default function NotFound() {
  return (
    <div className="u-container" style={{ paddingBlock: "clamp(5rem, 12vw, 9rem)", textAlign: "center" }}>
      <p className="eyebrow">404</p>
      <h1 className="mt-4" style={{ fontSize: "var(--text-3xl)" }}>This page wandered off.</h1>
      <p className="mt-4" style={{ color: "var(--muted)", fontSize: "var(--text-lg)" }}>
        The link may be broken, or the page may have moved.
      </p>
      <Link href="/" className="link-underline mt-7 inline-block text-sm" style={{ color: "var(--accent)", fontWeight: 600 }}>
        ← Back home
      </Link>
    </div>
  );
}
