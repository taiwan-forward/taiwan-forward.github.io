"use client";

/**
 * Taiwan Forward — remount-safe ECharts wrapper (tree-shaken core build).
 *
 * Design invariants (the known failure mode from a previous project was charts
 * going blank after Chart → Table → Chart toggling):
 *
 * 1. The chart is created inside useEffect and disposed in the SAME effect's
 *    cleanup. React StrictMode double-mount therefore runs
 *    init → dispose → init, and every cycle is fully independent.
 * 2. The parent unmounts this component whenever the chart is not visible
 *    (table mode, closed dialog). Remounting always re-initializes from
 *    scratch — a disposed instance is never reused.
 * 3. Option prop changes (e.g. language switch) are applied with setOption on
 *    the live instance; they never re-initialize.
 * 4. Parents receive the live instance through onChartReady (fired on every
 *    successful init) and may call dispatchAction on it, e.g. to reset zoom.
 */

import { useEffect, useRef } from "react";
import * as echarts from "echarts/core";
import type { ECharts, EChartsCoreOption } from "echarts/core";
import { BarChart, LineChart } from "echarts/charts";
import {
  AriaComponent,
  DataZoomComponent,
  DataZoomSliderComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
// Registers the classic grid.containLabel implementation. Without it,
// echarts 6 only logs a dev-mode notice and uses a fallback layout path.
import { LegacyGridContainLabel } from "echarts/features";

echarts.use([
  LineChart,
  BarChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  DataZoomComponent,
  DataZoomSliderComponent,
  MarkLineComponent,
  TitleComponent,
  AriaComponent,
  LegacyGridContainLabel,
  CanvasRenderer,
]);

export interface EChartsCoreProps {
  /** Chart option; re-applied with notMerge whenever it changes. */
  option: EChartsCoreOption;
  /**
   * Fixed pixel height for the container. Omit to size the container with
   * CSS classes instead (responsive heights, dialog fills).
   */
  height?: number;
  className?: string;
  /** Called with the live instance after every successful initialization. */
  onChartReady?: (chart: ECharts) => void;
}

export function EChartsCore({
  option,
  height,
  className,
  onChartReady,
}: EChartsCoreProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<ECharts | null>(null);
  // Latest-value refs: kept current in the leading effect below so a changing
  // prop identity never causes a re-initialization.
  const optionRef = useRef(option);
  const readyRef = useRef(onChartReady);

  // Declared FIRST so it runs before the mount effect on the initial mount
  // (effects fire in declaration order). Only assignments — no render access.
  useEffect(() => {
    optionRef.current = option;
    readyRef.current = onChartReady;
  }, [option, onChartReady]);

  // Mount effect: init → apply option → observe resizes → dispose on cleanup.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let disposed = false;

    // Creates the instance once the container has a real size (a dialog
    // content may still be laying out when effects first fire).
    const ensureChart = (): ECharts | null => {
      const existing = chartRef.current;
      if (existing && !existing.isDisposed()) return existing;
      if (el.clientWidth <= 0 || el.clientHeight <= 0) return null;
      const chart = echarts.init(el);
      chartRef.current = chart;
      chart.setOption(optionRef.current, { notMerge: true });
      readyRef.current?.(chart);
      return chart;
    };

    ensureChart();

    const observer = new ResizeObserver(() => {
      if (disposed) return;
      const chart = chartRef.current;
      if (chart && !chart.isDisposed()) {
        if (el.clientWidth > 0 && el.clientHeight > 0) chart.resize();
      } else {
        ensureChart();
      }
    });
    observer.observe(el);

    return () => {
      disposed = true;
      observer.disconnect();
      const chart = chartRef.current;
      if (chart && !chart.isDisposed()) {
        chart.dispose();
      }
      chartRef.current = null;
    };
    // Deps intentionally empty: this effect ties to the DOM node lifetime.
  }, []);

  // Option updates are applied to the live instance (never re-init).
  useEffect(() => {
    const chart = chartRef.current;
    if (chart && !chart.isDisposed()) {
      chart.setOption(option, { notMerge: true });
    }
  }, [option]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={height !== undefined ? { height: `${height}px` } : undefined}
    />
  );
}
