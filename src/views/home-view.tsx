"use client";

/**
 * Home view — project identity, research approach, the 14 dimensions,
 * featured published research, and the transition from understanding to
 * action. Restrained, evidence-first hero (no dramatic statistics).
 */

import { ArrowRight, FileText, Globe2, Scale, SearchCheck } from "lucide-react";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import { useRouter } from "@/lib/router-hooks";
import { dimensions } from "@/data/dimensions";
import { chapter01 } from "@/content/chapter01";
import { ui } from "@/content/ui";
import { Section, Prose } from "@/components/site/section";
import { ResearchStatusBadge } from "@/components/site/research-status-badge";

export function HomeView() {
  const { lang, tr } = useLang();
  const { navigate } = useRouter();

  const heroLead =
    lang === "zh"
      ? "台灣向前是一個獨立、非黨派、非商業的研究計畫，以透明的證據、嚴謹的方法與國際比較，系統性檢視台灣社會的整體狀況——包括優勢、挑戰、結構條件與長期趨勢。"
      : "Taiwan Forward is an independent, nonpartisan, non-commercial research project examining Taiwan's overall societal conditions — strengths, challenges, structural conditions and long-term trends — through transparent evidence, rigorous method and international comparison.";

  const methodIntro =
    lang === "zh"
      ? "我們的方法如同一次完整的健康檢查：不預設診斷、不選邊站，而是先觀察證據、核驗來源、進行國際比較、檢視不同解釋、誠實面對不確定性，最後連結到可行的改善方向。理解先於評斷；證據先於結論；比較先於概括。"
      : "Our method works like a comprehensive medical examination: no predetermined diagnosis, no taking sides — observe the evidence first, verify sources, compare internationally, weigh alternative explanations, acknowledge uncertainty honestly, and only then connect understanding to realistic improvement. Understand before judging. Examine evidence before drawing conclusions. Compare before generalizing.";

  const steps =
    lang === "zh"
      ? [
          { t: "觀察", d: "發生了什麼？以明確定義的指標描述現象。" },
          { t: "核驗", d: "證據可靠嗎？確認來源、方法、期間與限制。" },
          { t: "比較", d: "與哪些社會相比？選擇合適的參照並解釋差異。" },
          { t: "探究", d: "哪些解釋有證據支持？區分相關、因果與假設。" },
          { t: "評估", d: "什麼做法曾被研究？討論成效、風險與適用性。" },
          { t: "行動", d: "個人與社區能做什麼？連結證據與務實的行動。" },
        ]
      : [
          { t: "Observe", d: "What is happening? Describe phenomena with well-defined indicators." },
          { t: "Verify", d: "Is the evidence reliable? Confirm sources, methods, periods and limitations." },
          { t: "Compare", d: "Compared with whom? Select appropriate comparators and explain differences." },
          { t: "Investigate", d: "Which explanations are supported? Distinguish correlation, causation and hypothesis." },
          { t: "Evaluate", d: "What has been studied? Discuss effectiveness, risks and applicability." },
          { t: "Act", d: "What can people do? Connect evidence to realistic action." },
        ];

  const dimensionsTitle =
    lang === "zh" ? "14 個研究層面" : "14 Research Dimensions";
  const dimensionsIntro =
    lang === "zh"
      ? "本計畫的架構涵蓋台灣社會的 14 個主要層面。每個層面獨立研究、個別核驗——已出版的內容與進行中、已規劃的主題清楚標示，絕不為了版面完整而發布未經核驗的內容。"
      : "The project architecture covers 14 major dimensions of Taiwan's society. Each is researched and verified independently — published work is clearly distinguished from work in progress and planned topics. We never publish unverified content just to look complete.";

  const featuredTitle =
    lang === "zh" ? "精選已出版研究" : "Featured Published Research";
  const actionTeaserTitle =
    lang === "zh" ? "從理解到行動" : "From Understanding to Action";
  const actionTeaser =
    lang === "zh"
      ? "研究的最終目的不是評分或指責，而是讓理解連結到建設性的可能。每個已完成的研究章節，都會連結到個人、社區、專業與制度層次可以實際參與的方向——尊重每個人自行決定是否行動的自由。"
      : "Research is ultimately about connecting understanding to constructive possibilities, not scoring or blaming. Every completed chapter links to realistic forms of participation — individual, community, professional and institutional — while respecting every reader's freedom to choose whether to act.";

  const publishedCount = dimensions.filter((d) => d.status === "published").length;

  return (
    <div className="flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 70% 8%, rgba(111,163,168,0.10), transparent 70%), radial-gradient(ellipse 45% 40% at 12% 90%, rgba(200,179,142,0.06), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 md:pb-24 md:pt-24">
          <p className="tf-kicker">Taiwan Forward · 台灣向前</p>
          <h1 className="mt-5 max-w-3xl text-[2rem] font-semibold leading-[1.2] tracking-tight text-[var(--heading)] md:text-[2.9rem]">
            {tr(ui.tagline)}
          </h1>
          <p className="mt-5 max-w-2xl text-[1rem] leading-[1.85] text-[var(--body-text)] md:text-[1.08rem]">
            {heroLead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button
              onClick={() => navigate("chapter-01")}
              className="tf-focus group inline-flex min-h-[44px] items-center gap-2 rounded-md bg-[var(--teal)] px-5 py-2.5 text-[0.92rem] font-semibold text-[#0f141a] transition-opacity hover:opacity-90"
            >
              {lang === "zh" ? "閱讀第一章：人口課題" : "Read Chapter 01: Population"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </button>
            <button
              onClick={() => navigate("overview")}
              className="tf-focus inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border bg-[var(--surface-2)] px-5 py-2.5 text-[0.92rem] font-medium text-[var(--heading)] transition-colors hover:border-[var(--teal)]"
            >
              <SearchCheck className="h-4 w-4 text-[var(--teal)]" aria-hidden="true" />
              {tr(ui.nav.overview)}
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.78rem] text-[var(--dim-text)]">
            <span className="inline-flex items-center gap-1.5">
              <Scale className="h-3.5 w-3.5" aria-hidden="true" />
              {lang === "zh" ? "獨立 · 非黨派 · 非商業" : "Independent · Nonpartisan · Non-commercial"}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Globe2 className="h-3.5 w-3.5" aria-hidden="true" />
              {lang === "zh" ? "國際脈絡下的比較" : "Internationally contextualized"}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              {lang === "zh"
                ? `已出版 ${publishedCount} / 14 個層面（如實標示進度）`
                : `${publishedCount} / 14 dimensions published (status shown honestly)`}
            </span>
          </div>
        </div>
      </section>

      {/* Method */}
      <Section
        variant="raised"
        kicker={{ en: "How we work", zh: "我們的方法" }}
        title={{
          en: "A comprehensive examination of a society, based on evidence",
          zh: "以證據為基礎的社會整體檢視",
        }}
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-14">
          <Prose>
            <p>{methodIntro}</p>
            <p>
              {lang === "zh"
                ? "我們不把中立當作給予未經支持說法同等可信度的義務。證據品質、方法嚴謹度、不確定性與事實正確性，永遠優先。"
                : "We do not treat neutrality as an obligation to give unsupported claims equal credibility. Evidence quality, methodological rigor, uncertainty and factual accuracy take priority."}
            </p>
            <button
              onClick={() => navigate("methodology")}
              className="tf-focus mt-2 inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border px-4 py-2 text-[0.85rem] font-medium text-[var(--teal)] transition-colors hover:border-[var(--teal)]"
            >
              {lang === "zh" ? "閱讀完整研究方法" : "Read the full methodology"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </Prose>
          <ol className="grid gap-3 sm:grid-cols-2">
            {steps.map((s, i) => (
              <li
                key={s.t}
                className="rounded-lg border border-border bg-[var(--surface)] p-4"
              >
                <p className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[0.7rem] text-[var(--teal)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.92rem] font-semibold text-[var(--heading)]">
                    {s.t}
                  </span>
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-[var(--dim-text)]">
                  {s.d}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Dimensions */}
      <Section
        kicker={{ en: "Research architecture", zh: "研究架構" }}
        title={{ en: dimensionsTitle, zh: dimensionsTitle }}
      >
        <Prose>
          <p>{dimensionsIntro}</p>
        </Prose>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {dimensions.map((d) => (
            <li key={d.id}>
              <button
                onClick={() => navigate("overview")}
                className="tf-focus group h-full w-full rounded-lg border border-border bg-[var(--surface)] p-4 text-left transition-colors hover:border-[var(--teal)]"
              >
                <p className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[0.72rem] text-[var(--teal)]">
                    {d.no}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      d.status === "published"
                        ? "bg-[var(--teal)]"
                        : "bg-[var(--bluegrey)]"
                    }`}
                    aria-hidden="true"
                  />
                </p>
                <p className="mt-2 text-[0.92rem] font-semibold leading-snug text-[var(--heading)] group-hover:text-[var(--teal)]">
                  {t(d.title, lang)}
                </p>
                <p className="mt-1.5 line-clamp-2 text-[0.78rem] leading-relaxed text-[var(--dim-text)]">
                  {t(d.short, lang)}
                </p>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <button
            onClick={() => navigate("overview")}
            className="tf-focus inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border px-4 py-2 text-[0.85rem] font-medium text-[var(--teal)] transition-colors hover:border-[var(--teal)]"
          >
            {lang === "zh" ? "查看研究總覽與出版狀態" : "View the research overview & publication status"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </Section>

      {/* Featured chapter */}
      <Section
        variant="raised"
        kicker={{ en: "Now published", zh: "現已出版" }}
        title={{ en: featuredTitle, zh: featuredTitle }}
      >
        <button
          onClick={() => navigate("chapter-01")}
          className="tf-focus group block w-full rounded-lg border border-border bg-[var(--surface-2)] p-6 text-left transition-colors hover:border-[var(--teal)] md:p-8"
        >
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono text-[0.72rem] tracking-widest text-[var(--sand)]">
              {lang === "zh" ? `第 ${chapter01.no} 章` : `CHAPTER ${chapter01.no}`}
            </span>
            <ResearchStatusBadge status={chapter01.status} />
          </div>
          <h3 className="mt-3 text-[1.2rem] font-semibold leading-snug text-[var(--heading)] group-hover:text-[var(--teal)] md:text-[1.35rem]">
            {t(chapter01.title, lang)}
          </h3>
          <p className="mt-2 max-w-2xl text-[0.88rem] leading-relaxed text-[var(--dim-text)]">
            {t(chapter01.subtitle, lang)}
          </p>
          <p className="mt-4 max-w-2xl text-[0.85rem] leading-relaxed text-[var(--body-text)]">
            {t(chapter01.intro, lang)}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-[0.85rem] font-medium text-[var(--teal)]">
            {tr(ui.common.viewChapter)}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </span>
        </button>
      </Section>

      {/* Action teaser */}
      <Section
        kicker={{ en: "Evidence → Action", zh: "證據 → 行動" }}
        title={{ en: actionTeaserTitle, zh: actionTeaserTitle }}
      >
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          <Prose>
            <p>{actionTeaser}</p>
            <button
              onClick={() => navigate("action")}
              className="tf-focus mt-2 inline-flex min-h-[44px] items-center gap-2 rounded-md border border-border px-4 py-2 text-[0.85rem] font-medium text-[var(--teal)] transition-colors hover:border-[var(--teal)]"
            >
              {lang === "zh" ? "瀏覽行動方向" : "Explore ways to act"}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </Prose>
          <div className="rounded-lg border border-border bg-[var(--surface)] p-5">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[var(--dim-text)]">
              {lang === "zh" ? "行動的四個層次" : "Four levels of participation"}
            </p>
            <ul className="mt-3 space-y-2 text-[0.85rem] text-[var(--body-text)]">
              {(lang === "zh"
                ? ["個人", "社區", "專業", "制度參與"]
                : ["Individual", "Community", "Professional", "Institutional"]
              ).map((lv) => (
                <li key={lv} className="flex items-center gap-2.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--sand)]" aria-hidden="true" />
                  {lv}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
}
