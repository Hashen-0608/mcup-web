"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/content/data";

const navItems = [
  { href: "/", label: "首頁" },
  { href: "/rules", label: "簡章" },
  { href: "/submit", label: "繳交說明" },
  { href: "/news", label: "最新消息" },
  { href: "/history", label: "歷年成果" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/mccup-logo.png"
            alt="McCup Challenge"
            width={310}
            height={160}
            className="h-9 w-auto sm:h-10"
          />
          <span className="hidden text-lg font-black text-secondary-700 sm:inline">
            {site.name}
          </span>
        </Link>

        {/* 桌機導覽 */}
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm font-bold text-ink transition-colors hover:text-primary-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#signup"
              className="rounded-xl bg-primary-500 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-primary-600"
            >
              我要報名
            </Link>
          </li>
        </ul>

        {/* 手機選單按鈕 */}
        <button
          type="button"
          aria-label="開啟選單"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg text-secondary-700 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* 手機下拉選單 */}
      {open && (
        <ul className="space-y-1 border-t border-gray-100 bg-white px-4 py-3 md:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-lg px-3 py-2 font-bold text-ink hover:bg-primary-50"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#signup"
              className="block rounded-lg bg-primary-500 px-3 py-2 text-center font-bold text-white"
              onClick={() => setOpen(false)}
            >
              我要報名
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
