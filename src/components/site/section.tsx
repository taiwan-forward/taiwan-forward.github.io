"use client";

/**
 * Reading section — the core unit of the long-form layout. Subtly
 * differentiated dark backgrounds, generous vertical spacing, restrained
 * rounded corners, and a comfortable reading measure. Content blocks are
 * visually separated instead of forming one continuous article wall.
 */

import type { ReactNode } from "react";
import type { LText } from "@/lib/i18n";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";

export function Section({
  id,
  kicker,
  title,
  children,
  variant = "base",
  className = "",
}: {
  id?: string;
  kicker?: LText;
  title?: LText;
  children: ReactNode;
  variant?: "base" | "raised" | "sunken";
  className?: string;
}) {
  const { lang } = useLang();
  const bg =
    variant === "raised"
      ? "bg-[var(--surface)]"
      : variant === "sunken"
        ? "bg-[#0d1117]"
        : "bg-transparent";

  return (
    <section
      id={id}
      className={`${bg} border-y ${variant === "base" ? "border-transparent" : "border-border"} py-14 md:py-20`}
    >
      <div className={`mx-auto max-w-6xl px-4 sm:px-6 ${className}`}>
        {kicker ? <p className="tf-kicker">{t(kicker, lang)}</p> : null}
        {title ? (
          <h2 className="mt-3 text-[1.45rem] font-semibold leading-snug tracking-tight text-[var(--heading)] md:text-[1.75rem]">
            {t(title, lang)}
          </h2>
        ) : null}
        {kicker || title ? <div className="tf-hairline mt-6 mb-8" aria-hidden="true" /> : null}
        {children}
      </div>
    </section>
  );
}

/** Prose column with a comfortable reading measure (bilingual). */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="tf-prose max-w-[44rem] text-[0.98rem] md:text-[1.02rem]">
      {children}
    </div>
  );
}
