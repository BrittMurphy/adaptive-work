export const site = {
  name: "Adaptive Work",
  domain: "adaptivework.co",
  url: "https://adaptivework.co",
  author: "Brittney Murphy",
  tagline: "Making sense of how work, leadership, and organizations are changing.",
  description:
    "Perspectives on leadership, organizational change, AI, and the future of work from Brittney Murphy — two decades helping organizations navigate transformation.",
  email: "hello@adaptivework.co",
  social: {
    linkedin: "https://www.linkedin.com/in/brittneythomas",
  },
};

export const categories = [
  "Leadership",
  "Organizational Effectiveness",
  "AI & Work",
  "Change & Transformation",
  "Career Growth",
  "Perspectives",
] as const;

export type Category = (typeof categories)[number];

export const nav = [
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Work With Me", href: "/work-with-me" },
];
