import type { Metadata } from "next";
import { history2025, site } from "@/content/data";
import { links } from "@/content/links";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "歷年成果",
  description: `${site.name}歷年成果：2025 首屆麥塊盃回顧、決賽隊伍名單、成果影片與家長選手好評。`,
  alternates: { canonical: "/history" },
};

// 取出 YouTube 影片 ID 供嵌入使用
function youtubeId(url: string): string {
  const m = url.match(/[?&]v=([^&]+)/);
  return m ? m[1] : "";
}

export default function HistoryPage() {
  const videoId = youtubeId(links.video2025);
  const { finalists, testimonials, stats } = history2025;

  return (
    <div className="mx-auto max-w-5xl px-4 py-16">
      <SectionHeading eyebrow="HISTORY" title={history2025.title} center={false} />

      {/* 2025 主題介紹 */}
      <div className="mt-6 rounded-2xl bg-secondary-50/60 p-6">
        <p className="text-sm font-bold text-primary-600">2025 主題</p>
        <p className="mt-1 text-lg font-black text-secondary-700">{history2025.themeName}</p>
        <p className="mt-3 leading-relaxed text-ink/80">{history2025.themeDesc}</p>
      </div>

      {/* 真實統計數字 */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-gray-100 p-6 text-center shadow-sm">
            <p className="text-4xl font-black text-primary-500">{s.value}</p>
            <p className="mt-1 text-sm font-bold text-secondary-700">{s.label}</p>
          </div>
        ))}
      </div>

      {/* 成果影片 */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-black text-secondary-700">{history2025.videoTitle}</h2>
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-black shadow">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title={history2025.videoTitle}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* 決賽隊伍名單 */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-black text-secondary-700">2025 決賽隊伍</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="mb-3 inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm font-black text-primary-700">
              國小組（9 隊）
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-ink/80">
              {finalists.elementary.map((t) => (
                <li key={t} className="rounded-lg bg-gray-50 px-3 py-2">{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-gray-100 p-6 shadow-sm">
            <p className="mb-3 inline-block rounded-lg bg-secondary-100 px-3 py-1 text-sm font-black text-secondary-700">
              國高中組（4 隊）
            </p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-ink/80">
              {finalists.secondary.map((t) => (
                <li key={t} className="rounded-lg bg-gray-50 px-3 py-2">{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mt-3 text-xs text-ink/50">＊依大會隱私原則，選手姓名不對外公開，此處僅列隊名。</p>
      </div>

      {/* 好評 */}
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-black text-secondary-700">家長與選手好評</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <blockquote className="leading-relaxed text-ink/80">「{t.text}」</blockquote>
              <figcaption className="mt-4 text-sm font-bold text-primary-600">— {t.who}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
