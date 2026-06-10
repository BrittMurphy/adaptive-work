import type { Category } from "./site";

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  date: string;
  featured: boolean;
  readingTime: string;
  image?: string;
  imageAlt?: string;
  content: string;
};

export type PostMeta = Omit<Post, "content">;
