/**
 * Taiwan Forward — Chapter 01: The Population Question.
 *
 * Flagship research chapter for Dimension 01 (Population and Family).
 *
 * INTEGRITY NOTES
 * - Every Taiwan figure comes from the verified MOI/RIS household-registration
 *   series (see source registry `moi-ris-population`) or the MOI statistical
 *   bulletin on life expectancy (`moi-life-expectancy`).
 * - International values are the latest national figures individually verified
 *   by this project; reference years differ and are stated wherever a value
 *   appears. Australia is excluded from the fertility comparison (reference
 *   year not verifiable at access time) and this is disclosed in the text.
 * - Official NDC projections are described QUALITATIVELY ONLY (source status:
 *   pending verification). No projected numbers appear in this chapter.
 * - No causal claims are made beyond the evidence; explanations are framed as
 *   hypotheses. No partisan, nationalist, or blame-assigning language.
 * - Both language versions are complete and equivalent in meaning. The Chinese
 *   is Traditional Chinese as used in Taiwan.
 */

import type { Chapter } from "@/data/types";

export const chapter01: Chapter = {
  id: "chapter-01",
  no: "01",
  dimensionId: "population",
  title: {
    en: "The Population Question: Understanding Taiwan's Demographic Transition",
    zh: "人口課題：理解台灣的人口轉型與未來",
  },
  subtitle: {
    en: "Chapter 01 of the Taiwan Forward research series — what the evidence shows, what remains uncertain, and what could help.",
    zh: "台灣向前研究系列第一章——證據顯示什麼、哪些仍不確定、以及什麼可能有幫助。",
  },
  status: "published",
  lastUpdate: "2026-10-22",
  readingMinutes: 28,
  intro: {
    en: "Taiwan's population is changing: births have fallen to historic lows, deaths now exceed births every year, and the share of residents aged 65 and above has crossed 20%. This chapter examines what verified official statistics actually show, how Taiwan compares with other advanced economies, what may explain the trends, what remains uncertain, and what could realistically help. It is written as an examination, not a verdict: understand today, improve tomorrow.",
    zh: "台灣的人口正在改變：出生數降至歷史低點、死亡數連年高於出生數、65 歲以上人口占比跨越 20%。本章檢視經核驗的官方統計究竟顯示什麼、台灣與其他先進經濟體相比處於何處、趨勢的可能解釋為何、哪些仍不確定，以及務實上什麼可能有幫助。本章以檢查為目的，而非評斷：理解今天，改善明天。",
  },
  sections: [
    /* ------------------------------------------------------------ */
    /* 1. Introduction                                               */
    /* ------------------------------------------------------------ */
    {
      id: "introduction",
      title: { en: "Introduction: A Check-Up for a Society", zh: "緒論：為社會做一次健檢" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "Every society, like every person, changes over time. Some changes are visible at a glance; others appear only when someone takes the trouble to measure. This chapter is about measurements: what Taiwan's official population statistics show, what they do not show, and what can reasonably be concluded from them.\n\nThe method is borrowed from medicine. A competent physician does not begin a consultation by blaming the patient, choosing an ideology, or announcing a diagnosis before the examination. The physician observes, verifies, compares against reference ranges, considers alternative explanations, acknowledges uncertainty, and only then discusses what could help. Taiwan Forward applies the same discipline to the study of society, and this first chapter applies it to the most fundamental of all social datasets: the population itself.",
            zh: "每個社會如同每個人，都會隨時間改變。有些改變一眼可見，有些則需要透過測量才會浮現。本章討論的正是測量結果：台灣官方人口統計顯示什麼、沒有顯示什麼，以及可以從中合理得出哪些結論。\n\n方法取自醫學。一位稱職的醫師看診時，不會先責備病人、不會先選定立場，也不會在檢查完成前驟下診斷；醫師會觀察、核實、與參考範圍比較、考量不同解釋、承認不確定性，然後才討論什麼可能有幫助。「台灣向前」以同樣的紀律研究社會，而本章——系列的第一章——將此紀律應用於所有社會資料中最根本的一組：人口本身。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "Four commitments govern everything that follows. First, understand before judging: the numbers are examined before any evaluation is offered. Second, examine evidence before drawing conclusions: every figure in this chapter comes from an identified official source, with its reference period and limitations stated. Third, compare before generalizing: Taiwan's numbers are placed alongside those of other advanced economies, because a single society's trend line can mislead as easily as it can inform. Fourth, identify actionable opportunities without assigning blame: population change is the accumulated outcome of millions of private decisions made under structural conditions — it is not the fault of any generation, gender, region, or administration, and finding fault is not the purpose here.",
            zh: "本章遵循四個承諾。第一，先理解、後評斷：在提出任何評價之前，先檢視數字本身。第二，先檢驗證據、再下結論：本章所有數字均出自可指認的官方來源，並標明參考期間與限制。第三，先比較、後推論：台灣的數字將與其他先進經濟體並列呈現，因為單一社會的趨勢線既可能啟發、也可能誤導。第四，指出可行機會而不歸咎：人口變遷是數百萬人在既有結構條件下，各自決定累積而成的結果——不是任何世代、性別、地區或政府的過失，尋找代罪羔羊也不是本章的目的。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "A check-up that listed only problems would be a poor examination. The verified record contains genuine strengths. Average life expectancy in Taiwan reached 80.77 years in 2024, rising 0.54 years from 80.23 in 2023, according to the Ministry of the Interior's statistical bulletin — a level attained by only a minority of the world's societies, and the product of decades of public health, medical care, nutrition, and safety. People in Taiwan live long lives. That is an achievement worth stating plainly.\n\nThe same record also contains serious challenges: a total fertility rate of 0.695 in 2025 — among the lowest ever recorded anywhere — a natural population decrease that has continued every year since 2020, and a share of residents aged 65 and above that crossed 20% in 2025. Both sets of facts belong to the same society at the same moment. A serious examination holds them together rather than choosing between them.",
            zh: "只列出問題的健檢報告，不是好的健檢報告。經核驗的紀錄中確有實實在在的強項。依內政部統計通報，台灣平均壽命於 2024 年達到 80.77 歲，較 2023 年的 80.23 歲提高 0.54 歲——全球僅少數社會達到這個水準，背後是數十年公共衛生、醫療、營養與安全的累積。台灣人活得長久，這是值得明說的成就。\n\n同一份紀錄也有嚴峻的挑戰：2025 年總生育率 0.695——屬全球有紀錄以來最低之列；自 2020 年起人口年年自然減少；65 歲以上人口占比於 2025 年跨越 20%。兩組事實屬於同一個社會的同一個時刻。嚴肅的檢查會並陳兩者，而不是在兩者之間擇一。",
          },
        },
        {
          kind: "evidence",
          variant: "interpretation",
          title: { en: "The method of this chapter", zh: "本章的方法" },
          text: {
            en: "Six steps, applied throughout: observe (what do the verified statistics show?); verify (which sources, which periods, which limits?); compare (how do peer societies stand?); investigate (which explanations does evidence support, and which remain hypotheses?); evaluate (what approaches have been tried elsewhere, with what documented results?); act (what can realistically be done, by whom, with what limits?). Facts, interpretations, comparisons, uncertainties, and possible actions are visually distinguished throughout this chapter, so that readers always know which kind of statement they are reading.",
            zh: "六個步驟，貫穿全章：觀察（已核驗的統計顯示什麼）；核實（哪些來源、哪些期間、哪些限制）；比較（參考社會的狀況如何）；探究（哪些解釋有證據支持、哪些仍是假說）；評估（哪些做法曾在別處嘗試、有何紀錄結果）；行動（務實上能做什麼、由誰做、有何限制）。全章以視覺方式區分「事實、解讀、比較、不確定、可行方向」，讀者隨時能辨別自己正在讀哪一種陳述。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "The chapter proceeds in the order of that method: current observations, historical context, direct exploration of the verified data, international comparison, candidate explanations weighed as hypotheses, honest uncertainties, lessons from other societies, potential improvements, realistic actions, and full documentation of sources. Specific figures in the text are drawn from the datasets displayed alongside them; each chart carries its own source attribution, and the final section documents how every number was verified.",
            zh: "本章依此方法的順序展開：現況觀察、歷史脈絡、已核驗資料的直接探索、國際比較、以假說權衡候選解釋、誠實面對不確定、他山之石、可行方向、務實行動，以及完整的來源說明。文中的特定數字均取自隨文呈現的資料集；每張圖表均標註自身來源，末節則完整記錄每個數字的核驗方式。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 2. Current observations                                       */
    /* ------------------------------------------------------------ */
    {
      id: "current-observations",
      title: { en: "Current Observations: What the Numbers Show", zh: "現況觀察：數據顯示什麼" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "Begin with the most direct measurements. In 2025, 107,812 births were registered in Taiwan, according to Ministry of the Interior (MOI) household registration statistics — down from 134,856 in 2024. In the same year, 200,268 deaths were registered. The difference, 92,456 fewer births than deaths, is the natural decrease for 2025. These are counts of registered events compiled by the Department of Household Registration; as registrations they are essentially complete, though the most recent year's figures can be marginally revised when final yearbooks are compiled.",
            zh: "先從最直接的測量開始。依內政部戶政統計，2025 年台灣戶籍登記出生數為 107,812 人，低於 2024 年的 134,856 人；同年死亡登記數為 200,268 人。出生較死亡少 92,456 人，即 2025 年的自然減少數。這些是戶政司彙編的登記事件數；作為登記資料，其涵蓋本質完整，惟最近一年的數值於年報定稿後仍可能微幅修正。",
          },
        },
        {
          kind: "list",
          items: [
            {
              en: "Births and deaths, 2025: 107,812 and 200,268 registered (2024: 134,856 and 202,107).",
              zh: "出生與死亡，2025 年：登記 107,812 人與 200,268 人（2024 年：134,856 人與 202,107 人）。",
            },
            {
              en: "Natural decrease, 2025: 92,456 (deaths minus births).",
              zh: "自然減少，2025 年：92,456 人（死亡數減出生數）。",
            },
            {
              en: "Total fertility rate, 2025: 0.695 children per woman (replacement level is about 2.1).",
              zh: "總生育率，2025 年：0.695（替代水準約 2.1）。",
            },
            {
              en: "Registered population, end of 2025: 23,299,132 (peak: 23,603,121 at end of 2019).",
              zh: "戶籍人口，2025 年底：23,299,132 人（高峰為 2019 年底之 23,603,121 人）。",
            },
            {
              en: "Age structure, end of 2025: 65+ 20.06% (first year above 20%); 0–14 11.51%; 15–64 68.43%.",
              zh: "年齡結構，2025 年底：65 歲以上 20.06%（首次超過 20%）；0–14 歲 11.51%；15–64 歲 68.43%。",
            },
          ],
        },
        {
          kind: "chart",
          datasetId: "tw-births-deaths",
          caption: {
            en: "Annual registered births and deaths, 1958–2025. Source: MOI household registration statistics.",
            zh: "1958–2025 年戶籍登記出生數與死亡數。資料來源：內政部戶政統計。",
          },
        },
        {
          kind: "evidence",
          variant: "observation",
          title: { en: "The crossover: when deaths exceed births", zh: "交叉點：死亡數高於出生數之時" },
          text: {
            en: "In 2020, registered births (165,249) fell below registered deaths (173,156) — the first natural decrease in the recorded series. Every year since, deaths have exceeded births, with the deficit widening from about 7,900 in 2020 to 92,456 in 2025. Natural decrease is now the demographic baseline rather than an anomaly: no year in the verified series shows a return to natural increase.",
            zh: "2020 年，戶籍登記出生數（165,249 人）低於死亡數（173,156 人），為紀錄序列中首次自然減少。此後每年死亡數均高於出生數，差額自 2020 年的約 7,900 人擴大至 2025 年的 92,456 人。自然減少如今是人口基準情境，而非異常現象：已核驗的序列中，沒有任何一年回到自然增加。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "Birth counts depend partly on how many adults are of childbearing age, so demographers also use the total fertility rate (TFR): the average number of children a woman would bear if a given year's age-specific fertility rates persisted over her lifetime. Taiwan's TFR was 0.695 in 2025 — the most recent complete year — down from 0.885 in 2024, 0.865 in 2023, and 0.87 in 2022. Roughly 2.1 is considered replacement level: the level at which, ignoring migration, a population exactly replaces itself in the long run. At 0.695, Taiwan's period fertility is far below replacement and, by available comparisons, among the lowest ever recorded worldwide. Two cautions attach: the figure is the most recently published complete-year value and may be marginally revised, and a single year is an imperfect guide — a point developed later in this chapter.",
            zh: "出生數受育齡人口規模影響，因此人口學者也使用總生育率（TFR）：假設某一年各年齡層生育率終身不變時，每名婦女平均生育的子女數。台灣 2025 年 TFR 為 0.695——最近一個完整年度——低於 2024 年的 0.885、2023 年的 0.865 與 2022 年的 0.87。約 2.1 一般視為替代水準：在不計遷移的前提下，人口長期恰好自我更替所需的水準。以 0.695 觀之，台灣的時期生育率遠低於替代水準，且就現有國際比較而言，屬全球有紀錄以來最低之列。兩點提醒：此為最近公布之全年數值，仍可能微幅修正；且單一年度並非可靠的判斷依據——本章稍後將進一步說明。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "The total population has followed. The registered population peaked at 23,603,121 at the end of 2019 and has declined since: 23,400,220 at the end of 2024 and 23,299,132 at the end of 2025. The decline is smaller than the natural decrease alone would imply, because migration partly offsets it — the net social increase recorded in the household registration system was +225,599 in 2023 and +47,029 in 2024.",
            zh: "總人口隨之變動。戶籍人口於 2019 年底達到 23,603,121 人的高峰後轉為減少：2024 年底 23,400,220 人、2025 年底 23,299,132 人。減少幅度小於單看自然減少的推論，因為遷移抵銷了一部分——戶籍登記系統記錄的社會增加，2023 年為 +225,599，2024 年為 +47,029。",
          },
        },
        {
          kind: "evidence",
          variant: "observation",
          title: { en: "Population change has two components", zh: "人口變動由兩個部分組成" },
          text: {
            en: "Natural change (births minus deaths) and social change (net migration, as recorded in household registration) together determine total population change. In 2023, a social increase of +225,599 outweighed natural decrease and the total registered population rose; in 2024, a smaller social increase of +47,029 offset only part of natural decrease and the total fell. In 2025 the total fell further, to 23,299,132. This decomposition matters for interpretation: fertility and migration are distinct processes with distinct causes, and conflating them obscures both.",
            zh: "自然變動（出生減死亡）與社會變動（戶籍登記反映的淨遷移）共同決定人口總變動。2023 年，社會增加 +225,599 超過自然減少，戶籍人口總數上升；2024 年，社會增加縮小為 +47,029，僅抵銷部分自然減少，總數轉為下降。2025 年續降至 23,299,132 人。此一分解對解讀很重要：生育與遷移是成因不同的兩個過程，混為一談會同時遮蔽兩者。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "The age structure is shifting accordingly. At the end of 2025, 20.06% of the registered population was aged 65 or above — the first year above 20%, the conventional descriptive threshold for a “super-aged society”. The share of children aged 0–14 stood at 11.51%, roughly half its 1997 level of 22.6%. The working-age share (15–64) was 68.43%, down from its peak of about 74.2% in 2012–2013. Each of these figures is examined in context in the sections that follow; here they are stated simply as observations.",
            zh: "年齡結構亦隨之改變。2025 年底，戶籍人口中 65 歲以上占 20.06%——首次超過 20%，即一般描述性的「超高齡社會」門檻。0–14 歲幼年人口占 11.51%，約為 1997 年 22.6% 的一半。15–64 歲工作年齡占 68.43%，低於 2012–2013 年約 74.2% 的高峰。這些數字將在後續各節的脈絡中檢視；此處先如實陳述。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 3. Historical context                                         */
    /* ------------------------------------------------------------ */
    {
      id: "historical-context",
      title: { en: "Historical Context: Six Decades of Demographic Transition", zh: "歷史脈絡：六十餘年的人口轉型" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "Today's numbers are the visible end of a transformation that began more than half a century ago. Demographers call it the demographic transition: societies historically had high birth and death rates and slow growth; as public health, medicine, and living conditions improved, death rates fell first and birth rates followed with a lag; populations grew rapidly in the interval; and the end state is low births and low deaths. Taiwan is one of the clearest examples on record. In 1958 the total fertility rate was 6.06 children per woman; in the early 1960s annual births exceeded 400,000, while annual deaths were around 75,000. The population was young and growing quickly: about 10.09 million people at the end of 1958.",
            zh: "今天的數字，是半個多世紀前即已展開的轉型之最新結果。人口學者稱之為「人口轉型」：傳統社會高出生、高死亡，人口成長緩慢；隨著公共衛生、醫療與生活條件改善，死亡率率先下降，出生率隨後跟上；兩者之間人口快速成長；終局則是低出生、低死亡。台灣是此一轉型有紀錄以來最清晰的案例之一。1958 年總生育率為 6.06；1960 年代初期每年出生逾 40 萬人，死亡則約 7.5 萬。人口年輕且快速成長——1958 年底約 1,009 萬人。",
          },
        },
        {
          kind: "chart",
          datasetId: "tw-tfr",
          caption: {
            en: "Taiwan's total fertility rate, 1958–2025, with replacement level (about 2.1) marked. Source: MOI household registration statistics.",
            zh: "台灣總生育率（1958–2025），標示替代水準（約 2.1）。資料來源：內政部戶政統計。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "The descent, visible in the chart above, proceeded in long steps rather than a single leap. The TFR was 2.52 in 1980. It fell below the replacement level of roughly 2.1 in the mid-1980s — 2.06 in 1984 — and never returned above it. By 2003 it was 1.24; in 2010, 0.90, then the lowest on record; in 2020, 0.99, the first year below 1.0. After 2021 (0.975), 2022 (0.87), and 2023 (0.865), and a small rise to 0.885 in 2024, the rate reached 0.695 in 2025.\n\nTwo features of this history deserve emphasis. The decline was not linear — the chart shows births temporarily rising around 1976 and 2012, both Dragon years in the zodiac calendar. And it was not sudden: Taiwan has been below replacement for roughly four decades. A society does not arrive at a fertility rate of 0.695 overnight; the more important question is how it arrived at below-replacement fertility, and stayed there.",
            zh: "從上圖可見，生育率的下降是長時期的階段推移，而非一次跳水。1980 年 TFR 為 2.52；1984 年降至 2.06，跌破約 2.1 的替代水準，此後未再回升。2003 年為 1.24；2010 年 0.90，當時的歷史最低；2020 年 0.99，首次低於 1.0。其後 2021 年 0.975、2022 年 0.87、2023 年 0.865，2024 年小幅回升至 0.885，2025 年再降至 0.695。\n\n這段歷史有兩點值得強調。其一，下降並非直線——圖中 1976 年與 2012 年前後出生數一度回升，兩年都是生肖龍年。其二，下降並非突然——台灣低於替代水準已約四十年。社會不會一夜之間走到 0.695 的生育率；更重要的問題是：它如何走入低於替代水準的狀態，並長期停留其中。",
          },
        },
        {
          kind: "chart",
          datasetId: "tw-population-total",
          caption: {
            en: "Year-end registered population, 1958–2025; the 2019 peak is visible near the right edge. Source: MOI household registration statistics.",
            zh: "年底戶籍人口（1958–2025）；2019 年高峰見於右側。資料來源：內政部戶政統計。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "Why, then, did the total population keep growing for so long? The answer is population momentum. When a population contains a large number of young adults, even below-replacement fertility produces many births in absolute terms, because there are so many potential parents. The large cohorts born in the high-fertility decades continued to pass through their childbearing years, keeping the total rising long after 1984's fall below replacement. The registered population peaked at 23,603,121 at the end of 2019 — thirty-five years later — and has declined modestly since, as natural decrease outweighed the partial offset from migration.\n\nMomentum also explains what comes next. Because today's birth cohorts are small, the number of future potential parents is smaller, and the age structure's center of gravity keeps shifting older for decades under almost any scenario. Deaths, meanwhile, rose from about 75,000 a year in the late 1950s to more than 200,000 — not because life is shorter (life expectancy rose to 80.77 in 2024), but because the population is larger and older.",
            zh: "那麼，總人口為何仍持續成長多年？答案在於「人口動能」。當社會有大量年輕成人時，即使生育率低於替代水準，絕對出生數依然可觀，因為潛在父母的人數龐大。高生育年代出生的龐大世代依序走過育齡，使總人口在 1984 年跌破替代水準後仍長期上升。戶籍人口於 2019 年底達到 23,603,121 人的高峰——距生育率首度跌破替代水準已三十五年——此後因自然減少超過遷移的部分抵銷而緩步下降。\n\n動能也解釋了接下來的走向。今日出生的世代規模小，未來潛在父母的人數更少，幾乎在任何情境下，年齡結構的重心都將持續向高齡移動數十年。至於死亡數，則由 1950 年代後期的每年約 7.5 萬人升至逾 20 萬——並非因為壽命縮短（平均壽命於 2024 年升至 80.77 歲），而是因為人口更多、更老。",
          },
        },
        {
          kind: "evidence",
          variant: "observation",
          title: { en: "Four decades below replacement", zh: "低於替代水準的四十年" },
          text: {
            en: "Taiwan's fertility first fell below the replacement level of roughly 2.1 in the mid-1980s (2.06 in 1984) and has remained below it every year since. The registered population nonetheless continued growing until 2019 because of population momentum: large birth cohorts aged into and through their childbearing years. Understanding this lag is essential. Today's population decline was largely set in motion by the fertility of the 1980s and 1990s, just as today's fertility will shape the population of the 2050s.",
            zh: "台灣生育率於 1980 年代中期（1984 年 2.06）首度跌破約 2.1 的替代水準，此後每年皆低於該水準。惟因人口動能——龐大出生世代依序進入並走過育齡——戶籍人口仍持續成長至 2019 年。理解這種時間落差至關重要：今天的人口減少，很大程度由 1980 與 1990 年代的生育所決定；同樣地，今天的生育也將形塑 2050 年代的人口。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 4. Interactive data exploration                               */
    /* ------------------------------------------------------------ */
    {
      id: "data-exploration",
      title: { en: "Exploring the Data: The Shape of an Aging Population", zh: "數據探索：高齡化人口結構的形貌" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "Statistics examined only through prose remain someone else's summary, so this section hands the data to the reader directly. The chart below shows the share of Taiwan's registered population in three age groups — children (0–14), working age (15–64), and older residents (65 and above) — for every year of the verified series, 1997 to 2025.\n\nEvery chart in this chapter can be explored rather than merely viewed: hover or tap to read exact values, zoom into periods of interest, switch to a table view, or download the data as CSV. Readers are encouraged to do so — and to treat every claim in this chapter, including these, as checkable.",
            zh: "只透過文字檢視統計，得到的永遠是他人的摘要，因此本節將資料直接交到讀者手中。下圖呈現已核驗序列（1997 至 2025 年）中，台灣戶籍人口按三個年齡層——幼年（0–14 歲）、工作年齡（15–64 歲）與高齡（65 歲以上）——的占比。\n\n本章每張圖都可供探索，而非僅供觀看：滑過或點選即可讀取精確數值、可縮放檢視特定區間、可切換為表格檢視，也可下載 CSV。我們鼓勵讀者這麼做——並將本章的每一項陳述（包括這裡的陳述）視為可查證的。",
          },
        },
        {
          kind: "chart",
          datasetId: "tw-age-structure",
          caption: {
            en: "Share of the registered population by age group, 1997–2025 (year-end). Source: MOI household registration statistics.",
            zh: "戶籍人口按年齡層之占比，1997–2025 年（年底）。資料來源：內政部戶政統計。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "The pattern is easiest to read in the top band. The 65+ share rose from 8.1% in 1997 to 20.06% at the end of 2025 — every single year of the series shows an increase. The working-age share traced an arc, peaking at about 74.2% in 2012–2013 and declining since, to 68.43% in 2025. The children's share fell from 22.6% to 11.51%.\n\nThe proportional relationships have reversed within a generation: in 1997 the child share was nearly three times the 65+ share (22.6% versus 8.1%); in 2025 the 65+ share approaches twice the child share (20.06% versus 11.51%). Read as a picture of a society, the chart shows a structure whose weight has moved steadily upward in age — not in sudden jumps, but year after year, in a way planning can anticipate.",
            zh: "圖形以上方色帶最易讀。65 歲以上占比由 1997 年的 8.1% 升至 2025 年底的 20.06%——序列中每一年皆為上升。工作年齡占比呈弧線：於 2012–2013 年達到約 74.2% 的高峰後回落，2025 年為 68.43%。幼年占比則由 22.6% 降至 11.51%。\n\n比例關係在不到一個世代之間逆轉。1997 年，幼年占比接近 65 歲以上占比的三倍（22.6% 對 8.1%）；2025 年，65 歲以上占比已趨近幼年占比的兩倍（20.06% 對 11.51%）。若將此圖視為一個社會的畫像，它呈現的是重心隨年齡穩定上移的結構——不是驟變，而是年復一年、可為規劃所預期的移動。",
          },
        },
        {
          kind: "evidence",
          variant: "observation",
          title: { en: "Crossing 20%: a descriptive threshold, not a judgment", zh: "跨越 20%：描述性門檻，而非價值判斷" },
          text: {
            en: "In 2025 the 65+ share of Taiwan's registered population reached 20.06%, crossing the conventional 20% threshold that demographers, following widespread usage, call a “super-aged society”. The term is descriptive bookkeeping: it records the share of people above an arbitrary age line. It says nothing about those people's health, contribution, or worth, and nothing about a society's vitality. Long lives are part of the same trend as low fertility — a life expectancy of 80.77 years in 2024 is itself a component of population aging. The threshold is useful for planning, because services, infrastructure, and budgets scale with age structure; it is useless as an epithet. This chapter uses it only in the former sense.",
            zh: "2025 年，台灣戶籍人口 65 歲以上占比達 20.06%，跨越人口學界沿用的 20% 門檻，即一般所稱的「超高齡社會」。此名稱只是描述性的記帳：記錄高於某一任意年齡線的人口比例，既不涉及這些人的健康、貢獻或價值，也不代表社會的活力高低。長壽與低生育本是同一趨勢的兩面——2024 年 80.77 歲的平均壽命，本身就是人口高齡化的構成因素。這個門檻對規劃有用，因為服務、基礎設施與預算須隨年齡結構調整；作為標籤則毫無意義。本章僅在前一意義上使用它。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "Two technical notes. First, the verified age-structure series begins in 1997, the coverage of the dataset this project cross-checked; longer reconstructed series exist, but this chapter charts only values it has verified. Second, planners commonly track the relationship between the working-age share and the combined shares of children and older residents: in 2025 the combined 0–14 and 65+ share was about 31.6%, against a working-age share of 68.43%. The point is not that individuals “depend” on others in any moral sense — most older residents are active, and every worker was once a child — but that services and infrastructure are planned against such ratios. In that sense the 2012–2013 working-age peak is already in the past, and the series shows what planners already know: the age mix is shifting steadily.",
            zh: "兩點技術說明。第一，本章採用的已核驗年齡結構序列自 1997 年起，即本專案交叉核對的資料集涵蓋範圍；另有更長的回推序列，但本章只繪製已核驗的數值。第二，規劃上常用工作年齡占比與幼年及高齡合計占比的相對關係：2025 年，0–14 歲與 65 歲以上合計約 31.6%，工作年齡占比為 68.43%。其意義不是說個人在道德上「依賴」他人——多數高齡者仍十分活躍，且每個工作者都曾是兒童——而是服務與基礎設施的規劃須參照這類比例。就此而言，2012–2013 年的工作年齡高峰已成過去，序列呈現的正是規劃者已知的事實：年齡組合正穩定移動。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 5. International comparison                                   */
    /* ------------------------------------------------------------ */
    {
      id: "international-comparison",
      title: { en: "International Comparison: Taiwan Among Its Peers", zh: "國際比較：台灣與參考經濟體" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "A single society's numbers, read alone, invite miscalibration: a slow trend can look sudden, and a shared global pattern can look like a local failure. International comparison is the corrective. The comparisons below follow the framework used across this project: comparator economies are chosen for data availability and relevance, not to produce a flattering ranking; reference years differ and are stated wherever a value appears; and known comparability limitations are disclosed rather than buried. Two comparisons follow — fertility and population aging — using the latest national values this project has individually verified.",
            zh: "單看一個社會的數字，容易失去基準：緩慢的趨勢看來突兀，全球共同的現象也可能被誤讀為在地失敗。國際比較正是校正。以下比較遵循本計畫的框架：參考經濟體依資料可得性與相關性選定，而非為了排名好看；各國參考年份不同，凡出現數值必標明年份；已知的可比性限制如實揭露，而非藏入註腳。接下來兩項比較——生育率與人口高齡化——均採用本專案個別核驗的最新各國數值。",
          },
        },
        {
          kind: "chart",
          datasetId: "intl-tfr",
          caption: {
            en: "Latest verified total fertility rates. Reference years differ by economy (2021–2026) — see the chart's comparability note.",
            zh: "最新已核驗之總生育率。各經濟體參考年份不一（2021–2026）——詳見圖表之可比性註記。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "The first finding is that Taiwan is not alone. Every economy in the comparison is below the replacement level of roughly 2.1: the United States (2025) at 1.58, France (2025) at 1.56, the United Kingdom — England and Wales — at 1.53 (2021, the latest value this project has individually verified), Sweden (2025 estimate) at 1.42, Germany (2026, provisional) at 1.28, Japan (2024) at 1.14, Singapore (2024, residents) at 0.97, South Korea (2024) at 0.75, and Taiwan (2025) at 0.695. The second finding is that the East Asian societies cluster at the bottom: Taiwan, South Korea, and Singapore are the three lowest in this set. The third finding concerns change over time: South Korea's 2024 rate of 0.75 was its first rise in nine years — a reminder that long declines are not necessarily permanent, and equally that one year does not establish a turnaround.",
            zh: "第一個發現：台灣並不孤單。比較中每個經濟體都低於約 2.1 的替代水準：美國（2025）1.58、法國（2025）1.56、英國（英格蘭與威爾斯）1.53（2021，本專案個別核驗之最新值）、瑞典（2025 估計）1.42、德國（2026，初步）1.28、日本（2024）1.14、新加坡（2024，常住人口）0.97、韓國（2024）0.75，以及台灣（2025）0.695。第二個發現：東亞社會集中於最低群——台灣、韓國與新加坡是本組合中最低的三個。第三個發現關乎時間變化：韓國 2024 年的 0.75 為九年來首次回升——這提醒我們，長期下降未必永不停歇；但也同樣提醒，單一年度不足以論定反轉。",
          },
        },
        {
          kind: "evidence",
          variant: "comparison",
          title: { en: "Read the fertility comparison carefully", zh: "審慎解讀生育率比較" },
          text: {
            en: "The bars in this chart are the latest values this project has verified for each economy, and their reference years differ: 2021 to 2026. Singapore's figure covers residents only; Germany's is a provisional current-year estimate; the UK figure is the latest this project individually verified (2021), although newer ONS releases exist and were not re-verified here; Australia is omitted from this chart because its latest TFR reference year could not be confidently verified at access time — it appears in the aging comparison below, where its reference year was verified. Definitions follow each national statistical authority and may differ in scope. These limitations do not overturn the central observations — no economy shown is near replacement, and the East Asian cluster is lowest — but exact gaps between bars should be read with the reference years in mind.",
            zh: "本圖各柱為本專案為各經濟體核驗的最新數值，參考年份不一：2021 至 2026 年。新加坡僅涵蓋常住人口；德國為當年初步估計；英國為本專案個別核驗的最新值（2021），儘管 ONS 已有較新出版、惟未經本專案重新核驗；澳洲因最新 TFR 參考年份於查閱時無法確切核驗而未列入本圖——其高齡化比較的參考年份已核驗，故列入下方該圖。各國定義依其統計機關，涵蓋範圍可能不同。這些限制並不推翻比較的核心觀察——所示經濟體無一接近替代水準、東亞群最低——但柱與柱之間的精確差距，應對照參考年份解讀。",
          },
        },
        {
          kind: "chart",
          datasetId: "intl-65plus",
          caption: {
            en: "Share of population aged 65 and above, latest verified values. Reference years: 2022–2026 — see the chart's comparability note.",
            zh: "65 歲以上人口占比，最新已核驗數值。參考年份：2022–2026——詳見圖表之可比性註記。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "Population aging shows a different geometry. Japan (2025 estimate) is furthest along, with 30.0% of its population aged 65 or above — a level that has been part of Japanese public discussion for two decades. France (2024) stands at 22.17%. South Korea (2025 estimate) at 20.3%, Sweden (2022) at 20.12%, and Taiwan (2025, registered population) at 20.06% form a tight cluster that has effectively just crossed the 20% line. Singapore (2026, residents) at 19.5%, the United Kingdom (2022) at 18.8%, the United States (2025 estimate) at 18.4%, and Australia (2025 estimate) at 18.1% sit lower — though none has stopped aging. Taiwan's position, in short, is comparable to South Korea and Sweden, below Japan, and above the UK, the US, and Australia. Because age-structure shares change slowly, small differences in reference years (2022–2026 across this chart) do not much affect the ranking; they are labelled regardless.",
            zh: "人口高齡化呈現不同的幾何。日本（2025 估計）最為領先，65 歲以上占 30.0%——此水準在日本公共討論中已存在二十年。法國（2024）為 22.17%。韓國（2025 估計）20.3%、瑞典（2022）20.12% 與台灣（2025，戶籍人口）20.06% 構成剛跨過 20% 線的密集群。新加坡（2026，常住人口）19.5%、英國（2022）18.8%、美國（2025 估計）18.4% 與澳洲（2025 估計）18.1% 位置較低——但無一停止高齡化。簡言之，台灣的位置與韓國、瑞典相當，低於日本，高於英、美、澳。由於年齡結構占比變動緩慢，參考年份的小幅差異（本圖為 2022–2026 年）對排序影響有限；但仍如實標示。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "Speed, not only level, matters for adaptation. A widely cited benchmark in the demographic literature is Japan's doubling of its 65+ share from about 7.1% in 1970 to about 14.1% in 1994 — roughly 24 years. Taiwan's corresponding passage was comparable: in the verified series the 65+ share was about 9.2% in 1993, with the 7% line crossed around that time, and it first exceeded 14% in 2018 (14.6%) — roughly 25 years. This observation, computed from the verified series, is that Taiwan aged at roughly Japan's pace: quickly by historical standards, with correspondingly less calendar time to adapt institutions, services, and infrastructure.",
            zh: "速度與水準同樣影響調適。人口學文獻中廣被引用的基準，是日本 65 歲以上占比由 1970 年的約 7.1% 倍增至 1994 年的約 14.1%——前後約 24 年。台灣的對應過程相近：在已核驗序列中，65 歲以上占比 1993 年約為 9.2%，7% 門檻約於該時期前後跨越，並於 2018 年（14.6%）首次超過 14%——前後約 25 年。此一由已核驗序列計算而得的觀察是：台灣的高齡化速度與日本大致相當——以歷史標準而言相當快，制度、服務與基礎設施可用於調適的時間也相應較短。",
          },
        },
        {
          kind: "evidence",
          variant: "comparison",
          title: { en: "The comparison in one paragraph", zh: "一段話總結比較" },
          text: {
            en: "Taiwan's fertility sits at the bottom of a set in which every member is below replacement — a shared structural condition of advanced economies, most acute in East Asia. Taiwan's aging is mid-field among the same set: level with South Korea and Sweden, well below Japan, above the UK, the US, and Australia — and reached at roughly Japan's speed. Comparisons expand understanding; they do not create a competition. The relevant question is not who is “winning” demography, but what each society's institutions are doing with the conditions they have.",
            zh: "台灣的生育率位於一組「全部低於替代水準」的經濟體的底部——這是先進經濟體共同的結構性處境，在東亞最為顯著。台灣的高齡化在同一組合中居中：與韓國、瑞典相當，遠低於日本，高於英、美、澳——且速度與日本大致相當。比較是為了拓展理解，不是為了競賽。真正的問題不是誰在人口學上「贏」，而是每個社會的制度如何因應自身的處境。",
          },
        },
        {
          kind: "sources",
          sourceIds: [
            "moi-ris-population",
            "mhlw-japan-vital",
            "kostat-korea",
            "singstat-singapore",
            "insee-france",
            "destatis-germany",
            "ons-uk-births",
            "scb-sweden",
            "nchs-us-births",
            "abs-australia",
            "worldbank-indicators",
          ],
          note: {
            en: "International values are the latest national figures individually verified by this project; reference years differ (2021–2026) and are stated with each value. The World Bank harmonized series is used as a cross-check and general reference, not as the source of the displayed values. Full provenance for each source, including its verification note, appears in the chapter's final section and in the site's Data and Sources view.",
            zh: "國際數值為本專案個別核驗之最新各國數值；參考年份不一（2021–2026），均隨數值標明。世界銀行調和序列作交叉核對與一般參考之用，並非所示數值之來源。各來源完整出處（含核驗紀錄）見本章末節與網站「資料與來源」頁面。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 6. Potential explanatory factors                              */
    /* ------------------------------------------------------------ */
    {
      id: "explanations",
      title: { en: "Potential Explanations: Hypotheses, Not Verdicts", zh: "可能的解釋：假說，而非定論" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "Why has fertility fallen so far? The honest answer begins with a caution. Chapter-level statistics show that births declined; they do not show why. Explanations require other kinds of evidence — surveys, cohort studies, cross-country analysis — and each candidate should be treated as a hypothesis whose evidentiary status is stated, not as a settled cause. What follows is an inventory of the explanations most discussed in demographic research on Taiwan and comparable societies. None is singly sufficient; fertility decline is multi-causal, and the relative importance of each factor in Taiwan specifically remains an active research question.",
            zh: "生育率為何降至此低？誠實的回答始於一項提醒。本章層級的統計能顯示出生減少，不能顯示原因。解釋需要其他類型的證據——調查、世代研究、跨國分析——而每一個候選解釋都應視為「假說」並標明其證據狀態，而非既成定論。以下整理人口研究中針對台灣及類似社會最常討論的解釋方向。沒有任一因素可單獨充分解釋；生育率下降是多因的，各因素在台灣的相對重要性仍是進行中的研究課題。",
          },
        },
        {
          kind: "heading",
          text: { en: "Delayed marriage and family formation", zh: "晚婚與組成家庭的延後" },
        },
        {
          kind: "prose",
          text: {
            en: "In Taiwan, as across East Asia, childbearing is closely tied to marriage — a pattern long documented in the region's demographic research — so the timing of marriage directly shapes fertility. Across advanced economies, and visibly in Taiwan's own vital statistics, the ages at first marriage and first birth have risen over recent decades, and annual births and marriages tend to move together. Postponement is itself a mechanism by which period fertility falls even if eventual family size changes less: when the average age of childbearing rises quickly, births that would otherwise occur this year occur later instead. Whether Taiwan's couples are ultimately having fewer children than they want, having them later, or both, is a question survey evidence addresses — and one to which this chapter returns.",
            zh: "在台灣，如同東亞各地，生育與婚姻密切相連——此一型態在該區域的人口研究中早有紀錄——因此婚姻時點直接影響生育。在先進經濟體（台灣自身的戶政統計亦明顯可見），初婚與初產年齡近數十年持續上升，且年度出生數與結婚數傾向同向移動。「延後」本身就是時期生育率下降的機制之一：即使最終家庭規模變化不大，當平均生育年齡快速上升，原會在今年發生的生育便往後遞延。台灣的伴侶究竟是「最終生育數少於期望」、「僅是延後」，還是兩者皆有——這正是調查證據所能處理的問題，本章稍後將再回到此處。",
          },
        },
        {
          kind: "heading",
          text: { en: "Housing costs and economic insecurity", zh: "居住成本與經濟不安" },
        },
        {
          kind: "prose",
          text: {
            en: "A second family of explanations points to material conditions: the cost of housing, the cost of raising children, and the insecurity of income. Where establishing an independent household is expensive, family formation tends to happen later or less often — a pattern discussed in research on many advanced economies. This chapter deliberately cites no housing figures: housing affordability is Dimension 03 of this project's research architecture and will be examined with its own verified data there; using unverified numbers here would violate the project's own rules. At the population level, the structural observation stands: the material preconditions of family formation are a plausible and much-discussed part of the picture, and their careful measurement belongs to that research stream.",
            zh: "第二類解釋指向物質條件：居住負擔、養育成本與所得的不安定。在自立門戶成本高昂的社會，家庭組成往往延後或減少——這是許多先進經濟體研究中常見的討論。本章刻意不引用任何居住數據：居住可負擔性屬本計畫研究架構的第三面向，將於該處以專屬核驗資料檢視；若在此使用未經核驗的數字，將違反計畫自身的規則。在人口層次可以說的是結構性觀察：家庭組成的物質前提，是合理且廣受討論的一部分，其審慎測量屬於該研究流。",
          },
        },
        {
          kind: "heading",
          text: { en: "Working hours and work-life balance", zh: "工時與工作生活平衡" },
        },
        {
          kind: "prose",
          text: {
            en: "A third family concerns time. Where working hours are long or schedules inflexible — particularly when combined with unequal expectations about household and care work — the practical difficulty of combining employment with child-rearing rises. Working hours and working conditions are Dimension 04 of this project and will be examined separately with verified data. The population-level point is only that the organization of work is a recurring candidate explanation in the international literature, discussed with evidence of varying strength in different societies, and that its specific contribution in Taiwan has not been isolated here.",
            zh: "第三類解釋關乎時間。當工時過長或排班缺乏彈性——尤其再疊加家務與照顧工作的不平等期待——就業與育兒並行的實際難度便會提高。工時與工作條件屬本計畫第四面向，將另行以核驗資料檢視。人口層次僅須指出：工作的組織方式是國際文獻中反覆出現的候選解釋，在不同社會中證據強弱不一，而其在台灣的具體貢獻尚未於此被分離檢驗。",
          },
        },
        {
          kind: "heading",
          text: { en: "Childcare availability and cost", zh: "托育的供給與成本" },
        },
        {
          kind: "prose",
          text: {
            en: "A fourth family concerns the infrastructure of care: the availability, affordability, and operating hours of childcare, and after-school care for older children. The logic is direct — where quality care is scarce or costly, the private cost of an additional child rises. This is among the most policy-relevant hypotheses, because care infrastructure is something public policy can shape within years rather than decades. Taiwan's public discussion of childcare provision is extensive; how provision changes family decisions is a question this project will examine with verified coverage and cost data before drawing conclusions.",
            zh: "第四類解釋關乎照顧的基礎設施：托育的可及性、可負擔性與收托時間，以及學齡兒童的課後照顧。邏輯很直接——優質托育稀少或昂貴時，多生一個孩子的私人成本便上升。這也是與政策最相關的假說之一，因為照顧基礎設施是公共政策能在「年」而非「世代」的時間尺度上改變的對象。台灣社會對托育供給的討論十分廣泛；供給如何改變家庭決策，本計畫將以經核驗的涵蓋率與成本資料檢視後再下結論。",
          },
        },
        {
          kind: "heading",
          text: { en: "Changing values around family and children", zh: "家庭與生育觀念的轉變" },
        },
        {
          kind: "prose",
          text: {
            en: "A fifth family is cultural: the place of marriage and children in a life plan. Across many societies, surveys document rising acceptance of diverse life paths and a declining sense that marriage or parenthood is obligatory. Two cautions apply. Values are difficult to measure well — survey answers depend on wording and on the gap between stated and revealed preferences. And cultural change is not separable from material conditions: values about family size form in interaction with housing, work, and care realities. The hypothesis is plausible and widely discussed; treating it as self-sufficient would be a mistake the literature has repeatedly cautioned against.",
            zh: "第五類解釋屬文化層次：婚姻與子女在人生規劃中的位置。在許多社會，調查都記錄到對多元人生路徑接受度的上升，以及「結婚生育乃義務」感的減弱。但有兩點必須留意。其一，價值觀不易妥善測量——調查答案受措辭，以及「宣稱偏好」與「實際選擇」落差的影響。其二，文化變遷並非可與物質條件分離的獨立原因：對家庭規模的價值，是在與居住、工作、照顧現實的互動中形成的。此一假說合理且廣受討論；但把它視為自足的解釋，是文獻一再提醒的錯誤。",
          },
        },
        {
          kind: "heading",
          text: { en: "The economics of parenting", zh: "養育的經濟學" },
        },
        {
          kind: "prose",
          text: {
            en: "A sixth family concerns the economics of parenting itself. In societies with intensive parenting norms — high expected investment of money, time, and attention per child — the perceived cost of each additional child rises, and so does the opportunity cost of interrupted careers. This hypothesis interacts with all the others: delayed marriage shifts the fertile years later, expensive housing delays independence, long hours raise the time price of care, and norms raise the expected standard per child. Fertility decisions sit at the intersection of all of these — which is precisely why single-cause explanations fail.",
            zh: "第六類解釋關乎養育本身的經濟學。在教養投入高度密集的社會——每個孩子被期待投入的金錢、時間與關注較高——每多一個孩子的認知成本便上升，中斷職涯的機會成本亦然。此一假說與其他各項交互作用：晚婚使生育年齡後移、高居住成本延後自立、長工時提高照顧的時間代價、教養規範拉高每個孩子的標準。生育決策位於這一切的交會點——這正是單一原因解釋必然失敗的原因。",
          },
        },
        {
          kind: "evidence",
          variant: "interpretation",
          title: { en: "Multi-causal, and not yet apportioned", zh: "多因交織，且尚未能定其比重" },
          text: {
            en: "The disciplined reading of this inventory: each hypothesis above is consistent with some evidence somewhere; none has been shown to dominate in Taiwan specifically; and correlations between, for example, housing costs and fertility across time or place do not by themselves establish causation — the causal arrow may run in both directions, or a third factor may drive both. The demographic literature treats East Asian ultra-low fertility as the outcome of interacting structural conditions rather than of any single variable. The next section is therefore an exercise in weighing, not in verdicts.",
            zh: "對上述清單的紀律式解讀：每一項假說都與某些證據相容；沒有一項被證明在台灣特別占主導；而例如居住成本與生育率在時間或空間上的相關，本身並不建立因果——因果箭頭可能雙向，也可能由第三因素共同驅動。人口學文獻將東亞超低生育視為多重結構條件互動的結果，而非任一單一變數所致。因此，下一節所做的練習是「權衡」，而非裁決。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 7. Evidence supporting different interpretations              */
    /* ------------------------------------------------------------ */
    {
      id: "evidence-interpretations",
      title: { en: "Weighing the Evidence: What Different Findings Suggest", zh: "證據權衡：不同發現指向什麼" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "If no single cause dominates, what does the weight of evidence actually support? Three bodies of evidence are informative here: cross-country variation, a country's own variation over time, and the behavior of fertility after policy changes. Each narrows the space of plausible interpretations.",
            zh: "若沒有單一原因占主導，證據的重量究竟支持什麼？三類證據在此有用：跨國差異、一國之內的時間變化，以及政策改變後生育率的行為。每一類都會收窄合理解讀的空間。",
          },
        },
        {
          kind: "evidence",
          variant: "interpretation",
          title: { en: "Policy matters at the margin — none has restored replacement", zh: "政策在邊際上有效——無一恢復替代水準" },
          text: {
            en: "The Nordic countries maintain among the most generous family-support systems in the world — parental leave, public childcare, and individual taxation have all been documented in detail — yet Sweden's fertility (2025 estimate) is 1.42, well below replacement. France, long among Europe's higher-fertility countries and likewise known for extensive family policy, recorded 1.56 in 2025. The United States, with markedly less family policy, recorded 1.58 — a nearly identical level. The lesson is precise: family policy appears able to shift fertility at the margin and can matter greatly to families' daily lives, but no known package has returned any society to replacement level. Expecting any single Taiwanese policy to “fix” fertility is inconsistent with the comparative record; treating families' material conditions as unimportant is equally inconsistent.",
            zh: "北歐國家擁有全球數一數二完善的家庭支持制度——育嬰假、公共托育與個別課稅均有詳細文獻紀錄——但瑞典的生育率（2025 估計）為 1.42，仍遠低於替代水準。法國長期是歐洲生育率較高的國家之一，同樣以綿密的家庭政策聞名，2025 年為 1.56。家庭政策顯著較少的美國，2025 年為 1.58——水準幾乎相同。這些比較支持的結論很精確：家庭政策似能在邊際上移動生育率，對家庭日常生活的影響更可能十分重大；但沒有任何已知組合能讓任何社會回到替代水準。因此，期待台灣任何單一政策「修好」生育率，與比較紀錄不符；但認為家庭的物質條件無關緊要，同樣與紀錄不符。",
          },
        },
        {
          kind: "evidence",
          variant: "interpretation",
          title: { en: "One year is not a trend — and timing distorts the reading", zh: "單一年度不是趨勢——時點效應也會扭曲解讀" },
          text: {
            en: "Taiwan's own series shows how much period fertility can move in the short run: the TFR rose to 1.27 in 2012 (a Dragon year), fell to 0.99 in 2020, ticked up to 0.885 in 2024, then fell to 0.695 in 2025. South Korea's rate rose in 2024 for the first time in nine years. Demographers also distinguish timing from completed family size: when childbearing is postponed, the period TFR falls below what actual cohorts eventually have, because the same births are recorded in later years. None of this softens the central observation — Taiwan has been far below replacement for decades — but it counsels against reading either the 2025 drop or any future uptick as a lasting change on the evidence of a single year. Distinguishing “low fertility” (robustly established) from “this year's level” (noisy) is basic hygiene in this field.",
            zh: "台灣自身的序列即顯示時期生育率的短期波動可以多大：TFR 於 2012 年（龍年）回升至 1.27，2020 年降至 0.99，2024 年小幅升至 0.885，2025 年再降至 0.695。韓國的生育率則於 2024 年九年來首度回升。人口學者亦區分「時點」與「最終家庭規模」：當生育遞延，時期 TFR 會低於實際世代最終的生育數，因為同樣的生育被記錄在較晚的年份。這些都不會淡化核心觀察——台灣已數十年遠低於替代水準——但它提醒我們，不宜以單一年度的證據，將 2025 年的下降、或任何未來的回升解讀為持久改變。區分「低生育」（已穩固確立）與「今年的水準」（雜訊多），是此領域的基本功。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "Taken together, the evidence supports a restrained interpretation. Fertility in Taiwan is low by international standards and has been for decades; the causes are structural, multiple, and interacting; policy elsewhere has shifted outcomes at the margin without restoring replacement; and year-to-year movements should not be over-read.\n\nWhat the evidence does not support is equally important. It does not identify any group, generation, or gender as responsible. It does not show that Taiwanese families want fewer children than families elsewhere. And it does not establish that any particular lever — housing, working hours, childcare, culture — is decisive. Living with that uncertainty is not a failure of analysis; pretending to resolve it would be.",
            zh: "綜合而言，證據支持的是一種節制的解讀。台灣的生育率就國際標準而言偏低，且已數十年如此；原因是結構性、多重且交互作用的；其他社會的政策曾在邊際上改變結果，但未恢復替代水準；年度間的變動不應過度解讀。\n\n同樣重要的是證據「不支持」的部分：它沒有指出任何群體、世代或性別須為此負責；沒有顯示台灣家庭比其他地方的家庭更不想要孩子；也沒有確立任何特定槓桿——居住、工時、托育、文化——是決定性的。與這種不確定性共存不是分析的失敗；假裝解決了它才是。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 8. Uncertainties                                              */
    /* ------------------------------------------------------------ */
    {
      id: "uncertainties",
      title: { en: "What Remains Uncertain", zh: "哪些仍不確定" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "A chapter that presented every number with equal confidence would be dishonest about its own foundations. This section states what remains unknown — about the future, about the most recent data, and about the statistics themselves.",
            zh: "若一章對每個數字都表達同等的自信，便是對自身基礎的不誠實。本節說明仍未確知之事——關於未來、關於最新資料，也關於統計本身。",
          },
        },
        {
          kind: "evidence",
          variant: "uncertainty",
          title: { en: "Official projections: described qualitatively, pending verification", zh: "官方推估：僅定性描述，尚待核驗" },
          text: {
            en: "Taiwan's National Development Council publishes official population projections; the most recent full edition (2022) covers the period to 2070. This project has not yet re-verified that edition's specific projected values against the primary publication, so this chapter deliberately cites none of them. What can be said qualitatively is consistent with basic demography: official projections anticipate continued population decline and substantial further aging under all published scenarios, because the largest determinants of the coming decades — the people already born, and their ages — are already in the registration data. Specific projected figures will be added to this project only after verification against the primary publication. Until then, readers should treat any specific projected number, from any source, with the same caution this project applies to itself.",
            zh: "台灣的國家發展委員會定期發布官方人口推估；最新完整版本（2022 年）推估至 2070 年。本專案尚未就該版本的特定推估值對原始出版品完成核驗，因此本章刻意不予引用。可以定性陳述的是與基礎人口學一致的方向：官方推估預期，在所有公布情境下人口將持續減少、高齡化將大幅加深——因為未來數十年最大的決定因素（已出生的人及其年齡）已在戶籍資料之中。特定推估數字須待核驗後方會納入本計畫。在此之前，讀者對任何來源的特定推估數字，都應抱持與本計畫對自身相同的謹慎。",
          },
        },
        {
          kind: "evidence",
          variant: "uncertainty",
          title: { en: "How firm are the latest numbers?", zh: "最新數字有多牢靠？" },
          text: {
            en: "Three caveats bound the 2025 figures used throughout this chapter. First, they are the most recently published complete-year values and may be marginally revised when final yearbook compilation is complete; revisions to recent vital statistics are typically small, but they exist. Second, this project verified the Taiwan series by cross-checking two independent reproductions of the MOI/RIS aggregate tables; a direct re-download from the RIS interactive database was not performed, and is recommended before any republication of these figures. Third, as argued above, a single year — including 2025's TFR of 0.695 — cannot by itself establish whether the level has durably shifted or reflects timing and short-term conditions. None of these caveats is unusual; all are standard practice. Stating them is the practice.",
            zh: "本章使用的 2025 年數字受三項提醒規範。第一，它們是最近公布的全年數值，年報定稿後仍可能微幅修正；近年生死統計的修正通常很小，但確實存在。第二，本專案的台灣序列，是透過交叉核對內政部戶政司彙總表的兩個獨立轉載完成核驗；並未直接自戶政司互動資料庫重新下載，若要再出版這些數字，建議先行辦理。第三，如前所述，單一年度——包括 2025 年的 0.695——本身無法確定水準是否已持久改變，抑或反映時點與短期條件。這些提醒沒有一項特殊，全部都是標準作業；把它們說出來，就是標準作業。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "Two further limits deserve plain statement. First, Taiwan's official statistics measure the registered population. Registration and de-facto residence differ — people registered in one place and living in another, or present in Taiwan but outside the registration framework — and this affects some measures more than others: counts of vital events are well captured, the geographic distribution of daily life less so. Second, demographic forecasting has honest limits: projections extending decades ahead are scenario calculations whose assumptions are themselves uncertain. The useful question is not whether forecasts will be right, but whether institutions remain adaptable across the range of outcomes the scenarios span.\n\nWhat would improve understanding? Re-verification of official projections against the primary publication, so this project can chart them; cohort fertility data, which measure what a generation of women actually completes, complementing the period TFR; marriage statistics, given how tightly Taiwanese fertility follows marriage; and survey evidence on desired family size, to quantify the gap between the children people say they want and the children they have — a documented research topic in many societies, and measurable in Taiwan with the right instruments.",
            zh: "另有兩項限制值得直白說明。第一，台灣官方統計測量的是戶籍人口。設籍與實際居住有別——設籍一地、生活於另一地，或身在台灣但不在戶籍體系之內——且對不同指標的影響程度不同：生死事件的計數掌握良好，日常生活的地理分布則相對較弱。第二，人口預測有其誠實的極限：推及數十年的推估是情境計算，其假設本身即不確定。有用的問題不是預測準不準，而是當情境涵蓋的各種結果發生時，制度是否保持可調適。\n\n什麼能增進理解？對原始出版品重新核驗官方推估，使本計畫得以繪製；世代生育資料——衡量一個世代婦女實際完成的生育數——以補充時期 TFR；婚姻統計，因台灣生育與婚姻緊密相連；以及期望家庭規模的調查證據，以量化「想要的孩子數」與「實際的孩子數」之間的落差——此落差在許多社會都是有紀錄的研究課題，在台灣亦可藉適當工具測量。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 9. Lessons from other societies                               */
    /* ------------------------------------------------------------ */
    {
      id: "lessons",
      title: { en: "Lessons from Other Societies", zh: "他山之石：其他社會的經驗" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "Some societies have been living with these numbers longer. Their experience is informative — provided it is read descriptively, as a record of what was tried and what followed, rather than as a prescription. Institutional contexts differ; what worked or failed elsewhere cannot be assumed to transfer to Taiwan. The entries below are deliberately written without verdicts.",
            zh: "有些社會與這些數字共處的時間更久。他們的經驗具有參考價值——前提是以描述的方式閱讀：視之為「嘗試了什麼、之後發生什麼」的紀錄，而非處方。制度脈絡各異；他處的成敗不能假設可以移植到台灣。以下各條刻意不附裁決。",
          },
        },
        {
          kind: "heading",
          text: { en: "Japan: two decades of institutional adaptation", zh: "日本：二十年的制度調適" },
        },
        {
          kind: "prose",
          text: {
            en: "Japan crossed the aging thresholds Taiwan is now crossing roughly a generation earlier, and its public discussion of aging is correspondingly mature. Among the most studied institutional responses anywhere is Japan's long-term-care insurance, introduced in 2000: social insurance that finances long-term care separately from medical care, with eligibility set by standardized needs assessment. Its financing pressures, workforce shortages, and regional disparities are documented in the literature, as are its repeated revisions. The descriptive lesson is not that the scheme is a model to copy or a cautionary tale, but that a society can build and repeatedly adjust major institutions around aging — and that doing so takes sustained public deliberation over decades.",
            zh: "日本大約早台灣一個世代跨越台灣現在正面臨的高齡門檻，其高齡化公共討論也相應成熟。其中被研究最多的制度回應之一，是日本於 2000 年開辦的長期照顧保險：以社會保險方式將長照財務與醫療分離，並以標準化失能評估決定給付資格。其財務壓力、照顧人力不足與區域落差在文獻中均有紀錄，歷次修法亦然。描述性的啟示不是「該制度是該抄的模範或該引以為戒的案例」，而是：一個社會可以圍繞高齡化建立並反覆調整重大制度——而這需要數十年持續的公共審議。",
          },
        },
        {
          kind: "heading",
          text: { en: "The Nordic experience: support without restoration", zh: "北歐經驗：支持而非復原" },
        },
        {
          kind: "prose",
          text: {
            en: "The Nordic countries built the world's most comprehensive family-support architectures — parental leave with income compensation, universal public childcare, individual taxation — and their outcomes are instructive in both directions. They have generally sustained fertility above the East Asian level — Sweden's 2025 estimate is 1.42 — and they have not returned to replacement. The literature documents the trade-offs candidly: these programs are expensive, their labor-market effects are studied in detail, and even their proponents do not claim they restore replacement-level fertility. For Taiwan, the calibrated reading is: generous support appears compatible with higher — though still low — fertility, and it unambiguously changes the daily economics of families with children. Whether it transfers to Taiwan's fiscal, labor, and cultural context is a separate question that cannot be assumed away.",
            zh: "北歐國家建立了全球最完整的家庭支持架構——附所得補償的育嬰假、普及的公共托育、個別課稅——其結果在兩個方向都具啟發性。它們的生育率大致維持在東亞水準之上——瑞典 2025 年估計為 1.42——但並未回到替代水準。文獻坦率記錄其中的取捨：這些方案成本高昂，其勞動市場效果被詳細研究，即使支持者也不主張它們能恢復替代水準的生育率。對台灣而言，校準後的解讀是：寬厚的支持似與「較高但仍低」的生育率相容，且毫無疑問會改變有子女家庭的日常經濟。至於是否適用於台灣的財政、勞動與文化脈絡，是不能預設答案的另一個問題。",
          },
        },
        {
          kind: "heading",
          text: { en: "Sweden and France: relatively higher, still below replacement", zh: "瑞典與法國：相對較高，仍低於替代水準" },
        },
        {
          kind: "prose",
          text: {
            en: "Among the comparators in this chapter, Sweden (1.42, 2025 estimate) and France (1.56, 2025) sit at the higher end while remaining clearly below replacement. Their histories differ — France's family policy tradition is commonly described as dating to the early twentieth century, Sweden's as built largely from the 1970s — and demographers attribute their relatively higher fertility to combinations of policy continuity, gender-equal labor markets, and family norms, with debated weights. The humble, well-supported observation: levels somewhat above the East Asian cluster can be sustained without reaching replacement — and whatever combination produces them took decades to assemble.",
            zh: "在本章的比較組合中，瑞典（1.42，2025 估計）與法國（1.56，2025）位於較高端，但仍明顯低於替代水準。兩國歷史不同——法國的家庭政策傳統一般被描述為可上溯至二十世紀初，瑞典則主要自 1970 年代建成——人口學者將其相對較高的生育率歸因於政策延續性、性別平等的勞動市場與家庭規範的組合，權重各有爭論。謙遜而有據的觀察是：略高於東亞群的水準確實可能維持，且無須達到替代水準——而無論產生此結果的組合為何，其形成都花了數十年。",
          },
        },
        {
          kind: "heading",
          text: { en: "South Korea: the first rise in nine years", zh: "韓國：九年來的首次回升" },
        },
        {
          kind: "prose",
          text: {
            en: "South Korea has recorded fertility rates among the lowest ever published for a national population, and in 2024 its TFR rose to 0.75 — its first increase in nine years. Korean statistical authorities and researchers have discussed candidate explanations while explicitly cautioning that one year does not establish a trend. For Taiwan, the episode's value is narrow but real: very low fertility is not necessarily a permanent condition, and the numbers can move — in either direction — when conditions change. It is a data point about possibility, not a promise.",
            zh: "韓國曾錄得國家人口紀錄上屬於最低之列的生育率，而 2024 年其 TFR 回升至 0.75——九年來首次增加。韓國統計機關與研究者對可能的原因有所討論，同時明確提醒：單一年度不足以論定趨勢。對台灣而言，此事件的價值有限但真實：極低生育不必然是恆定的狀態，條件改變時，數字可能向任一方向移動。這是關於「可能性」的數據點，不是承諾。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "Read together, these records suggest a stance rather than a formula. Societies facing the same structural currents have chosen different mixes of adaptation — building institutions for an older population — and mitigation — easing the conditions under which families form and grow. No society in this comparison set has reversed the current; several have navigated it with visible deliberateness. That distinction, reversal versus navigation, frames the next section.",
            zh: "綜合閱讀，這些紀錄指向的是一種「立場」而非「公式」。面對相同結構潮流的社會，各自選擇了不同組合——調適（為高齡人口建立制度）與緩解（改善家庭組成與生育的條件）。在本比較組合中，沒有社會逆轉了潮流；若干社會則以清晰可見的審慎穿越了它。「逆轉」與「航行」的這一區別，構成下一節的框架。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 10. Potential improvements                                    */
    /* ------------------------------------------------------------ */
    {
      id: "potential-improvements",
      title: { en: "Potential Improvements: What Could Help", zh: "可行方向：什麼可能有幫助" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "What could help? The question needs defining first. “Improvement” here does not mean engineering population numbers toward any target — that framing treats people as instruments. It means improving the fit between institutions and the population that actually exists, and expanding what is practically possible for the people who live here, at every age. Five directions follow, each linked to the evidence above and each compatible with different political values; none requires blaming anyone, and in each, the honest statement of limits is part of the recommendation.",
            zh: "什麼可能有幫助？回答之前，問題需要界定。本章的「改善」不是把人口數字工程到任何目標——那種框架把人當作工具。它指的是：讓制度與實際存在的人口更相稱，並擴大每一個年齡層的人在此生活的實際可能性。以下五個方向，各自連結前述證據，且各自與不同的政治價值相容；沒有一項需要責怪任何人。在每一項中，誠實說出限制，本身就是建議的一部分。",
          },
        },
        {
          kind: "heading",
          text: { en: "Adapting services and infrastructure to an older age mix", zh: "讓服務與基礎設施適應更老的年齡組合" },
        },
        {
          kind: "prose",
          text: {
            en: "The 65+ share has crossed 20% and, on any reading of the verified data, will keep rising for decades. This is the most certain demographic fact in this chapter — and adaptation is the response with the strongest evidentiary basis, because it does not depend on changing anyone's private decisions. The agenda is concrete: long-term care capacity and workforce; healthcare organized around chronic and multiple conditions rather than single episodes; housing stock and transportation accessible to people with reduced mobility; urban design that reduces isolation; digital services with human fallbacks. Japan's decades of institutional adaptation, noted above, show this is a navigable problem rather than an unsolvable one. The binding constraint is not knowledge but sustained priority.",
            zh: "65 歲以上占比已跨越 20%，且無論如何解讀已核驗的資料，都將持續上升數十年。這是本章最確定的人口事實——而「調適」是證據基礎最強的回應，因為它不依賴改變任何人的私人決定。議題很具體：長期照顧量能與人力；以慢性與多重病症為中心（而非單次就醫）的醫療組織；適合行動不便者的住宅存量與運輸；減少孤立的都市設計；保留真人選項的數位服務。前述日本數十年的制度調適顯示，這是可航行的問題，不是無解的問題。真正的限制不在知識，而在持續的優先性。",
          },
        },
        {
          kind: "heading",
          text: { en: "Supporting those who want children to have them", zh: "支持想生育的人如願生育" },
        },
        {
          kind: "prose",
          text: {
            en: "A documented research topic across many societies is the gap between the number of children people say they would like and the number they actually have. This chapter cites no Taiwan-specific figure for that gap, having verified none — but the topic points to a well-defined objective: removing obstacles for people who already want children, rather than persuading anyone to want them. Against the hypothesis inventory above, the actionable items are care infrastructure (availability, cost, hours — including for non-standard work schedules), workplace arrangements compatible with caregiving, and financial predictability in the early childhood years. The comparative evidence supports modest expectations for aggregate fertility effects and substantial expectations for family welfare effects — both count as improvements.",
            zh: "在許多社會，「人們想要的孩子數」與「實際的孩子數」之間的落差，都是有紀錄的研究課題。本章並未核驗任何台灣專屬數字，因此不予引用——但此課題指向一個界定明確的目標：為已經想要孩子的人移除障礙，而不是說服任何人去想要。對照前述假說清單，可行動的項目是照顧基礎設施（可及性、成本、時間——包含非典型工作時段）、與照顧相容的職場安排，以及幼兒階段的財務可預期性。比較證據支持對「總體生育率效果」抱持溫和預期、對「家庭福祉效果」抱持實質預期——兩者都算改善。",
          },
        },
        {
          kind: "heading",
          text: { en: "Workforce participation and productive aging", zh: "勞動參與與生產性老化" },
        },
        {
          kind: "prose",
          text: {
            en: "With the working-age share declining from its 2012–2013 peak, workforce participation moves to the center — not as a demand placed on anyone, but as a set of conditions that can widen or narrow. Options studied in the international literature include extending working lives on genuinely voluntary terms (flexible schedules, phased retirement, age-friendly workplaces); supporting caregivers' participation through care-compatible employment; and investing in skills across the full working life, not only before age 25. Taiwan's rising life expectancy — 80.77 in 2024 — makes this more, not less, relevant: longer healthy lives are an asset precisely when the age mix shifts. Labor conditions are Dimension 04 of this project and are examined separately there.",
            zh: "隨著工作年齡占比自 2012–2013 年高峰回落，勞動參與成為核心——這不是對任何人提出的命令，而是一組可以放寬或收緊的條件。國際文獻研究的選項包括：在真正自願的前提下延長工作年限（彈性工時、漸進退休、高齡友善職場）；透過與照顧相容的就業支持照顧者參與；以及讓技能投資貫穿整個工作生涯，而非僅止於 25 歲之前。台灣持續上升的平均壽命——2024 年 80.77 歲——使此方向更（而非更不）相關：健康餘命愈長，在年齡組合移動之際愈是資產。勞動條件屬本計畫第四面向，將另行檢視。",
          },
        },
        {
          kind: "heading",
          text: { en: "Migration as one demographic lever", zh: "遷移作為人口槓桿之一" },
        },
        {
          kind: "prose",
          text: {
            en: "Population change has two engines, and Taiwan's own recent data show the second engine working: net social increase of +225,599 in 2023 and +47,029 in 2024 partially offset natural decrease. Migration is a legitimate topic of demographic fact and of public debate; societies weigh it against documented social considerations — integration, labor protections, housing pressure, community change — and reach different settlements. This chapter's contribution is only to state the verified arithmetic plainly: in recent years, migration has been the difference between a shrinking and a roughly stable population, and any honest long-run population discussion must account for it. What settlement Taiwan chooses is a matter for its own public deliberation, not for this chapter to prescribe.",
            zh: "人口變動有兩個引擎，而台灣最近的資料顯示第二個引擎正在運轉：2023 年社會增加 +225,599、2024 年 +47,029，部分抵銷了自然減少。遷移既是人口事實，也是公共辯論的主題；各社會權衡其間有紀錄的社會考量——整合、勞動保護、居住壓力、社區變遷——並形成不同的安排。本章的貢獻僅是把已核驗的算術說清楚：近年來，遷移正是「人口縮減」與「大致持平」之間的差別；任何誠實的長期人口討論都必須計入它。台灣選擇何種安排，屬於自身公共審議的事務，不是本章該開立處方的。",
          },
        },
        {
          kind: "heading",
          text: { en: "Community and intergenerational connection", zh: "社區與世代連結" },
        },
        {
          kind: "prose",
          text: {
            en: "Demography is ultimately about people, and the lived texture of an aging society depends heavily on the strength of everyday connections — between generations and within neighborhoods. The verified statistics here measure quantities, not connections; but the international literature on community programs — intergenerational shared sites, volunteer support for new parents, neighborhood mutual aid — documents both feasibility and studied benefits, with the standard caveat that effects vary and transfer cannot be assumed. This direction matters for its own sake, and its demographic relevance is real: social connection is among the conditions that make family formation and aging in place more practical. It is also the direction most directly available to readers, which is where the next section begins.",
            zh: "人口學終究是關於人的學問，而高齡化社會的生活質地，很大程度取決於日常連結的強度——世代之間、鄰里之內。本章核驗的統計測量的是數量，不是連結；但關於社區方案的國際文獻——世代共融場域、新生兒家庭的志工支持、鄰里互助——記錄了可行性與經研究的效益，並附帶標準但書：效果各異，且不能假設可以移植。這個方向本身就重要，其人口相關性也真實：社會連結是讓家庭組成與在地老化更可行的條件之一。它也是讀者最可以直接著手的方向——下一節即由此開始。",
          },
        },
        {
          kind: "evidence",
          variant: "action",
          title: { en: "Five directions, honestly stated", zh: "五個方向，誠實陳述" },
          text: {
            en: "Adaptation to an older age structure is the direction with the most certain basis. Supporting those who want children improves family welfare, with modest — not transformative — fertility effects. Wider workforce participation changes the arithmetic without compelling anyone. Migration is already offsetting part of natural decrease and belongs in any honest long-run account. Community and intergenerational connection is the most locally actionable direction. None of these reverses the structural current by itself; together, they define what navigation could mean.",
            zh: "適應更老的年齡結構，是證據基礎最確定的方向。支持想生育的人，能改善家庭福祉，生育率效果則溫和而非翻轉。更寬廣的勞動參與改變算術，而不強迫任何人。遷移已在抵銷部分自然減少，任何誠實的長期敘事都應計入。社區與世代連結是最能就地著手的方向。沒有一項能單獨逆轉結構潮流；合在一起，它們界定了「航行」可以是什麼意思。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 11. Actions                                                   */
    /* ------------------------------------------------------------ */
    {
      id: "actions",
      title: { en: "From Evidence to Action", zh: "從證據到行動" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "Understanding is the purpose of this chapter; acting is the reader's choice. The full set of realistic, nonpartisan actions connected to this research — individual, community, professional, and institutional — is collected in the site's “From Evidence to Action” view, where each entry explains what it involves, why it may be useful, and its honest limits. The previews below are teasers, not exhortations: no reader is required to act, to join anything, to disclose anything, or to agree with any position. They simply connect the chapter's findings to things that some readers may find worth doing.",
            zh: "理解是本章的目的；行動是讀者的選擇。與本研究相連、務實而無黨派的完整行動清單——個人、社區、專業與制度層次——收錄於網站「從證據到行動」頁面，每一項都說明內容、可能用處與誠實的限制。以下僅是預覽，不是號召：沒有讀者被要求行動、加入任何組織、揭露任何資訊，或同意任何立場。以下只是把本章的發現，與某些讀者可能覺得值得做的事連結起來。",
          },
        },
        {
          kind: "list",
          items: [
            {
              en: "Community planning with real demographics: when a neighborhood, school district, or organization plans for the future, ask that plans use verified age-structure data — a 65+ share of 20.06% and a children's share of 11.51% are planning facts, not opinions.",
              zh: "以真實人口結構做社區規劃：當社區、學區或組織在規劃未來時，可要求規劃使用已核驗的年齡結構資料——65 歲以上占 20.06%、幼年占 11.51%，是規劃事實，不是意見。",
            },
            {
              en: "Support intergenerational programs: shared sites, mentoring, and neighborhood mutual-aid schemes connect the age groups the statistics describe; local social-sector organizations often run them and need hands.",
              zh: "支持世代共融方案：共融場域、師徒陪伴與鄰里互助，把統計所描述的年齡群連結起來；地方社福團體常在辦理，也需要人手。",
            },
            {
              en: "Contribute professional expertise: long-term care, urban design, transportation, childcare, data analysis, and public health are all fields where Taiwan's coming decades need skilled work — and where evidence-based contribution is possible from inside any organization.",
              zh: "貢獻專業所長：長期照顧、都市設計、運輸、托育、資料分析與公共衛生，都是台灣未來數十年需要專業投入的領域——且無論身處哪種組織，都能做出以證據為本的貢獻。",
            },
            {
              en: "Participate in public consultations: family-supportive services, long-term care, and age-friendly infrastructure are shaped in public processes; submitting a considered view is a legitimate, nonpartisan form of participation.",
              zh: "參與公共政策諮詢：家庭支持服務、長期照顧與高齡友善基礎設施，都在公共程序中成形；提交深思熟慮的意見，是正當且無黨派的參與方式。",
            },
            {
              en: "Read the primary statistics: the MOI/RIS population tables are public; checking claims against them — including the claims in this chapter — is a skill any reader can practice.",
              zh: "閱讀第一手統計：內政部戶政司的人口統計表是公開的；以之核對各種說法——包括本章的說法——是任何讀者都能練習的技能。",
            },
            {
              en: "Talk about population facts without alarm: in family, workplace, and community conversations, precise and calm framing of demographic facts is itself a contribution to the quality of public deliberation.",
              zh: "以不渲染的方式談論人口事實：在家庭、職場與社區對話中，對人口事實的精確與冷靜表述，本身就是對公共審議品質的貢獻。",
            },
          ],
        },
        {
          kind: "prose",
          text: {
            en: "Every action should be weighed together with its limits: none of the above will show up in next year's fertility statistics, and readers should be skeptical of anyone claiming otherwise. The value of these actions lies elsewhere — in the quality of the institutions and communities that will carry whatever demography brings.",
            zh: "每項行動都應連同其限制一併衡量：上述任何一項都不會反映在明年的生育統計上，讀者對宣稱相反的說法應保持懷疑。這些行動的價值在別處——在於承載任何人口未來的制度與社區的品質。",
          },
        },
      ],
    },

    /* ------------------------------------------------------------ */
    /* 12. Sources, methods and limitations                          */
    /* ------------------------------------------------------------ */
    {
      id: "sources-methods",
      title: { en: "Sources, Methods and Limitations", zh: "資料來源、方法與限制" },
      blocks: [
        {
          kind: "prose",
          text: {
            en: "Every Taiwan figure in this chapter comes from the Ministry of the Interior's household registration statistics, compiled by the Department of Household Registration. This project verified the 1958–2025 series — births, deaths, natural increase, total fertility rate, year-end population, and age structure — by cross-checking the MOI/RIS aggregate statistical table as reproduced in two independent public compilations, which agreed on all values used. The life expectancy figures (80.77 years in 2024; 80.23 in 2023, male 76.94 and female 83.74) come from the MOI statistical bulletin series. A direct re-download from the RIS interactive database was not performed for this chapter; readers republishing these figures are encouraged to spot-check values against the RIS tables directly. The chapter's verification date is 2026-10-22.",
            zh: "本章所有台灣數字均出自內政部戶政司彙編之戶籍登記統計。本專案以交叉核對方式核驗 1958–2025 年序列——出生、死亡、自然增加、總生育率、年底人口與年齡結構——比對內政部戶政司彙總統計表在兩個獨立公開彙編中的轉載，所有引用數值均一致。平均壽命數字（2024 年 80.77 歲；2023 年 80.23 歲，男 76.94、女 83.74）出自內政部統計通報。本章並未直接自戶政司互動資料庫重新下載；讀者若要再出版這些數字，建議直接以戶政司表列數值抽核。本章核驗日期為 2026 年 10 月 22 日。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "Registered population statistics have known limits, stated here as part of the record. Registration is compulsory and virtually universal in Taiwan, so vital events — births and deaths — are captured essentially completely. But registered residence and actual residence can differ: people live outside their registered households, and some people present in Taiwan are outside the registration framework altogether. Aggregate counts of events are therefore robust; interpretations that depend on precise place of residence at a moment in time are less so. The most recent year's figures (2025) may be marginally revised when final yearbooks are compiled, as noted throughout this chapter.",
            zh: "戶籍人口統計有已知限制，在此如實載明。戶籍登記在台灣具義務性且幾乎全面，因此生死事件掌握本質完整。但設籍地與實際居住地可能不同：有人在戶籍地之外生活，也有在台灣的人完全不在戶籍體系內。因此事件的總量計數穩固；依賴特定時點精確居住地的解讀則相對較弱。如全章所述，最近一年（2025 年）的數值於年報定稿後仍可能微幅修正。",
          },
        },
        {
          kind: "prose",
          text: {
            en: "International figures follow the project's comparison framework: each value is the latest national figure individually verified by this project; reference years are stated with every value; and known comparability limitations — differing years (2021–2026), Singapore's resident-only coverage, Germany's provisional estimate, the UK's 2021 latest-verified value, Australia's exclusion from the fertility comparison — are disclosed where the values appear. Official projections are described only qualitatively, pending verification against the primary publication.\n\nErrors are possible in any project. If a reader identifies a discrepancy, the project's corrections policy — documented in the site's Data and Sources view — describes how corrections are made and recorded. Corrections are logged, dated, and visible, because a research project that cannot correct itself cannot be trusted.",
            zh: "國際數值依本計畫比較框架處理：每個數值均為本專案個別核驗的最新各國數值；參考年份隨值標明；已知可比性限制——年份不一（2021–2026）、新加坡僅涵蓋常住人口、德國為初步估計、英國為 2021 年最新核驗值、澳洲未列入生育率比較——均於數值出現處揭露。官方推估於完成原始出版品核驗前，僅作定性描述。\n\n任何計畫都可能出錯。若讀者發現不一致，本計畫的更正政策——載於網站「資料與來源」頁面——說明更正的方式與紀錄。更正會被記錄、標註日期且公開可見，因為無法更正自己的研究計畫，不可能被信任。",
          },
        },
        {
          kind: "sources",
          sourceIds: [
            "moi-ris-population",
            "moi-life-expectancy",
            "ndc-projections",
            "worldbank-indicators",
            "owid-fertility",
          ],
          note: {
            en: "Primary sources for this chapter. NDC projections are cited qualitatively only (pending verification); the World Bank and Our World in Data series were used as cross-checks and general references, not as the source of displayed values. International vital-statistics sources used in the comparison section are listed there with their full provenance.",
            zh: "本章主要來源。國發會推估僅作定性引用（尚待核驗）；世界銀行與 Our World in Data 序列作為交叉核對與一般參考，並非所示數值之來源。比較章節所用之各國生死統計來源，已於該節列出完整出處。",
          },
        },
      ],
    },
  ],
};
