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
  paymentLog: TODO,        // 繳費登錄表
  // 作品繳交表（世界檔／黑板截圖／圖文檔／影片連結，12/13 截止）
  submitWork: "https://docs.google.com/forms/d/e/1FAIpQLSeE-0qzIYYF9SWzdV7NBCXgIQfiHZqHW01CZBs74DnRRR_4IA/viewform",




  // ── 圖文檔模板下載（放在官網 public/ 目錄）──
  // 註：中文檔名從 Windows 拖曳上傳會被截成 8.3 短檔名，故空白模板改用 ASCII 檔名
  docTemplateBlank: "/templates/mcup2026-template-blank.docx",
  docTemplateExample: "/templates/mcup2026-template-example.docx",




  // ── 官方社群與單位（已確定）──
  facebook: "https://www.facebook.com/mcuptw",
  line: "https://lin.ee/GxRdHjx",
  alliance: "https://www.taiwanrobot.org/",




  // ── 影音 ──
  video2025: "https://www.youtube.com/watch?v=ptqiTmfgw-s",
