import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/data";
import { links } from "@/content/links";
import { blackboardExample, submissionItems, docTemplate } from "@/content/submit";
import { SectionHeading, LinkButton } from "@/components/ui";

export const metadata: Metadata = {
  title: "繳交說明",
  description: `${site.name}作品繳交說明：世界檔、黑板截圖、圖文特點說明 PDF 與介紹影片的格式與範例，並提供官方圖文檔模板下載。`,
  alternates: { canonical: "/submit" },
};

/** 仿麥塊「黑板」介面的範例（純 CSS，不用圖片，手機也看得清楚） */
function Blackboard() {
  return (
    <div className="overflow-hidden rounded-xl border-4 border-[#3a3a3a] bg-[#4a4a4a] shadow-lg">
      <div className="flex items-center justify-between border-b-2 border-[#5a5a5a] bg-[#3a3a3a] px-4 py-2">
        <span className="font-mono text-sm font-bold tracking-widest text-gray-200">
          {blackboardExample.title}
        </span>
        <span className="font-mono text-sm text-gray-400">✕</span>
      </div>
      <ul className="space-y-2 p-4 sm:p-5">
        {blackboardExample.lines.map((l) => (
          <li key={l.label} className="flex gap-2 font-mono text-xs leading-relaxed text-gray-100 sm:text-sm">
            <span className="shrink-0 text-gray-400">▸</span>
            <span>
              <span className="text-gray-300">{l.label}：</span>
              <span className="font-bold text-white">{l.value}</span>
            </span>
          </li>
        ))}
      </ul>
      <p className="border-t-2 border-[#5a5a5a] bg-[#3a3a3a] px-4 py-2 text-center font-mono text-xs text-gray-400">
        範例畫面（請在麥塊中實際拍攝你們隊伍的黑板）
      </p>
    </div>
  );
}

export default function SubmitPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <SectionHeading eyebrow="HOW TO SUBMIT" title="作品繳交說明" center={false} />
      <p className="mt-4 leading-relaxed text-ink/70">
        所有隊伍須於 <span className="font-bold text-primary-600">2026 年 12 月 13 日（日）23:59 前</span>
        ，至「作品繳交表」繳交以下四項。完整規則請見{" "}
        <Link href="/rules#submission" className="font-bold text-secondary-600 underline">
          簡章
        </Link>
        。
      </p>

      {/* 四項繳件 */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {submissionItems.map((item) => (
          <div key={item.no} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-500 font-black text-white">
                {item.no}
              </span>
              <div>
                <p className="font-black text-secondary-700">{item.title}</p>
                <p className="text-xs text-ink/50">{item.format}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/80">
              {item.points.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-500" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 黑板範例 */}
      <section id="blackboard" className="mt-16 scroll-mt-20">
        <h2 className="mb-2 text-xl font-black text-secondary-700">黑板要寫什麼？</h2>
        <p className="mb-6 leading-relaxed text-ink/70">
          在麥塊中放一塊黑板，把下列六項寫上去，再用全螢幕截圖拍下來。這是評審找到你們機關與程式的地圖索引。
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Blackboard />
          <ul className="space-y-3 self-center text-sm leading-relaxed text-ink/80">
            {blackboardExample.tips.map((t, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 圖文檔 */}
      <section id="doc" className="mt-16 scroll-mt-20">
        <h2 className="mb-2 text-xl font-black text-secondary-700">圖文特點說明怎麼寫？</h2>
        <p className="mb-6 leading-relaxed text-ink/70">{docTemplate.intro}</p>
        <div className="grid gap-5 md:grid-cols-2">
          {docTemplate.sections.map((sec) => (
            <div key={sec.name} className="rounded-2xl bg-secondary-50/60 p-6">
              <p className="font-black text-secondary-700">{sec.name}</p>
              <p className="mt-2 text-sm text-ink/70">{sec.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {sec.fields.map((f) => (
                  <span key={f} className="rounded-lg bg-white px-3 py-1 text-xs font-bold text-secondary-600 shadow-sm">
                    {f}
                  </span>
                ))}
              </div>
              <div className="mt-4 rounded-xl border-l-4 border-primary-500 bg-white p-4">
                <p className="text-xs font-bold text-primary-600">{sec.example.role}</p>
                <p className="mt-1 text-xs text-ink/50">{sec.example.fav}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">「{sec.example.intro}」</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl bg-primary-50 p-6">
          <div className="mr-auto">
            <p className="font-black text-secondary-700">下載官方模板</p>
            <p className="text-sm text-ink/70">填寫完成後轉存為 PDF 繳交。範例版是完整寫好的示範，可以照著寫。</p>
          </div>
          <LinkButton href={links.docTemplateBlank} pendingLabel="模板即將公告">
            空白模板
          </LinkButton>
          <LinkButton href={links.docTemplateExample} variant="secondary" pendingLabel="範例即將公告">
            範例參考
          </LinkButton>
        </div>
      </section>

      {/* 繳交入口 */}
      <section className="mt-16 rounded-2xl bg-secondary-700 p-8 text-white">
        <p className="text-xl font-black">準備好了嗎？</p>
        <p className="mt-2 text-sm text-white/80">
          四項都準備齊全後，到「作品繳交表」一次上傳。繳交後仍可於截止前重新提交，以最後一次為準。
        </p>
        <p className="mt-3 rounded-xl bg-white/10 p-4 text-sm leading-relaxed text-white/90">
          <span className="font-bold text-primary-100">繳交表需要登入 Google 帳號。</span>{" "}
          因為表單含檔案上傳（世界檔、截圖、PDF），Google 規定必須登入才能上傳。Gmail 或學校的
          Google 帳號都可以，請在繳交前先準備好，別等到 12/13 當晚才發現沒有帳號。
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <LinkButton href={links.submitWork} pendingLabel="繳交表即將開放">
            前往作品繳交表
          </LinkButton>
          <Link
            href="/rules#submission"
            className="inline-flex items-center justify-center rounded-xl border-2 border-white/70 px-6 py-3 text-base font-bold text-white transition-colors hover:bg-white/10"
          >
            查看完整規則
          </Link>
        </div>
      </section>
    </div>
  );
}
