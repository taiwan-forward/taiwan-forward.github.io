/**
 * Taiwan Forward — Chapter 01 datasets (population and family).
 *
 * PROVENANCE: Taiwan series are official Ministry of the Interior (RIS)
 * household-registration statistics, 1958–2025 (see source registry
 * `moi-ris-population` for verification details). International values are
 * the latest national figures verified by this project; reference years
 * differ and are labelled per row. No fabricated values are included; where
 * a figure could not be verified it is absent, not estimated.
 */

import type { ChartDataset } from "../types";

const TEAL = "#6FA3A8";
const SAND = "#C8B38E";
const BLUEGREY = "#7F93A6";
const MAUVE = "#A88FA8";
const SAGE = "#8FA58C";
const CLAY = "#B08F7A";

/* Taiwan vital statistics 1958–2025 (MOI/RIS, registered population). */
const vital: { year: number; births: number; deaths: number; tfr: number; pop: number }[] = [
  { year: 1958, births: 413679, deaths: 75413, tfr: 6.06, pop: 10091928 },
  { year: 1959, births: 423863, deaths: 74567, tfr: 5.99, pop: 10484725 },
  { year: 1960, births: 422319, deaths: 74212, tfr: 5.75, pop: 10850685 },
  { year: 1961, births: 422740, deaths: 74352, tfr: 5.59, pop: 11210084 },
  { year: 1962, births: 426325, deaths: 73448, tfr: 5.47, pop: 11574942 },
  { year: 1963, births: 427212, deaths: 72266, tfr: 5.35, pop: 11949260 },
  { year: 1964, births: 419797, deaths: 69774, tfr: 5.1, pop: 12325025 },
  { year: 1965, births: 409620, deaths: 68414, tfr: 4.83, pop: 12698700 },
  { year: 1966, births: 418327, deaths: 70304, tfr: 4.82, pop: 13065473 },
  { year: 1967, births: 376806, deaths: 72351, tfr: 4.22, pop: 13371083 },
  { year: 1968, births: 396886, deaths: 74173, tfr: 4.33, pop: 13725991 },
  { year: 1969, births: 393455, deaths: 71063, tfr: 4.12, pop: 14411976 },
  { year: 1970, births: 396479, deaths: 71640, tfr: 4.0, pop: 14753911 },
  { year: 1971, births: 382797, deaths: 71385, tfr: 3.71, pop: 15073216 },
  { year: 1972, births: 368067, deaths: 71988, tfr: 3.37, pop: 15367774 },
  { year: 1973, births: 369022, deaths: 73959, tfr: 3.21, pop: 15642467 },
  { year: 1974, births: 369671, deaths: 75224, tfr: 2.94, pop: 15927167 },
  { year: 1975, births: 369349, deaths: 75551, tfr: 2.77, pop: 16223089 },
  { year: 1976, births: 425125, deaths: 77035, tfr: 3.09, pop: 16579737 },
  { year: 1977, births: 397373, deaths: 79766, tfr: 2.7, pop: 16882053 },
  { year: 1978, births: 410783, deaths: 79761, tfr: 2.72, pop: 17202491 },
  { year: 1979, births: 424034, deaths: 82244, tfr: 2.67, pop: 17543067 },
  { year: 1980, births: 413881, deaths: 84333, tfr: 2.52, pop: 17866008 },
  { year: 1981, births: 414069, deaths: 87192, tfr: 2.46, pop: 18193955 },
  { year: 1982, births: 405263, deaths: 87578, tfr: 2.32, pop: 18515754 },
  { year: 1983, births: 383439, deaths: 90951, tfr: 2.17, pop: 18790538 },
  { year: 1984, births: 371008, deaths: 89915, tfr: 2.06, pop: 19069194 },
  { year: 1985, births: 346208, deaths: 92348, tfr: 1.88, pop: 19313825 },
  { year: 1986, births: 309230, deaths: 95057, tfr: 1.68, pop: 19509082 },
  { year: 1987, births: 314024, deaths: 96319, tfr: 1.7, pop: 19725010 },
  { year: 1988, births: 342031, deaths: 102113, tfr: 1.86, pop: 19954397 },
  { year: 1989, births: 315299, deaths: 103288, tfr: 1.68, pop: 20156587 },
  { year: 1990, births: 335618, deaths: 105669, tfr: 1.81, pop: 20401305 },
  { year: 1991, births: 321932, deaths: 106284, tfr: 1.72, pop: 20605831 },
  { year: 1992, births: 321632, deaths: 110516, tfr: 1.73, pop: 20802622 },
  { year: 1993, births: 325613, deaths: 110901, tfr: 1.76, pop: 20995416 },
  { year: 1994, births: 322938, deaths: 113866, tfr: 1.76, pop: 21177874 },
  { year: 1995, births: 329581, deaths: 119112, tfr: 1.78, pop: 21357431 },
  { year: 1996, births: 325545, deaths: 122489, tfr: 1.76, pop: 21525433 },
  { year: 1997, births: 326002, deaths: 121000, tfr: 1.77, pop: 21742815 },
  { year: 1998, births: 271450, deaths: 123180, tfr: 1.47, pop: 21928591 },
  { year: 1999, births: 283661, deaths: 126113, tfr: 1.56, pop: 22092387 },
  { year: 2000, births: 305312, deaths: 125958, tfr: 1.68, pop: 22276672 },
  { year: 2001, births: 260354, deaths: 127647, tfr: 1.4, pop: 22405568 },
  { year: 2002, births: 247530, deaths: 128636, tfr: 1.34, pop: 22520776 },
  { year: 2003, births: 227070, deaths: 130801, tfr: 1.24, pop: 22604550 },
  { year: 2004, births: 216419, deaths: 135092, tfr: 1.18, pop: 22689122 },
  { year: 2005, births: 205854, deaths: 139398, tfr: 1.12, pop: 22770383 },
  { year: 2006, births: 204459, deaths: 135839, tfr: 1.12, pop: 22876527 },
  { year: 2007, births: 204414, deaths: 141111, tfr: 1.1, pop: 22958360 },
  { year: 2008, births: 198733, deaths: 143624, tfr: 1.05, pop: 23037031 },
  { year: 2009, births: 191310, deaths: 143582, tfr: 1.03, pop: 23119772 },
  { year: 2010, births: 166886, deaths: 145772, tfr: 0.9, pop: 23162123 },
  { year: 2011, births: 196627, deaths: 152915, tfr: 1.07, pop: 23224912 },
  { year: 2012, births: 229481, deaths: 154251, tfr: 1.27, pop: 23315822 },
  { year: 2013, births: 199113, deaths: 155908, tfr: 1.07, pop: 23373517 },
  { year: 2014, births: 210383, deaths: 163929, tfr: 1.17, pop: 23433753 },
  { year: 2015, births: 213598, deaths: 163858, tfr: 1.18, pop: 23492074 },
  { year: 2016, births: 208440, deaths: 172405, tfr: 1.17, pop: 23539816 },
  { year: 2017, births: 193844, deaths: 171242, tfr: 1.13, pop: 23571227 },
  { year: 2018, births: 181601, deaths: 172784, tfr: 1.06, pop: 23588932 },
  { year: 2019, births: 177767, deaths: 176296, tfr: 1.05, pop: 23603121 },
  { year: 2020, births: 165249, deaths: 173156, tfr: 0.99, pop: 23561236 },
  { year: 2021, births: 153820, deaths: 183732, tfr: 0.975, pop: 23375314 },
  { year: 2022, births: 138986, deaths: 207230, tfr: 0.87, pop: 23264640 },
  { year: 2023, births: 135571, deaths: 205368, tfr: 0.865, pop: 23420442 },
  { year: 2024, births: 134856, deaths: 202107, tfr: 0.885, pop: 23400220 },
  { year: 2025, births: 107812, deaths: 200268, tfr: 0.695, pop: 23299132 },
];

