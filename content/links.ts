// 所有外部連結集中於此。小哈只需改這裡，不用碰元件。
// 未定的連結一律用 TODO 常數佔位，UI 會自動顯示「即將公告」並停用按鈕。

export const TODO = "TODO" as const;

/** 判斷連結是否尚未公告（等於 TODO 佔位）。 */
export function isPending(url: string): boolean {
  return url === TODO;
}

export const links = {
  // ── Google 表單（未定者以 TODO 佔位）──
  // 報名表（2026/9/1–10/15 開放）
  signup: "https://docs.google.com/forms/d/e/1FAIpQLScjAOh_nY4_6q8Y_TVRhmMnviw33H-p3CgJ5fyvUOgfHc7xig/viewform",
  // 匯款完成單（匯款後填寫，供大會與銀行明細對帳）
  paymentLog: "https://docs.google.com/forms/d/e/1FAIpQLScyH7EhahIEhJ0_onOYykvbJgXY9QHkfqDEjrpPeP1QRGE3Eg/viewform",
  // 作品繳交表（世界檔／黑板截圖／圖文檔／影片連結，12/13 截止）
  submitWork: "https://docs.google.com/forms/d/e/1FAIpQLSeE-0qzIYYF9SWzdV7NBCXgIQfiHZqHW01CZBs74DnRRR_4IA/viewform",

  // ── 簡章 PDF（檔名帶版本日期；每次改版換新檔名並更新這裡）──
  rulesPdf: "/downloads/rules-20260904-v8.pdf",

  // ── 圖文檔模板下載（放在官網 public/ 目錄）──
  // 註：中文檔名從 Windows 拖曳上傳時會被截成 8.3 短檔名，故改用 ASCII 檔名
  docTemplateBlank: "/templates/mcup2026-template-blank.docx",
  docTemplateExample: "/templates/mcup2026-template-example.docx",

  // ── 官方社群與單位（已確定）──
  facebook: "https://www.facebook.com/mcuptw",
  line: "https://lin.ee/GxRdHjx",
  alliance: "https://www.taiwanrobot.org/",

  // ── 影音 ──
  video2025: "https://www.youtube.com/watch?v=ptqiTmfgw-s",
} as const;

// 簡章版本資訊（供官網顯示與 PDF 下載檔名使用）
export const rulesVersion = {
  label: "v8",
  date: "2026-09-04",
  /** 使用者下載後看到的檔名 */
  downloadName: "2026麥塊盃簡章_v8_20260904.pdf",
} as const;

// 匯款繳費資訊（唯一事實來源＝簡章 v4）
export const payment = {
  accountName: "臺灣機器人教育聯盟",
  bank: "台灣土地銀行 斗六分行",
  bankCode: "005",
  accountNumber: "027001293902",
} as const;
