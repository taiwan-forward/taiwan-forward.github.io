"use client";

/**
 * Methodology view — the diagnostic evidence model: six analytical steps,
 * scientific integrity rules, international comparison framework, source
 * quality standards and data engineering practices.
 */

import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { methodologyContent } from "@/content/methodology";
import { Section, Prose } from "@/components/site/section";

export function MethodologyView() {
  const { lang } = useLang();
  const c = methodologyContent;

  return (
    <div className="flex-1">
      <header className="border-b border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <p className="tf-kicker">Taiwan Forward · 台灣向前</p>
          <h1 className="mt-4 text-[1.6rem] font-semibold leading-tight tracking-tight text-[var(--heading)] md:text-[2.1rem]">
            {lang === "zh" ? "研究方法" : "Research Methodology"}
          </h1>
          <div className="mt-4 max-w-3xl">
            <Prose>
              <p>{t(c.intro, lang)}</p>
            </Prose>
          </div>
        </div>
      </header>

      {/* Six steps */}
      <Section
        kicker={{ en: "The diagnostic model", zh: "診斷式證據模型" }}
        title={{
          en: "Six steps, applied to every research topic",
          zh: "六個步驟，套用於每個研究主題",
        }}
      >
        <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {c.steps.map((step) => (
            <li key={step.no} className="rounded-lg border border-border bg-[var(--surface)] p-5">
              <p className="flex items-baseline gap-3">
                <span className="font-mono text-[1.05rem] font-semibold text-[var(--teal)]">
                  {step.no}
                </span>
                <span className="text-[0.95rem] font-semibold text-[var(--heading)]">
                  {t(step.title, lang)}
                </span>
              </p>
              <p className="mt-2.5 text-[0.83rem] leading-[1.75] text-[var(--dim-text)]">
                {t(step.text, lang)}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Integrity rules */}
      <Section
        variant="raised"
        kicker={{ en: "Scientific integrity", zh: "科學誠信" }}
        title={c.integrity.title}
      >
        <Prose>
          <p>{t(c.integrity.intro, lang)}</p>
        </Prose>
        <ul className="mt-6 max-w-[44rem] space-y-2.5">
          {c.integrity.rules.map((rule, i) => (
            <li key={i} className="flex gap-3 text-[0.9rem] leading-[1.75] text-[var(--body-text)]">
              <span className="mt-[0.6em] font-mono text-[0.68rem] text-[var(--sand)]" aria-hidden="true">
                ✕
              </span>
              <span>{t(rule, lang)}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Comparison framework */}
      <Section
        kicker={{ en: "International comparison", zh: "國際比較" }}
        title={c.comparison.title}
      >
        <Prose>
          <p>{t(c.comparison.intro, lang)}</p>
          {c.comparison.paragraphs.map((p, i) => (
            <p key={i}>{t(p, lang)}</p>
          ))}
        </Prose>
        {c.comparison.requirements.length > 0 ? (
          <div className="mt-8 rounded-lg border border-border bg-[var(--surface)] p-5 md:p-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--dim-text)]">
              {lang === "zh" ? "每項跨國比較必須確認" : "Every cross-country comparison confirms"}
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {c.comparison.requirements.map((r, i) => (
                <li key={i} className="flex gap-2.5 text-[0.82rem] leading-relaxed text-[var(--body-text)]">
                  <span className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--bluegrey)]" aria-hidden="true" />
                  {t(r, lang)}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>

      {/* Source quality */}
      <Section
        variant="raised"
        kicker={{ en: "Source quality", zh: "來源品質" }}
        title={c.sourceQuality.title}
      >
        <Prose>
          <p>{t(c.sourceQuality.intro, lang)}</p>
        </Prose>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-[var(--surface)] p-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--dim-text)]">
              {lang === "zh" ? "台灣官方與學術來源" : "Taiwan official & academic sources"}
            </p>
            <ul className="mt-3 space-y-2">
              {c.sourceQuality.taiwanOrgs.map((o, i) => (
                <li key={i} className="text-[0.83rem] leading-relaxed text-[var(--body-text)]">
                  {t(o, lang)}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-border bg-[var(--surface)] p-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--dim-text)]">
              {lang === "zh" ? "國際來源" : "International sources"}
            </p>
            <ul className="mt-3 space-y-2">
              {c.sourceQuality.internationalOrgs.map((o, i) => (
                <li key={i} className="text-[0.83rem] leading-relaxed text-[var(--body-text)]">
                  {t(o, lang)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {c.sourceQuality.datasetFields.length > 0 ? (
          <div className="mt-6 rounded-lg border border-border bg-[var(--surface)] p-5 md:p-6">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--dim-text)]">
              {lang === "zh" ? "每個重要資料集都記錄" : "Each important dataset documents"}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {c.sourceQuality.datasetFields.map((f, i) => (
                <li
                  key={i}
                  className="rounded-full border border-border bg-[var(--surface-2)] px-3 py-1 text-[0.75rem] text-[var(--dim-text)]"
                >
                  {t(f, lang)}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </Section>

      {/* Data engineering */}
      <Section
        kicker={{ en: "Data engineering", zh: "資料工程" }}
        title={c.dataEngineering.title}
      >
        <Prose>
          {c.dataEngineering.paragraphs.map((p, i) => (
            <p key={i}>{t(p, lang)}</p>
          ))}
        </Prose>
      </Section>
    </div>
  );
}
