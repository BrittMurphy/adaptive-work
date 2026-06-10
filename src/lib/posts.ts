import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { Post, PostMeta } from "./types";

export type { Post, PostMeta } from "./types";
export { formatDate } from "./format";

const POSTS_DIR = path.join(process.cwd(), "src/content/insights");

function parse(filename: string): Post {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    category: data.category,
    date: data.date,
    featured: Boolean(data.featured),
    readingTime: readingTime(content).text,
    image: data.image ?? undefined,
    imageAlt: data.imageAlt ?? data.title ?? "",
    content,
  };
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map(parse)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getAllMeta(): PostMeta[] {
  return getAllPosts().map((p) => {
    const { content, ...meta } = p;
    void content;
    return meta;
  });
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getFeatured(): PostMeta[] {
  const featured = getAllMeta().filter((p) => p.featured);
  return featured.length ? featured : getAllMeta().slice(0, 3);
}

