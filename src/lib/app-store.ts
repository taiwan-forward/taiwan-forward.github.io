/**
 * Taiwan Forward — application store (language + hash route).
 *
 * Implemented as an external store consumed via useSyncExternalStore. This is
 * the React-recommended pattern for state that lives outside React (here: the
 * URL hash and localStorage) and hydrates correctly on the server snapshot
 * without mismatch errors or setState-in-effect cascades.
 *
 * Invariants:
 * - The hash is the source of truth for deep links: #/zh-TW/chapter-01
 * - The language also persists to localStorage for first-visit defaults.
 * - Language switching preserves the view; view switching preserves language.
 */

import { useSyncExternalStore } from "react";
import type { Lang } from "@/lib/i18n";
import { LANG_ATTR } from "@/lib/i18n";
import { parseHash, buildHash, type ViewId } from "@/lib/router";

export interface Route {
  lang: Lang;
  view: ViewId;
}

const SERVER_ROUTE: Route = { lang: "zh", view: "home" };
const STORAGE_KEY = "taiwan-forward-lang";

let currentRoute: Route = SERVER_ROUTE;
const listeners = new Set<() => void>();

function isBrowser(): boolean {
  return typeof window !== "undefined";
}

function detectLang(): Lang {
  if (!isBrowser()) return "zh";
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "zh") return stored;
  } catch {
    /* storage unavailable */
  }
  const nav = typeof navigator !== "undefined" ? navigator.language : "";
  return nav && nav.toLowerCase().startsWith("en") ? "en" : "zh";
}

function notify(): void {
  for (const listener of listeners) listener();
}

function applyRoute(next: Route, opts: { updateHash?: boolean; scroll?: boolean } = {}): void {
  const { updateHash = false, scroll = false } = opts;
  const changed =
    next.lang !== currentRoute.lang || next.view !== currentRoute.view;
  currentRoute = next;

  if (isBrowser()) {
    document.documentElement.lang = LANG_ATTR[next.lang];
    try {
      window.localStorage.setItem(STORAGE_KEY, next.lang);
    } catch {
      /* ignore */
    }
    if (updateHash) {
      const hash = buildHash(next.lang, next.view);
      if (window.location.hash !== hash) {
        // Setting the hash fires a hashchange event; the handler is idempotent.
        window.location.hash = hash;
      }
    }
    if (scroll) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }
  if (changed) notify();
}

function syncFromHash(): void {
  if (!isBrowser()) return;
  const parsed = parseHash(window.location.hash);
  if (parsed) {
    applyRoute(parsed);
  } else {
    // No usable hash — use the detected language and home view, and normalize
    // the address bar so links are shareable in both languages.
    applyRoute({ lang: detectLang(), view: "home" }, { updateHash: true });
  }
}

// Initialize once on the client at module load (before first snapshot read).
if (isBrowser()) {
  syncFromHash();
  window.addEventListener("hashchange", syncFromHash);
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getSnapshot(): Route {
  return currentRoute;
}

function getServerSnapshot(): Route {
  return SERVER_ROUTE;
}

/** React hook exposing the live route. */
export function useAppRoute(): Route {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

/** Navigate to a view in the current language. */
export function navigateTo(view: ViewId): void {
  applyRoute({ lang: currentRoute.lang, view }, { updateHash: true, scroll: true });
}

/** Switch language, preserving the current view. */
export function setLanguage(lang: Lang): void {
  applyRoute({ lang, view: currentRoute.view }, { updateHash: true });
}

/** True while the store still holds the server snapshot (first paint). */
export function isHydrating(): boolean {
  return !isBrowser();
}
