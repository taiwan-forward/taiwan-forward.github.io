/**
 * Taiwan Forward — bilingual core (EN / Traditional Chinese zh-TW).
 * All user-facing strings are intentionally authored in both languages.
 */

export type Lang = "en" | "zh";

/** A bilingual text value. `zh` is Traditional Chinese as used in Taiwan. */
export interface LText {
  en: string;
  zh: string;
}

export type ResearchStatus =
  | "published"
  | "in-progress"
  | "planned"
  | "insufficient-evidence";

export const LANG_LABEL: Record<Lang, string> = {
  en: "EN",
  zh: "繁中",
};

export const LANG_ATTR: Record<Lang, string> = {
  en: "en",
  zh: "zh-TW",
};

export function t(text: LText | undefined, lang: Lang): string {
  if (!text) return "";
  return text[lang] || text.en;
}

/** Locale-aware number formatting. */
export function formatNumber(value: number, lang: Lang, digits = 0): string {
  return new Intl.NumberFormat(lang === "zh" ? "zh-TW" : "en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

/** Locale-aware percent formatting (value given in percent units already). */
export function formatPercent(value: number, lang: Lang, digits = 1): string {
  return `${formatNumber(value, lang, digits)}%`;
}

/** Locale-aware date formatting for ISO date strings. */
export function formatDate(iso: string, lang: Lang): string {
  try {
    return new Intl.DateTimeFormat(lang === "zh" ? "zh-TW" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(`${iso}T00:00:00Z`));
  } catch {
    return iso;
  }
}
