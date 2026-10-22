"use client";

/**
 * Language switcher — clearly visible on desktop and mobile. Switching
 * preserves the current view; the choice is persisted and reflected in the
 * URL hash so both languages support direct links.
 */

import { Languages } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { t, LANG_LABEL, type Lang } from "@/lib/i18n";
import { useRouter } from "@/lib/router-hooks";
import { ui } from "@/content/ui";

export function LanguageSwitcher() {
  const { lang } = useLang();
  const { switchLang } = useRouter();

  const other: Lang = lang === "zh" ? "en" : "zh";

  return (
    <div
      role="group"
      aria-label={t(ui.langSwitch.label, lang)}
      className="tf-focus flex items-center overflow-hidden rounded-md border border-border"
    >
      <span className="hidden sr-only" aria-hidden="true">
        <Languages className="h-4 w-4" />
      </span>
      {(["zh", "en"] as Lang[]).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => switchLang(l)}
          aria-pressed={lang === l}
          className={`tf-focus min-h-[36px] min-w-[46px] px-2 text-[0.78rem] font-semibold transition-colors ${
            lang === l
              ? "bg-[var(--teal)] text-[#0f141a]"
              : "bg-transparent text-[var(--dim-text)] hover:text-[var(--heading)]"
          }`}
        >
          {LANG_LABEL[l]}
        </button>
      ))}
      <span className="sr-only">{t(ui.langSwitch.switchTo, lang)}</span>
    </div>
  );
}
