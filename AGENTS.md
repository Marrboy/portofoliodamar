<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

# Agent notes

Bun-only TanStack Start / Nitro portfolio. `README.md` has the full env and deploy reference; these are the traps that are easy to miss.

## Commands

- `bun run check` is the gate: lint -> typecheck -> test -> build. CI (`.github/workflows/ci.yml`) runs those same four commands in the same order with `bun install --frozen-lockfile`.
- Unit tests are Bun tests colocated as `src/lib/*.test.ts`; focus one with `bun test src/lib/url.test.ts`.
- `bun` is not on PATH in this agent environment (only node/npm/npx), but `npx bun <command>` works and updates `bun.lock` correctly — use `npx bun add pkg@version` instead of npm install. `bunfig.toml` enforces a 24h package release-age guard; confirm with the user before adding entries to `minimumReleaseAgeExcludes`.
- If the browser shows the root error boundary with `Failed to fetch dynamically imported module .../src/routes/index.tsx?tsr-split=component`, the Vite dep cache is likely stale. Stop dev, delete `node_modules/.vite`, then restart with `npm run dev -- --host 0.0.0.0 --port 8081`; first start can take ~60s.

## Build wiring

- `vite.config.ts` uses `defineConfig` from `@lovable.dev/vite-tanstack-config`, which already registers TanStack devtools/Start, React, Tailwind, tsconfig paths, Nitro, `VITE_*` injection, the `@/` alias, dedupe, and sandbox host/port. Adding any of those plugins again breaks the app; pass extra options as `defineConfig({ vite: { ... } })`.
- `tanstackStart.server.entry` points at `src/server.ts`, a wrapper that converts h3's swallowed `{"unhandled":true,"message":"HTTPError"}` 500 into an HTML error page. Don't bypass it.
- `src/start.ts` re-adds CSRF middleware for server functions: creating that file opts out of Start's automatic CSRF setup. Keep both.
- Server-only modules use `*.server.ts` names or `@tanstack/react-start/server-only`; Next.js `import "server-only"` is an ESLint error. The contact server function was removed — the contact form now composes a `mailto:` draft client-side, with direct email, LinkedIn, Instagram and GitHub links as fallback.
- Routes are file-based under `src/routes/`; `__root.tsx` is the only layout and needs its `<Outlet />`. Dynamic segments use bare `$param.tsx`, literal dots use `[.]` (`sitemap[.]xml.ts`). `src/routeTree.gen.ts` is generated — never hand-edit. `robots.txt` is served by its route, not a static file.

## Content, env, deploy

- All visible copy and projects live in `src/data/portfolio.ts` — edit data, not components. Content must match the CV; do not add invented experience, projects, metrics, GitHub links or demo URLs. `PROFILE.avatar` is `/images/profile.webp` (copy the owner's photo there; `ProfileImage` falls back to a serif monogram when missing). `PROFILE.linkedin`, `PROFILE.instagram` and `PROFILE.github` hold the verified social URLs and feed the hero icon row, contact list, footer, CV header and JSON-LD `sameAs`. The recruiter-facing `/cv` resume (`src/routes/cv.tsx`) and homepage JSON-LD are generated from the same data; print/PDF styles are the `@media print` rules in `src/styles.css`.
- Visual system: dual theme, light by default. Components use semantic CSS variables from `src/styles.css` (`--canvas`, `--ink`, `--hairline`, `--button-bg`, `--pill-bg`, …) so `.dark` on `<html>` swaps the palette; the centered floating pill navbar has a real theme toggle backed by `src/hooks/use-theme.ts`. Inter bold headlines, Cormorant Garamond italic accents, restrained Framer Motion with `MotionConfig reducedMotion="user"` for card entrances and hover, plus Lenis (`ReactLenis root` in `src/routes/index.tsx`) for smooth scrolling; GSAP is intentionally not installed. `docs/DESIGN-SYSTEM.md` documents tokens, hierarchy, Tailwind recipes and motion patterns — keep it in sync when changing the UI.
- `VITE_*` variables are build-time client values. Only `VITE_SITE_URL` and `VITE_CLOUDFLARE_ANALYTICS_TOKEN` remain; there are no server variables or secrets. Use `.dev.vars` for local Wrangler variables if needed; never commit secrets.
- `bun run preview` is `nitro preview` (requires `npx wrangler`); `vite preview` is wrong because SSR output is `.output/`, not `dist/`. Deploy from the repo root with `bunx wrangler deploy`; `.wrangler/deploy/config.json` points to generated `.output/server/wrangler.json` — change Nitro/Vite config, not that generated file.
