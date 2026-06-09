"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Button({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "inline-flex items-center gap-2 text-sm font-medium transition-all duration-300";
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className={base}
        style={{
          background: "var(--accent)",
          color: "var(--color-paper)",
          padding: "0.75rem 1.4rem",
          borderRadius: 2,
        }}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link href={href} className={`${base} link-underline`} style={{ color: "var(--fg)", padding: "0.75rem 0.25rem" }}>
      {children}
    </Link>
  );
}

export function Reveal({ children, delay = 0, as: Tag = "div" }: { children: ReactNode; delay?: number; as?: keyof React.JSX.IntrinsicElements }) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref}
      className={`reveal ${shown ? "is-in" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
