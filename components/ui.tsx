import Link from "next/link";
import { isPending } from "@/content/links";
import { site, organizers } from "@/content/data";
import { links } from "@/content/links";

/** 區塊標題：小標籤 + 主標題。 */
export function SectionHeading({
  eyebrow,
  title,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : "text-left"}>
      {eyebrow && (
        <p className="mb-2 text-sm font-bold tracking-widest text-primary-600">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-black text-secondary-700 sm:text-3xl">{title}</h2>
    </div>
  );
}

type ButtonVariant = "primary" | "secondary" | "outline";

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-primary-500 text-white hover:bg-primary-600",
  secondary: "bg-secondary-500 text-white hover:bg-secondary-600",
  outline: "border-2 border-secondary-500 text-secondary-600 hover:bg-secondary-50",
};

/**
 * 連結按鈕：若連結尚未公告（TODO 佔位），自動顯示「即將公告」並停用，
 * 讓小哈日後只需把 links.ts 的 TODO 換成網址即可上線。
 */
export function LinkButton({
  href,
  children,
  variant = "primary",
  pendingLabel,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  pendingLabel?: string;
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-base font-bold shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2";

  if (isPending(href)) {
    return (
      <span
        aria-disabled="true"
        title="連結即將公告"
        className={`${base} cursor-not-allowed bg-gray-200 text-gray-500 shadow-none ${className}`}
      >
        {pendingLabel ?? "即將公告"}
      </span>
    );
  }

  const isExternal = href.startsWith("http");
  const cls = `${base} ${variantClass[variant]} ${className}`;
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

/** 頁尾。 */
export function Footer() {
  return (
    <footer className="mt-20 bg-secondary-700 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="text-xl font-black">{site.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-secondary-100">
              {site.theme}
              <br />
              Minecraft 教育版運算思維創意大賽
            </p>
          </div>

          <div>
            <p className="mb-3 font-bold">追蹤我們</p>
            <ul className="space-y-2 text-sm text-secondary-100">
              <li>
                <a href={links.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-primary-100">
                  Facebook 粉絲專頁
                </a>
              </li>
              <li>
                <a href={links.line} target="_blank" rel="noopener noreferrer" className="hover:text-primary-100">
                  LINE 官方帳號
                </a>
              </li>
              <li>
                <a href={links.alliance} target="_blank" rel="noopener noreferrer" className="hover:text-primary-100">
                  臺灣機器人教育聯盟
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="mb-3 font-bold">主辦與協辦單位</p>
            <p className="text-xs leading-relaxed text-secondary-100">
              指導：{organizers.guidance.join("、")}
              <br />
              主辦：{organizers.host.join("、")}
              <br />
              協辦：{organizers.coHost.join("、")}
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-secondary-100">
          © 2026 麥塊盃 Minecraft 教育版創意大賽．由臺灣機器人教育聯盟與 Coin 麥塊教育團隊主辦
        </div>
      </div>
    </footer>
  );
}
