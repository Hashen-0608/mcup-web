import type { Metadata } from "next";
import { history2025, site } from "@/content/data";
import { links } from "@/content/links";
import { workYears } from "@/content/works";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "歷年成果",
  description: `${site.name}歷年成果：2025 首屆麥塊盃回顧、決賽隊伍名單、成果影片與選手心得。`,
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

      {/* 2025 頒獎典禮 */}
      <div className="mt-16">
        <h2 className="text-xl font-black text-secondary-700">2025 線上頒獎典禮</h2>
        <p className="mt-2 leading-relaxed text-ink/70">
          為了讓成果被更多人看見，2025 首次舉辦線上頒獎典禮。我們把所有入圍決賽的作品
          <span className="font-bold text-secondary-700">合併成同一張世界地圖</span>——
          當你能在一張地圖裡從「金門古厝」走到「總統府」，再走到「泰姬瑪哈陵」，
          那份工程的浩大就都值得了。
        </p>

        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/works/c2025-02-worldmap.jpg"
            alt="2025 麥塊盃：所有決賽作品合併而成的世界地圖空拍"
            loading="lazy"
            className="w-full"
          />
          <p className="bg-secondary-50/60 px-5 py-3 text-sm text-ink/70">
            決賽作品合併地圖：羅馬競技場、總統府、金字塔、泰姬瑪哈陵、比薩斜塔、武德殿與金門古厝同框。
          </p>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          {[
            { img: "/works/c2025-01-stage.jpg", cap: "典禮會場：彩虹拱門與獎盃主舞台" },
            { img: "/works/c2025-03-plaza.jpg", cap: "觀禮席，正對決賽作品群" },
            { img: "/works/c2025-04-trophy.jpg", cap: "選手在獎盃前合影" },
          ].map((c) => (
            <figure key={c.img} className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.img} alt={c.cap} loading="lazy" className="h-48 w-full object-cover" />
              <figcaption className="px-4 py-3 text-xs leading-relaxed text-ink/60">{c.cap}</figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* 歷年作品展示 */}
      <div className="mt-16">
        <h2 className="text-xl font-black text-secondary-700">歷年參賽作品</h2>
        <p className="mt-2 leading-relaxed text-ink/70">
          這些都是孩子親手在 Minecraft 教育版裡蓋出來的。從還原一棟古蹟的屋頂細節，到用程式做出完美對稱的建築、
          用指令方塊設計一段互動導覽——他們花的功夫，遠比一張照片看起來的多。
        </p>

        {workYears.map((y) => (
          <section key={y.year} className="mt-10">
            <div className="mb-5 flex flex-wrap items-baseline gap-3">
              <span className="rounded-lg bg-primary-500 px-3 py-1 text-sm font-black text-white">{y.year}</span>
              <span className="font-bold text-secondary-700">主題：{y.theme}</span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {y.works.map((w) => (
                <figure
                  key={w.img}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="overflow-hidden bg-gray-100">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={w.img}
                      alt={`${y.year} 麥塊盃參賽作品：${w.title}`}
                      loading="lazy"
                      className="w-full transition-transform duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="p-5">
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="font-black text-secondary-700">{w.title}</h3>
                      <span className="rounded-md bg-secondary-50 px-2 py-0.5 text-xs font-bold text-secondary-600">
                        {w.team}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{w.desc}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        ))}

        <p className="mt-6 text-xs text-ink/50">
          ＊以上皆為歷屆選手之參賽作品，經授權公開展示；依大會隱私原則僅標示隊名，不列出選手姓名。
        </p>
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
        <h2 className="mb-4 text-xl font-black text-secondary-700">選手心得</h2>
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
