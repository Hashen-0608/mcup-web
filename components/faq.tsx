"use client";

import { useState } from "react";
import { faq } from "@/content/data";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-gray-100 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
      {faq.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <span className="font-bold text-secondary-700">{item.q}</span>
              <svg
                className={`h-5 w-5 shrink-0 text-primary-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isOpen && (
              <div className="px-5 pb-5 text-sm leading-relaxed text-ink/80">{item.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
