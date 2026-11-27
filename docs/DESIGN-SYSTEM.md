# Design System — Light Editorial Portfolio

Implementation reference for the current portfolio. The live code lives in `src/components/portfolio/`, `src/styles.css` and `src/data/portfolio.ts`.

## 1. Design direction

A recruiter-facing portfolio for a junior web developer and informatics graduate. The visual language is **light editorial by default**: a white/off-white canvas, a centered dark floating pill for navigation, bold sans-serif headlines with restrained Cormorant Garamond italic accents, hairline gray rules and generous whitespace. The profile card is a slightly tilted "polaroid" that uses the owner's photo, falling back to a monogram if the file is missing.

**Dark mode is a real second theme**, not an icon-only control. Every component reads semantic CSS variables, so adding `.dark` to `<html>` swaps the full palette (canvas, ink, hairlines, buttons and navbar pill). The first visit follows `prefers-color-scheme`; the choice is then persisted in `localStorage` and applied by a pre-paint script, then updated live by `src/hooks/use-theme.ts`.

Deliberately avoided: invented project thumbnails, fake metrics and decorative gradient washes.

## 2. Tokens

| Token         | Value                 | Use                              |
| ------------- | --------------------- | -------------------------------- |
| Canvas        | `#FFFFFF`             | Page background, cards           |
| Raised canvas | `#F7F8FA`             | Alternating sections, chip fills |
| Footer / card | `#F3F4F6`             | Quiet neutral surfaces           |
| Ink           | `#111111`             | Headlines, primary CTA, pill nav |
| Body          | `#6B7280`             | Body copy, secondary labels      |
| Faint         | `#9CA3AF`             | Micro-labels, placeholders       |
| Sub-body      | `#374151`             | Chip text, dialog lists          |
| Hairline      | `#E5E7EB`             | Dividers, card borders           |
| Strong line   | `#D1D5DB`             | Outline buttons, inputs          |
| Badge green   | `#EAF7EF` / `#2F6B4F` | Hero badge, project category     |

Dark theme overrides (via `.dark`): monochrome by request — canvas `#000000`, soft canvas `#0A0A0A`, surface `#141414`, ink `#FFFFFF`, body `#C8C8C8`, faint `#8A8A8A`, hairlines `rgba(255,255,255,0.14)`, button `#FFFFFF` with `#000000` text, pill `#121212` with a white line. Components never hardcode theme colors — they use `var(--canvas)`, `var(--ink)`, `var(--hairline)`, `var(--button-bg)`, `var(--pill-bg)` and friends.

Typography: **Inter** for display/headlines and body (weight 600–700, tight `-0.035em` tracking), **Cormorant Garamond** italic only for emphasis words, monograms and quiet pull-quotes.

Scale: hero `clamp(42px, 6.4vw, 76px)`, section headings `clamp(34px, 4.4vw, 52px)`, card titles `18–21px`, body `13–14.5px` with `1.75–1.95` line-height, labels `10.5–11px` uppercase with `0.14–0.2em` tracking.

## 3. Component hierarchy

```text
src/routes/__root.tsx                     HTML shell, global head, 404/error boundaries
└── LazyMotion features={domAnimation}   (in src/routes/index.tsx, strict mode)
    └── MotionConfig reducedMotion="user"
        └── Index
            ├── Navbar                    centered dark pill, primary links, CTA, theme toggle, mobile menu
            ├── main
            │   ├── HeroSection           badge, headline, CTAs, data-derived metrics, polaroid
            │   ├── AboutSection          summary, CV skill chips, portrait monogram
            │   ├── ServicesSection       6 CV-backed skill cards with lucide icons
            │   ├── ProjectsSection       CSS project plate + accessible details dialog
            │   ├── ExperienceSection     two-column vertical timeline + organization entry
            │   ├── EducationSection      single bordered education block
            │   ├── CertificationsSection BNSP feature + ruled course list
            │   └── ContactSection        ruled mailto form + contact details
            └── FooterSection             wordmark, links, back to top
src/components/portfolio/ui.tsx
├── Reveal                                opacity/8px scroll reveal, reduced-motion aware
├── SectionLabel                          uppercase sans label with a short ink rule
├── SectionHeading                        shared bold sans h2 scale
├── SerifEm                               Cormorant italic emphasis
├── PillButton                            ink / outline motion link or button
├── TextLink                              underline-on-hover link
├── Wordmark                              sans damar. wordmark with serif dot
└── ProfileImage                          real photo with monogram fallback on error
src/hooks/use-theme.ts                    light/dark state, localStorage, meta theme-color
src/data/portfolio.ts                     single source of truth for all copy
```

## 4. Section layout

