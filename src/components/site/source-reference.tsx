"use client";

/**
 * Source reference — renders one or more registered sources as accessible
 * outbound links with the organization name. Links open safely in a new tab
 * and are keyboard focusable.
 */

import { ExternalLink } from "lucide-react";
import { getSource } from "@/data/sources";
import { useLang } from "@/lib/lang-context";
import { ui } from "@/content/ui";

export function SourceReference({
  sourceIds,
  compact = false,
}: {
  sourceIds: string[];
  compact?: boolean;
}) {
  const { lang, tr } = useLang();
  const refs = sourceIds
    .map((id) => getSource(id))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  if (refs.length === 0) return null;

  return (
    <div
      className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 ${compact ? "text-[0.72rem]" : "text-[0.78rem]"} text-[var(--dim-text)]`}
    >
      <span className="font-medium uppercase tracking-[0.12em]">
        {tr(refs.length > 1 ? ui.common.sources : ui.common.source)}：
      </span>
      {refs.map((s, i) => (
        <span key={s.id} className="inline-flex items-center gap-1">
          {i > 0 ? <span aria-hidden="true">·</span> : null}
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tf-focus inline-flex items-center gap-1 rounded underline decoration-[rgba(111,163,168,0.4)] underline-offset-4 transition-colors hover:text-[var(--teal)]"
          >
            {s.org[lang] || s.org.en}
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
            <span className="sr-only"> — {tr(ui.common.openInNewTab)}</span>
          </a>
        </span>
      ))}
    </div>
  );
}
