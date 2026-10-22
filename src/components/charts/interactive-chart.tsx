"use client";

/**
 * Taiwan Forward — interactive chart figure (the project's core component).
 *
 * Structure:
 *   figure
 *   ├─ figcaption (sr-only description — the accessible text alternative)
 *   ├─ header: bilingual title/subtitle + controls
 *   │    (chart↔table toggle · reset zoom · CSV download · expand)
 *   ├─ body: EChartsCore in chart mode / DataTable in table mode
 *   │    (the chart UNMOUNTS in table mode — remounting re-initializes it,
 *   │    which is the blank-chart prevention strategy; see echarts-core.tsx)
 *   ├─ interaction hint (always visible — discoverability requirement)
 *   ├─ comparability note box
 *   ├─ source references
 *   └─ unit + reference period line
 *
 * The expand dialog mounts a second, fresh EChartsCore instance; both
 * instances are reachable for dispatchAction (zoom reset) through
 * onChartReady. All labels are bilingual (ui.ts / dataset LText) and all
 * numbers are locale-formatted. The palette is muted and non-partisan.
 */

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ECharts } from "echarts/core";
import type { ComposeOption, EChartsCoreOption } from "echarts/core";
import type { BarSeriesOption, LineSeriesOption } from "echarts/charts";
import type {
  AriaComponentOption,
  DataZoomComponentOption,
  GridComponentOption,
  LegendComponentOption,
  MarkLineComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
} from "echarts/components";
import {
  ChartLine,
  Download,
  Hand,
  Info,
  Maximize2,
  RotateCcw,
  Table as TableIcon,
  X,
} from "lucide-react";
import type { ChartDataset } from "@/data/types";
import { t } from "@/lib/i18n";
import type { Lang, LText } from "@/lib/i18n";
import { useLang } from "@/lib/lang-context";
import { ui } from "@/content/ui";
import { toast } from "@/hooks/use-toast";
import { SourceReference } from "@/components/site/source-reference";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { EChartsCore } from "./echarts-core";
import {
  DataTable,
  LABEL_COLUMN,
  formatChartValue,
  rowLabel,
  valueDigits,
} from "./data-table";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

/** Fully typed option for the chart variants used by this project. */
export type ChartOption = ComposeOption<
  | LineSeriesOption
  | BarSeriesOption
  | GridComponentOption
  | TooltipComponentOption
  | LegendComponentOption
  | DataZoomComponentOption
  | MarkLineComponentOption
  | TitleComponentOption
  | AriaComponentOption
>;

/** Structural subset of ECharts tooltip formatter params we consume. */
interface TooltipParamLike {
  seriesIndex: number;
  dataIndex: number;
  marker: string;
  value: number | null;
}

/* ------------------------------------------------------------------ */
/* Local bilingual strings (no ui.ts equivalent exists)                */
/* ------------------------------------------------------------------ */

const VIEW_MODE_LABEL: LText = { en: "View mode", zh: "檢視模式" };
const CSV_FAIL_TITLE: LText = { en: "Download failed", zh: "下載失敗" };
const CSV_FAIL_DESC: LText = {
  en: "The CSV file could not be generated. Please try again.",
  zh: "無法產生 CSV 檔案，請再試一次。",
};

/* ------------------------------------------------------------------ */
/* Design tokens (chart-specific literals; see globals.css)            */
/* ------------------------------------------------------------------ */

const AXIS_LABEL_COLOR = "#93A1AE";
const AXIS_LINE_COLOR = "#2A3642";
const SPLIT_LINE_COLOR = "#2A3642";
const TOOLTIP_BG = "#1B2530";
const TOOLTIP_BORDER = "#2A3642";
const TOOLTIP_TEXT = "#C7D1DA";
const HEADING_TEXT = "#E8EEF3";
const MARKLINE_COLOR = "#C8B38E";
const LEGEND_INACTIVE = "#5A6A78";

/** Marker shapes cycle per series so series stay distinguishable beyond color. */
const SERIES_SYMBOLS = ["circle", "rect", "triangle"] as const;
type SeriesSymbol = (typeof SERIES_SYMBOLS)[number];

function symbolFor(index: number): SeriesSymbol {
  return SERIES_SYMBOLS[index % SERIES_SYMBOLS.length];
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

function escapeHtml(text: string): string {
  return text.replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[char] ?? char
  );
}

