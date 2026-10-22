"use client";

/**
 * Sources view — renders the full source registry with provenance metadata
 * (organization, period, definition, unit, coverage, methodology,
 * limitations, license, access date, verification note). Honest by design:
 * verification notes state exactly how each figure was obtained.
 */

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { sources } from "@/data/sources";
import type { SourceRef } from "@/data/types";
import { useLang } from "@/lib/lang-context";
import { t, formatDate } from "@/lib/i18n";
import { Section, Prose } from "@/components/site/section";
import { ui } from "@/content/ui";

function SourceCard({ source }: { source: SourceRef }) {
  const { lang, tr } = useLang();
  const [open, setOpen] = useState(false);

  const fields: { label: string; value?: string }[] = [
    { label: tr(ui.common.period), value: source.period ? t(source.period, lang) : undefined },
    { label: lang === "zh" ? "定義" : "Definition", value: source.definition ? t(source.definition, lang) : undefined },
    { label: tr(ui.common.unit), value: source.unit ? t(source.unit, lang) : undefined },
    { label: lang === "zh" ? "涵蓋範圍" : "Coverage", value: source.coverage ? t(source.coverage, lang) : undefined },
    { label: lang === "zh" ? "方法" : "Methodology", value: source.methodology ? t(source.methodology, lang) : undefined },
    { label: tr(ui.common.note), value: source.limitations ? t(source.limitations, lang) : undefined },
    { label: lang === "zh" ? "授權" : "License", value: source.license ? t(source.license, lang) : undefined },
    { label: lang === "zh" ? "出版／更新" : "Published", value: source.published ? t(source.published, lang) : undefined },
  ];

  const kindLabel =
    source.kind === "taiwan-official"
      ? lang === "zh" ? "台灣官方來源" : "Taiwan official"
      : source.kind === "international-official"
        ? lang === "zh" ? "國際官方來源" : "International official"
        : lang === "zh" ? "國際彙整來源" : "International aggregator";

  const isPending = source.verification.zh.includes("待核驗");

  return (
    <li className="rounded-lg border border-border bg-[var(--surface)]">
      <div className="p-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.12em] text-[var(--dim-text)]">
              {kindLabel}
            </p>
            <h3 className="mt-1.5 text-[0.95rem] font-semibold leading-snug text-[var(--heading)]">
              {t(source.title, lang)}
            </h3>
            <p className="mt-1 text-[0.8rem] text-[var(--body-text)]">
              {t(source.org, lang)}
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-end gap-2">
            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tf-focus inline-flex min-h-[36px] items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-[0.78rem] font-medium text-[var(--teal)] transition-colors hover:border-[var(--teal)]"
            >
              {lang === "zh" ? "前往來源" : "Open source"}
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only"> — {tr(ui.common.openInNewTab)}</span>
            </a>
            <span className="text-[0.7rem] text-[var(--dim-text)]">
              {lang === "zh" ? "查閱" : "Accessed"}：{formatDate(source.accessDate, lang)}
            </span>
          </div>
        </div>

        {isPending ? (
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-[rgba(200,179,142,0.4)] bg-[rgba(200,179,142,0.08)] px-3 py-1 text-[0.72rem] font-medium text-[var(--sand)]">
            {tr(ui.common.pending)}
          </p>
        ) : null}

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="tf-focus mt-4 inline-flex min-h-[36px] items-center gap-1.5 text-[0.78rem] font-medium text-[var(--dim-text)] transition-colors hover:text-[var(--heading)]"
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
          {open
            ? tr(ui.common.showLess)
            : lang === "zh"
              ? "查看完整出處資訊"
              : "View full provenance details"}
        </button>

        {open ? (
          <dl className="mt-4 space-y-3 border-t border-border pt-4">
            <div>
              <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--dim-text)]">
                {lang === "zh" ? "本計畫如何取得與核驗" : "How this project obtained & verified the figures"}
              </dt>
              <dd className="mt-1 text-[0.82rem] leading-relaxed text-[var(--body-text)]">
                {t(source.verification, lang)}
              </dd>
            </div>
            {fields
              .filter((f) => f.value)
              .map((f) => (
                <div key={f.label}>
                  <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-[var(--dim-text)]">
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-[0.82rem] leading-relaxed text-[var(--body-text)]">
                    {f.value}
                  </dd>
                </div>
              ))}
          </dl>
        ) : null}
      </div>
    </li>
  );
}

export function SourcesView() {
  const { lang } = useLang();

  const intro =
    lang === "zh"
      ? "本計畫引用的每個重要資料來源，都在此登錄並完整記錄出處資訊。我們誠實記載每個數值的取得與核驗方式——包括哪些數字已直接核對原始出版品、哪些經由可追溯的彙編交叉核對、以及哪些仍在核驗中。點開任一來源可查看完整細節。"
      : "Every important source cited by this project is registered here with full provenance metadata. We record honestly how each figure was obtained and verified — which numbers were checked against primary publications, which were cross-checked via traceable compilations, and which remain pending. Open any source for full details.";

  const groups = [
    {
      title: lang === "zh" ? "台灣官方來源" : "Taiwan official sources",
      kind: "taiwan-official" as const,
    },
    {
      title: lang === "zh" ? "國際官方來源" : "International official sources",
      kind: "international-official" as const,
    },
    {
      title: lang === "zh" ? "國際彙整來源" : "International aggregators",
      kind: "international-aggregator" as const,
    },
  ];

  return (
    <div className="flex-1">
      <header className="border-b border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <p className="tf-kicker">Taiwan Forward · 台灣向前</p>
          <h1 className="mt-4 text-[1.6rem] font-semibold leading-tight tracking-tight text-[var(--heading)] md:text-[2.1rem]">
            {lang === "zh" ? "資料與來源" : "Data & Sources"}
          </h1>
          <div className="mt-4 max-w-3xl">
            <Prose>
              <p>{intro}</p>
            </Prose>
          </div>
        </div>
      </header>

      <Section>
        {groups.map((group) => {
          const list = sources.filter((s) => s.kind === group.kind);
          if (list.length === 0) return null;
          return (
            <div key={group.kind} className="mb-10 last:mb-0">
              <h2 className="text-[1.05rem] font-semibold text-[var(--heading)]">
                {group.title}
                <span className="ml-2 font-mono text-[0.75rem] font-normal text-[var(--dim-text)]">
                  {list.length}
                </span>
              </h2>
              <ul className="mt-4 grid gap-3 lg:grid-cols-2">
                {list.map((s) => (
                  <SourceCard key={s.id} source={s} />
                ))}
              </ul>
            </div>
          );
        })}
      </Section>
    </div>
  );
}
