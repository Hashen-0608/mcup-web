import type { Metadata } from "next";
import { news, site } from "@/content/data";
import { SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "最新消息",
  description: `${site.name}最新消息與公告：報名連結、各項表單與賽事通知將於此陸續發布。`,
  alternates: { canonical: "/news" },
};

export default function NewsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <SectionHeading eyebrow="NEWS" title="最新消息" center={false} />
      <div className="mt-10 space-y-8">
        {news.map((item) => (
          <article key={item.slug} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <time className="text-sm font-bold text-primary-600">{item.date}</time>
            <h2 className="mt-2 text-xl font-black text-secondary-700">{item.title}</h2>
            <div className="mt-4 space-y-3">
              {item.body.map((p, i) => (
                <p key={i} className="leading-relaxed text-ink/80">
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
