"use client";

/**
 * Site header — sticky, subtle backdrop blur, desktop navigation plus a
 * mobile sheet menu. No menu item becomes inaccessible at narrow widths.
 */

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { useLang } from "@/lib/lang-context";
import { t } from "@/lib/i18n";
import type { ViewId } from "@/lib/router";
import { useRouter } from "@/lib/router-hooks";
import { ui } from "@/content/ui";
import type { LText } from "@/lib/i18n";

const navItems: { view: ViewId; label: LText }[] = [
  { view: "overview", label: ui.nav.overview },
  { view: "chapter-01", label: ui.nav.chapter01 },
  { view: "methodology", label: ui.nav.methodology },
  { view: "sources", label: ui.nav.sources },
  { view: "status", label: ui.nav.status },
  { view: "action", label: ui.nav.action },
  { view: "about", label: ui.nav.about },
];

export function SiteHeader() {
  const { lang, tr } = useLang();
  const { route, navigate } = useRouter();
  const [open, setOpen] = useState(false);

  const isActive = (view: ViewId) => route.view === view;

  const go = (view: ViewId) => {
    navigate(view);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-[#0f141af2] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <button
          onClick={() => go("home")}
          className="tf-focus rounded-md py-1 pr-2"
          aria-label={tr(ui.siteName)}
        >
          <Logo />
        </button>

        {/* Desktop navigation */}
        <nav aria-label={tr(ui.nav.home)} className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.view}>
                <button
                  onClick={() => go(item.view)}
                  aria-current={isActive(item.view) ? "page" : undefined}
                  className={`tf-focus rounded-md px-2.5 py-2 text-[0.82rem] font-medium transition-colors ${
                    isActive(item.view)
                      ? "text-[var(--teal)]"
                      : "text-[var(--dim-text)] hover:text-[var(--heading)]"
                  }`}
                >
                  {t(item.label, lang)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="tf-focus lg:hidden h-10 w-10 border-border bg-transparent text-[var(--dim-text)]"
                aria-label={tr(ui.nav.menu)}
              >
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              closeLabel={tr(ui.nav.close)}
              className="w-[85vw] max-w-xs border-border bg-[var(--surface)] p-0"
            >
              <SheetTitle className="sr-only">{tr(ui.nav.menu)}</SheetTitle>
              <div className="flex items-center justify-between border-b border-border px-4 py-4">
                <Logo compact />
              </div>
              <nav aria-label={tr(ui.nav.menu)} className="px-2 py-3">
                <ul className="flex flex-col">
                  <li>
                    <button
                      onClick={() => go("home")}
                      className={`tf-focus w-full rounded-md px-3 py-3 text-left text-[0.95rem] font-medium ${
                        isActive("home")
                          ? "bg-[var(--surface-2)] text-[var(--teal)]"
                          : "text-[var(--body-text)] hover:bg-[var(--surface-2)]"
                      }`}
                    >
                      {tr(ui.nav.home)}
                    </button>
                  </li>
                  {navItems.map((item) => (
                    <li key={item.view}>
                      <button
                        onClick={() => go(item.view)}
                        aria-current={isActive(item.view) ? "page" : undefined}
                        className={`tf-focus w-full rounded-md px-3 py-3 text-left text-[0.95rem] font-medium ${
                          isActive(item.view)
                            ? "bg-[var(--surface-2)] text-[var(--teal)]"
                            : "text-[var(--body-text)] hover:bg-[var(--surface-2)]"
                        }`}
                      >
                        {t(item.label, lang)}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
