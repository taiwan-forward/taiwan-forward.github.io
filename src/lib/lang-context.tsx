"use client";

/**
 * Language hook — backed by the shared app store (useSyncExternalStore).
 * See app-store.ts for the synchronization strategy.
 */

import { useCallback, useMemo, useSyncExternalStore } from "react";
import type { LText, Lang } from "@/lib/i18n";
import { useAppRoute, setLanguage } from "@/lib/app-store";

export function useLang(): {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Translate an LText in the current language. */
  tr: (text: LText | undefined) => string;
} {
  const route = useAppRoute();

  const setLang = useCallback((next: Lang) => setLanguage(next), []);

  const tr = useCallback(
    (text: LText | undefined) => (text ? text[route.lang] || text.en : ""),
    [route.lang]
  );

  return useMemo(
    () => ({ lang: route.lang, setLang, tr }),
    [route.lang, setLang, tr]
  );
}
