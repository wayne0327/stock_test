"use client";

import { useState } from "react";

const links = [
  { label: "分析面向", href: "#categories" },
  { label: "指標總覽", href: "#stats" },
  { label: "關於", href: "#footer" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        aria-label="開啟選單"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-9 w-9 items-center justify-center rounded-md border border-white/10 text-slate-300"
      >
        {open ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M1 1l14 14M15 1L1 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M1 3h14M1 8h14M1 13h14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full border-b border-white/[0.06] bg-[#05080d]/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.06] py-4 text-sm font-medium tracking-wide text-slate-300 last:border-0 active:text-cyan-300"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
