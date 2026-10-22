"use client";

/**
 * Action view — From Evidence to Action: four levels of realistic,
 * nonpartisan participation, each action with what/why/evidence/who and
 * honest limitations. Readers remain free to choose whether to act.
 */

import { Compass, GraduationCap, HeartHandshake, Landmark, User } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { actionContent } from "@/content/action";
import { Section, Prose } from "@/components/site/section";

const LEVEL_ICONS = {
  individual: User,
  community: HeartHandshake,
  professional: GraduationCap,
  institutional: Landmark,
} as const;

export function ActionView() {
  const { lang } = useLang();
  const c = actionContent;

  return (
    <div className="flex-1">
      <header className="border-b border-border bg-[var(--surface)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <p className="tf-kicker">
            <Compass className="mr-1 inline h-3.5 w-3.5" aria-hidden="true" />
            Taiwan Forward · 台灣向前
          </p>
          <h1 className="mt-4 text-[1.6rem] font-semibold leading-tight tracking-tight text-[var(--heading)] md:text-[2.1rem]">
            {lang === "zh" ? "從證據到行動" : "From Evidence to Action"}
          </h1>
          <div className="mt-4 max-w-3xl">
            <Prose>
              <p>{t(c.intro, lang)}</p>
            </Prose>
          </div>
        </div>
      </header>

      {c.levels.map((level, idx) => {
        const Icon = LEVEL_ICONS[level.id];
        return (
          <Section
            key={level.id}
            variant={idx % 2 === 1 ? "raised" : "base"}
            kicker={{
              en: `Level ${idx + 1} of 4`,
              zh: `四個層次 · 之${idx + 1}`,
            }}
            title={level.title}
          >
            <Prose>
              <p>{t(level.desc, lang)}</p>
            </Prose>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {level.actions.map((action) => (
                <li
                  key={action.title.en}
                  className="rounded-lg border border-border bg-[var(--surface)] p-5 md:p-6"
                >
                  <p className="flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--surface-2)]">
                      <Icon className="h-4 w-4 text-[var(--teal)]" aria-hidden="true" />
                    </span>
                    <span className="text-[0.95rem] font-semibold leading-snug text-[var(--heading)]">
                      {t(action.title, lang)}
                    </span>
                  </p>
                  <dl className="mt-4 space-y-3">
                    {(
                      [
                        { k: lang === "zh" ? "可以做什麼" : "What it involves", v: action.what },
                        { k: lang === "zh" ? "為什麼可能有幫助" : "Why it may help", v: action.why },
                        { k: lang === "zh" ? "證據基礎" : "Evidence", v: action.evidence },
                        { k: lang === "zh" ? "適合誰" : "Who it suits", v: action.who },
                        { k: lang === "zh" ? "誠實的限制" : "Honest limitations", v: action.limitations },
                      ] as { k: string; v: { en: string; zh: string } }[]
                    ).map((f) => (
                      <div key={f.k} className="grid grid-cols-[auto_1fr] gap-x-3">
                        <dt className="w-24 shrink-0 pt-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.08em] text-[var(--dim-text)]">
                          {f.k}
                        </dt>
                        <dd className="text-[0.82rem] leading-relaxed text-[var(--body-text)]">
                          {t(f.v, lang)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </li>
              ))}
            </ul>
          </Section>
        );
      })}

      <Section variant="raised">
        <Prose>
          <p className="text-[0.98rem] md:text-[1.02rem]">{t(c.closing, lang)}</p>
        </Prose>
      </Section>
    </div>
  );
}
