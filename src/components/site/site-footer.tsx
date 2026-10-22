"use client";

/**
 * Site footer — anchored to the bottom of the viewport on short pages and
 * pushed down naturally on long pages (handled by the app shell flex layout
 * with mt-auto). Contains the project disclaimer in the active language,
 * navigation, research disclosures and acknowledgments.
 */

import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import type { ViewId } from "@/lib/router";
import { useRouter } from "@/lib/router-hooks";
import { ui } from "@/content/ui";

const footerNav: { view: ViewId; label: keyof typeof ui.nav }[] = [
  { view: "overview", label: "overview" },
  { view: "chapter-01", label: "chapter01" },
  { view: "methodology", label: "methodology" },
  { view: "sources", label: "sources" },
  { view: "status", label: "status" },
  { view: "action", label: "action" },
  { view: "about", label: "about" },
];

export function SiteFooter() {
  const { lang, tr } = useLang();
  const { navigate } = useRouter();

  const disclaimer =
    lang === "zh"
      ? "台灣向前是一個獨立、非商業、以證據為基礎的教育性計畫，與本網站所引用之任何政黨、政府機關、倡議團體或其他組織，均無從屬、贊助或背書關係。本計畫旨在透過透明的研究、國際比較與建設性的反思，檢視台灣的社會狀況。研究結論受既有證據之可得性、品質與限制所影響。引用外部組織不代表為其背書；所有第三方內容與數據，仍受其各自之署名與授權條件規範。"
      : "Taiwan Forward is an independent, non-commercial, evidence-based educational project. It is not affiliated with, sponsored by, or endorsed by any political party, government agency, advocacy group, or other organization referenced on this website. The project aims to examine Taiwan's societal conditions through transparent research, international comparison, and constructive reflection. Research findings are subject to the availability, quality, and limitations of the underlying evidence. References to external organizations do not imply endorsement. All third-party content and data remain subject to their respective attribution and licensing requirements.";

  const colResearch =
    lang === "zh" ? "研究" : "Research";
  const colProject =
    lang === "zh" ? "計畫資訊" : "Project";
  const colReferences =
    lang === "zh" ? "延伸參考" : "Related projects";

  return (
    <footer className="mt-auto border-t border-border bg-[var(--surface)]">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="tf-kicker">Taiwan Forward · 台灣向前</p>
            <p className="mt-3 text-sm font-medium text-[var(--heading)]">
              {tr(ui.tagline)}
            </p>
            <p className="mt-4 max-w-sm text-[0.8rem] leading-relaxed text-[var(--dim-text)]">
              {disclaimer}
            </p>
          </div>

          <nav aria-label={colResearch}>
            <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[var(--heading)]">
              {colResearch}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerNav.slice(0, 5).map((item) => (
                <li key={item.view}>
                  <button
                    onClick={() => navigate(item.view)}
                    className="tf-focus rounded text-[0.82rem] text-[var(--dim-text)] transition-colors hover:text-[var(--teal)]"
                  >
                    {t(ui.nav[item.label], lang)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={colProject}>
            <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[var(--heading)]">
              {colProject}
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <button
                  onClick={() => navigate("about")}
                  className="tf-focus rounded text-[0.82rem] text-[var(--dim-text)] transition-colors hover:text-[var(--teal)]"
                >
                  {t(ui.nav.about, lang)}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("action")}
                  className="tf-focus rounded text-[0.82rem] text-[var(--dim-text)] transition-colors hover:text-[var(--teal)]"
                >
                  {t(ui.nav.action, lang)}
                </button>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="text-[0.78rem] font-semibold uppercase tracking-[0.14em] text-[var(--heading)]">
              {colReferences}
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href="https://global-food-crisis.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tf-focus rounded text-[0.82rem] text-[var(--dim-text)] underline decoration-[rgba(111,163,168,0.4)] underline-offset-4 transition-colors hover:text-[var(--teal)]"
                >
                  Global Food Crisis
                </a>
              </li>
              <li>
                <a
                  href="https://remember-to-prevent.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tf-focus rounded text-[0.82rem] text-[var(--dim-text)] underline decoration-[rgba(111,163,168,0.4)] underline-offset-4 transition-colors hover:text-[var(--teal)]"
                >
                  Remember to Prevent
                </a>
              </li>
            </ul>
            <p className="mt-6 text-[0.72rem] leading-relaxed text-[var(--dim-text)]">
              {tr(ui.common.lastUpdated)}：2026-10-22
            </p>
          </div>
        </div>

        <div className="tf-hairline mt-10" aria-hidden="true" />
        <p className="mt-6 text-[0.72rem] leading-relaxed text-[var(--dim-text)]">
          {lang === "zh"
            ? "本站內容採用 CC BY 4.0 授權（另行標註者除外）。引用之官方統計與第三方資料，請遵循其原始授權與引用規範。"
            : "Site content is licensed CC BY 4.0 unless otherwise noted. Official statistics and third-party materials cited here remain under their original attribution and licensing terms."}
        </p>
      </div>
    </footer>
  );
}
