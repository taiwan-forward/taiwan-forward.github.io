/**
 * Taiwan Forward — shared UI strings (navigation, controls, states).
 * Every user-facing string is authored in both languages.
 */

import type { LText, ResearchStatus } from "@/lib/i18n";

export const ui = {
  siteName: { en: "Taiwan Forward", zh: "台灣向前" } as LText,
  tagline: { en: "Understand Today. Improve Tomorrow.", zh: "理解今天，改善明天。" } as LText,
  nav: {
    home: { en: "Home", zh: "首頁" } as LText,
    overview: { en: "Research Overview", zh: "研究總覽" } as LText,
    chapter01: { en: "Chapter 01 · Population", zh: "第一章 · 人口" } as LText,
    methodology: { en: "Methodology", zh: "研究方法" } as LText,
    sources: { en: "Data & Sources", zh: "資料與來源" } as LText,
    status: { en: "Research Status", zh: "研究進度" } as LText,
    action: { en: "From Evidence to Action", zh: "從證據到行動" } as LText,
    about: { en: "About", zh: "關於本計畫" } as LText,
    menu: { en: "Open menu", zh: "開啟選單" } as LText,
    close: { en: "Close menu", zh: "關閉選單" } as LText,
  },
  langSwitch: {
    label: { en: "Language", zh: "語言" } as LText,
    switchTo: { en: "Switch to Traditional Chinese", zh: "切換至英文" } as LText,
  },
  common: {
    viewChart: { en: "View as Chart", zh: "以圖表檢視" } as LText,
    viewTable: { en: "View as Table", zh: "以表格檢視" } as LText,
    downloadCsv: { en: "Download CSV", zh: "下載 CSV" } as LText,
    expand: { en: "Expand", zh: "放大檢視" } as LText,
    close: { en: "Close", zh: "關閉" } as LText,
    reset: { en: "Reset zoom", zh: "重設縮放" } as LText,
    chartHint: {
      en: "Tap or move over the chart to explore the data. Use the controls above to switch between chart and table views.",
      zh: "點選或滑過圖表即可探索數據。可使用上方控制切換圖表／表格檢視。",
    } as LText,
    source: { en: "Source", zh: "資料來源" } as LText,
    sources: { en: "Sources", zh: "資料來源" } as LText,
    note: { en: "Note", zh: "註記" } as LText,
    unit: { en: "Unit", zh: "單位" } as LText,
    period: { en: "Reference period", zh: "參考期間" } as LText,
    noData: { en: "No data", zh: "無資料" } as LText,
    backToTop: { en: "Back to top", zh: "回到頂端" } as LText,
    copyLink: { en: "Copy link", zh: "複製連結" } as LText,
    copied: { en: "Link copied to clipboard.", zh: "已複製連結。" } as LText,
    copyFailed: { en: "Could not copy the link.", zh: "無法複製連結。" } as LText,
    lastUpdated: { en: "Last updated", zh: "最後更新" } as LText,
    readingTime: { en: "min read", zh: "分鐘閱讀" } as LText,
    chapter: { en: "Chapter", zh: "第" } as LText,
    onThisPage: { en: "On this page", zh: "本章目錄" } as LText,
    prevChapter: { en: "Previous", zh: "上一章" } as LText,
    nextChapter: { en: "Next chapter", zh: "下一章" } as LText,
    nextUp: { en: "Next up", zh: "接下來" } as LText,
    viewChapter: { en: "Read the chapter", zh: "閱讀本章" } as LText,
    openInNewTab: { en: "opens in a new tab", zh: "於新分頁開啟" } as LText,
    verified: { en: "Verified", zh: "已核驗" } as LText,
    pending: { en: "Pending verification", zh: "待核驗" } as LText,
    showMore: { en: "Show more", zh: "顯示更多" } as LText,
    showLess: { en: "Show less", zh: "顯示較少" } as LText,
    tableOfValues: { en: "Data table", zh: "數據表" } as LText,
    skipToContent: { en: "Skip to main content", zh: "跳至主要內容" } as LText,
  },
  status: {
    published: { en: "Published research", zh: "已出版研究" } as LText,
    "in-progress": { en: "Research in progress", zh: "研究進行中" } as LText,
    planned: { en: "Planned", zh: "已規劃" } as LText,
    "insufficient-evidence": { en: "Insufficient evidence", zh: "證據不足" } as LText,
  } as Record<ResearchStatus, LText>,
  evidence: {
    observation: { en: "Observed facts", zh: "事實觀察" } as LText,
    interpretation: { en: "Interpretation", zh: "解讀分析" } as LText,
    comparison: { en: "International comparison", zh: "國際比較" } as LText,
    uncertainty: { en: "Evidence limitations & uncertainty", zh: "證據限制與不確定性" } as LText,
    action: { en: "What could help", zh: "可行方向" } as LText,
  } as Record<string, LText>,
};

export type UiKeys = typeof ui;
