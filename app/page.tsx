import Link from "next/link";
import {
  site,
  schedule,
  qualification,
  themeIntro,
  awards,
} from "@/content/data";
import { links, payment } from "@/content/links";
import { SectionHeading, LinkButton } from "@/components/ui";
import { Faq } from "@/components/faq";

export default function HomePage() {
  return (
    <>
      {/* ── Hero：島嶼共生意象影片
           影片：public/hero-loop.mp4（17 秒無縫來回循環、無音軌、1.9MB）
           靜幀：public/hero-poster.jpg（載入前與 prefers-reduced-motion 時顯示）
           section 加 isolate 建立堆疊脈絡，負 z-index 的影片才不會掉到背景色底下 ── */}
      <section className="relative isolate overflow-hidden bg-secondary-700 text-white">
        <video
          className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
          aria-hidden
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
        {/* 使用者關閉動態效果時，改看同一支影片的第一幀 */}
        <div className="hero-still absolute inset-0 -z-20 hidden motion-reduce:block" aria-hidden />
        <div className="hero-scrim absolute inset-0 -z-10" aria-hidden />
        <div className="pixel-grid absolute inset-0 -z-10 opacity-50" aria-hidden />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <p className="inline-block bg-white/15 px-4 py-1 text-sm font-bold backdrop-blur">
            2026 麥塊盃 · Minecraft 教育版創意大賽
          </p>
          <h1 className="hero-shadow mt-6 max-w-3xl text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            島嶼共生
            <span className="mt-2 block text-primary-100">台灣生物多樣性任務</span>
          </h1>
          <p className="hero-shadow mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            {site.oneLiner}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href={links.signup} variant="mc" pendingLabel="報名即將開放">
              我要報名
            </LinkButton>
            <Link href="/rules" className="mc-btn mc-btn--ghost">
              閱讀簡章
            </Link>
          </div>
        </div>
        <div className="hero-fade pointer-events-none absolute inset-x-0 bottom-0 h-20" aria-hidden />
      </section>

      {/* ── 重要時程 ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading eyebrow="IMPORTANT DATES" title="重要時程" />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {schedule.map((s) => (
            <li
              key={s.label}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="text-3xl font-black text-primary-500">{s.date}</p>
              <p className="mt-2 font-bold text-secondary-700">{s.label}</p>
              <p className="mt-1 text-sm text-ink/60">{s.note}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-center text-sm text-ink/60">
          完整時程與規則請見{" "}
          <Link href="/rules#schedule" className="font-bold text-secondary-600 underline">
            簡章
          </Link>
          。
        </p>
      </section>

      {/* ── 賽事介紹：主題敘事 + 三個創作提示 ── */}
      <section className="bg-secondary-50/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="THE CHALLENGE" title="賽事介紹" />
          <div className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-ink/80">
            <p>{themeIntro.lead}</p>
            <p className="mt-4 font-bold text-secondary-700">{themeIntro.body}</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {themeIntro.prompts.map((p, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-secondary-50">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.icon}
                      alt=""
                      aria-hidden="true"
                      width={48}
                      height={48}
                      className="h-9 w-9 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary-100 text-sm font-black text-primary-600">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-4 font-black text-secondary-700">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/80">{p.text}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm text-ink/60">
            {themeIntro.extend}
          </p>
        </div>
      </section>

      {/* ── 參賽資格摘要 ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading eyebrow="WHO CAN JOIN" title="參賽資格" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {qualification.map((q) => (
            <div key={q.title} className="rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
              <p className="text-lg font-black text-secondary-700">{q.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{q.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ink/60">
          參賽費用 <span className="font-bold text-primary-600">1000 元／人</span>，贈麥塊競賽期間使用之教育版帳號。
        </p>
      </section>

      {/* ── 獎項摘要 ── */}
      <section className="bg-secondary-50/60 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="AWARDS" title="獎項" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[awards.ranks, awards.advance, awards.special, awards.finish].map((a) => (
              <div key={a.group} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="mb-3 inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm font-black text-primary-700">
                  {a.group}
                </p>
                <ul className="space-y-2 text-sm leading-relaxed text-ink/80">
                  {a.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 常見問題 ── */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <SectionHeading eyebrow="FAQ" title="常見問題" />
        <div className="mt-10">
          <Faq />
        </div>
      </section>

      {/* ── 報名與繳費 ── */}
      <section id="signup" className="scroll-mt-20 bg-secondary-700 py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeading eyebrow="SIGN UP" title="報名與繳費" />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="text-lg font-black">線上表單</p>
              <p className="mt-2 text-sm text-white/80">
                報名表與作品繳交表都已開放。作品繳交表含檔案上傳，須以 Google 帳號登入，請提前準備。
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <LinkButton href={links.signup} pendingLabel="報名即將開放">
                  報名表
                </LinkButton>
                <LinkButton href={links.submitWork} variant="secondary" pendingLabel="繳交表即將開放">
                  作品繳交表
                </LinkButton>
              </div>
            </div>
            <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
              <p className="text-lg font-black">匯款資訊</p>
              <dl className="mt-3 space-y-1 text-sm text-white/90">
                <div className="flex gap-2">
                  <dt className="w-16 shrink-0 text-white/60">戶名</dt>
                  <dd className="font-bold">{payment.accountName}</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-16 shrink-0 text-white/60">銀行</dt>
                  <dd className="font-bold">{payment.bank}（代號 {payment.bankCode}）</dd>
                </div>
                <div className="flex gap-2">
                  <dt className="w-16 shrink-0 text-white/60">帳號</dt>
                  <dd className="font-bold tracking-wider">{payment.accountNumber}</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-white/70">
                匯款時請在備註欄填上隊伍編號，並回覆報名確認信告知匯款日期與帳號末五碼，以利對帳。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
