"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { nav, site } from "@/lib/site";
import { Monogram } from "./Monogram";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "color-mix(in srgb, var(--bg) 86%, transparent)", borderBottom: "1px solid var(--rule)" }}>
      <div className="u-container flex items-center justify-between" style={{ height: 68 }}>
        <Link href="/" className="flex items-center gap-2.5 group" aria-label={`${site.name} home`}>
          <span style={{ color: "var(--fg)" }}><Monogram /></span>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", letterSpacing: "-0.02em" }}>
            {site.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className="link-underline text-sm"
                style={{ color: active ? "var(--accent)" : "var(--fg-2)", fontWeight: active ? 600 : 450 }}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/work-with-me#contact"
            className="text-sm"
            style={{ color: "var(--accent)", fontWeight: 600 }}
          >
            Get in touch&nbsp;→
          </Link>
        </nav>

        <button
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span style={{ width: 22, height: 1.5, background: "var(--fg)", transition: "0.3s", transform: open ? "translateY(6.5px) rotate(45deg)" : "none" }} />
          <span style={{ width: 22, height: 1.5, background: "var(--fg)", transition: "0.3s", opacity: open ? 0 : 1 }} />
          <span style={{ width: 22, height: 1.5, background: "var(--fg)", transition: "0.3s", transform: open ? "translateY(-6.5px) rotate(-45deg)" : "none" }} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden u-container pb-7 pt-1 flex flex-col gap-1" aria-label="Mobile">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-3"
              style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", borderBottom: "1px solid var(--rule)" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/work-with-me#contact"
            onClick={() => setOpen(false)}
            className="py-3"
            style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", color: "var(--accent)" }}
          >
            Get in touch →
          </Link>
        </nav>
      )}
    </header>
  );
}
