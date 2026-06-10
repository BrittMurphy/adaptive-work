import Link from "next/link";
import type { PostMeta } from "@/lib/types";
import { formatDate } from "@/lib/format";

export function CategoryPill({ category, href }: { category: string; href?: string }) {
  const content = (
    <span
      className="eyebrow"
      style={{ fontFamily: "var(--font-sans)", color: "var(--sage-deep)" }}
    >
      {category}
    </span>
  );
  return href ? <Link href={href} className="link-underline">{content}</Link> : content;
}

/* Large featured card — leads the featured grid */
export function FeaturedCard({ post }: { post: PostMeta }) {
  return (
    <article className="group flex h-full flex-col" style={{ paddingTop: "1.5rem", borderTop: "2px solid var(--fg)" }}>
      {post.image && (
        <Link href={`/insights/${post.slug}`} className="mb-5 block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.imageAlt || post.title}
            style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 4, border: "1px solid var(--rule)" }}
          />
        </Link>
      )}
      <div className="flex items-center gap-3">
        <CategoryPill category={post.category} href={`/insights?category=${encodeURIComponent(post.category)}`} />
      </div>
      <Link href={`/insights/${post.slug}`} className="mt-5 block">
        <h3 style={{ fontSize: "var(--text-3xl)" }} className="transition-colors group-hover:opacity-80">
          {post.title}
        </h3>
      </Link>
      <p className="mt-4" style={{ color: "var(--muted)", fontSize: "var(--text-lg)", lineHeight: 1.6 }}>
        {post.excerpt}
      </p>
      <div className="mt-6 flex items-center gap-3" style={{ color: "var(--faint)", fontSize: "var(--text-sm)" }}>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
    </article>
  );
}

/* Compact card — secondary slots in featured grid / related */
export function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <article className="group flex flex-col" style={{ paddingTop: "1.25rem", borderTop: "1px solid var(--rule)" }}>
      <CategoryPill category={post.category} href={`/insights?category=${encodeURIComponent(post.category)}`} />
      <Link href={`/insights/${post.slug}`} className="mt-3 block">
        <h3 style={{ fontSize: "var(--text-xl)" }} className="transition-colors group-hover:opacity-80">
          {post.title}
        </h3>
      </Link>
      <p className="mt-2.5" style={{ color: "var(--muted)", fontSize: "var(--text-sm)", lineHeight: 1.6 }}>
        {post.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-2.5" style={{ color: "var(--faint)", fontSize: "var(--text-xs)" }}>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
    </article>
  );
}

/* Editorial list row — used for "Latest" and the insights index */
export function ArticleRow({ post, index }: { post: PostMeta; index?: number }) {
  return (
    <article className="group">
      <Link
        href={`/insights/${post.slug}`}
        className="flex flex-col gap-3 py-7 md:flex-row md:items-baseline md:gap-8"
        style={{ borderBottom: "1px solid var(--rule)" }}
      >
        {typeof index === "number" && (
          <span
            className="hidden md:block shrink-0"
            style={{ fontFamily: "var(--font-display)", color: "var(--faint)", fontSize: "var(--text-sm)", width: "2rem" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
        <div className="md:flex-1">
          <div className="flex items-center gap-3" style={{ color: "var(--faint)", fontSize: "var(--text-xs)" }}>
            <CategoryPill category={post.category} />
            <span>·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <h3 className="mt-2.5 transition-colors group-hover:text-[var(--accent)]" style={{ fontSize: "var(--text-2xl)" }}>
            {post.title}
          </h3>
          <p className="mt-2 max-w-2xl" style={{ color: "var(--muted)", fontSize: "var(--text-base)", lineHeight: 1.6 }}>
            {post.excerpt}
          </p>
        </div>
        <span className="shrink-0 self-start md:self-baseline" style={{ color: "var(--faint)", fontSize: "var(--text-sm)" }}>
          {post.readingTime}
        </span>
      </Link>
    </article>
  );
}