/** Bilingual tooltip: row label, series name, locale value + unit, row note. */
function buildTooltipHtml(
  raw: unknown,
  dataset: ChartDataset,
  lang: Lang
): string {
  const list = (Array.isArray(raw) ? raw : [raw]) as TooltipParamLike[];
  const first = list[0];
  if (!first) return "";
  const row = dataset.rows[first.dataIndex];
  if (!row) return "";

  const unit = t(dataset.unit, lang);
  const noData = t(ui.common.noData, lang);
  const parts: string[] = [
    `<div style="font-weight:600;color:${HEADING_TEXT};margin-bottom:4px;">${escapeHtml(
      rowLabel(row, lang)
    )}</div>`,
  ];

  for (const param of list) {
    const series = dataset.series[param.seriesIndex];
    if (!series) continue;
    const valueText =
      typeof param.value === "number"
        ? formatChartValue(param.value, lang)
        : noData;
    parts.push(
      `<div style="display:flex;align-items:baseline;gap:6px;line-height:1.6;">${
        param.marker
      }<span style="color:${AXIS_LABEL_COLOR};">${escapeHtml(
        t(series.label, lang)
      )}</span><span style="color:${HEADING_TEXT};font-weight:600;">${escapeHtml(
        valueText
      )}</span>${
        unit
          ? `<span style="color:${AXIS_LABEL_COLOR};font-size:11px;">${escapeHtml(
              unit
            )}</span>`
          : ""
      }</div>`
    );
  }

  if (row.note) {
    parts.push(
      `<div style="margin-top:6px;padding-top:5px;border-top:1px solid ${TOOLTIP_BORDER};color:${AXIS_LABEL_COLOR};font-size:11px;">${escapeHtml(
        t(ui.common.note, lang)
      )}：${escapeHtml(t(row.note, lang))}</div>`
    );
  }

  return parts.join("");
}

/* ------------------------------------------------------------------ */
/* CSV export                                                          */
/* ------------------------------------------------------------------ */

