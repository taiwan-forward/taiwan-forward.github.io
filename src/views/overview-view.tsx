"use client";

/**
 * Research overview — a structured directory of all 14 dimensions with
 * topic scope, publication status and last substantive update. No rankings,
 * no severity scores.
 */

import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { t, formatDate } from "@/lib/i18n";
import { useRouter } from "@/lib/router-hooks";
import { dimensions } from "@/data/dimensions";
import { ui } from "@/content/ui";
import { ResearchStatusBadge } from "@/components/site/research-status-badge";

export function OverviewView() {
  const { lang, tr } = useLang();
  const { navigate } = useRouter();

  const intro =
    lang === "zh"
      ? "本頁是台灣向前 14 個研究層面的完整目錄。每個層面標示研究範圍、出版狀態與最後實質更新時間。狀態標籤反映真實進度：我們寧可誠實地少出版，也不發布未經核驗的內容。"
      : "This page is the complete directory of Taiwan Forward's 14 research dimensions. Each lists its scope, publication status and last substantive update. Status labels reflect real progress: we would rather publish less, honestly, than release unverified content.";

  const topicsLabel = lang === "zh" ? "研究範圍" : "Scope";
  const updatedLabel = lang === "zh" ? "最後更新" : "Last update";

  return (
    <div className="flex-1">
      <header className="border-b border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <p className="tf-kicker">Taiwan Forward · 台灣向前</p>
          <h1 className="mt-4 text-[1.6rem] font-semibold leading-tight tracking-tight text-[var(--heading)] md:text-[2.1rem]">
            {tr(ui.nav.overview)}
          </h1>
          <p className="mt-4 max-w-3xl text-[0.95rem] leading-[1.85] text-[var(--body-text)]">
            {intro}
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <ul className="grid gap-4 md:grid-cols-2">
          {dimensions.map((d) => (
            <li
              key={d.id}
              className="flex flex-col rounded-lg border border-border bg-[var(--surface)] p-5 md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 font-mono text-[0.78rem] text-[var(--teal)]">
                    {d.no}
                  </span>
                  <div>
                    <h2 className="text-[1.02rem] font-semibold leading-snug text-[var(--heading)]">
                      {t(d.title, lang)}
                    </h2>
                    {d.lastUpdate ? (
                      <p className="mt-1 text-[0.72rem] text-[var(--dim-text)]">
                        {updatedLabel}：{formatDate(d.lastUpdate, lang)}
                      </p>
                    ) : null}
                  </div>
                </div>
                <ResearchStatusBadge status={d.status} />
              </div>

              <p className="mt-3 text-[0.85rem] leading-relaxed text-[var(--body-text)]">
                {t(d.short, lang)}
              </p>

              <div className="mt-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--dim-text)]">
                  {topicsLabel}
                </p>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {d.topics.map((topic) => (
                    <li
                      key={topic.en}
                      className="rounded-full border border-border bg-[var(--surface-2)] px-2.5 py-1 text-[0.72rem] text-[var(--dim-text)]"
                    >
                      {t(topic, lang)}
                    </li>
                  ))}
                </ul>
              </div>

              {d.chapterView ? (
                <button
                  onClick={() => navigate(d.chapterView as "chapter-01")}
                  className="tf-focus group mt-5 inline-flex w-fit items-center gap-2 rounded-md border border-border px-4 py-2 text-[0.82rem] font-medium text-[var(--teal)] transition-colors hover:border-[var(--teal)]"
                >
                  {tr(ui.common.viewChapter)}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </button>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
