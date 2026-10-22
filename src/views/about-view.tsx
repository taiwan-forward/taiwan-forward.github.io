"use client";

/**
 * About view — project identity, working principles, understanding of
 * neutrality, the medical-examination analogy, disclaimer, related
 * projects, corrections policy and licensing.
 */

import { ExternalLink } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { aboutContent } from "@/content/about";
import { Section, Prose } from "@/components/site/section";

export function AboutView() {
  const { lang } = useLang();
  const c = aboutContent;

  return (
    <div className="flex-1">
      <header className="border-b border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <p className="tf-kicker">Taiwan Forward · 台灣向前</p>
          <h1 className="mt-4 text-[1.6rem] font-semibold leading-tight tracking-tight text-[var(--heading)] md:text-[2.1rem]">
            {lang === "zh" ? "關於本計畫" : "About the Project"}
          </h1>
        </div>
      </header>

      <Section title={c.identity.title}>
        <Prose>
          {c.identity.paragraphs.map((p, i) => (
            <p key={i}>{t(p, lang)}</p>
          ))}
        </Prose>
      </Section>

      <Section variant="raised" title={c.principles.title}>
        <ul className="grid gap-2.5 sm:grid-cols-2">
          {c.principles.items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-lg border border-border bg-[var(--surface)] px-4 py-3 text-[0.88rem] leading-relaxed text-[var(--body-text)]"
            >
              <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--teal)]" aria-hidden="true" />
              {t(item, lang)}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={c.neutrality.title}>
        <Prose>
          {c.neutrality.paragraphs.map((p, i) => (
            <p key={i}>{t(p, lang)}</p>
          ))}
        </Prose>
      </Section>

      <Section variant="raised" title={c.medicalAnalogy.title}>
        <Prose>
          {c.medicalAnalogy.paragraphs.map((p, i) => (
            <p key={i}>{t(p, lang)}</p>
          ))}
        </Prose>
      </Section>

      <Section title={c.related.title}>
        <Prose>
          <p>{t(c.related.intro, lang)}</p>
        </Prose>
        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {c.related.projects.map((p) => (
            <li key={p.url}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tf-focus group block h-full rounded-lg border border-border bg-[var(--surface)] p-5 transition-colors hover:border-[var(--teal)]"
              >
                <p className="flex items-center justify-between gap-2 text-[0.95rem] font-semibold text-[var(--heading)] group-hover:text-[var(--teal)]">
                  {p.name}
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                </p>
                <p className="mt-2 text-[0.83rem] leading-relaxed text-[var(--dim-text)]">
                  {t(p.desc, lang)}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </Section>

      <Section variant="raised" title={c.corrections.title}>
        <Prose>
          {c.corrections.paragraphs.map((p, i) => (
            <p key={i}>{t(p, lang)}</p>
          ))}
        </Prose>
      </Section>

      <Section title={c.license.title}>
        <Prose>
          {c.license.paragraphs.map((p, i) => (
            <p key={i}>{t(p, lang)}</p>
          ))}
        </Prose>
      </Section>

      {/* Disclaimer */}
      <Section variant="raised" title={c.disclaimer.title}>
        <div className="rounded-lg border border-border bg-[var(--surface)] p-5 md:p-6">
          <p className="text-[0.85rem] leading-[1.85] text-[var(--body-text)]">
            {t(c.disclaimer.text, lang)}
          </p>
        </div>
      </Section>
    </div>
  );
}