function csvEscape(field: string): string {
  return /[",\r\n]/.test(field) ? `"${field.replace(/"/g, '""')}"` : field;
}

function buildCsv(dataset: ChartDataset, lang: Lang): string {
  const headerCells = [
    t(LABEL_COLUMN, lang),
    ...dataset.series.map((series) => t(series.label, lang)),
  ];
  const lines: string[] = [headerCells.map(csvEscape).join(",")];

  for (const row of dataset.rows) {
    const cells = [rowLabel(row, lang)];
    for (let index = 0; index < dataset.series.length; index += 1) {
      const value = row.values[index];
      cells.push(
        typeof value === "number" ? value.toFixed(valueDigits(value)) : ""
      );
    }
    lines.push(cells.map(csvEscape).join(","));
  }

  // UTF-8 BOM so Excel renders Traditional Chinese correctly.
  return `\uFEFF${lines.join("\r\n")}\r\n`;
}

/* ------------------------------------------------------------------ */
/* ECharts option builder                                              */
/* ------------------------------------------------------------------ */

function buildChartOption(
  dataset: ChartDataset,
  lang: Lang,
  reducedMotion: boolean
): ChartOption {
  const isLine = dataset.type === "line";
  const isBar = dataset.type === "bar";
  const isStacked = dataset.type === "stacked-bar";
  const showLegend = dataset.series.length > 1;
  const fontFamily =
    typeof document === "undefined"
      ? ""
      : getComputedStyle(document.body).fontFamily;

  const series: (LineSeriesOption | BarSeriesOption)[] = dataset.series.map(
    (seriesDef, index) => {
      const data = dataset.rows.map((row) => {
        const value = row.values[index];
        return typeof value === "number" ? value : null;
      });

      if (isLine) {
        const line: LineSeriesOption = {
          type: "line",
          id: seriesDef.id,
          name: t(seriesDef.label, lang),
          data,
          smooth: false,
          connectNulls: false,
          symbol: symbolFor(index),
          symbolSize: 8,
          showSymbol: false,
          itemStyle: { color: seriesDef.color },
          lineStyle: {
            color: seriesDef.color,
            width: 2,
            type: seriesDef.dashed ? "dashed" : "solid",
          },
        };
        if (index === 0 && dataset.markLines && dataset.markLines.length > 0) {
          line.markLine = {
            silent: true,
            symbol: ["none", "none"],
            data: dataset.markLines.map((markLine) => ({
              yAxis: markLine.value,
              lineStyle: {
                type: "dashed",
                color: markLine.color ?? MARKLINE_COLOR,
                width: 1.5,
              },
              label: {
                show: true,
                position: "insideEndTop",
                distance: 8,
                formatter: t(markLine.label, lang),
                color: markLine.color ?? MARKLINE_COLOR,
                fontSize: 11,
              },
            })),
          };
        }
        return line;
      }

      const bar: BarSeriesOption = {
        type: "bar",
        id: seriesDef.id,
        name: t(seriesDef.label, lang),
        data,
        itemStyle: {
          color: seriesDef.color,
          borderRadius: isStacked ? [2, 2, 0, 0] : [3, 3, 0, 0],
        },
        barMaxWidth: isStacked ? 36 : 48,
      };
      if (isStacked) bar.stack = "total";
      return bar;
    }
  );

  const option: ChartOption = {
    animation: !reducedMotion,
    animationDuration: 360,
    aria: {
      enabled: true,
      label: { description: t(dataset.description, lang) },
    },
    ...(fontFamily ? { textStyle: { fontFamily } } : {}),
    grid: {
      containLabel: true,
      left: 10,
      right: 18,
      top: showLegend ? 52 : 30,
      bottom: dataset.zoomable ? 64 : 28,
    },
    tooltip: {
      trigger: isBar ? "item" : "axis",
      confine: true,
      backgroundColor: TOOLTIP_BG,
      borderColor: TOOLTIP_BORDER,
      borderWidth: 1,
      padding: [8, 12],
      textStyle: { color: TOOLTIP_TEXT, fontSize: 12 },
      axisPointer: { type: isStacked ? "shadow" : "line" },
      extraCssText: "border-radius:6px;box-shadow:0 8px 28px rgba(0,0,0,0.4);",
      formatter: (raw: unknown) => buildTooltipHtml(raw, dataset, lang),
    },
    legend: {
      show: showLegend,
      type: "scroll",
      top: 4,
      left: "center",
      itemWidth: 14,
      itemHeight: 10,
      itemGap: 14,
      inactiveColor: LEGEND_INACTIVE,
      pageIconColor: AXIS_LABEL_COLOR,
      pageIconInactiveColor: AXIS_LINE_COLOR,
      pageTextStyle: { color: AXIS_LABEL_COLOR },
      textStyle: { color: AXIS_LABEL_COLOR, fontSize: 12 },
      data: dataset.series.map((seriesDef, index) => ({
        name: t(seriesDef.label, lang),
        icon: isLine ? symbolFor(index) : "roundRect",
      })),
    },
    xAxis: {
      type: "category",
      data: dataset.rows.map((row) => rowLabel(row, lang)),
      boundaryGap: isLine ? false : undefined,
      axisLine: { show: true, lineStyle: { color: AXIS_LINE_COLOR } },
      axisTick: { show: false },
      axisLabel: {
        color: AXIS_LABEL_COLOR,
        fontSize: 11,
        margin: 10,
        hideOverlap: true,
        rotate: isBar ? 30 : 0,
      },
    },
    yAxis: {
      type: "value",
      axisLine: { show: true, lineStyle: { color: AXIS_LINE_COLOR } },
      axisTick: { show: false },
      axisLabel: {
        color: AXIS_LABEL_COLOR,
        fontSize: 11,
        formatter: (value: number) => formatChartValue(value, lang),
      },
      splitLine: {
        show: true,
        lineStyle: { color: SPLIT_LINE_COLOR, type: "dashed" },
      },
    },
    series,
    ...(dataset.zoomable
      ? {
          dataZoom: [
            { type: "inside", xAxisIndex: 0 },
            {
              type: "slider",
              xAxisIndex: 0,
              height: 18,
              bottom: 10,
              borderColor: AXIS_LINE_COLOR,
              backgroundColor: "rgba(21,28,36,0.5)",
              fillerColor: "rgba(111,163,168,0.18)",
              handleStyle: { color: "#6FA3A8", borderColor: "#0F141A" },
              moveHandleStyle: { color: AXIS_LINE_COLOR },
              dataBackground: {
                lineStyle: { color: AXIS_LINE_COLOR, width: 1 },
                areaStyle: { color: "rgba(42,54,66,0.4)" },
              },
              selectedDataBackground: {
                lineStyle: { color: "#6FA3A8", width: 1 },
                areaStyle: { color: "rgba(111,163,168,0.28)" },
              },
              textStyle: { color: AXIS_LABEL_COLOR, fontSize: 10 },
              brushSelect: false,
            },
          ] satisfies DataZoomComponentOption[],
        }
      : {}),
  };

  return option;
}

/* ------------------------------------------------------------------ */
/* Small presentational pieces                                         */
/* ------------------------------------------------------------------ */

function NoteBox({ label, text }: { label: string; text: string }) {
  return (
    <div className="flex items-start gap-2.5 rounded-md border border-[var(--border)] bg-[var(--background)] px-3.5 py-3">
      <Info
        className="mt-0.5 size-4 shrink-0 text-[var(--sand)]"
        aria-hidden="true"
      />
      <p className="text-xs leading-relaxed text-[var(--dim-text)]">
        <span className="font-semibold uppercase tracking-[0.12em] text-[var(--sand)]">
          {label}：
        </span>
        {text}
      </p>
    </div>
  );
}

function MetaLine({
  unitLabel,
  unit,
  periodLabel,
  period,
  className,
}: {
  unitLabel: string;
  unit: string;
  periodLabel: string;
  period: string;
  className?: string;
}) {
  return (
    <p
      className={`flex flex-wrap gap-x-5 gap-y-1 text-xs text-[var(--dim-text)] ${
        className ?? ""
      }`}
    >
      <span>
        <span className="font-medium">{unitLabel}：</span>
        <span className="text-[var(--body-text)]">{unit}</span>
      </span>
      <span>
        <span className="font-medium">{periodLabel}：</span>
        <span className="text-[var(--body-text)]">{period}</span>
      </span>
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */

type ViewMode = "chart" | "table";

export function InteractiveChart({
  dataset,
  className,
}: {
  dataset: ChartDataset;
  className?: string;
}) {
  const { lang, tr } = useLang();
  const [mode, setMode] = useState<ViewMode>("chart");
  const [expanded, setExpanded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const mainChartRef = useRef<ECharts | null>(null);
  const dialogChartRef = useRef<ECharts | null>(null);

  // Respect the OS reduced-motion preference (drives chart animation).
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Drop references to instances that no longer exist, so a stale (disposed)
  // instance can never receive a dispatchAction call after unmount.
  useEffect(() => {
    if (mode !== "chart") mainChartRef.current = null;
  }, [mode]);
  useEffect(() => {
    if (!expanded) dialogChartRef.current = null;
  }, [expanded]);

  const chartOption = useMemo<EChartsCoreOption>(
    () => buildChartOption(dataset, lang, reducedMotion),
    [dataset, lang, reducedMotion]
  );

  const handleMainReady = useCallback((chart: ECharts) => {
    mainChartRef.current = chart;
  }, []);

  const handleDialogReady = useCallback((chart: ECharts) => {
    dialogChartRef.current = chart;
  }, []);

  const resetZoom = useCallback((chart: ECharts | null) => {
    if (chart && !chart.isDisposed()) {
      try {
        chart.dispatchAction({ type: "dataZoom", start: 0, end: 100 });
      } catch {
        /* the instance disappeared mid-call — nothing to reset */
      }
    }
  }, []);

  const handleModeChange = useCallback((value: string) => {
    if (value === "chart" || value === "table") setMode(value);
  }, []);

  const handleDownloadCsv = useCallback(() => {
    try {
      const csv = buildCsv(dataset, lang);
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = `${dataset.id}.csv`;
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 0);
    } catch (error) {
      console.error("CSV export failed", error);
      toast({
        variant: "destructive",
        title: t(CSV_FAIL_TITLE, lang),
        description: t(CSV_FAIL_DESC, lang),
      });
    }
  }, [dataset, lang]);

  const toggleItemClass =
    "tf-focus flex-none rounded-none px-3 text-xs font-medium text-[var(--body-text)] " +
    "data-[state=on]:border-[var(--teal)]/60 data-[state=on]:bg-[rgba(111,163,168,0.22)] " +
    "data-[state=on]:text-[var(--teal)] data-[state=on]:hover:bg-[rgba(111,163,168,0.3)] " +
    "hover:text-[var(--heading)]";

  return (
    <figure
      className={`rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6 ${
        className ?? ""
      }`}
    >
      {/* Accessible text alternative for the visualization. */}
      <figcaption className="sr-only">{tr(dataset.description)}</figcaption>

      {/* Title + controls */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <h3 className="text-[1.05rem] font-semibold leading-snug text-[var(--heading)]">
            {tr(dataset.title)}
          </h3>
          {dataset.subtitle ? (
            <p className="mt-1 text-sm leading-relaxed text-[var(--dim-text)]">
              {tr(dataset.subtitle)}
            </p>
          ) : null}
        </div>
        <div className="flex shrink-0 flex-wrap items-center gap-2">
          <ToggleGroup
            type="single"
            variant="outline"
            value={mode}
            onValueChange={handleModeChange}
            aria-label={tr(VIEW_MODE_LABEL)}
          >
            <ToggleGroupItem
              value="chart"
              aria-label={tr(ui.common.viewChart)}
              className={`${toggleItemClass} first:rounded-l-md`}
            >
              <ChartLine className="size-4" aria-hidden="true" />
              {tr(ui.common.viewChart)}
            </ToggleGroupItem>
            <ToggleGroupItem
              value="table"
              aria-label={tr(ui.common.viewTable)}
              className={`${toggleItemClass} last:rounded-r-md`}
            >
              <TableIcon className="size-4" aria-hidden="true" />
              {tr(ui.common.viewTable)}
            </ToggleGroupItem>
          </ToggleGroup>

          {mode === "chart" && dataset.zoomable ? (
            <Button
              variant="outline"
              onClick={() => resetZoom(mainChartRef.current)}
              className="tf-focus h-9 px-3 text-xs font-medium"
            >
              <RotateCcw className="size-4" aria-hidden="true" />
              {tr(ui.common.reset)}
            </Button>
          ) : null}

          <Button
            variant="outline"
            onClick={handleDownloadCsv}
            className="tf-focus h-9 px-3 text-xs font-medium"
          >
            <Download className="size-4" aria-hidden="true" />
            {tr(ui.common.downloadCsv)}
          </Button>

          <Button
            variant="outline"
            size="icon"
            aria-label={tr(ui.common.expand)}
            onClick={() => setExpanded(true)}
            className="tf-focus size-9"
          >
            <Maximize2 className="size-4" aria-hidden="true" />
          </Button>
        </div>
      </div>

      {/* Body: the chart unmounts entirely in table mode (blank-chart
          prevention) and remounts fresh when switched back. */}
      <div className="mt-4">
        {mode === "chart" ? (
          <EChartsCore
            option={chartOption}
            className="h-[360px] w-full md:h-[420px]"
            onChartReady={handleMainReady}
          />
        ) : (
          <DataTable dataset={dataset} />
        )}
      </div>

      {/* Interaction hint — always visible (discoverability requirement). */}
      <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-[var(--dim-text)]">
        <Hand className="mt-0.5 size-3.5 shrink-0" aria-hidden="true" />
        <span>{tr(ui.common.chartHint)}</span>
      </p>

      {/* Comparability note */}
      {dataset.note ? (
        <div className="mt-4">
          <NoteBox label={tr(ui.common.note)} text={tr(dataset.note)} />
        </div>
      ) : null}

      {/* Source references */}
      <div className="mt-4">
        <SourceReference sourceIds={dataset.sourceIds} compact />
      </div>

      {/* Unit + reference period */}
      <MetaLine
        className="mt-3"
        unitLabel={tr(ui.common.unit)}
        unit={tr(dataset.unit)}
        periodLabel={tr(ui.common.period)}
        period={tr(dataset.period)}
      />

      {/* Expanded view: a second, fresh chart instance that fills the
          dialog; it is disposed by unmount when the dialog closes.
          (sm:max-w-6xl overrides the stock sm:max-w-lg via tailwind-merge.) */}
      <Dialog open={expanded} onOpenChange={setExpanded}>
        <DialogContent
          showCloseButton={false}
          className="flex h-[90vh] w-full flex-col gap-0 overflow-hidden p-4 sm:max-w-6xl sm:p-6"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <DialogTitle className="text-left text-lg font-semibold leading-snug text-[var(--heading)]">
                {tr(dataset.title)}
              </DialogTitle>
              <DialogDescription className="mt-1 text-left text-sm leading-relaxed text-[var(--dim-text)]">
                {tr(dataset.subtitle ?? dataset.description)}
              </DialogDescription>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              {dataset.zoomable ? (
                <Button
                  variant="outline"
                  onClick={() => resetZoom(dialogChartRef.current)}
                  className="tf-focus h-9 px-3 text-xs font-medium"
                >
                  <RotateCcw className="size-4" aria-hidden="true" />
                  {tr(ui.common.reset)}
                </Button>
              ) : null}
              <DialogClose asChild>
                <Button
                  variant="outline"
                  size="icon"
                  aria-label={tr(ui.common.close)}
                  className="tf-focus size-9"
                >
                  <X className="size-4" aria-hidden="true" />
                </Button>
              </DialogClose>
            </div>
          </div>

          <div className="mt-4 min-h-0 flex-1">
            <EChartsCore
              option={chartOption}
              className="h-full w-full"
              onChartReady={handleDialogReady}
            />
          </div>

          {/* Per spec the expanded view adds the comparability note to the
              chart; sources, unit and period stay on the main figure. */}
          <div className="mt-4 max-h-[32vh] shrink-0 overflow-y-auto pr-1">
            {dataset.note ? (
              <NoteBox label={tr(ui.common.note)} text={tr(dataset.note)} />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </figure>
  );
}
