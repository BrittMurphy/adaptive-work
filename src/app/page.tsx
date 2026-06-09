import Link from "next/link";
import { getAllMeta, getFeatured } from "@/lib/posts";
import { Button, Reveal } from "@/components/ui";
import { FeaturedCard, ArticleCard, ArticleRow } from "@/components/Article";
import { ContactCTA } from "@/components/ContactCTA";
import { site } from "@/lib/site";

export default function Home() {
  const featured = getFeatured();
  const [lead, ...rest] = featured;
  const latest = getAllMeta().slice(0, 4);

  return (
    <>
      {/* HERO — asymmetric, manuscript margin with vertical rail */}
      <section className="u-container" style={{ paddingTop: "clamp(3.5rem, 9vw, 7rem)", paddingBottom: "clamp(3rem, 7vw, 5.5rem)" }}>
        <div className="grid md:grid-cols-[auto_1fr] md:gap-12">
          {/* The signature rail */}
          <div className="hidden md:flex flex-col items-center justify-between" style={{ paddingBlock: "0.5rem" }}>
            <span className="rail-label">Adaptive&nbsp;Work — est.&nbsp;2026</span>
            <div style={{ width: 1, flex: 1, background: "var(--rule)", marginBlock: "1.5rem" }} />
            <span className="rail-label">Perspectives</span>
          </div>

          <div className="max-w-4xl">
            <Reveal>
              <p className="eyebrow">A perspective platform on work &amp; leadership</p>
            </Reveal>
            <Reveal delay={80} as="h1">
              <span style={{ fontSize: "var(--text-4xl)", display: "block", marginTop: "1.5rem" }}>
                Making sense of how work, leadership, and organizations are changing.
              </span>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-7 max-w-2xl" style={{ fontSize: "var(--text-xl)", color: "var(--muted)", lineHeight: 1.5, fontFamily: "var(--font-sans)", fontWeight: 400 }}>
                Perspectives on leadership, organizational change, AI, and the future of work — from someone who has spent two decades helping organizations navigate transformation.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                <Button href="/insights" variant="primary">Read insights →</Button>
                <Button href="/work-with-me" variant="ghost">Work with me</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <hr className="rule u-container" style={{ maxWidth: "var(--maxw-wide)" }} />

      {/* FEATURED */}
      <section className="u-container" style={{ paddingBlock: "clamp(3.5rem, 7vw, 6rem)" }}>
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 style={{ fontSize: "var(--text-2xl)" }}>Featured insights</h2>
            <Link href="/insights" className="link-underline text-sm" style={{ color: "var(--accent)", fontWeight: 600 }}>
              All insights →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-2">
          {lead && (
            <Reveal>
              <FeaturedCard post={lead} />
            </Reveal>
          )}
          <div className="flex flex-col gap-9">
            {rest.slice(0, 2).map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <ArticleCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT (short) */}
      <section style={{ background: "var(--bg-2)", borderBlock: "1px solid var(--rule)" }}>
        <div className="u-container grid gap-10 md:grid-cols-[1fr_auto] md:gap-16" style={{ paddingBlock: "clamp(3.5rem, 7vw, 6rem)" }}>
          <Reveal>
            <div className="max-w-2xl">
              <p className="eyebrow">About</p>
              <h2 className="mt-5" style={{ fontSize: "var(--text-3xl)" }}>
                I&apos;ve spent two decades inside the messy middle of organizational change.
              </h2>
              <p className="mt-6" style={{ fontSize: "var(--text-lg)", color: "var(--muted)", lineHeight: 1.65 }}>
                Not the version on the slide, but the part where strategy meets human behavior and either takes hold or quietly doesn&apos;t. My background sits at the intersection of organizational psychology and hands-on transformation leadership — and {site.name} is where I think out loud about what I&apos;ve learned.
              </p>
              <div className="mt-8">
                <Button href="/about" variant="ghost">More about me</Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="hidden md:flex items-center justify-center" style={{ width: 200, height: 240, border: "1px solid var(--rule)", background: "var(--bg)" }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "5rem", color: "var(--accent)", lineHeight: 1 }}>BM</span>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* LATEST */}
      <section className="u-container" style={{ paddingBlock: "clamp(3.5rem, 7vw, 6rem)" }}>
        <Reveal>
          <div className="flex items-end justify-between">
            <h2 style={{ fontSize: "var(--text-2xl)" }}>Latest</h2>
            <Link href="/insights" className="link-underline text-sm" style={{ color: "var(--accent)", fontWeight: 600 }}>
              View all →
            </Link>
          </div>
        </Reveal>
        <div className="mt-6">
          {latest.map((p, i) => (
            <Reveal key={p.slug} delay={i * 50}>
              <ArticleRow post={p} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
