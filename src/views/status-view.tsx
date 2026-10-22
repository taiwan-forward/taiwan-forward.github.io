"use client";

/**
 * Research status view — honest publication status: what is published, what
 * is planned, update cadence, and pending-verification disclosures.
 */

import { ArrowRight, CheckCircle2, Clock, Map, SearchX } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { useRouter } from "@/lib/router-hooks";
import { statusContent } from "@/content/status";
import { dimensions } from "@/data/dimensions";
import { Section, Prose } from "@/components/site/section";

const ICONS = {
  published: CheckCircle2,
  "in-progress": Clock,
  planned: Map,
  "insufficient-evidence": SearchX,
} as const;

const DOT = {
  published: "bg-[var(--teal)]",
  "in-progress": "bg-[var(--sand)]",
  planned: "bg-[var(--bluegrey)]",
  "insufficient-evidence": "bg-[var(--dim-text)]",
} as const;

export function StatusView() {
  const { lang } = useLang();
  const { navigate } = useRouter();
  const c = statusContent;

  return (
    <div className="flex-1">
      <header className="border-b border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <p className="tf-kicker">Taiwan Forward · 台灣向前</p>
          <h1 className="mt-4 text-[1.6rem] font-semibold leading-tight tracking-tight text-[var(--heading)] md:text-[2.1rem]">
            {lang === "zh" ? "研究進度" : "Research Status"}
          </h1>
          <div className="mt-4 max-w-3xl">
            <Prose>
              <p>{t(c.intro, lang)}</p>
            </Prose>
          </div>
        </div>
      </header>

      {/* Status legend */}
      <Section
        kicker={{ en: "Status labels", zh: "狀態標籤" }}
        title={{
          en: "What each status means",
          zh: "每個狀態標籤的意義",
        }}
      >
        <ul className="grid gap-3 sm:grid-cols-2">
          {c.legend.map((item) => {
            const Icon = ICONS[item.id];
            return (
              <li
                key={item.id}
                className="rounded-lg border border-border bg-[var(--surface)] p-5"
              >
                <p className="flex items-center gap-2.5">
                  <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--surface-2)]`}>
                    <Icon className="h-4 w-4 text-[var(--teal)]" aria-hidden="true" />
                  </span>
                  <span className="flex items-center gap-2 text-[0.92rem] font-semibold text-[var(--heading)]">
                    <span className={`h-2 w-2 rounded-full ${DOT[item.id]}`} aria-hidden="true" />
                    {t(item.title, lang)}
                  </span>
                </p>
                <p className="mt-2.5 text-[0.83rem] leading-relaxed text-[var(--dim-text)]">
                  {t(item.desc, lang)}
                </p>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* Published */}
      <Section
        variant="raised"
        kicker={{ en: "Published", zh: "已出版" }}
        title={c.published.title}
      >
        <Prose>
          <p>{t(c.published.intro, lang)}</p>
        </Prose>
        <ul className="mt-6 space-y-3">
          {c.published.items.map((item) => (
            <li key={item.view}>
              <button
                onClick={() => navigate(item.view)}
                className="tf-focus group w-full rounded-lg border border-border bg-[var(--surface-2)] p-5 text-left transition-colors hover:border-[var(--teal)]"
              >
                <p className="flex items-center justify-between gap-3">
                  <span className="text-[0.98rem] font-semibold text-[var(--heading)] group-hover:text-[var(--teal)]">
                    {t(item.title, lang)}
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[var(--teal)] transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </p>
                <p className="mt-2 text-[0.85rem] leading-relaxed text-[var(--body-text)]">
                  {t(item.desc, lang)}
                </p>
                <p className="mt-2 text-[0.72rem] text-[var(--dim-text)]">
                  {lang === "zh" ? "最後更新" : "Last updated"}：{item.lastUpdate}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </Section>

      {/* Planned */}
      <Section kicker={{ en: "Planned", zh: "已規劃" }} title={c.planned.title}>
        <Prose>
          <p>{t(c.planned.intro, lang)}</p>
          {c.planned.paragraphs.map((p, i) => (
            <p key={i}>{t(p, lang)}</p>
          ))}
        </Prose>
        <ul className="mt-6 flex flex-wrap gap-2">
          {dimensions
            .filter((d) => d.status !== "published")
            .map((d) => (
              <li
                key={d.id}
                className="rounded-full border border-border bg-[var(--surface)] px-3.5 py-1.5 text-[0.78rem] text-[var(--dim-text)]"
              >
                <span className="mr-1.5 font-mono text-[0.7rem] text-[var(--bluegrey)]">{d.no}</span>
                {t(d.title, lang)}
              </li>
            ))}
        </ul>
      </Section>

      {/* Cadence + pending verification */}
      <Section
        variant="raised"
        kicker={{ en: "Updates & honesty", zh: "更新與誠信" }}
        title={{
          en: "Update cadence and pending verification",
          zh: "更新節奏與待核驗項目",
        }}
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <h3 className="text-[1rem] font-semibold text-[var(--heading)]">
              {t(c.cadence.title, lang)}
            </h3>
            <div className="mt-3">
              <Prose>
                {c.cadence.paragraphs.map((p, i) => (
                  <p key={i}>{t(p, lang)}</p>
                ))}
              </Prose>
            </div>
          </div>
          <div>
            <h3 className="text-[1rem] font-semibold text-[var(--sand)]">
              {t(c.pendingVerification.title, lang)}
            </h3>
            <div className="mt-3">
              <Prose>
                {c.pendingVerification.paragraphs.map((p, i) => (
                  <p key={i}>{t(p, lang)}</p>
                ))}
              </Prose>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
