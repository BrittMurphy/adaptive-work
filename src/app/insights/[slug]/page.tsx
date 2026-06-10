import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllPosts, getPost, formatDate } from "@/lib/posts";
import { renderMarkdown } from "@/lib/markdown";
import { CategoryPill, ArticleCard } from "@/components/Article";
import { ContactCTA } from "@/components/ContactCTA";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      authors: [site.author],
      url: `${site.url}/insights/${post.slug}`,
    },
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);
  const fallbackRelated = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);
  const showRelated = related.length ? related : fallbackRelated;

  const html = renderMarkdown(post.content);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: site.author, url: site.url },
    publisher: { "@type": "Organization", name: site.name },
    mainEntityOfPage: `${site.url}/insights/${post.slug}`,
    articleSection: post.category,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <article className="u-container" style={{ paddingTop: "clamp(2.5rem, 6vw, 4.5rem)" }}>
        <div className="u-prose mx-auto">
          <Link href="/insights" className="link-underline text-sm" style={{ color: "var(--faint)" }}>
            ← All insights
          </Link>

          <header className="mt-8">
            <CategoryPill category={post.category} href={`/insights?category=${encodeURIComponent(post.category)}`} />
            <h1 className="mt-5" style={{ fontSize: "var(--text-4xl)" }}>{post.title}</h1>
            <div className="mt-6 flex items-center gap-3" style={{ color: "var(--faint)", fontSize: "var(--text-sm)" }}>
              <span style={{ color: "var(--fg-2)" }}>{site.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
          </header>

          {post.image && (
            <figure style={{ marginTop: "2.5rem" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.imageAlt || post.title}
                style={{ width: "100%", height: "auto", borderRadius: 4, border: "1px solid var(--rule)" }}
              />
            </figure>
          )}

          <hr className="rule" style={{ marginBlock: "2.5rem" }} />

          <div className="prose" dangerouslySetInnerHTML={{ __html: html }} />

          <hr className="rule" style={{ marginBlock: "3rem" }} />

          <div className="flex items-center gap-4" style={{ paddingBottom: "1rem" }}>
            <div className="flex items-center justify-center shrink-0" style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--bg-2)", border: "1px solid var(--rule)", fontFamily: "var(--font-display)", color: "var(--accent)" }}>
              BM
            </div>
            <div>
              <p style={{ fontWeight: 600 }}>{site.author}</p>
              <p style={{ color: "var(--muted)", fontSize: "var(--text-sm)" }}>
                Advisor, coach, and transformation leader. <Link href="/about" className="link-underline" style={{ color: "var(--accent)" }}>About</Link>
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="u-container" style={{ paddingBlock: "clamp(3rem, 6vw, 5rem)", borderTop: "1px solid var(--rule)", marginTop: "3rem" }}>
        <h2 className="mb-8" style={{ fontSize: "var(--text-2xl)" }}>Keep reading</h2>
        <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
          {showRelated.map((p) => (
            <ArticleCard key={p.slug} post={p} />
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
