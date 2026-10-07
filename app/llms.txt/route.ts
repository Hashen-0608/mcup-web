// /llms.txt：給 AI 助理（ChatGPT、Gemini、Claude、Perplexity 等）讀的純文字重點摘要。
// 內容從 content/ 自動產生，改官網文案時這裡會跟著更新。
import { site, organizers, schedule, faq, scoring } from "@/content/data";
import { links, rulesVersion } from "@/content/links";

export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.fullName}`,
    "",
    `> ${site.seoDescription}`,
    "",
    `別名：${site.alternateNames.join("、")}`,
    `主題：${site.theme}`,
    organizers.guidance.length > 0 ? `指導單位：${organizers.guidance.join("、")}` : "",
    `主辦單位：${organizers.host.join("、")}`,
    `協辦單位：${organizers.coHost.join("、")}`,
    "",
    "## 重要時程",
    ...schedule.map((s) => `- ${s.date}　${s.label}：${s.note}`),
    "",
    "## 評分標準",
    ...scoring.map((s) => `- ${s.item} ${s.weight}%：${s.desc}`),
    "",
    "## 常見問題",
    ...faq.flatMap((f) => [`### ${f.q}`, f.a, ""]),
    "## 連結",
    `- [官網首頁](${site.url})`,
    `- [簡章全文](${site.url}/rules)`,
    `- [簡章 PDF ${rulesVersion.label}](${site.url}${links.rulesPdf})`,
    `- [作品繳交說明](${site.url}/submit)`,
    `- [歷年成果](${site.url}/history)`,
    `- [Facebook 粉絲專頁](${links.facebook})`,
    `- [LINE 官方帳號](${links.line})`,
  ].filter((l, i, a) => !(l === "" && a[i - 1] === ""));
  return new Response(lines.join("\n"), {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}
