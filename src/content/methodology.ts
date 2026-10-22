/**
 * Taiwan Forward — methodology view content (bilingual EN / zh-TW).
 *
 * Documents the diagnostic evidence model behind every research chapter
 * (observe → verify → compare → investigate → evaluate → act), the scientific
 * integrity rules, the international comparison framework, source quality
 * standards, and the data engineering practices that keep published figures
 * traceable and checkable.
 */

import type { LText } from "@/lib/i18n";

export interface MethodologyStep {
  no: string;
  title: LText;
  text: LText;
}

export interface MethodologyContent {
  intro: LText;
  steps: MethodologyStep[];
  integrity: { title: LText; intro: LText; rules: LText[] };
  comparison: {
    title: LText;
    intro: LText;
    paragraphs: LText[];
    requirements: LText[];
  };
  sourceQuality: {
    title: LText;
    intro: LText;
    taiwanOrgs: LText[];
    internationalOrgs: LText[];
    datasetFields: LText[];
  };
  dataEngineering: { title: LText; paragraphs: LText[] };
}

export const methodologyContent: MethodologyContent = {
  intro: {
    en: "Taiwan Forward examines Taiwan's societal conditions the way a careful physician examines a patient: evidence is observed before it is interpreted, verified before it is trusted, compared against reference values from other societies, investigated for explanations, evaluated against what has actually been studied, and only then connected to realistic action. This page documents that process — the diagnostic evidence model behind every chapter — together with the integrity rules, comparison framework, source standards, and data engineering practices that make the findings checkable.\n\nThe metaphor describes a method of investigation, not a verdict. A good examination does not blame the patient, does not announce catastrophe, and does not stop at symptoms; it produces an accurate, documented basis for improvement. That is the intent.",
    zh: "台灣向前檢視台灣社會狀況的方式，如同一位謹慎的醫師檢視病人：先觀察證據再解讀，先查證再信任，與其他社會的參考值相互對照，探究可能的解釋，評估已被實證研究檢驗過的做法，最後才連結到切實可行的行動。本頁說明這套流程——貫穿每一章的診斷式證據模型——以及讓研究結果可受檢驗的誠信原則、比較架構、來源標準與資料工程實務。\n\n這個比喻描述的是調查方法，而非判決。一次好的檢查不責怪病人、不宣告災難、也不止於症狀；它產生的是準確、有紀錄、可據以改善的基礎。這正是本計畫的用意。",
  },
  steps: [
    {
      no: "01",
      title: { en: "Observe", zh: "觀察" },
      text: {
        en: "What is happening? Each topic begins with the phenomenon itself, described through appropriately defined indicators — births, deaths, and age structure; wages and working hours; air quality — rather than through headlines or impressions. Every observation states its indicator definition, reference period, unit, and geographic coverage, because a number without context is not evidence.",
        zh: "發生了什麼事？每個主題都從現象本身出發，以定義合宜的指標來描述——出生、死亡與年齡結構；薪資與工時；空氣品質——而非以新聞標題或個人印象為據。每一項觀察都會交代指標定義、參考期間、單位與地理涵蓋範圍，因為缺乏脈絡的數字並非證據。",
      },
    },
    {
      no: "02",
      title: { en: "Verify", zh: "查證" },
      text: {
        en: "What reliable evidence supports the observation? Before any figure is published, its source, measurement methodology, reference period, coverage, and known limitations are confirmed and recorded in the public source registry. Where a value could not be verified against the primary publication, that is stated openly: the figure is either published together with its caveat, or not published at all.",
        zh: "有哪些可靠證據支持這項觀察？任何數字在發布前，都會確認並記錄其來源、測量方法、參考期間、涵蓋範圍與已知限制，並登錄於公開的來源登記冊。若某數值無法對原始出版品完成核驗，我們會如實說明：該數字不是連同保留註記一併發布，就是不予發布。",
      },
    },
    {
      no: "03",
      title: { en: "Compare", zh: "比較" },
      text: {
        en: "How does Taiwan compare with relevant societies? A fertility rate or an old-age share is difficult to interpret in isolation, so verified Taiwanese figures are set beside comparable figures from other countries — chosen by research question and data compatibility, never to produce a desired conclusion. Comparisons exist to expand understanding, not to stage a national competition.",
        zh: "台灣與其他社會相比如何？單看一個生育率或高齡比例很難解讀，因此我們將核驗過的台灣數字，與其他國家的可比數字並列——比較對象依研究問題與資料相容性選定，絕非為了得出特定結論。比較的目的是擴展理解，而不是舉辦國家之間的競賽。",
      },
    },
    {
      no: "04",
      title: { en: "Investigate", zh: "探究" },
      text: {
        en: "What explanations are supported by evidence? Observed correlations, causal evidence, hypotheses, and speculation are kept strictly distinct. That two trends move together is a starting point for investigation, not a conclusion; plausible mechanisms are examined, and the difference between what the data shows and what it merely suggests is stated in plain language.",
        zh: "哪些解釋有證據支持？觀察到的相關、因果證據、假設與臆測，會被嚴格區分。兩個趨勢同步變動只是探究的起點，不是結論；我們檢視可能的作用機制，並以清楚的語言說明：資料究竟「顯示」了什麼，而又只是「暗示」了什麼。",
      },
    },
    {
      no: "05",
      title: { en: "Evaluate", zh: "評估" },
      text: {
        en: "What has actually been studied? Policy approaches, institutional practices, social interventions, and structural improvements are examined through their documented evidence: effectiveness, unintended consequences, remaining uncertainty, and applicability to Taiwan. An approach that works in one society cannot be assumed to work in another; that caveat travels with every evaluation.",
        zh: "哪些做法已被實際研究？政策工具、制度安排、社會介入與結構性改善，均以既有文獻檢視其成效證據、副作用、殘存的不確定性，以及適用於台灣的程度。在某個社會有效的做法，不能推定在另一個社會也有效；這項保留會伴隨每一次評估。",
      },
    },
    {
      no: "06",
      title: { en: "Act", zh: "行動" },
      text: {
        en: "What can realistically be done? The final step connects findings to constructive possibilities for individuals, communities, professionals, and institutions — describing what each action involves, why it may help, and what it cannot achieve. Actions are connected to evidence without overstating impact, and without drifting into political persuasion.",
        zh: "切實可行的是什麼？最後一步，是將研究發現連結到個人、社區、專業工作者與制度機構可以付諸實行的方向——說明每項行動的內容、可能的作用，以及它做不到的事。行動與證據相連，但不誇大成效，也不滑向政治勸說。",
      },
    },
  ],
  integrity: {
    title: { en: "Scientific integrity rules", zh: "科學誠信原則" },
    intro: {
      en: "Trust in research is built by stating rules and keeping them visibly. The rules below bind every chapter, every chart, and every sentence published on this site.\n\nWhen a topic remains uncertain, we explain what is known, what remains uncertain, and which evidence would improve understanding. Uncertainty is described, not hidden.",
      zh: "研究的公信力，來自於明言規則並公開遵守。以下規則約束本網站的每一章、每一張圖與每一句話。\n\n當主題仍有不確定性時，我們會說明目前已知什麼、哪些仍不確定、以及哪些證據能增進理解。不確定性會被描述，而不是被隱藏。",
    },
    rules: [
      {
        en: "Never invent statistics. Every published number traces to a registered, checkable source.",
        zh: "絕不捏造統計數字。每一個發布的數字，都能追溯到已登錄、可查證的來源。",
      },
      {
        en: "Never invent citations. Every cited work exists, and says what we say it says.",
        zh: "絕不虛構引用文獻。每一筆引註都真實存在，且確實陳述我們所轉述的內容。",
      },
      {
        en: "Never fabricate research findings. What has not been researched is labeled as not yet researched.",
        zh: "絕不杜撰研究發現。尚未研究的主題，就標示為尚未研究。",
      },
      {
        en: "Never attribute conclusions to sources that do not support them. Findings are summarized faithfully, without stretching their scope.",
        zh: "絕不將結論歸於不支持該結論的來源。轉述研究發現時忠於原意，不擴大其涵蓋範圍。",
      },
      {
        en: "Never assume that correlation proves causation. Two trends moving together is a question, not an answer.",
        zh: "絕不假定相關即因果。兩個趨勢同步變動，是一個疑問，不是一個答案。",
      },
      {
        en: "Never present only the evidence supporting a preferred conclusion. Evidence pointing the other way is reported in the same place.",
        zh: "絕不只呈現支持既定立場的證據。指向相反方向的證據，會在同一處一併呈現。",
      },
      {
        en: "Never conceal material contradictory evidence. If credible findings complicate our picture, the picture gets more complicated — publicly.",
        zh: "絕不隱瞞重要的反面證據。若可信的研究發現使我們的圖像更複雜，圖像就公開變得更複雜。",
      },
      {
        en: "Never convert missing data into zero. Absent values are shown as absent, not as zero — a blank is honest; a zero is a claim.",
        zh: "絕不把缺漏的資料當作零。缺值就呈現為缺值，而不是零——空白是誠實，零是一種主張。",
      },
      {
        en: "Never present projections as observed facts. Projections are scenario calculations built on stated assumptions; they are periodically revised, and always labeled as projections.",
        zh: "絕不把推估當成觀測事實。推估是基於明示假設的情境計算，會定期修正，且一律標示為推估。",
      },
      {
        en: "Never mix incompatible indicators without disclosure. Differences in definition, unit, or coverage are disclosed beside any combined presentation.",
        zh: "絕不在未揭露的情況下混用不相容的指標。定義、單位或涵蓋範圍的差異，一律在併列呈現之處明確揭露。",
      },
      {
        en: "Never use outdated estimates as current measurements. Every figure carries its reference year, and superseded values are updated or noted.",
        zh: "絕不把過時的估計當作現況。每個數字都標註參考年份，已被取代的數值會更新或加註。",
      },
      {
        en: "Never imply that a complex social problem has one universal explanation. Societal conditions have many interacting causes.",
        zh: "絕不暗示複雜的社會問題存在單一普遍的解釋。社會狀況由多重原因交互形塑。",
      },
      {
        en: "Never impose a single subjective definition of an ideal society. We document conditions and trade-offs; we do not prescribe what a good society must look like.",
        zh: "絕不強加單一且主觀的「理想社會」定義。我們記錄現況與取捨，不規定良好社會應有的樣貌。",
      },
      {
        en: "Never create a scientifically unjustified overall “Taiwan Health Score.” Summing incompatible indicators into one number manufactures false precision — and this project will not do it.",
        zh: "絕不編製缺乏科學依據的「台灣健康總分」。把不相容的指標加總為單一分數，只會製造虛假的精確感——本計畫不做這種事。",
      },
    ],
  },
  comparison: {
    title: { en: "International comparison framework", zh: "國際比較架構" },
    intro: {
      en: "International comparison is mandatory wherever suitable data exists — because a number means little in isolation. Taiwan's total fertility rate of 0.695 (2025) becomes interpretable beside South Korea's 0.75 (2024) and Japan's 1.14 (2024); an old-age share of 20.06% reads differently next to Japan's 30.0% (2025). Comparison supplies the reference values that turn data into understanding.",
      zh: "只要存在合適的資料，國際比較便是必要之舉——因為孤立的數字意義有限。台灣 2025 年的總生育率 0.695，放在韓國的 0.75（2024）與日本的 1.14（2024）旁邊才變得可解讀；65 歲以上占比 20.06%，對照日本的 30.0%（2025）也有不同的讀法。比較提供了把資料變成理解的參考值。",
    },
    paragraphs: [
      {
        en: "How comparators are chosen. The number and identity of comparison countries are determined by the research question and by data compatibility — not by an arbitrary quota, and not by the conclusion they produce. Our reference set includes Japan, South Korea, Singapore, Australia, New Zealand, Germany, the Netherlands, Denmark, Sweden, Finland, Canada, the United Kingdom, and the United States, plus other economies where a specific question calls for them. We deliberately include both societies with broadly comparable conditions and societies whose outcomes or institutional practices differ instructively: a comparison is most informative when it is able to surprise you. Selecting only countries that make Taiwan look good or bad would itself be a form of fabrication, and it is not done here.",
        zh: "比較對象如何選定。比較國家的數量與身分，由研究問題與資料相容性決定——既非任意配額，也不是看它們能得出什麼結論。我們的參考組合包括日本、韓國、新加坡、澳洲、紐西蘭、德國、荷蘭、丹麥、瑞典、芬蘭、加拿大、英國與美國，並視特定問題納入其他經濟體。我們刻意同時納入條件大致相近的社會，以及結果或制度做法極具對照意義的社會：比較最能增長見識的時刻，正是它可能出乎你意料的時刻。只挑選讓台灣看起來特別好或特別差的國家，本身就是一種捏造；本計畫不做這種事。",
      },
      {
        en: "Comparability requirements. Before any cross-country chart is published, the checks in the list below are performed. Most of them never surface in the final presentation, but they decide whether the presentation is honest: a chart mixing different definitions, population scopes, or reference years does not compare countries — it compares incomparable numbers that happen to look alike.",
        zh: "可比性要求。任何跨國圖表發布前，都會完成下列清單中的檢查。其中多數不會出現在最終的呈現上，卻決定呈現是否誠實：一張混合不同定義、人口範圍或參考年份的圖表，比較的並不是國家，而是碰巧長得相似、實則無法相提並論的數字。",
      },
      {
        en: "The Taiwan-data reality. Taiwan is not represented as a separately listed economy in every international database — the World Bank's indicators, for example, do not list Taiwan separately. When Taiwan data is absent from an international dataset, we either obtain an appropriately compatible Taiwan source (typically official national statistics) or state plainly that a valid comparison cannot be produced. We do not assemble rankings from incompatible datasets: a precise-looking number built on mismatched definitions misleads more than it informs.",
        zh: "台灣資料的現實。台灣並未在所有國際資料庫中被列為個別經濟體——例如世界銀行的指標資料即未單獨列出台灣。當國際資料集缺少台灣資料時，我們不是設法取得定義相容的台灣來源（通常為官方統計），就是明白說明無法產出有效的比較。我們不會用不相容的資料集拼湊排名：一個看似精確、實則建立在定義錯配上的數字，誤導多於啟發。",
      },
      {
        en: "What comparison is for. International comparisons should expand understanding, not create simplistic national competitions. Countries lead and lag on different indicators for different reasons, and no ranking tells the whole story. We present comparisons to locate Taiwan's verified conditions within the documented range of human experience — the basis for realistic evaluation, and for borrowing, with care, what has actually worked elsewhere.",
        zh: "比較的目的。國際比較應當擴展理解，而不是製造簡化的國家競賽。各國在不同指標上的領先與落後各有原因，沒有任何排名能說完整的故事。我們呈現比較，是為了將台灣經核驗的現況，定位於人類已記錄經驗的範圍之內——這是務實評估的基礎，也是審慎借鑑他處確實有效做法的基礎。",
      },
    ],
    requirements: [
      {
        en: "Confirm indicator definitions — the same label can describe different measurements.",
        zh: "確認指標定義——同一名稱可能指涉不同的測量方式。",
      },
      {
        en: "Confirm reference years — figures a year or two apart can differ for cyclical reasons.",
        zh: "確認參考年份——相差一兩年的數字可能因週期性因素而不同。",
      },
      {
        en: "Confirm measurement units and any conversions applied.",
        zh: "確認度量單位與所採用的換算。",
      },
      {
        en: "Confirm population scope — total, resident, citizen, and registered populations are not interchangeable.",
        zh: "確認人口範圍——總人口、常住人口、公民與戶籍登記人口並不可互換。",
      },
      {
        en: "Confirm geographical scope — national, metropolitan, and subnational figures answer different questions.",
        zh: "確認地理範圍——全國、都會區與次國家層級的數字，回答的是不同的問題。",
      },
      {
        en: "Check for methodology changes — series are sometimes re-benchmarked or redefined mid-run.",
        zh: "檢視方法變更——統計序列有時會中途重新基準化或重新定義。",
      },
      {
        en: "Assess purchasing-power adjustments where income or cost indicators are compared.",
        zh: "比較所得或成本指標時，評估購買力平價調整。",
      },
      {
        en: "Explain differences in statistical collection practices — survey, registration, and administrative data have different strengths.",
        zh: "說明統計蒐集方式的差異——調查、登記與行政資料各有不同的長處。",
      },
      {
        en: "Document known comparability limitations, next to the comparison itself.",
        zh: "將已知的可比性限制，連同比較一併記錄呈現。",
      },
    ],
  },
  sourceQuality: {
    title: { en: "Source quality and attribution", zh: "資料來源品質與出處標註" },
    intro: {
      en: "Primary and authoritative sources are preferred throughout: official statistics from the agencies that produce them, international organizations' datasets, and peer-reviewed research. Every published figure traces to a source registered with full provenance — and the registry itself is public. Official statistics are evidence, but not immunity: like any measurement they deserve methodological scrutiny, and independent research is consulted where it exists. Aggregated platforms are used with attention to their underlying sources, never as substitutes for them.\n\nEach important dataset must document the provenance fields listed below. On this site they are recorded in the source registry, which readers can inspect on the Data & Sources page.",
      zh: "本計畫全程優先採用一手且具權威性的來源：產製統計的政府機關、國際組織的資料集，以及經同儕審查的研究。每一個發布的數字都可追溯至登錄完整出處資訊的來源——而這份來源登記冊本身也是公開的。官方統計是證據，但不是免檢金牌：如同任何測量，它們值得方法上的檢視；在已有獨立研究之處，我們也會參考。彙整平台的使用，著眼於其底層來源，絕不以平台取代原始資料。\n\n每一個重要資料集都必須記錄以下出處欄位；在本網站，這些欄位登錄於來源登記冊，讀者可在「資料與來源」頁面查閱。",
    },
    taiwanOrgs: [
      {
        en: "Directorate-General of Budget, Accounting and Statistics (DGBAS) — national accounts, prices, wages, and census-type surveys.",
        zh: "行政院主計總處——國民所得統計、物價、薪資及普查類調查。",
      },
      {
        en: "National Development Council (NDC) — population projections and national development indicators.",
        zh: "國家發展委員會——人口推估與國家發展指標。",
      },
      {
        en: "Ministry of the Interior (MOI) — household registration, population, and vital statistics; the foundation of Chapter 01.",
        zh: "內政部——戶籍、人口與出生死亡統計；第一章的基礎。",
      },
      {
        en: "Ministry of Health and Welfare (MOHW) — health, healthcare, welfare, and long-term care statistics.",
        zh: "衛生福利部——健康、醫療、福利與長期照顧統計。",
      },
      {
        en: "Ministry of Labor (MOL) — employment, wages, working conditions, and occupational safety.",
        zh: "勞動部——就業、薪資、勞動條件與職業安全統計。",
      },
      {
        en: "Ministry of Education (MOE) — education access, outcomes, and student populations.",
        zh: "教育部——教育機會、教育成果與學生人口統計。",
      },
      {
        en: "Ministry of Environment (MOENV) — air quality, water, waste, and emissions.",
        zh: "環境部——空氣品質、水質、廢棄物與排放統計。",
      },
      {
        en: "Ministry of Economic Affairs (MOEA) — industry, energy, and trade statistics.",
        zh: "經濟部——產業、能源與貿易統計。",
      },
      {
        en: "National Health Insurance Administration (NHIA) — health insurance coverage and utilization.",
        zh: "衛生福利部中央健康保險署——健保承保與醫療利用統計。",
      },
      {
        en: "Central Weather Administration (CWA) — meteorological and climate records.",
        zh: "交通部中央氣象署——氣象與氣候紀錄。",
      },
      {
        en: "Other official statistical publications and openly documented research datasets, where provenance permits verification.",
        zh: "其他官方統計出版品與公開紀錄、可供查證的研究資料集。",
      },
    ],
    internationalOrgs: [
      {
        en: "OECD — harmonized indicators across member and partner economies.",
        zh: "經濟合作暨發展組織（OECD）——會員國與夥伴經濟體的調和指標。",
      },
      {
        en: "World Bank — development indicators covering most world economies.",
        zh: "世界銀行——涵蓋全球多數經濟體的發展指標。",
      },
      {
        en: "World Health Organization (WHO) — health and mortality statistics.",
        zh: "世界衛生組織（WHO）——健康與死亡統計。",
      },
      {
        en: "International Labour Organization (ILO) — labor standards and labor statistics.",
        zh: "國際勞工組織（ILO）——勞動基準與勞動統計。",
      },
      {
        en: "UNESCO Institute for Statistics — education, science, and culture indicators.",
        zh: "聯合國教科文組織統計研究所（UNESCO UIS）——教育、科學與文化指標。",
      },
      {
        en: "United Nations statistical publications — demographic and social series.",
        zh: "聯合國統計出版品——人口與社會統計序列。",
      },
      {
        en: "UN Environment Programme (UNEP) — environmental assessment data.",
        zh: "聯合國環境規劃署（UNEP）——環境評估資料。",
      },
      {
        en: "Food and Agriculture Organization (FAO) — food, agriculture, and fisheries statistics.",
        zh: "聯合國糧食及農業組織（FAO）——糧食、農業與漁業統計。",
      },
      {
        en: "Our World in Data — used with attention to the underlying sources behind each series.",
        zh: "Our World in Data——使用時注意各序列背後的底層來源。",
      },
      {
        en: "Peer-reviewed academic research — for mechanisms, evaluations, and questions official statistics cannot answer.",
        zh: "經同儕審查的學術研究——用於作用機制、成效評估，以及官方統計無法回答的問題。",
      },
      {
        en: "Other reputable, methodologically transparent institutions.",
        zh: "其他信譽良好、方法透明的機構。",
      },
    ],
    datasetFields: [
      { en: "Title — what the dataset or publication is called.", zh: "標題——資料集或出版品的名稱。" },
      { en: "Publishing organization — who produced it.", zh: "出版機構——由誰產製。" },
      { en: "Original URL — a direct link to the dataset, report, or official documentation, not a generic homepage.", zh: "原始連結——直達資料集、報告或官方文件的連結，而非泛用首頁。" },
      { en: "Publication or update date — when the source was published or last revised.", zh: "出版或更新日期——來源的發布或最近修訂時間。" },
      { en: "Reference period — the time the numbers actually cover.", zh: "參考期間——數字實際涵蓋的時間範圍。" },
      { en: "Indicator definition — what is actually being measured.", zh: "指標定義——實際測量的究竟是什麼。" },
      { en: "Measurement unit — persons, percent, years, currency, and so on.", zh: "度量單位——人、百分比、年、貨幣單位等。" },
      { en: "Geographic coverage — which territory the figures describe.", zh: "地理涵蓋範圍——數字描述的領土範圍。" },
      { en: "Methodology — how the data was collected and compiled.", zh: "方法說明——資料如何蒐集與編製。" },
      { en: "Access date — when this project consulted and verified it.", zh: "查閱日期——本計畫何時查閱並核驗。" },
      { en: "License or reuse conditions — what reuse the source permits.", zh: "授權或再利用條件——來源允許的再利用方式。" },
      { en: "Transformation steps — what was done between the original values and the published chart.", zh: "轉換步驟——從原始數值到發布圖表之間做了什麼。" },
      { en: "Known limitations — caveats a reader needs in order to interpret the figures fairly.", zh: "已知限制——讀者公平解讀數字時需要知道的注意事項。" },
    ],
  },
  dataEngineering: {
    title: { en: "Data engineering and traceability", zh: "資料工程與可追溯性" },
    paragraphs: [
      {
        en: "Numbers on this site do not live inside page code. Datasets are maintained as static, reviewable files — JSON for structure, CSV for export — and every chart reads from the same dataset a reader can download. If a rendered chart and its underlying data table ever disagreed, that would be treated as an error and fixed, not explained away.",
        zh: "本網站的數字不藏在頁面程式碼裡。資料集以靜態、可檢視的檔案維護——JSON 用於結構，CSV 用於匯出——每張圖表讀取的，正是讀者可以下載的同一份資料。若呈現的圖表與其底層數據表不一致，我們會視之為錯誤並修正，而不是找理由帶過。",
      },
      {
        en: "Layers are kept separate: raw source data, processed data, chart definitions, human-authored explanatory text, and citations with provenance metadata each live in their own layer. A correction to a source value propagates visibly through the layers; explanatory prose is never quietly retargeted, and data is never silently altered. Units, conversions, and every transformation are documented rather than implied.",
        zh: "各層分離保存：原始資料、處理後資料、圖表定義、人工撰寫的解說內容，以及引註與出處詮釋資料，各自位於所屬的層次。來源數值的修正會明確地逐層傳遞；解說文字絕不悄悄改變指向，資料絕不默默遭人更動。單位、換算與每一個轉換步驟都以文字記錄，而非隱含不提。",
      },
      {
        en: "Traceability runs both ways: every rendered figure connects to the dataset behind it, and every dataset connects to its registered sources, each with the access date on which it was verified. A reader can start from any chart and arrive, in a few steps, at the agency publication behind the number.",
        zh: "可追溯性是雙向的：每一個呈現的圖形都連結到其背後的資料集，每一個資料集都連結到已登錄的來源，並註明核驗時的查閱日期。讀者可以從任何一張圖出發，在幾步之內追溯到數字背後的機關出版品。",
      },
      {
        en: "When reliable data cannot be retrieved or verified, the site shows a clearly labeled pending-research state rather than a fabricated number. This is a deliberate constraint, and it shapes what you see: a truthful, partially populated research website is preferable to a visually complete website containing fabricated evidence.",
        zh: "當可靠的資料無法取得或核驗時，網站會呈現明確標示的研究待補狀態，而不是捏造的數字。這是刻意的自我約束，也形塑了你所看到的樣貌：一個真實而部分完成的研究網站，優於一個視覺上完整、內容卻摻有虛構證據的網站。",
      },
    ],
  },
};
