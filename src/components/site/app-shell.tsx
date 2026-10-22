"use client";

/**
 * App shell — sticky header, main content area (view switching) and a footer
 * anchored to the bottom of the viewport (flex column layout; the footer uses
 * mt-auto so short pages keep it at the bottom and long pages push it down
 * naturally). Language + routing state live in the shared app store
 * (src/lib/app-store.ts).
 */

import { useEffect, type ReactNode } from "react";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { FloatingTools } from "@/components/site/floating-tools";
import { useLang } from "@/lib/lang-context";
import { useRouter } from "@/lib/router-hooks";
import { t } from "@/lib/i18n";
import { ui } from "@/content/ui";

function DocumentTitle({ children }: { children: ReactNode }) {
  const { route } = useRouter();
  const { lang } = useLang();

  useEffect(() => {
    const viewTitle: Record<string, { en: string; zh: string }> = {
      home: { en: "Understand Today. Improve Tomorrow.", zh: "理解今天，改善明天。" },
      overview: ui.nav.overview,
      "chapter-01": ui.nav.chapter01,
      methodology: ui.nav.methodology,
      sources: ui.nav.sources,
      status: ui.nav.status,
      action: ui.nav.action,
      about: ui.nav.about,
    };
    const vt = viewTitle[route.view];
    document.title = vt
      ? `${t(vt, lang)} · Taiwan Forward 台灣向前`
      : "Taiwan Forward 台灣向前 — Understand Today. Improve Tomorrow.";
  }, [route.view, lang]);

  return <>{children}</>;
}

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <DocumentTitle>
      <div className="flex min-h-screen flex-col bg-background">
        <a
          href="#main-content"
          className="tf-focus sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--surface-2)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--heading)]"
        >
          {t(ui.common.skipToContent, "zh")}
        </a>
        <SiteHeader />
        <main id="main-content" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
        <FloatingTools />
      </div>
    </DocumentTitle>
  );
}
