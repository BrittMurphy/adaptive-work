import type { Metadata } from "next";
import { Reveal } from "@/components/ui";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Ways to work with Brittney Murphy — career coaching, advisory, speaking and workshops, and hands-on transformation support.",
  alternates: { canonical: "/work-with-me" },
};

const ways = [
  {
    label: "Career Coaching",
    blurb:
      "For people in the middle of a shift — a pivot, a step up, or a quiet sense that the current path has run its course. We work through the real question, which is usually less about skills and more about the story you&apos;re ready to outgrow.",
  },
  {
    label: "Advisory",
    blurb:
      "A steady, experienced sounding board for leaders carrying something complex — a reorg, a culture that won&apos;t move, an AI rollout that&apos;s stalling. Often what&apos;s most useful is someone who has seen the pattern before and will tell you the truth about it.",
  },
  {
    label: "Speaking & Workshops",
    blurb:
      "Talks and sessions on leadership, organizational change, and human-centered AI adoption — practical, candid, and grounded in real transformation rather than the tidy version. Built for the room you actually have, not a generic audience.",
  },
  {
    label: "Transformation Support",
    blurb:
      "Hands-on help in the long middle of a change effort, where strategy meets behavior. Not a deck and a handoff — a partner in the unglamorous work of making new ways of working actually stick.",
  },
];

export default function WorkWithMePage() {
  return (
    <>
      <section className="u-container" style={{ paddingTop: "clamp(3rem, 7vw, 5rem)", paddingBottom: "clamp(2rem, 5vw, 3.5rem)" }}>
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">Work with me</p>
          </Reveal>
          <Reveal delay={80} as="h1">
            <span style={{ fontSize: "var(--text-4xl)", display: "block", marginTop: "1.25rem" }}>
              A few ways we might work together.
            </span>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6" style={{ fontSize: "var(--text-xl)", color: "var(--muted)", lineHeight: 1.5 }}>
              Every engagement starts the same way — with a conversation about what you&apos;re
              actually trying to move. These are the most common shapes that takes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="u-container" style={{ paddingBottom: "clamp(3rem, 6vw, 5rem)" }}>
        <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
          {ways.map((w, i) => (
            <Reveal key={w.label} delay={(i % 2) * 80}>
              <div className="flex gap-5" style={{ paddingTop: "1.5rem", borderTop: "2px solid var(--fg)" }}>
                <span style={{ fontFamily: "var(--font-display)", color: "var(--faint)", fontSize: "var(--text-lg)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2 style={{ fontSize: "var(--text-2xl)" }}>{w.label}</h2>
                  <p
                    className="mt-3"
                    style={{ color: "var(--muted)", fontSize: "var(--text-lg)", lineHeight: 1.6 }}
                    dangerouslySetInnerHTML={{ __html: w.blurb }}
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
