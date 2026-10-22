import type { NextConfig } from "next";

/**
 * Taiwan Forward — dual-mode Next.js configuration.
 *
 * Mode A (default, development preview): ordinary `next dev` with live
 * preview, hot reload, interactive charts and language switching.
 *
 * Mode B (production): `DEPLOY_TARGET=github-pages next build` performs a
 * static export to `out/` for GitHub Pages via GitHub Actions. No server
 * runtime is required — the site is a single-page app with hash routing.
 */

const isStaticExport = process.env.DEPLOY_TARGET === "github-pages";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        // Organization-level Pages repository → site served at the domain
        // root; no repository-name basePath.
        basePath: "",
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {
        output: "standalone" as const,
      }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
