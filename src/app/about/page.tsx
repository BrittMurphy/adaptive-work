import type { Metadata } from "next";
import { Reveal } from "@/components/ui";
import { ContactCTA } from "@/components/ContactCTA";
import { Headshot } from "@/components/Headshot";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Brittney Murphy on the work behind Adaptive Work — two decades leading change, a background in organizational psychology, and a practical view of how organizations actually transform.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <section className="u-container" style={{ paddingTop: "clamp(3rem, 7vw, 5rem)", paddingBottom: "clamp(2rem, 5vw, 4rem)" }}>
        <div className="grid md:grid-cols-[1fr_auto] md:gap-16 md:items-start">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">About</p>
            </Reveal>
            <Reveal delay={80} as="h1">
              <span style={{ fontSize: "var(--text-4xl)", display: "block", marginTop: "1.25rem" }}>
                I&apos;m Brittney Murphy. I help organizations change in ways that actually stick.
              </span>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="hidden md:block mt-2">
              <Headshot size={200} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="u-container" style={{ paddingBottom: "clamp(3rem, 7vw, 5rem)" }}>
        <div className="u-prose prose">
          <p style={{ fontSize: "var(--text-xl)", color: "var(--fg)" }}>
            For most of my career, I&apos;ve worked in the part of organizational change that doesn&apos;t make it into the case study — the long middle, where a clear strategy meets the complicated reality of how people actually work, and either takes root or quietly comes apart.
          </p>

          <h2>How I got here</h2>
          <p>
            I came to this work through organizational psychology — the study of why people and groups behave the way they do at work. That foundation turned out to be the most practical thing I&apos;ve ever learned. Most of what derails a transformation isn&apos;t a flaw in the plan; it&apos;s something human that the plan didn&apos;t account for. Incentives that quietly reward the old behavior. Trust that was never built. A change that asks people to give something up without ever naming what.
          </p>
          <p>
            Over two decades, I&apos;ve led and supported change inside organizations of very different shapes — through restructurings, new operating models, technology shifts, and the slow, unglamorous work of getting a culture to move. I&apos;ve been in the rooms where the decisions get made and the rooms where they land. Both views matter, and they rarely agree.
          </p>

          <h2>What I believe about change</h2>
          <p>
            The transformations that last tend to be the quiet ones. They look less like a launch and more like a hundred small renegotiations of how people spend their attention. I&apos;ve learned to be skeptical of change that feels exciting and to pay attention to whether new behavior survives a bad week. That&apos;s the real test.
          </p>
          <blockquote>
            Strategy tells you where to go. Operating rhythm tells you whether you&apos;ll arrive.
          </blockquote>
          <p>
            I&apos;m genuinely curious about where work is heading — especially how AI is reshaping it. Not the hype, and not the doom, but the specific, human question underneath: what changes for the person doing the work, and has anyone bothered to tell them? That question sits at the center of a lot of what I write here.
          </p>

          <h2>Why Adaptive Work exists</h2>
          <p>
            {site.name} is where I think out loud. It&apos;s less a consultancy and more a place to share what I&apos;ve actually seen — the patterns that repeat, the moves that work, the ones that reliably don&apos;t. I write for leaders, transformation and HR practitioners, product and technology people, and anyone navigating a shift in their own working life.
          </p>
          <p>
            If something here is useful to you, that&apos;s the point. And if it leads to a conversation about working together — coaching, advisory, speaking, or steadying a transformation in progress — even better.
          </p>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
