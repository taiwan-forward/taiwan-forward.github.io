"use client";

/**
 * Evidence block — a visually differentiated, explicitly labelled container
 * distinguishing observed facts, interpretation, international comparison,
 * evidence limitations and possible directions. Labels are textual (not
 * color-coded judgments), and accents use the muted, non-partisan palette.
 */

import type { ReactNode } from "react";
import { Eye, BookOpen, Globe2, HelpCircle, Compass } from "lucide-react";
import type { EvidenceVariant } from "@/data/types";
import { useLang } from "@/lib/lang-context";
import { ui } from "@/content/ui";

const STYLES: Record<
  EvidenceVariant,
  { border: string; iconBg: string; icon: ReactNode }
> = {
  observation: {
    border: "border-l-[#6FA3A8]",
    iconBg: "bg-[rgba(111,163,168,0.14)] text-[#6FA3A8]",
    icon: <Eye className="h-4 w-4" aria-hidden="true" />,
  },
  interpretation: {
    border: "border-l-[#C8B38E]",
    iconBg: "bg-[rgba(200,179,142,0.14)] text-[#C8B38E]",
    icon: <BookOpen className="h-4 w-4" aria-hidden="true" />,
  },
  comparison: {
    border: "border-l-[#7F93A6]",
    iconBg: "bg-[rgba(127,147,166,0.14)] text-[#7F93A6]",
    icon: <Globe2 className="h-4 w-4" aria-hidden="true" />,
  },
  uncertainty: {
    border: "border-l-[#A88FA8]",
    iconBg: "bg-[rgba(168,143,168,0.14)] text-[#A88FA8]",
    icon: <HelpCircle className="h-4 w-4" aria-hidden="true" />,
  },
  action: {
    border: "border-l-[#8FA58C]",
    iconBg: "bg-[rgba(143,165,140,0.14)] text-[#8FA58C]",
    icon: <Compass className="h-4 w-4" aria-hidden="true" />,
  },
};

export function EvidenceBlock({
  variant,
  title,
  children,
}: {
  variant: EvidenceVariant;
  title?: string;
  children: ReactNode;
}) {
  const { lang } = useLang();
  const style = STYLES[variant];
  const label = ui.evidence[variant] ? ui.evidence[variant][lang] : variant;

  return (
    <aside
      className={`my-8 rounded-r-lg border border-border border-l-[3px] ${style.border} bg-[var(--surface)] px-5 py-5 md:px-6`}
    >
      <p className="flex items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
        <span className={`inline-flex h-6 w-6 items-center justify-center rounded ${style.iconBg}`}>
          {style.icon}
        </span>
        <span className="text-[var(--dim-text)]">{label}</span>
      </p>
      {title ? (
        <h3 className="mt-3 text-[0.98rem] font-semibold leading-relaxed text-[var(--heading)]">
          {title}
        </h3>
      ) : null}
      <div className="tf-prose mt-2 text-[0.92rem]">{children}</div>
    </aside>
  );
}