/* Age structure 1997–2025 (share of registered population, percent). */
const ageStructure: { year: number; y014: number; w1564: number; e65: number }[] = [
  { year: 1997, y014: 22.6, w1564: 69.3, e65: 8.1 },
  { year: 1998, y014: 22.0, w1564: 69.8, e65: 8.2 },
  { year: 1999, y014: 21.4, w1564: 70.1, e65: 8.4 },
  { year: 2000, y014: 21.1, w1564: 70.3, e65: 8.6 },
  { year: 2001, y014: 20.8, w1564: 70.4, e65: 8.8 },
  { year: 2002, y014: 20.4, w1564: 70.6, e65: 9.0 },
  { year: 2003, y014: 19.8, w1564: 70.9, e65: 9.2 },
  { year: 2004, y014: 19.3, w1564: 71.2, e65: 9.5 },
  { year: 2005, y014: 18.7, w1564: 71.6, e65: 9.7 },
  { year: 2006, y014: 18.1, w1564: 71.9, e65: 10.0 },
  { year: 2007, y014: 17.6, w1564: 72.2, e65: 10.2 },
  { year: 2008, y014: 17.0, w1564: 72.6, e65: 10.4 },
  { year: 2009, y014: 16.3, w1564: 73.0, e65: 10.6 },
  { year: 2010, y014: 15.6, w1564: 73.6, e65: 10.7 },
  { year: 2011, y014: 15.1, w1564: 74.0, e65: 10.9 },
  { year: 2012, y014: 14.6, w1564: 74.2, e65: 11.2 },
  { year: 2013, y014: 14.3, w1564: 74.2, e65: 11.5 },
  { year: 2014, y014: 14.0, w1564: 74.0, e65: 12.0 },
  { year: 2015, y014: 13.6, w1564: 73.9, e65: 12.5 },
  { year: 2016, y014: 13.3, w1564: 73.5, e65: 13.2 },
  { year: 2017, y014: 13.1, w1564: 73.0, e65: 13.9 },
  { year: 2018, y014: 12.9, w1564: 72.5, e65: 14.6 },
  { year: 2019, y014: 12.7, w1564: 72.0, e65: 15.3 },
  { year: 2020, y014: 12.6, w1564: 71.3, e65: 16.1 },
  { year: 2021, y014: 12.36, w1564: 70.79, e65: 16.85 },
  { year: 2022, y014: 12.12, w1564: 70.32, e65: 17.56 },
  { year: 2023, y014: 11.93, w1564: 69.72, e65: 18.35 },
  { year: 2024, y014: 11.72, w1564: 69.1, e65: 19.18 },
  { year: 2025, y014: 11.51, w1564: 68.43, e65: 20.06 },
];

