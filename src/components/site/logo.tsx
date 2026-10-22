"use client";

/**
 * Typography-first wordmark with a restrained, abstract, data-inspired mark:
 * three rounded bars of differing heights (a minimal bar-chart motif).
 * Deliberately avoids flags, seals, arrows, sun symbols and other imagery
 * associated with political campaigns or institutions.
 */

import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { ui } from "@/content/ui";

export function Logo({ compact = false }: { compact?: boolean }) {
  const { lang } = useLang();
  const name = t(ui.siteName, lang);
  return (
    <span className="inline-flex items-center gap-2.5" aria-label={name}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        className="shrink-0"
      >
        <rect x="3" y="12" width="5" height="11" rx="1.5" fill="#7F93A6" />
        <rect x="10.5" y="7" width="5" height="16" rx="1.5" fill="#C8B38E" />
        <rect x="18" y="3" width="5" height="20" rx="1.5" fill="#6FA3A8" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={`font-semibold tracking-[0.08em] text-[var(--heading)] ${
            compact ? "text-sm" : "text-[0.95rem]"
          }`}
        >
          TAIWAN FORWARD
        </span>
        <span className="mt-1 text-[0.66rem] tracking-[0.3em] text-[var(--dim-text)]">
          台灣向前
        </span>
      </span>
    </span>
  );
}
