/**
 * Taiwan Forward — source registry with full provenance metadata.
 *
 * Integrity rules: every published figure must trace to a registered source.
 * Verification notes state honestly how each figure was obtained. Where a
 * value could not be verified against the primary publication, that is said
 * explicitly rather than hidden.
 */

import type { SourceRef } from "./types";

export const ACCESS_DATE = "2026-10-22";

export const sources: SourceRef[] = [
  {
    id: "moi-ris-population",
    title: {
      en: "Population Statistics (Household Registration), monthly and annual tables",
      zh: "人口統計資料（戶籍登記），月報與年報統計表",
    },
    org: { en: "Department of Household Registration, Ministry of the Interior (Taiwan)", zh: "內政部戶政司" },
    url: "https://www.ris.gov.tw/app/portal/346",
    kind: "taiwan-official",
    published: {
      en: "Continuously updated; annual data through 2025, monthly data through 2026",
      zh: "持續更新；年度資料至 2025 年，月度資料至 2026 年",
    },
    period: { en: "1951–2025 (vital statistics series used here: 1958–2025)", zh: "1951–2025（本站採用之出生死亡統計序列：1958–2025）" },
    definition: {
      en: "Registered (household) population; births and deaths are registration events in the reference year; total fertility rate (TFR) is the average number of children a woman would bear over her lifetime assuming current age-specific fertility rates.",
      zh: "戶籍登記人口；出生數與死亡數為該年戶政登記事件；總生育率（TFR）為按當年年齡別生育率推算之婦女終身平均生育子女數。",
    },
    unit: { en: "Persons; TFR in children per woman; rates per 1,000 population", zh: "人；TFR 為每名婦女生育子女數；率為每千人口" },
    coverage: { en: "Taiwan (ROC) territory under household registration administration", zh: "台灣（戶政登記管轄範圍）" },
    methodology: {
      en: "Compulsory household registration; annual aggregates compiled by the Department of Household Registration and published as statistical yearbooks and monthly bulletins.",
      zh: "義務性戶籍登記；由戶政司彙編為統計年報及每月統計通報。",
    },
    limitations: {
      en: "Registered population differs from de-facto residence; very recent annual figures may be revised after final yearbook compilation.",
      zh: "戶籍人口與實際居住人口有落差；最近年度數字於年報定稿後仍可能微幅修正。",
    },
    license: { en: "Government open data; reuse permitted with attribution", zh: "政府開放資料，註明出處後可再利用" },
    accessDate: ACCESS_DATE,
    verification: {
      en: "Annual series 1958–2025 (births, deaths, natural increase, rates, TFR, year-end population and age structure) cross-checked against the MOI/RIS aggregate statistical table as reproduced in a public compilation (Chinese Wikipedia “臺灣人口”, which cites RIS yearbooks and bulletins). Figures agree across two independent reproductions; direct re-download from the RIS interactive database was not scripted — spot-check values against the RIS tables before republishing derivatives.",
      zh: "1958–2025 年度序列（出生、死亡、自然增加、各項率值、總生育率、年底人口與年齡結構）與內政部戶政司彙總統計表（經中文維基百科「臺灣人口」條目轉載，其引用戶政司年報與統計通報）交叉核對，兩個獨立轉載來源一致；未重新自戶政司互動資料庫直接下載原始表——再利用前請以戶政司表列數值抽複核。",
    },
  },
  {
    id: "moi-life-expectancy",
    title: {
      en: "MOI Statistical Bulletin, Week 34 of Year 114 (ROC): Average life expectancy of Taiwanese nationals in 2024 reached 80.77 years",
      zh: "內政統計通報（114 年第 34 週）：113 年國人平均壽命 80.77 歲",
    },
    org: { en: "Ministry of the Interior (Taiwan)", zh: "內政部" },
    url: "https://www.moi.gov.tw/News_Content.aspx?n=2905&s=330568",
    kind: "taiwan-official",
    published: { en: "2025 (ROC year 114)", zh: "2025 年（民國 114 年）" },
    period: { en: "2024 (ROC year 113)", zh: "2024 年（民國 113 年）" },
    definition: {
      en: "Average life expectancy at birth of Taiwanese nationals (registered population).",
      zh: "國人（戶籍登記人口）出生時平均餘命。",
    },
    unit: { en: "Years", zh: "歲" },
    coverage: { en: "Taiwan", zh: "台灣" },
    methodology: {
      en: "Life tables computed from household registration mortality data.",
      zh: "依戶籍登記死亡資料編算生命表。",
    },
    limitations: {
      en: "2023 reference values (80.23 overall; male 76.94, female 83.74) come from the same statistical series.",
      zh: "2023 年參考值（平均 80.23 歲；男 76.94、女 83.74）出自同一統計序列。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "Bulletin URL verified reachable (HTTP 200); figures quoted from the bulletin title and the demographic series cited above.",
      zh: "通報頁面連結已驗證可連線（HTTP 200）；數值引自通報標題與上述人口統計序列。",
    },
  },
  {
    id: "mhlw-japan-vital",
    title: {
      en: "Vital Statistics of Japan (population dynamics)",
      zh: "人口動態統計（日本）",
    },
    org: { en: "Ministry of Health, Labour and Welfare (Japan)", zh: "日本厚生勞動省" },
    url: "https://www.mhlw.go.jp/toukei/list/81-1b.html",
    kind: "international-official",
    published: { en: "Continuously updated", zh: "持續更新" },
    period: { en: "Japan 2024 TFR: 1.14", zh: "日本 2024 年 TFR：1.14" },
    unit: { en: "Children per woman", zh: "每名婦女生育子女數" },
    coverage: { en: "Japan", zh: "日本" },
    limitations: {
      en: "Japanese vital statistics cover Japanese nationals' events registered in Japan.",
      zh: "日本戶籍動態統計涵蓋於日本登記之事件。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "URL verified reachable (HTTP 200). The 2024 TFR value (1.14) was cross-checked via the national-statistics-sourced compilation (English Wikipedia infobox, citing MHLW), not re-downloaded from the primary tables.",
      zh: "連結已驗證可連線（HTTP 200）。2024 年 TFR（1.14）經引用厚勞省之彙編（英文維基百科資訊框）交叉核對，未重新自原始表下載。",
    },
  },
  {
    id: "kostat-korea",
    title: {
      en: "Population Statistics — Republic of Korea",
      zh: "人口統計（韓國）",
    },
    org: { en: "Statistics Korea (KOSTAT)", zh: "韓國統計廳" },
    url: "https://kostat.go.kr/main/main.jsp",
    kind: "international-official",
    published: { en: "Continuously updated", zh: "持續更新" },
    period: { en: "Korea 2024 TFR: 0.75; 65+ share 2025 est.: 20.3%", zh: "韓國 2024 年 TFR：0.75；2025 年 65 歲以上占比估計：20.3%" },
    unit: { en: "Children per woman; percent of population", zh: "每名婦女生育子女數；人口百分比" },
    coverage: { en: "Republic of Korea", zh: "大韓民國" },
    limitations: {
      en: "KOSTAT blocks automated requests; open the portal in a browser to reach the population statistics tables.",
      zh: "統計廳網站阻擋自動化連線；請以瀏覽器開啟入口網站查閱人口統計表。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "Values (TFR 0.75 in 2024, first rise in nine years as reported by KOSTAT/press; 65+ ≈ 20.3% in 2025) cross-checked via the national-statistics-sourced compilation (English Wikipedia infoboxes citing KOSTAT/CIA WFB). Portal blocks automated clients (HTTP 500 to curl) but is valid in browsers.",
      zh: "數值（2024 年 TFR 0.75，為九年來首次回升；2025 年 65 歲以上約 20.3%）經引用韓國統計廳之彙編（英文維基百科資訊框，引用 KOSTAT／CIA 世界概況）交叉核對。入口網站阻擋自動連線（curl 得 HTTP 500），但瀏覽器可正常開啟。",
    },
  },
  {
    id: "singstat-singapore",
    title: {
      en: "Population Trends / Births and Fertility — Singapore",
      zh: "人口趨勢／出生與生育率（新加坡）",
    },
    org: { en: "Singapore Department of Statistics", zh: "新加坡統計局" },
    url: "https://www.singstat.gov.sg",
    kind: "international-official",
    published: { en: "Continuously updated", zh: "持續更新" },
    period: { en: "Singapore 2024 resident TFR: 0.97; 65+ share 2026: 19.5%", zh: "新加坡 2024 年常住人口 TFR：0.97；2026 年 65 歲以上占比：19.5%" },
    unit: { en: "Children per woman; percent of resident population", zh: "每名婦女生育子女數；常住人口百分比" },
    coverage: { en: "Singapore residents", zh: "新加坡常住人口" },
    limitations: {
      en: "Resident TFR covers citizens and permanent residents, not the total population; 65+ share refers to the resident population.",
      zh: "常住人口 TFR 僅涵蓋公民與永久居民；65 歲以上占比亦指常住人口。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "Values cross-checked via the Singstat-sourced compilation (English Wikipedia infobox citing Singstat “Population in Brief”). Site blocks automated clients (HTTP 403 to curl) but is valid in browsers.",
      zh: "數值經引用新加坡統計局出版品之彙編（英文維基百科資訊框，引用《Population in Brief》）交叉核對。網站阻擋自動連線（curl 得 HTTP 403），但瀏覽器可正常開啟。",
    },
  },
  {
    id: "insee-france",
    title: {
      en: "Births and fertility — Bilan démographique (France)",
      zh: "出生與生育率——人口年報（法國）",
    },
    org: { en: "INSEE (National Institute of Statistics and Economic Studies, France)", zh: "法國國家統計與經濟研究所（INSEE）" },
    url: "https://www.insee.fr/fr/statistiques/2012734",
    kind: "international-official",
    published: { en: "2025 bilan démographique", zh: "2025 年人口年報" },
    period: { en: "France 2025 TFR: 1.56; 65+ share 2024: 22.17%", zh: "法國 2025 年 TFR：1.56；2024 年 65 歲以上占比：22.17%" },
    unit: { en: "Children per woman; percent of population", zh: "每名婦女生育子女數；人口百分比" },
    coverage: { en: "France (metropolitan + overseas départements)", zh: "法國（本土及海外省）" },
    limitations: {
      en: "INSEE indicateur conjoncturel de fécondité is analogous but not identical to cohort measures.",
      zh: "INSEE 之當期生育指標與世代測量概念相近但不完全相同。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "URL verified reachable (HTTP 200); 2025 TFR (1.56) quoted from the INSEE-sourced compilation citing this dataset page.",
      zh: "連結已驗證可連線（HTTP 200）；2025 年 TFR（1.56）引自引用此資料集頁面之彙編。",
    },
  },
  {
    id: "destatis-germany",
    title: {
      en: "Population — Births and Fertility (Germany)",
      zh: "人口——出生與生育率（德國）",
    },
    org: { en: "Federal Statistical Office of Germany (Destatis)", zh: "德國聯邦統計局（Destatis）" },
    url: "https://www.destatis.de/EN/Themes/Society-Environment/Population/_node.html",
    kind: "international-official",
    published: { en: "Continuously updated", zh: "持續更新" },
    period: { en: "Germany 2026 (provisional) TFR: 1.28", zh: "德國 2026 年（初步）TFR：1.28" },
    unit: { en: "Children per woman", zh: "每名婦女生育子女數" },
    coverage: { en: "Germany", zh: "德國" },
    limitations: {
      en: "Provisional current-year estimate; final values are published later and may differ.",
      zh: "為當年初步估計；最終值日後公布，可能有所修正。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "URL verified reachable (HTTP 200); value cross-checked via the Destatis-sourced compilation (English Wikipedia infobox).",
      zh: "連結已驗證可連線（HTTP 200）；數值經引用 Destatis 之彙編（英文維基百科資訊框）交叉核對。",
    },
  },
  {
    id: "ons-uk-births",
    title: {
      en: "Births in England and Wales — Office for National Statistics",
      zh: "英格蘭與威爾斯出生統計——英國國家統計局（ONS）",
    },
    org: { en: "Office for National Statistics (UK)", zh: "英國國家統計局" },
    url: "https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths",
    kind: "international-official",
    published: { en: "Continuously updated", zh: "持續更新" },
    period: { en: "England & Wales 2021 TFR: 1.53 (latest infobox-verified value); UK 65+ share 2022: 18.8%", zh: "英格蘭與威爾斯 2021 年 TFR：1.53（資訊框可核驗之最新值）；英國 2022 年 65 歲以上占比：18.8%" },
    unit: { en: "Children per woman; percent of population", zh: "每名婦女生育子女數；人口百分比" },
    coverage: { en: "England and Wales (TFR); United Kingdom (65+)", zh: "英格蘭與威爾斯（TFR）；英國全境（65 歲以上占比）" },
    limitations: {
      en: "More recent ONS TFR releases exist (2023–2024) but were not individually verified by this project at access time; the verified 2021 value is shown instead of an unverified newer one.",
      zh: "ONS 尚有較新之 TFR 出版（2023–2024），惟本專案於查閱時未能逐一核驗；故呈現已核驗之 2021 年數值，而非未經核驗之較新值。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "URL verified reachable (HTTP 200); values cross-checked via the ONS-sourced compilation (English Wikipedia infobox).",
      zh: "連結已驗證可連線（HTTP 200）；數值經引用 ONS 之彙編（英文維基百科資訊框）交叉核對。",
    },
  },
  {
    id: "scb-sweden",
    title: {
      en: "Population statistics — Sweden",
      zh: "人口統計（瑞典）",
    },
    org: { en: "Statistics Sweden (SCB)", zh: "瑞典統計局" },
    url: "https://www.scb.se/en/",
    kind: "international-official",
    published: { en: "Continuously updated", zh: "持續更新" },
    period: { en: "Sweden 2025 TFR (est.): 1.42; 65+ share 2022: 20.12%", zh: "瑞典 2025 年 TFR（估計）：1.42；2022 年 65 歲以上占比：20.12%" },
    unit: { en: "Children per woman; percent of population", zh: "每名婦女生育子女數；人口百分比" },
    coverage: { en: "Sweden", zh: "瑞典" },
    limitations: {
      en: "SCB blocks automated requests from this environment; open the portal in a browser for the tables.",
      zh: "SCB 網站阻擋本環境之自動連線；請以瀏覽器開啟查閱統計表。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "Values cross-checked via the SCB-sourced compilation (English Wikipedia infobox). Automated reachability check failed (connection blocked); the portal itself is valid in browsers.",
      zh: "數值經引用 SCB 之彙編（英文維基百科資訊框）交叉核對。自動連線檢查失敗（連線受阻）；入口網站本身可於瀏覽器正常開啟。",
    },
  },
  {
    id: "nchs-us-births",
    title: {
      en: "Births — National Vital Statistics System (United States)",
      zh: "出生統計——美國國家生命統計系統",
    },
    org: { en: "National Center for Health Statistics (CDC/NCHS)", zh: "美國國家衛生統計中心（CDC/NCHS）" },
    url: "https://www.cdc.gov/nchs/births/index.htm",
    kind: "international-official",
    published: { en: "Continuously updated", zh: "持續更新" },
    period: { en: "USA 2025 TFR: 1.58; 65+ share 2025 est.: 18.4%", zh: "美國 2025 年 TFR：1.58；2025 年 65 歲以上占比估計：18.4%" },
    unit: { en: "Children per woman; percent of population", zh: "每名婦女生育子女數；人口百分比" },
    coverage: { en: "United States", zh: "美國" },
    limitations: {
      en: "US TFR as computed by NCHS differs slightly from the World Bank/CIA harmonized series.",
      zh: "NCHS 計算之美國 TFR 與世界銀行／CIA 調和序列略有差異。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "Values cross-checked via the NCHS-sourced compilation (English Wikipedia infobox). Site blocks automated clients (HTTP 403 to curl) but is valid in browsers.",
      zh: "數值經引用 NCHS 之彙編（英文維基百科資訊框）交叉核對。網站阻擋自動連線（curl 得 HTTP 403），但瀏覽器可正常開啟。",
    },
  },
  {
    id: "abs-australia",
    title: {
      en: "Population statistics — Australian Bureau of Statistics",
      zh: "人口統計——澳洲統計局",
    },
    org: { en: "Australian Bureau of Statistics (ABS)", zh: "澳洲統計局" },
    url: "https://www.abs.gov.au/statistics/people/population",
    kind: "international-official",
    published: { en: "Continuously updated", zh: "持續更新" },
    period: { en: "Australia 65+ share 2025 est.: 18.1%", zh: "澳洲 2025 年 65 歲以上占比估計：18.1%" },
    unit: { en: "Percent of population", zh: "人口百分比" },
    coverage: { en: "Australia", zh: "澳洲" },
    limitations: {
      en: "Australia is shown in the aging comparison only; its latest TFR reference year could not be confidently verified at access time, so it is excluded from the fertility comparison rather than shown with an uncertain year label.",
      zh: "澳洲僅列入高齡化比較圖；其最新 TFR 參考年份於查閱時無法確切核驗，故不列入生育率比較，而非以不確定年份標示。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "65+ share cross-checked via the ABS-sourced compilation (English Wikipedia infobox). Deep links to specific releases are versioned and may move; the population statistics landing page is linked.",
      zh: "65 歲以上占比經引用 ABS 之彙編（英文維基百科資訊框）交叉核對。特定出版品之深層連結有版本化路徑、可能變動；故連結至人口統計主題頁。",
    },
  },
  {
    id: "worldbank-indicators",
    title: {
      en: "World Bank Open Data — Fertility rate and population age structure indicators",
      zh: "世界銀行開放資料——生育率與人口年齡結構指標",
    },
    org: { en: "World Bank", zh: "世界銀行" },
    url: "https://data.worldbank.org/indicator/SP.DYN.TFRT.IN",
    kind: "international-aggregator",
    published: { en: "Continuously updated", zh: "持續更新" },
    period: { en: "Harmonized international series (annual)", zh: "國際調和序列（年度）" },
    unit: { en: "Children per woman; percent of population", zh: "每名婦女生育子女數；人口百分比" },
    coverage: {
      en: "Most world economies. Taiwan is not listed as a separate economy in World Bank data.",
      zh: "涵蓋全球多數經濟體。台灣未列入世界銀行資料之個別經濟體。",
    },
    limitations: {
      en: "Harmonized series may lag national first releases and re-benchmark occasionally; used here as a cross-check and general reference, not as the source of the displayed national values.",
      zh: "調和序列發布較各國首次發布滯後，且偶有重新基準化；本站以之作為交叉核對與一般參考，而非所示各國數值之直接來源。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "URL verified reachable (HTTP 200).",
      zh: "連結已驗證可連線（HTTP 200）。",
    },
  },
  {
    id: "owid-fertility",
    title: {
      en: "Our World in Data — Total fertility rate (chart and dataset)",
      zh: "Our World in Data——總生育率（圖表與資料集）",
    },
    org: { en: "Our World in Data", zh: "Our World in Data" },
    url: "https://ourworldindata.org/grapher/total-fertility-rate",
    kind: "international-aggregator",
    published: { en: "Continuously updated", zh: "持續更新" },
    period: { en: "Long-run annual series by country", zh: "各國長期年度序列" },
    unit: { en: "Children per woman", zh: "每名婦女生育子女數" },
    coverage: {
      en: "Most world economies, compiled from UN WPP and national sources. Attention is required to the underlying source of each series.",
      zh: "涵蓋多數經濟體，資料彙編自聯合國 WPP 與各國來源；引用時須注意各序列之底層來源。",
    },
    limitations: {
      en: "Aggregator; underlying definitions and vintages vary by country. Taiwan appears in the UN-sourced series under a separate label.",
      zh: "屬彙整平台；各國定義與資料版本不一。台灣於聯合國來源序列中另列標籤。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "URL verified reachable (HTTP 200).",
      zh: "連結已驗證可連線（HTTP 200）。",
    },
  },
  {
    id: "ndc-projections",
    title: {
      en: "Population Projections for the ROC (Taiwan) — National Development Council",
      zh: "中華民國人口推估——國家發展委員會",
    },
    org: { en: "National Development Council (Taiwan)", zh: "國家發展委員會" },
    url: "https://www.ndc.gov.tw/",
    kind: "taiwan-official",
    published: { en: "Latest full edition: 2022 (covering to 2070)", zh: "最新完整版本：2022 年（推估至 2070 年）" },
    period: { en: "Projections to 2070 (2022 edition)", zh: "推估至 2070 年（2022 年版）" },
    definition: {
      en: "Official medium-variant and scenario-based demographic projections (fertility, mortality, migration assumptions).",
      zh: "官方中推估與情境設定之人口推估（生育、死亡、遷移假設）。",
    },
    unit: { en: "Persons; percent of population", zh: "人；人口百分比" },
    coverage: { en: "Taiwan", zh: "台灣" },
    limitations: {
      en: "Projections are scenario outputs, not observations; they are revised periodically and depend on stated assumptions. NDC blocks automated requests from this environment.",
      zh: "推估為情境推算結果而非觀測值；定期修訂，取決於假設設定。國發會網站阻擋本環境之自動連線。",
    },
    accessDate: ACCESS_DATE,
    verification: {
      en: "PENDING VERIFICATION — this project has not yet re-verified the 2022 edition's specific projected values (e.g., projected 2070 population and old-age shares) against the primary publication. Chapter text therefore describes projections only qualitatively; no projected numbers are charted. Specific figures will be added after verification.",
      zh: "待核驗——本專案尚未就 2022 年版推估報告之特定推估值（如 2070 年人口與高齡占比）對原始出版品完成核驗。故本章僅定性描述推估方向，未繪製任何推估數值；俟核驗後再行補入。",
    },
  },
];

export function getSource(id: string): SourceRef | undefined {
  return sources.find((s) => s.id === id);
}