export const populationDatasets: ChartDataset[] = [
  {
    id: "tw-births-deaths",
    type: "line",
    title: { en: "Births and Deaths in Taiwan, 1958–2025", zh: "台灣出生數與死亡數（1958–2025）" },
    subtitle: {
      en: "Registered vital events per year",
      zh: "每年戶籍登記之出生與死亡事件數",
    },
    description: {
      en: "Line chart of annual registered births and deaths in Taiwan from 1958 to 2025. Births fell from over 400,000 per year in the early 1960s to 134,856 in 2024 and 107,812 in 2025, while deaths rose from around 75,000 to about 200,000. The two lines crossed around 2020, after which deaths exceeded births every year.",
      zh: "台灣 1958 至 2025 年每年戶籍登記出生數與死亡數折線圖。出生數自 1960 年代初期每年逾 40 萬，降至 2024 年 134,856 人、2025 年 107,812 人；死亡數則由約 7.5 萬升至約 20 萬。兩線約於 2020 年交叉，此後死亡數持續高於出生數。",
    },
    unit: { en: "Persons per year", zh: "人／年" },
    period: { en: "1958–2025", zh: "1958–2025 年" },
    series: [
      { id: "births", label: { en: "Births", zh: "出生數" }, color: TEAL },
      { id: "deaths", label: { en: "Deaths", zh: "死亡數" }, color: CLAY, dashed: true },
    ],
    rows: vital.map((v) => ({
      label: String(v.year),
      values: [v.births, v.deaths] as (number | null)[],
    })),
    sourceIds: ["moi-ris-population"],
    note: {
      en: "Registered (household) events. 2025 figures are the most recently published complete-year values and may be marginally revised.",
      zh: "為戶籍登記事件數。2025 年數值為最近公布之全年數，後續可能微幅修正。",
    },
    zoomable: true,
  },
  {
    id: "tw-tfr",
    type: "line",
    title: { en: "Total Fertility Rate in Taiwan, 1958–2025", zh: "台灣總生育率（1958–2025）" },
    subtitle: {
      en: "Average children per woman under current age-specific rates",
      zh: "依當年年齡別生育率推算之每名婦女平均生育子女數",
    },
    description: {
      en: "Line chart of Taiwan's total fertility rate from 1958 (6.06) to 2025 (0.695), with the replacement-level reference of about 2.1. The rate fell below replacement in the mid-1980s, below 1.0 in 2020, and reached 0.695 in 2025 — among the lowest ever recorded worldwide.",
      zh: "台灣 1958 年（6.06）至 2025 年（0.695）總生育率折線圖，並標示約 2.1 之替代水準參考線。生育率於 1980 年代中期跌破替代水準、2020 年跌破 1.0，2025 年降至 0.695，屬全球有紀錄以來最低之列。",
    },
    unit: { en: "Children per woman", zh: "每名婦女生育子女數" },
    period: { en: "1958–2025", zh: "1958–2025 年" },
    series: [
      { id: "tfr", label: { en: "Total fertility rate (TFR)", zh: "總生育率（TFR）" }, color: TEAL },
    ],
    rows: vital.map((v) => ({
      label: String(v.year),
      values: [v.tfr] as (number | null)[],
    })),
    sourceIds: ["moi-ris-population"],
    markLines: [
      {
        value: 2.1,
        label: { en: "Replacement level ≈ 2.1", zh: "替代水準 ≈ 2.1" },
        color: SAND,
      },
    ],
    note: {
      en: "TFR is a period measure: it describes childbearing if today's age-specific rates persisted for an entire lifetime, not a prediction for any actual cohort.",
      zh: "TFR 為「時期」測量：假設當年各年齡生育率終身不變下的平均子女數，並非對任何實際世代的預測。",
    },
    zoomable: true,
  },
  {
    id: "tw-age-structure",
    type: "stacked-bar",
    title: { en: "Taiwan's Age Structure, 1997–2025", zh: "台灣人口年齡結構（1997–2025）" },
    subtitle: {
      en: "Share of registered population by three age groups",
      zh: "戶籍人口按三個年齡層之占比",
    },
    description: {
      en: "Stacked bars showing the share of Taiwan's registered population aged 0–14, 15–64 and 65+ from 1997 to 2025. The 65+ share rose steadily from 8.1% to 20.06%, crossing the 20% 'super-aged society' threshold in 2025, while the working-age share declined from its 2012 peak.",
      zh: "堆疊柱狀圖呈現 1997 至 2025 年台灣戶籍人口中 0–14 歲、15–64 歲與 65 歲以上占比。65 歲以上占比由 8.1% 持續上升至 20.06%，於 2025 年跨越 20% 的「超高齡社會」門檻；工作年齡占比則自 2012 年高點回落。",
    },
    unit: { en: "Percent of registered population", zh: "戶籍人口百分比" },
    period: { en: "1997–2025 (year-end)", zh: "1997–2025 年（年底）" },
    series: [
      { id: "e65", label: { en: "65 and above", zh: "65 歲以上" }, color: SAND },
      { id: "w1564", label: { en: "15–64 (working age)", zh: "15–64 歲（工作年齡）" }, color: BLUEGREY },
      { id: "y014", label: { en: "0–14 (children)", zh: "0–14 歲（幼年）" }, color: TEAL },
    ],
    rows: ageStructure.map((a) => ({
      label: String(a.year),
      values: [a.e65, a.w1564, a.y014] as (number | null)[],
    })),
    sourceIds: ["moi-ris-population"],
    note: {
      en: "'Super-aged society' is a descriptive demographic threshold (65+ ≥ 20% of population), not a judgment about people or the society.",
      zh: "「超高齡社會」為描述性人口學門檻（65 歲以上占人口 ≥ 20%），並非對人們或社會的價值判斷。",
    },
    zoomable: true,
  },
  {
    id: "tw-population-total",
    type: "line",
    title: { en: "Registered Population of Taiwan, 1958–2025", zh: "台灣戶籍人口總數（1958–2025）" },
    subtitle: {
      en: "Year-end registered population",
      zh: "年底戶籍登記人口",
    },
    description: {
      en: "Line chart of Taiwan's year-end registered population. Growth continued for six decades, peaked at about 23.60 million in 2019, and has declined since — 23.40 million in 2024 and 23.30 million in 2025. Net migration offset part of the natural decrease in 2023–2024.",
      zh: "台灣年底戶籍人口折線圖。人口成長延續六十年，於 2019 年達到約 2,360 萬高峰後轉為減少——2024 年 2,340 萬、2025 年 2,330 萬。2023–2024 年間淨遷入部分抵銷了自然減少。",
    },
    unit: { en: "Persons", zh: "人" },
    period: { en: "1958–2025 (year-end)", zh: "1958–2025 年（年底）" },
    series: [
      { id: "pop", label: { en: "Registered population", zh: "戶籍人口" }, color: TEAL },
    ],
    rows: vital.map((v) => ({
      label: String(v.year),
      values: [v.pop] as (number | null)[],
    })),
    sourceIds: ["moi-ris-population"],
    note: {
      en: "Registered population differs from de-facto residence; internal registration and migration can affect totals.",
      zh: "戶籍人口與實際居住人口有別；戶籍遷徙與人口移動亦會影響總數。",
    },
    zoomable: true,
  },
  {
    id: "intl-tfr",
    type: "bar",
    title: {
      en: "Total Fertility Rate: Taiwan and Comparators (latest verified values)",
      zh: "總生育率：台灣與參考經濟體（已核驗之最新值）",
    },
    subtitle: {
      en: "Reference years differ by country — see notes",
      zh: "各國參考年份不同——詳見註記",
    },
    description: {
      en: "Bar chart comparing total fertility rates: Taiwan 0.695 (2025), South Korea 0.75 (2024), Singapore 0.97 resident (2024), Japan 1.14 (2024), Germany 1.28 provisional (2026), Sweden 1.42 (2025 estimate), United Kingdom (England & Wales) 1.53 (2021), France 1.56 (2025), United States 1.58 (2025). All are below the replacement level of about 2.1; Taiwan, South Korea and Singapore are furthest below it.",
      zh: "比較各經濟體總生育率之柱狀圖：台灣 0.695（2025）、韓國 0.75（2024）、新加坡 0.97（常住人口，2024）、日本 1.14（2024）、德國 1.28（2026，初步）、瑞典 1.42（2025 估計）、英國（英格蘭與威爾斯）1.53（2021）、法國 1.56（2025）、美國 1.58（2025）。所有經濟體均低於約 2.1 的替代水準，其中台灣、韓國與新加坡低於替代水準最多。",
    },
    unit: { en: "Children per woman", zh: "每名婦女生育子女數" },
    period: { en: "Latest verified national values, 2021–2026 (see per-bar notes)", zh: "各經濟體最新已核驗數值，2021–2026 年（見各柱註記）" },
    series: [
      { id: "tfr", label: { en: "Total fertility rate", zh: "總生育率" }, color: TEAL },
    ],
    rows: [
      { label: "Taiwan", labelZh: "台灣", values: [0.695], note: { en: "2025 · MOI", zh: "2025 · 內政部" } },
      { label: "South Korea", labelZh: "韓國", values: [0.75], note: { en: "2024 · Statistics Korea", zh: "2024 · 韓國統計廳" } },
      { label: "Singapore (residents)", labelZh: "新加坡（常住人口）", values: [0.97], note: { en: "2024 · Singstat", zh: "2024 · 新加坡統計局" } },
      { label: "Japan", labelZh: "日本", values: [1.14], note: { en: "2024 · MHLW", zh: "2024 · 厚生勞動省" } },
      { label: "Germany", labelZh: "德國", values: [1.28], note: { en: "2026 provisional · Destatis", zh: "2026 初步 · Destatis" } },
      { label: "Sweden", labelZh: "瑞典", values: [1.42], note: { en: "2025 estimate · SCB", zh: "2025 估計 · SCB" } },
      { label: "UK (England & Wales)", labelZh: "英國（英格蘭與威爾斯）", values: [1.53], note: { en: "2021 · ONS", zh: "2021 · ONS" } },
      { label: "France", labelZh: "法國", values: [1.56], note: { en: "2025 · INSEE", zh: "2025 · INSEE" } },
      { label: "United States", labelZh: "美國", values: [1.58], note: { en: "2025 · CDC/NCHS", zh: "2025 · CDC/NCHS" } },
    ],
    sourceIds: [
      "moi-ris-population",
      "kostat-korea",
      "singstat-singapore",
      "mhlw-japan-vital",
      "destatis-germany",
      "scb-sweden",
      "ons-uk-births",
      "insee-france",
      "nchs-us-births",
      "worldbank-indicators",
    ],
    note: {
      en: "Comparability limitations: reference years differ (2021–2026); Singapore's figure covers residents only; Germany's is a provisional current-year estimate; the UK figure is the latest individually verified value (2021) — newer ONS releases exist but were not re-verified by this project. Australia is omitted because its latest TFR reference year could not be confidently verified at access time. Definitions follow each national authority and may differ in scope.",
      zh: "可比性限制：各國參考年份不一（2021–2026）；新加坡僅涵蓋常住人口；德國為當年初步估計；英國為本專案個別核驗之最新值（2021）——ONS 尚有較新出版但未經本專案重新核驗。澳洲因最新 TFR 參考年份無法確切核驗而未列入。各國定義依其主管機關，涵蓋範圍可能不同。",
    },
  },
  {
    id: "intl-65plus",
    type: "bar",
    title: {
      en: "Population Aged 65+: Taiwan and Comparators",
      zh: "65 歲以上人口占比：台灣與參考經濟體",
    },
    subtitle: {
      en: "Share of population aged 65 and above, latest verified values",
      zh: "65 歲以上人口占比，已核驗之最新值",
    },
    description: {
      en: "Bar chart comparing the share of population aged 65 and above: Japan 30.0% (2025 est.), France 22.17% (2024), South Korea 20.3% (2025 est.), Taiwan 20.06% (2025, registered), Sweden 20.12% (2022), Singapore 19.5% (2026, residents), United Kingdom 18.8% (2022), United States 18.4% (2025 est.), Australia 18.1% (2025 est.). Taiwan's level is comparable to South Korea and Sweden, below Japan, and above the UK, US and Australia.",
      zh: "比較 65 歲以上人口占比之柱狀圖：日本 30.0%（2025 估）、法國 22.17%（2024）、韓國 20.3%（2025 估）、台灣 20.06%（2025，戶籍）、瑞典 20.12%（2022）、新加坡 19.5%（2026，常住人口）、英國 18.8%（2022）、美國 18.4%（2025 估）、澳洲 18.1%（2025 估）。台灣水準與韓國、瑞典相當，低於日本，高於英、美、澳。",
    },
    unit: { en: "Percent of population", zh: "人口百分比" },
    period: { en: "Latest verified national values, 2022–2026 (see per-bar notes)", zh: "各經濟體最新已核驗數值，2022–2026 年（見各柱註記）" },
    series: [
      { id: "share", label: { en: "Share aged 65+", zh: "65 歲以上占比" }, color: SAND },
    ],
    rows: [
      { label: "Japan", labelZh: "日本", values: [30.0], note: { en: "2025 est.", zh: "2025 估計" } },
      { label: "France", labelZh: "法國", values: [22.17], note: { en: "2024", zh: "2024" } },
      { label: "South Korea", labelZh: "韓國", values: [20.3], note: { en: "2025 est.", zh: "2025 估計" } },
      { label: "Sweden", labelZh: "瑞典", values: [20.12], note: { en: "2022", zh: "2022" } },
      { label: "Taiwan", labelZh: "台灣", values: [20.06], note: { en: "2025 · registered (MOI)", zh: "2025 · 戶籍（內政部）" } },
      { label: "Singapore", labelZh: "新加坡", values: [19.5], note: { en: "2026 · residents", zh: "2026 · 常住人口" } },
      { label: "United Kingdom", labelZh: "英國", values: [18.8], note: { en: "2022", zh: "2022" } },
      { label: "United States", labelZh: "美國", values: [18.4], note: { en: "2025 est.", zh: "2025 估計" } },
      { label: "Australia", labelZh: "澳洲", values: [18.1], note: { en: "2025 est.", zh: "2025 估計" } },
    ],
    sourceIds: [
      "moi-ris-population",
      "mhlw-japan-vital",
      "insee-france",
      "kostat-korea",
      "scb-sweden",
      "singstat-singapore",
      "ons-uk-births",
      "nchs-us-births",
      "abs-australia",
      "worldbank-indicators",
    ],
    note: {
      en: "Reference years differ (2022–2026) and some values are estimates; Taiwan's share refers to the registered population and Singapore's to residents. Shares move slowly, so the ranking is robust to small timing differences, but exact comparisons should note the reference years.",
      zh: "各國參考年份不一（2022–2026），部分為估計值；台灣為戶籍人口、新加坡為常住人口之占比。因占比變動緩慢，排序對小幅時間差異不敏感，惟精確比較仍應留意參考年份。",
    },
  },
];

export function getDataset(id: string): ChartDataset | undefined {
  return populationDatasets.find((d) => d.id === id);
}
