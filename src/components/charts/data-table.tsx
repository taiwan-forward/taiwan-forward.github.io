"use client";

/**
 * Taiwan Forward — accessible data-table alternative to the chart view.
 *
 * The table is the authoritative "every value, exactly as recorded" view:
 * each figure keeps its natural precision, missing values are announced
 * explicitly, and the scroll region is keyboard-operable (tabIndex + focus
 * ring). Shared numeric helpers live here so the chart tooltips and the CSV
 * export format values identically to the table.
 */

import type { ChartDataset, ChartRow } from "@/data/types";
import { formatNumber, t } from "@/lib/i18n";
import type { Lang, LText } from "@/lib/i18n";
import { useLang } from "@/lib/lang-context";
import { ui } from "@/content/ui";

/** Bilingual heading for the label column (years or economies). */
export const LABEL_COLUMN: LText = { en: "Year / Category", zh: "年份／類別" };

/** Localized row label (zh uses labelZh when provided). */
export function rowLabel(row: ChartRow, lang: Lang): string {
  return lang === "zh" && row.labelZh ? row.labelZh : row.label;
}

/**
 * Fractional digits needed to represent a value without invented or lost
 * precision (TFR 0.695 keeps 3; 22.17 keeps 2; 134,856 keeps 0).
 * Values below 10 are capped at 3 decimals per project convention.
 */
export function valueDigits(value: number): number {
  if (!Number.isFinite(value)) return 0;
  const str = String(value);
  if (str.includes("e") || str.includes("E")) return 3;
  const frac = str.split(".")[1];
  if (!frac) return 0;
  return Math.min(value < 10 ? 3 : 6, frac.length);
}

/** Locale-formatted chart value at its natural precision. */
export function formatChartValue(value: number, lang: Lang): string {
  return formatNumber(value, lang, valueDigits(value));
}

const TH_STICKY =
  "sticky top-0 z-10 whitespace-nowrap border-b border-[var(--border)] bg-[var(--surface)] px-3 py-2 text-left text-xs font-medium text-[var(--dim-text)]";

export function DataTable({ dataset }: { dataset: ChartDataset }) {
  const { lang, tr } = useLang();
  const hasNotes = dataset.rows.some((row) => row.note !== undefined);

  return (
    <div
      role="region"
      aria-label={tr(ui.common.tableOfValues)}
      tabIndex={0}
      className="tf-focus max-h-96 overflow-auto rounded-md border border-[var(--border)] bg-[var(--surface)]"
    >
      <table className="w-full border-collapse text-sm">
        <caption className="px-3 py-3 text-left">
          <span className="block text-[0.95rem] font-semibold leading-snug text-[var(--heading)]">
            {tr(dataset.title)}
          </span>
          <span className="mt-1 block text-xs leading-relaxed text-[var(--dim-text)]">
            {tr(ui.common.unit)}：{tr(dataset.unit)}　·　{tr(ui.common.period)}：
            {tr(dataset.period)}
          </span>
        </caption>
        <thead>
          <tr>
            <th scope="col" className={TH_STICKY}>
              {t(LABEL_COLUMN, lang)}
            </th>
            {dataset.series.map((series) => (
              <th
                scope="col"
                key={series.id}
                className={`${TH_STICKY} text-right`}
              >
                {tr(series.label)}
              </th>
            ))}
            {hasNotes ? (
              <th scope="col" className={TH_STICKY}>
                {tr(ui.common.note)}
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border)]">
          {dataset.rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th
                scope="row"
                className="whitespace-nowrap px-3 py-2 text-left font-normal tabular-nums text-[var(--body-text)]"
              >
                {rowLabel(row, lang)}
              </th>
              {dataset.series.map((series, seriesIndex) => {
                const value = row.values[seriesIndex] ?? null;
                return (
                  <td
                    key={series.id}
                    className="whitespace-nowrap px-3 py-2 text-right tabular-nums text-[var(--body-text)]"
                  >
                    {value === null ? (
                      <>
                        <span aria-hidden="true">—</span>
                        <span className="sr-only">{tr(ui.common.noData)}</span>
                      </>
                    ) : (
                      formatChartValue(value, lang)
                    )}
                  </td>
                );
              })}
              {hasNotes ? (
                <td className="px-3 py-2 text-left text-xs leading-relaxed text-[var(--dim-text)]">
                  {row.note ? tr(row.note) : ""}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
