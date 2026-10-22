"use client";

/**
 * Chapter view — renders a published research chapter (currently Chapter 01)
 * through the ChapterShell long-form layout: reading sections with anchored
 * ids, prose, evidence blocks, interactive charts, lists and source blocks.
 */

import { getDataset } from "@/data/charts/population";
import { getSource } from "@/data/sources";
import type { ChapterBlock } from "@/data/types";
import { chapter01 } from "@/content/chapter01";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { useRouter } from "@/lib/router-hooks";
import { ui } from "@/content/ui";
import { ChapterShell } from "@/components/site/chapter-shell";
import { Section, Prose } from "@/components/site/section";
import { EvidenceBlock } from "@/components/site/evidence-block";
import { SourceReference } from "@/components/site/source-reference";
import { InteractiveChart } from "@/components/charts/interactive-chart";

function Block({ block }: { block: ChapterBlock }) {
  const { lang, tr } = useLang();

  switch (block.kind) {
    case "prose": {
      const paragraphs = t(block.text, lang).split(/\n\n+/);
      return (
        <Prose>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Prose>
      );
    }
    case "heading":
      return (
        <h3 className="mt-10 mb-3 text-[1.08rem] font-semibold leading-snug text-[var(--heading)] md:text-[1.18rem]">
          {t(block.text, lang)}
        </h3>
      );
    case "evidence":
      return (
        <EvidenceBlock variant={block.variant} title={t(block.title, lang)}>
          {t(block.text, lang)
            .split(/\n\n+/)
            .map((p, i) => (
              <p key={i}>{p}</p>
            ))}
        </EvidenceBlock>
      );
    case "chart": {
      const dataset = getDataset(block.datasetId);
      if (!dataset) return null;
      return (
        <figure className="my-10">
          <InteractiveChart dataset={dataset} />
          {block.caption ? (
            <figcaption className="mt-3 text-[0.8rem] leading-relaxed text-[var(--dim-text)]">
              {t(block.caption, lang)}
            </figcaption>
          ) : null}
        </figure>
      );
    }
    case "list":
      return (
        <ul className="my-6 max-w-[44rem] space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-[0.95rem] leading-[1.8] text-[var(--body-text)]">
              <span className="mt-[0.72em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--teal)]" aria-hidden="true" />
              <span>{t(item, lang)}</span>
            </li>
          ))}
        </ul>
      );
    case "sources":
      return (
        <div className="my-8 rounded-lg border border-border bg-[var(--surface)] px-5 py-4">
          <SourceReference sourceIds={block.sourceIds} />
          {block.note ? (
            <p className="mt-2 text-[0.78rem] leading-relaxed text-[var(--dim-text)]">
              {t(block.note, lang)}
            </p>
          ) : null}
        </div>
      );
    default:
      return null;
  }
}

export function ChapterView() {
  const { lang, tr } = useLang();
  const { navigate } = useRouter();
  void tr;

  return (
    <ChapterShell
      chapter={chapter01}
      next={{
        view: "action",
        label: {
          en: "From Evidence to Action — realistic ways to participate",
          zh: "從證據到行動——務實的參與方式",
        },
      }}
    >
      {/* Chapter lead */}
      <div className="mb-10">
        <Prose>
          <p className="text-[1.02rem] leading-[1.9] text-[var(--body-text)] md:text-[1.06rem]">
            {t(chapter01.intro, lang)}
          </p>
        </Prose>
      </div>

      {chapter01.sections.map((section) => (
        <Section key={section.id} id={`sec-${section.id}`} title={section.title}>
          <div className="space-y-1">
            {section.blocks.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>
        </Section>
      ))}

      {/* Chapter end: quick sources recap + next pointer (visual) */}
      <div className="mt-4 rounded-lg border border-border bg-[var(--surface)] px-5 py-4">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--dim-text)]">
          {tr(ui.common.sources)}
        </p>
        <div className="mt-2">
          <SourceReference
            sourceIds={chapter01.sections
              .flatMap((s) => s.blocks)
              .flatMap((b) => (b.kind === "sources" ? b.sourceIds : b.kind === "chart" ? getDataset(b.datasetId)?.sourceIds ?? [] : []))
              .filter((id, idx, arr) => arr.indexOf(id) === idx)}
          />
        </div>
      </div>
      <p className="mt-6 text-center text-[0.8rem] text-[var(--dim-text)]">
        {getSource("moi-ris-population")
          ? lang === "zh"
            ? "台灣向前 · 研究系列持續進行中"
            : "Taiwan Forward · the research series continues"
          : ""}
        {" — "}
        <button
          onClick={() => navigate("overview")}
          className="tf-focus rounded text-[var(--teal)] underline decoration-[rgba(111,163,168,0.4)] underline-offset-4"
        >
          {tr(ui.nav.overview)}
        </button>
      </p>
    </ChapterShell>
  );
}
