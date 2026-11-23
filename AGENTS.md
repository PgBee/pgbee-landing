<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# PgBee Landing — Public Marketing Site

## Architecture

- **Framework:** Next.js 15.0.3 (Pages Router — legacy `src/index.js` + `src/App.js` entry)
- **Package manager:** pnpm
- **Styling:** Tailwind CSS 4.1.14 (configured via `tailwind.config.ts` + `postcss.config.mjs`) + MUI 5.14 + styled-components 6.1 + framer-motion 10.16 + lenis 1.3 (smooth scroll)
- **State management:** Local component state only (single-page layout)
- **Analytics:** Vercel Web Vitals (`src/vitals.js`, `src/reportWebVitals.js`)
- **Testing:** Playwright 1.57 (E2E), React Testing Library (`src/App.test.js`)

## Commands

```bash
pnpm dev        # Start dev server
pnpm build      # Production build
pnpm start      # Start production server
pnpm lint       # ESLint
```

## Key Files

| File                  | Purpose                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| `src/index.js`        | Entry point: renders `<App />` into `#root`                                                     |
| `src/App.js`          | Root component: composes all sections (Navbar, Home, About, Work, Contacts, Footer, BeeSupport) |
| `src/Components/*.js` | Section components (Home, About, Work, Contacts, Footer, Navbar, BeeSupport, HamburgerIcon)     |
| `src/App.css`         | Global styles                                                                                   |
| `tailwind.config.ts`  | Tailwind config (colors, animations, keyframes, screens)                                        |
| `next.config.ts`      | Next.js config (minimal, reactStrictMode)                                                       |
| `src/vitals.js`       | Vercel Analytics web vitals reporting                                                           |

## Route Structure

```
/                          # Single-page landing site (all sections in App.js)
```

- No routing — all sections rendered in `App.js` as vertical sections
- Smooth scroll via `lenis` + anchor links in Navbar

## Page Sections (in `src/App.js` order)

1. **Navbar** — Fixed top nav, hamburger menu on mobile, smooth-scroll anchors
2. **Home** — Hero banner, CTA, illustration
3. **About** — Company info, values, stats
4. **Work** — How it works / features
5. **Contacts** — Contact form, info
6. **Footer** — Links, social, copyright
7. **BeeSupport** — Floating support widget (bottom-right)

## Color Tokens (PgBee Brand)

```css
/* In tailwind.config.ts */
primary: '#ffe536',      /* PgBee yellow */
secondary: '#6a6a6a',    /* Dark gray */
```

**Tailwind Animations:** `fade-up`, `fade-down`, `fade-right`, `appear`, `float`, `pulse-ring` (defined in `tailwind.config.ts` keyframes)

## Code Conventions

### File Naming

- **Components:** PascalCase (`Home.js`, `Navbar.js`)
- **Entry:** `index.js`, `App.js`
- **Styles:** `App.css` (global), component-scoped via styled-components/MUI

### React Patterns

- **Class/Function Components:** Mix of both (legacy codebase)
- **No App Router:** Uses Pages Router entry (`src/index.js` → `src/App.js`)
- **Styled Components** for component-scoped styles (`styled.div` etc.)
- **MUI** for complex UI (Buttons, Icons, Layout)
- **Framer Motion** for animations
- **Lenis** for smooth scroll (initialized in `Home.js` or `App.js`)

### Styling

- **Tailwind CSS 4** (via `@tailwindcss/postcss` + `tailwind.config.ts`)
- **Custom animations/keyframes** in `tailwind.config.ts`
- **styled-components** for dynamic styles
- **MUI theme** via `@emotion/react` + `@emotion/styled`

### State & Data

- **No global state** — purely presentational
- **Static content** in components (copy, images from `src/Assets/`)
- **Contact form** — client-side only (no backend integration visible)

## Common Gotchas

| Issue                    | Cause                       | Fix                                                          |
| ------------------------ | --------------------------- | ------------------------------------------------------------ |
| Tailwind not working     | v4 PostCSS plugin           | Ensure `@tailwindcss/postcss` in `postcss.config.mjs`        |
| Animations not playing   | Keyframes not in config     | Add to `tailwind.config.ts` `theme.extend.keyframes`         |
| Lenis scroll broken      | Not initialized / conflicts | Call `lenis.init()` once, avoid multiple instances           |
| MUI styles missing       | Emotion cache               | Wrap in `CacheProvider` if using SSR                         |
| Build fails on images    | `next/image` not used       | Use `<Image />` from `next/image` or `unoptimized` prop      |
| Vercel Analytics missing | `vitals.js` not reporting   | Check `reportWebVitals(sendToVercelAnalytics)` in `index.js` |

## Deployment

```bash
pnpm build      # next build + opennextjs-cloudflare → .open-next/
pnpm cf:build   # OpenNext build only
pnpm preview    # Build + local Workers preview
```

The deployable artifact is `.open-next/worker.js` plus `.open-next/assets` — not `.next`.

- **Cloudflare Workers:** branch `main`, build `pnpm build`, deploy `npx wrangler deploy`, `NODE_VERSION=24`.
- `wrangler.jsonc` (`pgbee-landing`) and `open-next.config.ts` are required and must stay committed.
- Use `npx wrangler deploy` — **not** `pnpm deploy`, which pnpm reserves (`ERR_PNPM_NOTHING_TO_DEPLOY`).
- Canonical host is `https://pgbee.co.in`; route it (and `www`) to the deployed Worker.

## Testing

```bash
# Playwright E2E
npx playwright test

# Unit (React Testing Library)
npm test -- --watchAll=false
```

- `src/App.test.js` — basic render test
- `src/setupTests.js` — test environment setup

## ⚠️ Ignore Stale Docs

- `README.md` — default create-next-app boilerplate (now updated)
- Any `.github/*.md` — may not reflect current stack
