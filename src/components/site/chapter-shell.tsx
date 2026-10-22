"use client";

/**
 * Chapter shell — long-form research chapter layout: chapter header with
 * status metadata, a sticky table of contents (desktop) with active-section
 * highlighting, anchored reading sections, and chapter navigation at the end.
 */

import { useEffect, useState, type ReactNode } from "react";
import type { Chapter } from "@/data/types";
import { useLang } from "@/lib/lang-context";
import { t, formatDate } from "@/lib/i18n";
import { useRouter } from "@/lib/router-hooks";
import { ui } from "@/content/ui";
import { ResearchStatusBadge } from "./research-status-badge";

export function ChapterShell({
  chapter,
  children,
  next,
}: {
  chapter: Chapter;
  children: ReactNode;
  next?: { view: "overview" | "action"; label: { en: string; zh: string } } | null;
}) {
  const { lang, tr } = useLang();
  const { navigate } = useRouter();
  const [active, setActive] = useState<string>(chapter.sections[0]?.id ?? "");

  useEffect(() => {
    const headings = chapter.sections
      .map((s) => document.getElementById(`sec-${s.id}`))
      .filter((el): el is HTMLElement => Boolean(el));
    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id.replace("sec-", ""));
        }
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 1] }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [chapter.sections]);

  return (
    <article className="flex-1">
      {/* Chapter header */}
      <header className="border-b border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <p className="tf-kicker">
            {lang === "zh"
              ? `台灣向前 — 第${chapter.no}章`
              : `Taiwan Forward — Chapter ${chapter.no}`}
          </p>
          <h1 className="mt-4 max-w-3xl text-[1.6rem] font-semibold leading-tight tracking-tight text-[var(--heading)] md:text-[2.1rem]">
            {t(chapter.title, lang)}
          </h1>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-[var(--dim-text)] md:text-[1rem]">
            {t(chapter.subtitle, lang)}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <ResearchStatusBadge status={chapter.status} />
            <span className="text-[0.75rem] text-[var(--dim-text)]">
              {tr(ui.common.lastUpdated)}：{formatDate(chapter.lastUpdate, lang)}
            </span>
            <span className="text-[0.75rem] text-[var(--dim-text)]">
              ≈ {chapter.readingMinutes} {tr(ui.common.readingTime)}
            </span>
          </div>
        </div>
      </header>

      {/* Body with sticky TOC */}
      <div className="mx-auto flex max-w-6xl gap-10 px-4 sm:px-6">
        <div className="min-w-0 flex-1 py-10 md:py-14">{children}</div>

        <aside className="sticky top-24 hidden h-fit w-56 shrink-0 py-14 xl:block">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--dim-text)]">
            {tr(ui.common.onThisPage)}
          </p>
          <nav aria-label={tr(ui.common.onThisPage)} className="mt-4">
            <ul className="space-y-1 border-l border-border">
              {chapter.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#sec-${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .getElementById(`sec-${s.id}`)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    aria-current={active === s.id ? "location" : undefined}
                    className={`tf-focus -ml-px block border-l-2 py-1.5 pl-4 text-[0.8rem] leading-snug transition-colors ${
                      active === s.id
                        ? "border-[var(--teal)] text-[var(--teal)]"
                        : "border-transparent text-[var(--dim-text)] hover:text-[var(--heading)]"
                    }`}
                  >
                    {t(s.title, lang)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>

      {/* End-of-chapter navigation */}
      {next ? (
        <div className="border-t border-border bg-[var(--surface)]">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <p className="tf-kicker">{tr(ui.common.nextUp)}</p>
            <button
              onClick={() => navigate(next.view)}
              className="tf-focus group mt-3 flex w-full items-center justify-between gap-4 rounded-lg border border-border bg-[var(--surface-2)] px-5 py-4 text-left transition-colors hover:border-[var(--teal)]"
            >
              <span>
                <span className="block text-[0.8rem] text-[var(--dim-text)]">
                  {next.view === "action" ? tr(ui.nav.action) : tr(ui.nav.overview)}
                </span>
                <span className="mt-1 block text-[0.95rem] font-medium text-[var(--heading)]">
                  {t(next.label, lang)}
                </span>
              </span>
              <span className="text-[var(--teal)] transition-transform group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </button>
          </div>
        </div>
      ) : null}
    </article>
  );
}
