"use client";

/**
 * Floating utilities: back-to-top button (appears after scrolling) and a
 * copy-link button that copies the current URL including the language- and
 * view-specific hash, with toast feedback.
 */

import { useCallback, useEffect, useState } from "react";
import { ArrowUp, Link2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLang } from "@/lib/lang-context";
import { ui } from "@/content/ui";

export function FloatingTools() {
  const { lang, tr } = useLang();
  const { toast } = useToast();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast({ description: tr(ui.common.copied) });
    } catch {
      // Clipboard API unavailable — fall back to a temporary textarea.
      try {
        const el = document.createElement("textarea");
        el.value = window.location.href;
        el.setAttribute("readonly", "");
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        toast({ description: tr(ui.common.copied) });
      } catch {
        toast({ description: tr(ui.common.copyFailed) });
      }
    }
  }, [toast, tr]);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2">
      <button
        type="button"
        onClick={copyLink}
        aria-label={tr(ui.common.copyLink)}
        className="tf-focus flex h-11 w-11 items-center justify-center rounded-full border border-border bg-[var(--surface-2)] text-[var(--dim-text)] shadow-lg transition-colors hover:text-[var(--heading)]"
      >
        <Link2 className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
      </button>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={tr(ui.common.backToTop)}
        aria-hidden={!showTop}
        tabIndex={showTop ? 0 : -1}
        className={`tf-focus flex h-11 w-11 items-center justify-center rounded-full border border-border bg-[var(--surface-2)] text-[var(--dim-text)] shadow-lg transition-all hover:text-[var(--heading)] ${
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <ArrowUp className="h-[1.1rem] w-[1.1rem]" aria-hidden="true" />
      </button>
      <span className="sr-only">{tr(ui.common.copyLink)} ({lang})</span>
    </div>
  );
}
