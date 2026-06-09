import { Button } from "./ui";
import { site } from "@/lib/site";

export function ContactCTA() {
  return (
    <section id="contact" className="u-container" style={{ paddingBlock: "clamp(4rem, 9vw, 7rem)" }}>
      <div
        className="relative overflow-hidden"
        style={{ background: "var(--fg)", color: "var(--bg)", padding: "clamp(2.5rem, 6vw, 4.5rem)", borderRadius: 4 }}
      >
        <p className="eyebrow" style={{ color: "var(--accent)" }}>Let&apos;s talk</p>
        <h2 className="mt-4 max-w-2xl" style={{ fontSize: "var(--text-3xl)", color: "var(--bg)" }}>
          If something here resonates, the conversation is the next step.
        </h2>
        <p className="mt-5 max-w-xl" style={{ color: "color-mix(in srgb, var(--bg) 72%, transparent)", fontSize: "var(--text-lg)", lineHeight: 1.6 }}>
          Coaching, advisory, speaking, or a transformation that needs a steady hand — reach out and tell me what you&apos;re working through.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 text-sm font-medium"
            style={{ background: "var(--accent)", color: "var(--color-paper)", padding: "0.8rem 1.5rem", borderRadius: 2 }}
          >
            Get in touch →
          </a>
          <Button href="/work-with-me" variant="ghost">
            <span style={{ color: "var(--bg)" }}>See ways to work together</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
