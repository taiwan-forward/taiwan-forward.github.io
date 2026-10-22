"use client";

/**
 * Router hook — backed by the shared app store (useSyncExternalStore).
 * See app-store.ts for the synchronization strategy.
 */

import { useCallback, useMemo } from "react";
import { useAppRoute, navigateTo, setLanguage } from "@/lib/app-store";
import type { ViewId } from "@/lib/router";

export function useRouter(): {
  route: { lang: "en" | "zh"; view: ViewId };
  /** Navigate to a view in the current language. */
  navigate: (view: ViewId) => void;
  /** Switch language, preserving the current view. */
  switchLang: (lang: "en" | "zh") => void;
} {
  const route = useAppRoute();

  const navigate = useCallback((view: ViewId) => navigateTo(view), []);
  const switchLang = useCallback(
    (lang: "en" | "zh") => setLanguage(lang),
    []
  );

  return useMemo(
    () => ({ route, navigate, switchLang }),
    [route, navigate, switchLang]
  );
}
