# Adaptive Work — adaptivework.co

A modern, editorial perspective platform for Brittney Murphy: insights on leadership,
organizational change, AI, and the future of work.

Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4**. Statically
generated, fast, accessible, and SEO-ready.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Add a new article (the content engine)
Create a Markdown file in `src/content/insights/`, e.g. `my-new-post.md`:

```md
---
title: "Your Title"
excerpt: "One or two sentences that appear in cards and search."
category: "Leadership"   # Leadership | Organizational Effectiveness | AI & Work |
                         # Change & Transformation | Career Growth | Perspectives
date: "2026-06-01"       # ISO date — controls ordering
featured: true           # optional — surfaces on the homepage
---

Write the body in Markdown. Headings (##), **bold**, *italics*,
> blockquotes, lists, and [links](https://example.com) are supported.
```

Reading time, the slug (from filename), the sitemap entry, and SEO metadata are
all generated automatically. No redesign or code change required.

## Project structure
```
src/
  app/                 routes (home, insights, about, work-with-me) + sitemap/robots
  components/          Header, Footer, Article cards, ContactCTA, InsightsBrowser, ui
  content/insights/    Markdown articles — the content engine
  lib/                 site config, post loader, markdown renderer
```

## Designed to grow
The architecture anticipates later additions without redesign: a newsletter
(an RSS route + signup), Resources/Frameworks (new content collections that mirror
`insights`), and Media mentions. New nav items slot into `src/lib/site.ts`.

## Deploy
Zero-config on **Vercel** — push the repo and import it. Set the production domain
to `adaptivework.co`. Static export works on any host that serves a Next.js build.
