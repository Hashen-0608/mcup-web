import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/content/data";
import { Nav, Footer } from "@/components/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.seoTitle,
    template: `%s｜${site.name}`,
  },
  description: site.seoDescription,
  keywords: ["麥塊盃", "Minecraft 教育版", "運算思維", "創意大賽", "程式教育", "生物多樣性", "台灣"],
  alternates: { canonical: "/" },
  icons: {
    icon: "/mccup-favicon.png",
    apple: "/mccup-apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: site.url,
    siteName: site.name,
    title: site.seoTitle,
    description: site.seoDescription,
    // 主視覺 key-visual.jpg 印著舊主題，暫改用影片靜幀（純生態場景、無文字）
  images: [{ url: "/hero-poster.jpg", width: 1280, height: 720, alt: `${site.name}：${site.theme}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: site.seoTitle,
    description: site.seoDescription,
    images: ["/hero-poster.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant-TW">
      <head>
        {/* Noto Sans TC 以 link 載入，避免 build 期抓字型失敗；正式站可再改自架 */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
