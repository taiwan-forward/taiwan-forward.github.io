# Taiwan Forward 台灣向前

**Understand Today. Improve Tomorrow. · 理解今天，改善明天。**

An independent, nonpartisan, non-commercial, evidence-based educational
website examining Taiwan's overall societal conditions — like a comprehensive
medical examination of a society: observe, verify, compare, investigate,
evaluate, and connect understanding to realistic action.

- **Languages:** English and Traditional Chinese (繁體中文，台灣用語)
- **Framework:** Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · shadcn/ui · ECharts
- **Architecture:** single-page application with in-page hash routing
  (`#/zh-TW/…`, `#/en/…`) — fully static-host compatible
- **Production target:** GitHub Pages (organization repository, domain root)

---

## Repository layout

```
src/
  app/                 App Router entry (single `/` route) + static API route
  components/
    site/              App shell, header/footer, language switcher, reading
                       sections, evidence blocks, chapter shell, sources UI
    charts/            Interactive chart system (ECharts wrapper, data table,
                       chart/table toggle, CSV export, expand dialog)
  content/             Bilingual research content (chapters, methodology,
                       action, about, status, UI strings)
  data/
    types.ts           Shared data contracts (sources, dimensions, datasets,
                       chapters)
    sources.ts         Source registry with full provenance metadata
    dimensions.ts      The 14 research dimensions and publication status
    charts/population.ts  Verified Chapter 01 datasets (MOI vital statistics,
                       age structure, international comparisons)
  lib/                 i18n core, language + hash-router store (external store
                       via useSyncExternalStore), formatting helpers
  views/               View components for each section of the site
.github/workflows/     GitHub Actions deployment pipeline
public/                favicon, OG image, robots.txt, sitemap.xml
```

Research content, datasets and provenance metadata are intentionally
separated from presentation logic. Every published figure traces to a
registered source in `src/data/sources.ts`.

## Development

```bash
bun install
bun run dev        # development preview at http://localhost:3000
bun run lint       # ESLint
bun run typecheck  # TypeScript (src/ only; excludes examples/skills)
```

## Production build (GitHub Pages static export)

```bash
bun run build:static   # DEPLOY_TARGET=github-pages next build → out/
```

The `DEPLOY_TARGET=github-pages` environment variable switches
`next.config.ts` into static-export mode (`output: "export"`,
`images.unoptimized`, `trailingSlash`). Without it, the config keeps the
default development/server mode. The site is a hash-routed SPA, so the
exported `out/index.html` works at the domain root without any server.

## Deploying to GitHub Pages

The repository includes `.github/workflows/deploy.yml`, which:

1. Triggers on pushes to `main` (and manual dispatch),
2. Installs dependencies with Bun (`--frozen-lockfile`),
3. Runs type checking and linting,
4. Builds the static export and verifies `out/` exists,
5. Uploads the artifact and deploys via the official GitHub Pages actions.

Required repository settings (one-time):

- **Settings → Pages → Source:** GitHub Actions
- **Settings → Actions → General → Workflow permissions:** "Read and write
  permissions" (the workflow itself declares least-privilege `permissions`)

Expected site address: <https://taiwan-forward.github.io/>

> The custom domain `taiwan-forward.com` is **not** configured and must not
> be added until it is actually purchased and connected.

## Research integrity

- No fabricated statistics, citations, or research conclusions.
- Figures are verified against official sources and cross-checked; the
  verification method for every source is documented in the source registry
  and shown on the Data & Sources page.
- Projections are never presented as observed facts; pending-verification
  items (e.g., NDC 2022 population projections) are described qualitatively
  or omitted.
- Published research is clearly distinguished from planned topics. A
  truthful, partially populated research website is preferred to a visually
  complete website containing fabricated evidence.

## Licensing

Site content: CC BY 4.0 unless otherwise noted. Official statistics and
third-party materials remain under their original attribution and licensing
terms; one open-source license does not automatically grant redistribution
rights for third-party research materials.
