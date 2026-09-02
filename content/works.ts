// 歷年參賽作品展示。圖片放在 public/works/。
// 隊名為對外公開之隊伍名稱；選手個人姓名一律不列出。

export type Work = {
  img: string;
  title: string;
  team: string;
  desc: string;
};

export type WorkYear = {
  year: string;
  theme: string;
  works: Work[];
};

export const workYears: WorkYear[] = [
  {
    year: "2025",
    theme: "古蹟與遺跡",
    works: [
      {
        img: "/works/w2025-01-athena.jpg",
        title: "雅典娜神殿及金字塔的危機",
        team: "林小資",
        desc:
          "跨文明結合雅典娜神殿與埃及金字塔。神殿後花園生氣蓬勃，金字塔內部則設有通往天堂的台階與象徵信仰的太陽。",
      },
      {
        img: "/works/w2025-02-budokan.jpg",
        title: "高雄武德殿（鼓山）",
        team: "CSK麥塊隊",
        desc:
          "精準還原全台少數保存宏偉的日式武館。作品細緻呈現「入母屋」式屋頂與「唐破風」入口，連柱面上的箭形浮雕等細節都精確捕捉。",
      },
      {
        img: "/works/w2025-03-fengyi.jpg",
        title: "鳳儀華茲未來學院",
        team: "夏天的貓頭鷹",
        desc:
          "將「鳳儀書院」與「霍格華茲」奇幻結合。外觀保留傳統紅磚，內部卻配置了 AI 餐廳服務生、智慧教室、魚菜共生與 KTV 等創生特色，讓人印象深刻。",
      },
      {
        img: "/works/w2025-04-tajmahal.jpg",
        title: "泰姬瑪哈陵的倒影",
        team: "皮蛋拿去洗",
        desc:
          "作品的\u85DD術深度與故事敘述非常卓越。不僅運用進階的程式取代技術達成完美對稱，更透過「白與黑、生與死、光與影」的意象，深刻詮釋泰姬瑪哈陵背後那段動人的愛情與歷史傳說。",
      },
      {
        img: "/works/w2025-05-pisa.jpg",
        title: "比薩斜塔",
        team: "吃披薩的人",
        desc:
          "優秀的空間導覽設計，作品中安排了藍衣導遊 NPC 帶領玩家傳送，並利用壓力板與指令解決黑暗中的視力問題，讓參觀過程既壯麗又流暢。",
      },
      {
        img: "/works/w2025-06-kinmen.jpg",
        title: "金門古厝",
        team: "小哈超速隊",
        desc:
          "生動還原金門三合院特色，包含威風的燕尾與圓潤的馬背屋頂，並加入金門特色風獅爺、電話亭與軍事坑道。結合創意遊戲化設計，玩家在修補遺跡的過程中，能透過指令方塊觸發正廳燈光，將文化學習與解謎互動完美結合。",
      },
    ],
  },
  {
    year: "2023",
    theme: "宇宙",
    works: [
      {
        img: "/works/y2023-zodiac.jpg",
        title: "黃道十二宮",
        team: "2023 參賽作品",
        desc: "以行星軌道環繞的方式重現黃道十二宮，中央恆星與各星球依序排列，是一件尺度驚人的大型建築。",
      },
      {
        img: "/works/y2023-satellite.jpg",
        title: "低軌衛星",
        team: "2023 參賽作品",
        desc: "以方塊結構重現低軌衛星的太陽能板、天線與拋物面反射器，並在建造中呈現結構骨架。",
      },
    ],
  },
  {
    year: "2022",
    theme: "台灣特色建築",
    works: [
      {
        img: "/works/y2022-fgs.jpg",
        title: "佛光山",
        team: "2022 參賽作品",
        desc: "重現佛光山的塔林與中軸參道，兩側寶塔層層出簷，中央大道直通主殿，展現大型宗教建築的秩序與氣勢。",
      },
    ],
  },
];