- **Shared shell** — every section uses the same `mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10` container and `py-20 md:py-28` rhythm, with alternating `--canvas` / `--canvas-soft` backgrounds separated by `--hairline` borders. All section headings go through `SectionHeading`, so type scale and tracking never drift between hand-coded headings.
- **Navbar** — fixed, centered, dark pill (`--pill-bg`) laid out as `logo / links / actions`. Four primary links (`NAV_LINKS` entries flagged `primary`) sit in the middle column, followed by a `Let's Connect ↗` CTA, a working Sun/Moon theme toggle and a mobile menu containing every link plus the CV.
- **Hero** — centered, photo-free opening: soft-green badge from `PROFILE.role`, bold headline ("Hi, I'm Damar Galih. I build responsive websites and thoughtful interfaces.") with `SerifEm` accents on `responsive` / `interfaces.`, concise `HERO_SUMMARY`, `View CV` and `View projects` CTAs, then a three-column metric row. A `Find me online` label and one horizontal row of LinkedIn / Instagram / GitHub icon links close the section. The portrait itself lives in the About section, so the first screen stays typographic and the photo appears as the story continues.
- **About** — `7/5` grid. Left: label, headline with serif emphasis, two paragraphs and CV skill chips. Right: larger rounded monogram/photo card with a GPA badge.
- **Services** — heading with description on the right; `3 × 2` cards on `lg`, each with a circular gray icon well, category title and the category's CV skills.
- **Projects** — data-driven cards (currently one academic project): CSS chart thumbnail with a diagonal-arrow detail button, category badge, title, description, technology chips and `View case study`. A `View all work →` link in the header points to `/cv`, where the same project is documented; no second project is invented. No external image can break; the dialog uses `AnimatePresence`, `role="dialog"`, Escape/backdrop close and focus restoration.
- **Experience** — `CAREER PATH` timeline: company and period badge on the left third, role, responsibilities and CV-derived `stack` badges on the right. Organization experience repeats the pattern below the timeline.
- **Education / Certifications / Contact / Footer** — alternating canvas sections with hairline rules, shared heading scale and theme-aware borders; inputs are bottom rules only and the form composes a `mailto:` draft (no backend).

## 5. Tailwind styling recipes

```tsx
// Bordered card
"rounded-2xl border border-[var(--hairline)] bg-[var(--canvas)] p-7";

// Primary CTA (black in light mode, white in dark mode)
"inline-flex h-12 items-center gap-2 rounded-full bg-[var(--button-bg)] px-7 text-[13.5px] font-semibold text-[var(--on-ink)] transition-colors hover:bg-[var(--button-hover)]";

// Outline CTA
"inline-flex h-12 items-center rounded-full border border-[var(--line-strong)] px-7 text-[13.5px] font-medium text-[var(--ink)] hover:border-[var(--ink)]";

// Shared section shell
"scroll-mt-28 border-b border-[var(--hairline)] bg-[var(--canvas)] py-20 md:py-28";

// Shared container (every section, including footer)
"mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-10";

// Section heading
"font-display text-[clamp(34px,4.4vw,52px)] leading-[1.08] font-semibold tracking-[-0.04em] text-[var(--ink)]";

// Underline input
"mt-3 w-full border-b border-[var(--line-strong)] bg-transparent pb-2 text-[14px] text-[var(--ink)] outline-none focus:border-[var(--ink)]";
```

Shared rules: `scroll-behavior: smooth`, `scroll-padding-top: 112px`, `:focus-visible { outline: 2px solid var(--focus) }`, `prefers-reduced-motion` disables smooth scrolling.

## 6. Motion patterns (Framer Motion)

Components use the lightweight `m` component with a single `LazyMotion features={domAnimation} strict` provider at the page root, so the full `motion` bundle is never shipped.

```tsx
const ease = [0.22, 1, 0.36, 1] as const;
const reduce = useReducedMotion();

<m.div
  initial={reduce ? false : { opacity: 0, y: 8 }}
  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.15 }}
  transition={{ duration: 0.85, ease }}
/>;
```

- One orchestrated hero entrance (`staggerChildren: 0.1`), subtle opacity reveals elsewhere.
- No infinite ambient animation: motion answers user action (dialog, hover, scroll progress).
- Hover: `y: -2…-4`, small rotations or border/underline transitions, always gated by `useReducedMotion()`.
- Timeline: `useScroll({ target, offset: ["start end", "end start"] })` → `useTransform(progress, [0,1], ["0%","100%"])`.
- `MotionConfig reducedMotion="user"` is the global safety net.

## 7. Responsive & performance

- Mobile-first utilities; `sm` 640, `md` 768, `lg` 1024. All multi-column grids collapse to one below their breakpoint.
- Verify `document.documentElement.scrollWidth <= window.innerWidth` at 390px.
- The hero/about plates use `/images/profile.webp` through `ProfileImage`, which falls back to a CSS monogram if the file is missing; the project chart is CSS, not a fake screenshot.
- Framer Motion is the only animation dependency (pinned `14.14.0` in `package.json` and `bun.lock`).
- Fonts load from Google Fonts with `preconnect`; only Cormorant Garamond and Inter are requested.
- SEO: canonical, OG, Twitter, JSON-LD `Person`, `lang="en"`, semantic `h1 → h2 → h3`, descriptive link text.

## 8. Content guardrails

All copy comes from `src/data/portfolio.ts` and must match the CV. `PROFILE.avatar` points to the owner-supplied `/images/profile.webp`; `PROFILE.linkedin`, `PROFILE.instagram` and `PROFILE.github` hold the verified social URLs supplied by the owner and feed the hero rail, contact list, footer, CV header and JSON-LD `sameAs`. Hero metrics are counts derived from existing data — never marketing percentages. Never add invented experience, metrics, testimonials, repositories or demo links.
