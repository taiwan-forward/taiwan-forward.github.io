/**
 * Taiwan Forward — research status view content (bilingual EN / zh-TW).
 *
 * An honest account of what has been researched and verified, what is in
 * progress, and what is planned but not yet begun. The source registry
 * itself is rendered separately on the Data & Sources view; this content
 * describes verification state, not individual sources.
 */

import type { LText } from "@/lib/i18n";

export interface StatusLegendItem {
  id: "published" | "in-progress" | "planned" | "insufficient-evidence";
  title: LText;
  desc: LText;
}

export interface StatusContent {
  intro: LText;
  legend: StatusLegendItem[];
  published: {
    title: LText;
    intro: LText;
    items: { title: LText; view: "chapter-01"; desc: LText; lastUpdate: string }[];
  };
  planned: { title: LText; intro: LText; paragraphs: LText[] };
  cadence: { title: LText; paragraphs: LText[] };
  pendingVerification: { title: LText; paragraphs: LText[] };
}

export const statusContent: StatusContent = {
  intro: {
    en: "This page gives an honest account of what has been researched and verified, what is in progress, and what is planned but not yet begun. Nothing on this site claims completed investigation for a subject that has not been researched. The full provenance of every published figure — sources, access dates, methods, limitations — is recorded in the registry on the Data & Sources page.",
    zh: "本頁如實說明：哪些主題已完成研究並核驗、哪些正在進行、哪些已規劃但尚未開始。本網站不會為尚未研究的主題，宣稱已完成調查。每一個發布數字的完整出處——來源、查閱日期、方法、限制——均記錄於「資料與來源」頁的登記冊中。",
  },
  legend: [
    {
      id: "published",
      title: { en: "Published", zh: "已出版" },
      desc: {
        en: "Research completed and verified: figures trace to registered sources, limitations are documented, and the chapter has been reviewed before release. Each published chapter records the date of its last substantive update.",
        zh: "研究已完成並核驗：數字可追溯至已登錄的來源、限制均已載明，且章節於發布前完成審閱。每一個已出版章節，都記錄最後實質更新的日期。",
      },
    },
    {
      id: "in-progress",
      title: { en: "In progress", zh: "研究進行中" },
      desc: {
        en: "Research is underway: sources are being gathered, checked, and verified. No substantive findings are published until verification is complete — an in-progress chapter may state its scope, never its conclusions.",
        zh: "研究正在進行：來源的蒐集、檢查與核驗持續展開。在核驗完成之前，不發布任何實質發現——進行中的章節可以說明範圍，但不會給出結論。",
      },
    },
    {
      id: "planned",
      title: { en: "Planned", zh: "已規劃" },
      desc: {
        en: "The topic is on the research roadmap with a defined scope, but verification work has not yet begun. Descriptions of planned topics indicate intended scope — not findings, and not conclusions.",
        zh: "主題已列入研究藍圖並界定範圍，但查證工作尚未展開。規劃主題的說明僅代表預定範圍——不是研究發現，也不是結論。",
      },
    },
    {
      id: "insufficient-evidence",
      title: { en: "Insufficient evidence", zh: "證據不足" },
      desc: {
        en: "A topic we would like to examine, but where reliable evidence is not currently available to us — because the data does not exist, is not accessible, or cannot be verified. Such topics are described honestly as blocked rather than filled with estimates or borrowed figures.",
        zh: "我們希望檢視、但目前無法取得可靠證據的主題——因為資料不存在、無法取得，或無法核驗。這類主題會誠實地標示為受阻，而不是以估計值或借來的數字填補。",
      },
    },
  ],
  published: {
    title: { en: "Published research", zh: "已出版研究" },
    intro: {
      en: "One chapter has completed verification and is published in full — with interactive charts, documented sources, and honest treatment of uncertainty. Its scope is deliberately narrow: it presents only what could be verified.",
      zh: "目前有一章已完成核驗並完整出版——包含互動圖表、完整出處紀錄，以及對不確定性的誠實處理。它的範圍經過刻意限縮：只呈現能夠核驗的內容。",
    },
    items: [
      {
        title: { en: "Chapter 01 — Population and Family", zh: "第一章——人口與家庭" },
        view: "chapter-01",
        desc: {
          en: "Vital statistics from the Ministry of the Interior covering 1958–2025: births, deaths, and natural increase; the total fertility rate (0.695 in 2025, among the lowest recorded worldwide); age structure (65+ reached 20.06% in 2025, crossing the super-aged threshold); and international comparisons of fertility and 65+ shares.",
          zh: "內政部出生死亡統計，涵蓋 1958–2025：出生、死亡與自然增加；總生育率（2025 年為 0.695，為全球有紀錄以來最低之列）；年齡結構（65 歲以上於 2025 年達 20.06%，跨越超高齡社會門檻）；以及生育率與 65 歲以上占比的國際比較。",
        },
        lastUpdate: "2026-10-22",
      },
    ],
  },
  planned: {
    title: { en: "Planned research", zh: "已規劃研究" },
    intro: {
      en: "The remaining thirteen dimensions — from Economy and Industry (02) through Safety and Societal Resilience (14) — are planned. Their scopes are defined in the Research Overview; their verification has not yet begun, and no findings are implied.",
      zh: "其餘十三個面向——從經濟與產業（02）到安全與社會韌性（14）——目前均為已規劃狀態。各面向的範圍已於「研究總覽」界定；查證工作尚未展開，也不預設任何研究發現。",
    },
    paragraphs: [
      {
        en: "We publish fewer verified chapters rather than covering all fourteen dimensions superficially. A truthful, partially populated research website is preferable to a visually complete website containing fabricated evidence — filling every page with unverified numbers would be faster, and worthless.",
        zh: "我們寧可出版較少但經過核驗的章節，也不願膚淺地覆蓋全部十四個面向。一個真實而部分完成的研究網站，優於一個視覺上完整、內容卻摻有虛構證據的網站——用未經核驗的數字填滿每一頁會更快，但毫無價值。",
      },
      {
        en: "Prioritization follows data availability and verification capacity: dimensions with accessible, verifiable primary sources are researched first. Population was chosen first because Taiwan's official demographic statistics are exceptionally complete, openly published, and long-running — the series used in Chapter 01 spans 1958–2025.",
        zh: "優先順序依資料可得性與核驗量能而定：擁有可取得、可核驗一手來源的面向優先研究。人口之所以列為首章，是因為台灣的官方人口統計格外完整、公開發布且序列悠久——第一章採用的序列即橫跨 1958 至 2025 年。",
      },
      {
        en: "As chapters complete verification, they will be published and this page updated. The order of publication is a statement about data access and verification capacity — not a judgment about which topics matter most.",
        zh: "各章完成核驗後即會出版，本頁也將同步更新。出版順序反映的是資料取得與核驗量能——而不是對「哪些主題最重要」的判斷。",
      },
    ],
  },
  cadence: {
    title: { en: "Update cadence", zh: "更新節奏" },
    paragraphs: [
      {
        en: "Chapters are published when verification is complete, not on a fixed calendar. We would rather be slow and right than punctual and wrong; a date-driven schedule would create pressure to publish before figures are verified, which is exactly the failure mode this project exists to avoid.",
        zh: "各章於核驗完成時出版，而非依固定日曆。我們寧可慢而正確，也不願準時而出錯；以日期驅動的時程，會產生在數字核驗完成前搶先發布的壓力——而這正是本計畫存在要避免的失敗模式。",
      },
      {
        en: "The source registry records the access date of every source. Statistics are revised and series are re-benchmarked over time, so each access date tells you how current our verification is.",
        zh: "來源登記冊記錄每一筆來源的查閱日期。統計會隨時間修訂、序列會重新基準化，因此每個查閱日期，都告訴你我們的核驗有多新。",
      },
      {
        en: "Significant corrections and updates are documented — on this page and in the affected source entries — rather than silently applied. When a published figure changes, you will be able to see that it changed, and why.",
        zh: "重大更正與更新都會留下紀錄——在本頁及受影響的來源條目中——而不是默默套用。當一個已發布的數字變動時，你將能看見它變動了，以及為什麼變動。",
      },
    ],
  },
  pendingVerification: {
    title: { en: "Pending verification", zh: "待核驗事項" },
    paragraphs: [
      {
        en: "Some material is relevant to published chapters but has not yet been verified to our standard, and we disclose it rather than hide it. Currently pending: specific values from the National Development Council's 2022 population projections to 2070, which are pending verification against the primary publication — Chapter 01 therefore describes the projected direction of change only qualitatively, and charts no projected numbers; and more recent fertility releases from the UK's Office for National Statistics (2023–2024), where the verified 2021 value is shown instead of an unverified newer one.",
        zh: "有些材料與已出版章節相關，但尚未達到我們的核驗標準；我們選擇揭露，而不是隱藏。目前待核驗者包括：國家發展委員會 2022 年「中華民國人口推估」（推估至 2070 年）的特定數值，尚待對照原始出版品核驗——因此第一章僅定性描述推估的變動方向，未繪製任何推估數值；以及英國國家統計局（ONS）較新的生育率發布（2023–2024 年），在其完成重新核驗前，先呈現已核驗的 2021 年數值，而非未經核驗的較新值。",
      },
      {
        en: "“Pending verification” means a figure may be described qualitatively or omitted, but is never published as fact. When verification is completed, the value enters the source registry with its source, access date, and limitations — and the affected text and charts are updated accordingly.",
        zh: "「待核驗」意謂：一個數字可以被定性描述或省略，但絕不以事實之名發布。一旦核驗完成，該數值便連同來源、查閱日期與限制進入來源登記冊——受影響的文字與圖表也會隨之更新。",
      },
    ],
  },
};
