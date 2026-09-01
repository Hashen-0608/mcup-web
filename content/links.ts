// 所有外部連結集中於此。小哈只需改這裡，不用碰元件。
// 未定的表單連結一律用 TODO 常數佔位，UI 會自動顯示「即將公告」並停用按鈕。

export const TODO = "TODO" as const;

/** 判斷連結是否尚未公告（等於 TODO 佔位）。 */
export function isPending(url: string): boolean {
  return url === TODO;
}

export const links = {
  // ── 表單（全部外連 Google Forms；未定者以 TODO 佔位）──
  signup: TODO,            // 報名表
  paymentLog: TODO,        // 繳費登錄表
  submitPrelim: TODO,      // 初賽作品繳交表
  submitVideo: TODO,       // 複賽影片上傳表
  pdfTemplate: TODO,       // 圖文檔 PDF 空白模板下載

  // ── 官方社群與單位（已確定）──
  facebook: "https://www.facebook.com/mcuptw",
  line: "https://lin.ee/GxRdHjx",
  alliance: "https://www.taiwanrobot.org/",

  // ── 影音 ──
  video2025: "https://www.youtube.com/watch?v=ptqiTmfgw-s",
} as const;

// 匯款繳費資訊（唯一事實來源＝簡章 v1）
export const payment = {
  accountName: "臺灣機器人教育聯盟",
  bank: "台灣土地銀行 斗六分行",
  bankCode: "005",
  accountNumber: "027001293902",
} as const;
