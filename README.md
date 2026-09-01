# 2026 麥塊盃官網（mcup-web）

2026 麥塊盃《Minecraft 教育版創意大賽》官方網站。主題「島嶼共生：台灣生物多樣性任務」。
純靜態站，用 **Next.js（App Router）+ Tailwind CSS** 打造，不接後端、不用資料庫，可直接免費部署到 Vercel。

---

## 一、這個網站長什麼樣

四個頁面：

| 路徑 | 內容 |
|---|---|
| `/` | 首頁：主視覺、一句話介紹＋報名 CTA、重要時程、賽事介紹、參賽資格、獎項、FAQ、報名與繳費 |
| `/rules` | 簡章全文（含錨點目錄） |
| `/news` | 最新消息 |
| `/history` | 2025 回顧：主題、決賽隊伍、成果影片、家長與選手好評 |

---

## 二、改內容不用會寫程式

**所有文字、日期、連結都集中在 `content/` 資料夾**，改這裡就好，不用動畫面元件：

- `content/data.ts`：全站文字（時程、資格、獎項、FAQ、最新消息、歷年成果…）
- `content/rules.ts`：簡章全文
- `content/links.ts`：所有外部連結與匯款資訊

### 表單連結怎麼放上去

報名表等 Google 表單連結還沒確定，先在 `content/links.ts` 用 `TODO` 佔位。
畫面上的按鈕會自動變成灰色的「即將公告」。等連結確定後，把 `TODO` 換成網址即可，例如：

```ts
// 改之前
signup: TODO,
// 改之後
signup: "https://forms.gle/你的表單網址",
```

存檔、推上 GitHub，Vercel 會自動重新部署，按鈕就會亮起來可以點。

---

## 三、在自己電腦上預覽（本機開發）

需要先安裝 [Node.js](https://nodejs.org/)（建議 LTS 版，18 以上）。

在這個資料夾打開終端機，依序執行：

```bash
npm install     # 第一次要跑，安裝套件（跑一次就好）
npm run dev     # 啟動本機預覽
```

看到 `Local: http://localhost:3000` 後，打開瀏覽器輸入 `http://localhost:3000` 就能看到網站。
改完內容存檔，瀏覽器會自動更新。要停止就在終端機按 `Ctrl + C`。

驗證正式版能正常打包：

```bash
npm run build   # 應顯示 Compiled successfully、四個頁面都出現
```

---

## 四、部署到 Vercel（免費、附網域）

只要做一次設定，之後每次把程式碼推上 GitHub，Vercel 就會自動更新網站。

1. 到 [vercel.com](https://vercel.com)，用 GitHub 帳號登入。
2. 按 **Add New… → Project**，選 `mcup-web` repository，按 **Import**。
3. Framework 會自動偵測為 **Next.js**，其他設定不用改，直接按 **Deploy**。
4. 等一兩分鐘，就會拿到一個網址，例如 `https://mcup-web.vercel.app`。

之後在 **Settings → Domains** 可以換成 `mcuptw.vercel.app` 之類好記的名稱（沒被用過即可）。

> 換網址後，記得同步更新 `content/data.ts` 裡的 `site.url`（影響 SEO 的 sitemap 與分享標籤）。

### 之後怎麼更新網站

在 GitHub 網頁上直接編輯 `content/` 裡的檔案並 Commit，Vercel 會自動重新部署，通常一兩分鐘就上線。

---

## 五、技術備註

- 框架：Next.js 14（App Router）、React 18、TypeScript、Tailwind CSS 3
- 字型：Noto Sans TC（以 `<link>` 從 Google Fonts 載入）
- SEO：每頁有獨立 title / description / OG 標籤，`lang="zh-Hant-TW"`，並內建 `sitemap.xml` 與 `robots.txt`
- 設計：橘黃 × 科技藍 × 白，色彩集中於 `tailwind.config.ts` 的 token；手機優先 RWD
- 主視覺：Hero 目前是漸層＋像素方塊風佔位，日後可把「島嶼共生」主視覺圖放進 `app/page.tsx` 的 Hero 圖片插槽

---

_2026 麥塊盃 · 主辦：臺灣機器人教育聯盟、Coin 麥塊教育團隊_
