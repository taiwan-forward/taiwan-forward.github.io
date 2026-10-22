/**
 * Taiwan Forward — about view content (bilingual EN / zh-TW).
 *
 * Project identity, working principles, what neutrality means here, the
 * medical-examination analogy, the public disclaimer, related public-interest
 * projects, the corrections policy, and licensing terms.
 */

import type { LText } from "@/lib/i18n";

export interface AboutContent {
  identity: { title: LText; paragraphs: LText[] };
  principles: { title: LText; items: LText[] };
  neutrality: { title: LText; paragraphs: LText[] };
  medicalAnalogy: { title: LText; paragraphs: LText[] };
  disclaimer: { title: LText; text: LText };
  related: {
    title: LText;
    intro: LText;
    projects: { name: string; url: string; desc: LText }[];
  };
  corrections: { title: LText; paragraphs: LText[] };
  license: { title: LText; paragraphs: LText[] };
}

export const aboutContent: AboutContent = {
  identity: {
    title: { en: "What Taiwan Forward is", zh: "台灣向前是什麼" },
    paragraphs: [
      {
        en: "Taiwan Forward (台灣向前) is an independent, nonpartisan, non-commercial, evidence-based educational project examining the societal conditions of Taiwan. It works like a comprehensive medical examination: observe the evidence first, verify it, compare it internationally, investigate explanations, evaluate what has been studied, and identify realistic actions. Understand today. Improve tomorrow.",
        zh: "台灣向前（Taiwan Forward）是一個獨立、無黨派、非商業、以證據為基礎的教育性計畫，檢視台灣的社會狀況。它的運作方式如同一次完整的健康檢查：先觀察證據，繼而查證，進行國際比較，探究解釋，評估已被研究過的做法，再指出切實可行的行動。理解今天，改善明天。",
      },
      {
        en: "The project is organized around fourteen dimensions of societal life — from population and family to safety and resilience — each examined with the same discipline: no claims without verified sources, no conclusions beyond the evidence, no numbers without reference years. Chapters are published only when verification is complete, which is why one chapter is published today while thirteen are honestly marked as planned.",
        zh: "本計畫以十四個社會生活的面向為架構——從人口與家庭到安全與韌性——每一個面向都接受同樣的紀律：沒有經核驗的來源就不下主張，證據到哪裡、結論就到哪裡，沒有參考年份的數字一律不採用。各章僅在核驗完成後出版——這也是為什麼目前只出版了一章，而其餘十三章誠實地標示為已規劃。",
      },
      {
        en: "The site is bilingual by design — English and Traditional Chinese, written as equivalent texts rather than as an afterthought translation. The project is independent of any political party, government agency, advocacy group, or company. It does not represent all Taiwanese people and does not speak on behalf of Taiwan's government; it represents the disciplined application of a documented method to public evidence.",
        zh: "本網站以雙語設計——英文與繁體中文並重，兩種語文是對等的文本，而非事後補上的翻譯。本計畫獨立於任何政黨、政府機關、倡議團體或公司；不代表全體台灣人民，也不代表台灣政府發言。它所代表的，是一套記錄在案的方法，對公開證據的嚴謹運用。",
      },
    ],
  },
  principles: {
    title: { en: "Working principles", zh: "工作原則" },
    items: [
      {
        en: "Independent — no affiliation with, sponsorship by, or endorsement from any political party, government agency, advocacy group, or company.",
        zh: "獨立——不隸屬、不受贊助，也未獲任何政黨、政府機關、倡議團體或公司背書。",
      },
      {
        en: "Nonpartisan — no political stance, endorsement, or campaign; evidence does not carry a party color.",
        zh: "無黨派——沒有政治立場、支持對象或競選活動；證據沒有黨派顏色。",
      },
      {
        en: "Non-commercial — no advertising, sponsorship, or revenue; nothing on this site is for sale.",
        zh: "非商業——沒有廣告、贊助或營收；本站沒有任何東西在販售。",
      },
      {
        en: "Evidence-based — every published claim traces to a verifiable source; what cannot be verified is not published as fact.",
        zh: "以證據為基礎——每一個發布的主張都追溯到可驗證的來源；無法驗證的內容，不以事實之名發布。",
      },
      {
        en: "Internationally contextualized — wherever compatible data exists, Taiwan's figures are placed in international comparison.",
        zh: "國際脈絡——只要存在相容的資料，台灣的數字都會放入國際比較的脈絡。",
      },
      {
        en: "Transparent about uncertainty — limitations, gaps, and pending verifications are stated plainly, not smoothed over.",
        zh: "對不確定性透明——限制、缺口與待核驗事項都明白說明，不加以修飾。",
      },
      {
        en: "Accessible — bilingual, readable, and usable without a specialized background.",
        zh: "易於近用——雙語、可讀，無需專業背景即可使用。",
      },
      {
        en: "Respectful — no alarmism, no blame, no contempt for any group.",
        zh: "尊重——不煽動恐慌、不指責、不輕蔑任何群體。",
      },
      {
        en: "Constructive — understanding is connected to realistic possibilities for improvement.",
        zh: "建設性——將理解連結到切實可行的改善方向。",
      },
      {
        en: "Open to correction — errors, once verified, are corrected and documented.",
        zh: "接受更正——一經查證屬實的錯誤，即更正並留下紀錄。",
      },
    ],
  },
  neutrality: {
    title: { en: "What neutrality means here", zh: "中立對本計畫的意義" },
    paragraphs: [
      {
        en: "Neutrality does not mean giving equal credibility to every claim. Where evidence is strong, we report it as strong; where it is weak or absent, we say so. Giving a supported finding and an unsupported assertion equal weight would not be neutrality — it would be inaccuracy. Evidence quality takes priority over the appearance of balance.",
        zh: "中立，不代表對每一種主張給予同等的可信度。證據堅實之處，我們如實報導其堅實；證據薄弱或闕如之處，我們如實說明。把有依據的發現與無依據的斷言放在同等地位，並不是中立——而是不正確。證據品質的優先順序，高於表面上的平衡。",
      },
      {
        en: "In practice, neutrality means: no affiliation with any political party, government, or advocacy group; no endorsements and no campaigns; a deliberately restrained visual identity free of associations with any party or movement; and a comparison framework that does not select countries to produce a desired conclusion.",
        zh: "在實務上，中立意謂：不隸屬於任何政黨、政府或倡議團體；沒有背書、沒有競選活動；刻意克制的視覺識別，避免與任何政黨或運動產生聯想；以及一套不會為了得出特定結論而挑選國家的比較架構。",
      },
      {
        en: "Neutrality also does not mean avoiding inconvenient evidence. If verified findings are uncomfortable, they are published anyway — omitting them would itself be a position, and a dishonest one.",
        zh: "中立也不代表迴避不便的證據。若經核驗的發現令人不安，我們照樣發布——省略它們本身就是一種立場，而且是不誠實的立場。",
      },
      {
        en: "One further admission belongs here, because honesty requires it: a project like this involves subjective choices — which topics to research first, how to frame a section, which comparisons to show. We mitigate those choices with a documented method, open data, and openness to correction, but we cannot guarantee a view from nowhere. Readers are encouraged to consult the primary sources and judge for themselves.",
        zh: "還有一件事必須坦白，因為誠實要求如此：這樣的計畫必然包含主觀選擇——先研究哪個主題、章節如何鋪陳、呈現哪些比較。我們以記錄在案的方法、公開的資料與接受更正的態度來降低這些選擇的影響，但無法保證一個「無立場」的視角。我們鼓勵讀者查閱原始來源，自行判斷。",
      },
    ],
  },
  medicalAnalogy: {
    title: { en: "About the medical analogy", zh: "關於健康檢查的比喻" },
    paragraphs: [
      {
        en: "Taiwan Forward often describes itself as a comprehensive medical examination for Taiwan's societal conditions. The metaphor describes the method of investigation, not a verdict. A good examination observes before interpreting, verifies before concluding, compares results against reference values, investigates causes, evaluates treatments, and ends with practical guidance — observe, verify, compare, investigate, evaluate, act.",
        zh: "台灣向前常自述為台灣社會狀況的一次完整健康檢查。這個比喻描述的是調查方法，而非判決。一次好的檢查，先觀察再解讀、先查證再下結論，將結果與參考值對照，探究成因，評估療法，最後給出務實的建議——觀察、查證、比較、探究、評估、行動。",
      },
      {
        en: "It is explicitly not a diagnosis of a “sick” society, and there is no blaming the patient. A society, like a person, is not at fault for its measurable conditions. An examination that found nothing worth attention would be as suspicious as one that found only catastrophe.",
        zh: "它明確不是對「病態社會」的診斷，也沒有責怪病人這回事。社會如同個人，不會因為可測量的現況而「有錯」。一次什麼問題都找不到的檢查，與一次只找得到災難的檢查，同樣可疑。",
      },
      {
        en: "Consistent with this, the project documents strengths as carefully as challenges. Chapter 01, for example, records Taiwan's life expectancy of 80.77 years (2024) — among the higher national figures in the world — alongside record-low fertility. The purpose of an examination is not judgment but informed improvement.",
        zh: "與此一致，本計畫以同等仔細的態度記錄優勢與挑戰。以第一章為例，在記錄全球罕見低點的生育率之餘，也記錄了台灣 2024 年平均壽命 80.77 歲——位居世界前列的水準。健康檢查的目的不是評斷，而是知情之後的改善。",
      },
    ],
  },
  disclaimer: {
    title: { en: "Public disclaimer", zh: "公開聲明" },
    text: {
      en: "Taiwan Forward is an independent, non-commercial, evidence-based educational project. It is not affiliated with, sponsored by, or endorsed by any political party, government agency, advocacy group, or other organization referenced on this website.\n\nThe project aims to examine Taiwan's societal conditions through transparent research, international comparison, and constructive reflection. Research findings are subject to the availability, quality, and limitations of the underlying evidence.\n\nReferences to external organizations do not imply endorsement. All third-party content and data remain subject to their respective attribution and licensing requirements.",
      zh: "台灣向前是一個獨立、非商業、以證據為基礎的教育性計畫，與本網站所引用之任何政黨、政府機關、倡議團體或其他組織，均無從屬、贊助或背書關係。\n\n本計畫旨在透過透明的研究、國際比較與建設性的反思，檢視台灣的社會狀況。研究結論受既有證據之可得性、品質與限制所影響。\n\n引用外部組織不代表為其背書；所有第三方內容與數據，仍受其各自之署名與授權條件規範。",
    },
  },
  related: {
    title: { en: "Related public-interest projects", zh: "相關公益性計畫" },
    intro: {
      en: "Taiwan Forward follows two earlier independent public-interest projects, which served as its principal design and architecture references — dark long-form reading layouts, chapter structure, interactive charts, careful sourcing, and bilingual presentation. They are listed here for transparency and acknowledgment. Listing implies no endorsement in either direction: neither project has reviewed or endorsed this one, and this project's content is entirely its own.",
      zh: "在台灣向前之前，有兩個獨立的公益性網站計畫；它們是本計畫在設計與架構上的主要參考——深色長文閱讀版面、章節結構、互動圖表、嚴謹的出處標註與雙語呈現。在此列出，是為了透明與致意。列出不代表任何方向的背書：兩個計畫均未審閱或認可本計畫，而本計畫的內容也完全自行負責。",
    },
    projects: [
      {
        name: "Global Food Crisis",
        url: "https://global-food-crisis.com/",
        desc: {
          en: "An independent, interactive, evidence-based exploration of the global food crisis — its scale, underlying causes, historical development, international data, and actions individuals can take. Bilingual and chapter-structured.",
          zh: "一個獨立、互動、以證據為基礎的網站計畫，探索全球糧食危機——規模、深層原因、歷史脈絡、國際數據，以及個人可行的行動。雙語內容，以章節結構組織。",
        },
      },
      {
        name: "Remember to Prevent",
        url: "https://remember-to-prevent.com/",
        desc: {
          en: "An independent, evidence-based interactive historical project examining the World Wars, their human consequences, collective memory, and ways to prevent future tragedies. It was the primary reference for this site's long-form reading layout and textual organization.",
          zh: "一個獨立、以證據為基礎的互動式歷史計畫，檢視兩次世界大戰、其人類代價、集體記憶，以及防止未來悲劇的途徑。本網站的長文閱讀版面與章節文字組織，主要參考了這個計畫。",
        },
      },
    ],
  },
  corrections: {
    title: { en: "Corrections and open review", zh: "更正與開放檢視" },
    paragraphs: [
      {
        en: "Taiwan Forward is open to correction and treats it as a normal part of research, not an embarrassment. If you find an error — a mislabeled figure, an outdated value, a mistranslation — it will be taken seriously.",
        zh: "台灣向前接受更正，並將更正視為研究的常態，而非難堪。若你發現錯誤——標錯的數字、過時的數值、不當的翻譯——我們會認真以待。",
      },
      {
        en: "How corrections are handled: a reported issue is verified against the primary source; if confirmed, the figure or text is corrected, the change is documented on the Research Status page, and the affected entry in the source registry is updated. Significant corrections are recorded with their dates rather than silently overwritten.",
        zh: "更正的處理方式：接獲通報的問題，會先對照原始來源核驗；一經證實，即修正數字或文字，在「研究進度」頁記錄變更，並更新來源登記冊中受影響的條目。重大更正會連同日期一併留存紀錄，而不是悄悄覆寫。",
      },
      {
        en: "Verification-date honesty: every source entry records the date it was accessed. Statistics are revised and series are re-benchmarked over time, so “verified” always means “verified as of the recorded date” — and readers can see exactly when that was.",
        zh: "查驗日期的誠實：每一筆來源都記錄了查閱日期。統計會修訂、序列會重新基準化，因此「已核驗」永遠意謂「於所記錄日期核驗」——而讀者可以清楚看到那是什麼時候。",
      },
      {
        en: "No correction process is perfect, and we would rather publish a documented correction than defend a mistake. If you believe something here is wrong, please check the cited primary source first — and if it still looks wrong, it probably is.",
        zh: "沒有一套更正程序是完美的，而我們寧可發布一則有紀錄的更正，也不願為一個錯誤辯護。若你認為本站的內容有誤，請先查閱所引的原始來源——如果仍然不對，那它多半真的是錯的。",
      },
    ],
  },
  license: {
    title: { en: "Licensing and reuse", zh: "授權與再利用" },
    paragraphs: [
      {
        en: "Written content on this site is published under the Creative Commons Attribution 4.0 International license (CC BY 4.0). You are free to share and adapt it, including for teaching and community use, provided you give attribution.",
        zh: "本網站的文字內容採用創用 CC 姓名標示 4.0 國際授權條款（CC BY 4.0）發布。你可以在註明出處的前提下自由分享與改作，包括教學與社區用途。",
      },
      {
        en: "Third-party statistics and data do not become ours by being cited. Official statistics, international datasets, and research findings remain under their own attribution and licensing terms; the open license of this site does not grant any right to redistribute third-party materials beyond what their own licenses allow.",
        zh: "第三方統計與資料，不會因為被引用就變成我們的。官方統計、國際資料集與研究結果，仍受其各自的署名與授權條款規範；本站的開放授權，並未授予超出第三方授權範圍的任何再散布權利。",
      },
      {
        en: "When in doubt, follow the original source's terms. Each source's license and reuse conditions are recorded beside it in the source registry on the Data & Sources page.",
        zh: "若有疑慮，請遵循原始來源的規範。每一筆來源的授權與再利用條件，都記錄在「資料與來源」頁的來源登記冊中。",
      },
    ],
  },
};
