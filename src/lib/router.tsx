/**
 * Taiwan Forward — hash route primitives (pure functions, no React).
 *
 * The site uses in-page hash routing with the language embedded for direct
 * bilingual links, compatible with a static GitHub Pages export:
 *
 *   #/zh-TW/            → home (Traditional Chinese)
 *   #/en/overview       → research overview (English)
 *   #/zh-TW/chapter-01  → chapter 01
 *   #/en/methodology · /sources · /status · /action · /about
 *
 * State and hooks live in app-store.ts / lang-context.tsx.
 */

import type { Lang } from "@/lib/i18n";

export type ViewId =
  | "home"
  | "overview"
  | "chapter-01"
  | "methodology"
  | "sources"
  | "status"
  | "action"
  | "about";

export const VIEW_ORDER: ViewId[] = [
  "home",
  "overview",
  "chapter-01",
  "methodology",
  "sources",
  "status",
  "action",
  "about",
];

export interface Route {
  lang: Lang;
  view: ViewId;
}

const VALID_VIEWS = new Set<string>(VIEW_ORDER);

const LANG_IN_HASH: Record<string, Lang> = { en: "en", "zh-tw": "zh" };
const LANG_TO_HASH: Record<Lang, string> = { en: "en", zh: "zh-TW" };

/** Parse a location hash into a Route, or null if it carries no route. */
export function parseHash(rawHash: string): Route | null {
  if (!rawHash || rawHash === "#" || rawHash === "#/") return null;
  const m = rawHash.match(/^#\/(en|zh-TW)(?:\/([a-z0-9-]+))?\/?$/i);
  if (!m) return null;
  const lang = LANG_IN_HASH[m[1].toLowerCase()] ?? "zh";
  const viewSeg = (m[2] || "home").toLowerCase();
  const view = (VALID_VIEWS.has(viewSeg) ? viewSeg : "home") as ViewId;
  return { lang, view };
}

/** Build a location hash for a language + view. */
export function buildHash(lang: Lang, view: ViewId = "home"): string {
  const l = LANG_TO_HASH[lang];
  return view === "home" ? `#/${l}/` : `#/${l}/${view}`;
}

/** Shareable URL (including hash) for a route — used by CopyLink. */
export function routeUrl(lang: Lang, view: ViewId): string {
  const base =
    typeof window !== "undefined"
      ? `${window.location.origin}${window.location.pathname}`
      : "https://taiwan-forward.github.io/";
  return `${base}${buildHash(lang, view).slice(1)}`;
}
