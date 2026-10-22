"use client";

/**
 * Taiwan Forward 台灣向前 — application root.
 * Single-page application with in-page hash routing (see src/lib/router.tsx).
 * The active view renders below; language state is shared app-wide.
 */

import { AppShell } from "@/components/site/app-shell";
import { useRouter } from "@/lib/router-hooks";
import { useLang } from "@/lib/lang-context";
import { HomeView } from "@/views/home-view";
import { OverviewView } from "@/views/overview-view";
import { ChapterView } from "@/views/chapter-view";
import { MethodologyView } from "@/views/methodology-view";
import { SourcesView } from "@/views/sources-view";
import { StatusView } from "@/views/status-view";
import { ActionView } from "@/views/action-view";
import { AboutView } from "@/views/about-view";

function Views() {
  const { route } = useRouter();
  const { lang } = useLang();
  void lang; // language re-render trigger for view content

  switch (route.view) {
    case "overview":
      return <OverviewView />;
    case "chapter-01":
      return <ChapterView />;
    case "methodology":
      return <MethodologyView />;
    case "sources":
      return <SourcesView />;
    case "status":
      return <StatusView />;
    case "action":
      return <ActionView />;
    case "about":
      return <AboutView />;
    case "home":
    default:
      return <HomeView />;
  }
}

export default function Page() {
  return (
    <AppShell>
      <Views />
    </AppShell>
  );
}
