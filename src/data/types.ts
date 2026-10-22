/**
 * Taiwan Forward — shared data contracts.
 * Research content, datasets and provenance metadata are separated from
 * presentation logic. All human-readable fields are bilingual (EN / zh-TW).
 */

import type { LText, ResearchStatus } from "@/lib/i18n";

/* ------------------------------------------------------------------ */
/* Sources                                                            */
/* ------------------------------------------------------------------ */

export type SourceKind =
  | "taiwan-official"
  | "international-official"
  | "international-aggregator";

export interface SourceRef {
  id: string;
  /** Dataset or publication title. */
  title: LText;
  /** Publishing organization. */
  org: LText;
  /** Direct URL to the dataset, report, or official documentation. */
  url: string;
  /** Kind of source. */
  kind: SourceKind;
  /** Publication or last update date of the source. */
  published?: LText;
  /** Reference period the numbers cover. */
  period?: LText;
  /** Indicator definition note. */
  definition?: LText;
  /** Measurement unit. */
  unit?: LText;
  /** Geographic coverage. */
  coverage?: LText;
  /** Methodology / collection notes. */
  methodology?: LText;
  /** Known limitations and comparability caveats. */
  limitations?: LText;
  /** License / reuse note. */
  license?: LText;
  /** Date Taiwan Forward accessed the source (ISO). */
  accessDate: string;
  /** How the figures were obtained / verified by this project. */
  verification: LText;
}

/* ------------------------------------------------------------------ */
/* Research dimensions                                                */
/* ------------------------------------------------------------------ */

export interface Dimension {
  id: string;
  no: string;
  title: LText;
  short: LText;
  topics: LText[];
  status: ResearchStatus;
  /** ISO date of last substantive update (published dimensions only). */
  lastUpdate?: string;
  /** Published chapter view id, when available. */
  chapterView?: string;
}

/* ------------------------------------------------------------------ */
/* Chart datasets                                                     */
/* ------------------------------------------------------------------ */

export type ChartType = "line" | "bar" | "stacked-bar";

export interface ChartSeries {
  id: string;
  label: LText;
  /** Hex color from the muted chart palette. */
  color: string;
  /** Dashed line style — also distinguishes series beyond color. */
  dashed?: boolean;
}

export interface ChartRow {
  /** Row label (e.g. "2024" or "Japan"). Bilingual where appropriate. */
  label: string;
  labelZh?: string;
  /** Optional per-row annotation shown in tooltips/tables (e.g. ref year). */
  note?: LText;
  /** One value per series, aligned by index. null = no data. */
  values: (number | null)[];
}

export interface ChartDataset {
  id: string;
  type: ChartType;
  title: LText;
  subtitle?: LText;
  /** Accessible plain-language description of what the chart shows. */
  description: LText;
  unit: LText;
  /** Reference period covered. */
  period: LText;
  series: ChartSeries[];
  rows: ChartRow[];
  sourceIds: string[];
  /** Comparability / interpretation note displayed with the chart. */
  note?: LText;
  /** Optional constant reference lines, e.g. replacement fertility. */
  markLines?: { value: number; label: LText; color?: string }[];
  /** Enable year-range zoom (time series). */
  zoomable?: boolean;
}

/* ------------------------------------------------------------------ */
/* Research chapters                                                  */
/* ------------------------------------------------------------------ */

export type EvidenceVariant =
  | "observation"
  | "interpretation"
  | "comparison"
  | "uncertainty"
  | "action";

export type ChapterBlock =
  | { kind: "prose"; text: LText }
  | { kind: "heading"; text: LText }
  | { kind: "evidence"; variant: EvidenceVariant; title: LText; text: LText }
  | { kind: "chart"; datasetId: string; caption?: LText }
  | { kind: "list"; items: LText[] }
  | { kind: "sources"; sourceIds: string[]; note?: LText };

export interface ChapterSection {
  id: string;
  title: LText;
  blocks: ChapterBlock[];
}

export interface Chapter {
  id: string;
  no: string;
  dimensionId: string;
  title: LText;
  subtitle: LText;
  status: ResearchStatus;
  lastUpdate: string;
  readingMinutes: number;
  intro: LText;
  sections: ChapterSection[];
}
