"use client";

/**
 * Research status badge — distinguishes published verified research,
 * work in progress, planned topics and insufficient-evidence states.
 * Never a ranking or severity score.
 */

import type { ResearchStatus } from "@/lib/i18n";
import { useLang } from "@/lib/lang-context";
import { ui } from "@/content/ui";

const DOT: Record<ResearchStatus, string> = {
  published: "bg-[var(--teal)]",
  "in-progress": "bg-[var(--sand)]",
  planned: "bg-[var(--bluegrey)]",
  "insufficient-evidence": "bg-[var(--dim-text)]",
};

export function ResearchStatusBadge({
  status,
  withLabel = true,
}: {
  status: ResearchStatus;
  withLabel?: boolean;
}) {
  const { lang } = useLang();
  const label = ui.status[status][lang];

  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-[var(--surface)] px-3 py-1">
      <span className={`h-2 w-2 rounded-full ${DOT[status]}`} aria-hidden="true" />
      {withLabel ? (
        <span className="text-[0.72rem] font-medium tracking-wide text-[var(--dim-text)]">
          {label}
        </span>
      ) : null}
      <span className="sr-only">{label}</span>
    </span>
  );
}
