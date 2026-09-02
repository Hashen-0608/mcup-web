import type { Metadata } from "next";
import { rules, rulesIntro, type RuleBlock } from "@/content/rules";
import { site } from "@/content/data";
import { links, rulesVersion } from "@/content/links";
import { SectionHeading, LinkButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "簡章",
  description: `${site.fullName}簡章全文：主題「${site.theme}」、報名資格、賽制、評分標準、重要時程、獎項與退費規則。`,
  alternates: { canonical: "/rules" },
};

function Block({ block }: { block: RuleBlock }) {
  switch (block.kind) {
    case "h":
      return <h3 className="mt-6 font-bold text-secondary-700">{block.text}</h3>;
    case "p":
      return <p className="leading-relaxed text-ink/80">{block.text}</p>;
    case "ul":
      return (
        <ul className="space-y-2">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-2 leading-relaxed text-ink/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[34rem] border-collapse text-sm">
            <thead>
              <tr className="bg-secondary-50 text-secondary-700">
                {block.head.map((h, hi) => (
                  <th
                    key={h}
                    className={`border border-gray-200 px-3 py-2 text-left font-bold ${hi === 0 ? "whitespace-nowrap" : ""}`}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="odd:bg-white even:bg-gray-50/60">
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`border border-gray-200 px-3 py-2 align-top text-ink/80 ${ci === 0 ? "whitespace-nowrap" : ""}`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function RulesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <SectionHeading eyebrow="GUIDELINES" title="2026 麥塊盃簡章" center={false} />
      <p className="mt-4 leading-relaxed text-ink/70">{rulesIntro}</p>

      {/* 簡章 PDF 下載 */}
      <div className="mt-8 flex flex-wrap items-center gap-4 rounded-2xl border border-primary-100 bg-primary-50 p-6">
        <div className="mr-auto">
          <p className="font-black text-secondary-700">下載完整簡章（PDF）</p>
          <p className="mt-1 text-sm text-ink/70">
            目前版本 <span className="font-bold text-primary-600">{rulesVersion.label}</span>
            （{rulesVersion.date} 定稿）。簡章如有更新會換版本號，請以官網最新版為準。
          </p>
        </div>
        <LinkButton href={links.rulesPdf} download={rulesVersion.downloadName} pendingLabel="PDF 即將提供">
          下載簡章 PDF
        </LinkButton>
      </div>

      {/* 錨點目錄 */}
      <nav aria-label="簡章目錄" className="mt-8 rounded-2xl border border-gray-100 bg-secondary-50/50 p-6">
        <p className="mb-3 font-bold text-secondary-700">目錄</p>
        <ol className="grid gap-2 sm:grid-cols-2">
          {rules.map((sec, i) => (
            <li key={sec.id}>
              <a href={`#${sec.id}`} className="text-sm text-secondary-600 hover:text-primary-600 hover:underline">
                {i + 1}. {sec.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-10 space-y-12">
        {rules.map((sec) => (
          <section key={sec.id} id={sec.id} className="scroll-mt-20">
            <h2 className="mb-4 border-l-4 border-primary-500 pl-3 text-xl font-black text-secondary-700">
              {sec.title}
            </h2>
            <div className="space-y-3">
              {sec.blocks.map((b, i) => (
                <Block key={i} block={b} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
