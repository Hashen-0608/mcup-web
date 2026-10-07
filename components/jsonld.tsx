// 結構化資料（JSON-LD）：讓 Google 與 AI 助理看懂「這是什麼比賽、誰辦的、何時、多少錢、常見問題」。
// 內容全部從 content/ 讀，改文案不用改這裡。
import { site, organizers, faq } from "@/content/data";
import { links } from "@/content/links";

function Script({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

const hostOrgs = [
  { "@type": "Organization", name: organizers.host[0], url: links.alliance },
  { "@type": "Organization", name: organizers.host[1] },
];

/** 全站共用：網站與主辦單位 */
export function SiteJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        // Google 搜尋結果上方顯示的「網站名稱」取自這裡，越短越好
        name: "麥塊盃",
        alternateName: [site.fullName, ...site.alternateNames.filter((n) => n !== "麥塊盃")],
        url: site.url,
        inLanguage: site.locale,
        publisher: hostOrgs[0],
      }}
    />
  );
}

/** 首頁：賽事本身＋常見問題 */
export function HomeJsonLd() {
  const event = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: site.fullName,
    alternateName: site.alternateNames,
    description: site.seoDescription,
    url: site.url,
    image: [`${site.url}/hero-poster.jpg`],
    startDate: "2026-09-01T00:00:00+08:00",
    endDate: "2027-01-17T17:00:00+08:00",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    location: { "@type": "VirtualLocation", url: site.url },
    inLanguage: site.locale,
    organizer: hostOrgs,
    audience: { "@type": "EducationalAudience", educationalRole: "student", audienceType: "國小至高中學生" },
    offers: {
      "@type": "Offer",
      name: "報名費（每人）",
      price: 1000,
      priceCurrency: "TWD",
      url: `${site.url}/rules`,
      availability: "https://schema.org/InStock",
      validFrom: "2026-09-01T00:00:00+08:00",
      validThrough: "2026-10-15T23:59:00+08:00",
    },
  };
  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <>
      <Script data={event} />
      <Script data={faqPage} />
    </>
  );
}
