This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment (Cloudflare Workers)

The production site is a Cloudflare Worker built with `opennextjs-cloudflare`.

```bash
pnpm build      # next build + opennextjs-cloudflare → .open-next/
pnpm cf:build   # OpenNext build only (expects .next to already exist)
pnpm preview    # Build + local Workers preview
```

The deployable artifact is `.open-next/worker.js` plus `.open-next/assets` — not `.next`.

| Setting           | Value                 |
| ----------------- | --------------------- |
| Production branch | `main`                |
| Build command     | `pnpm build`          |
| Deploy command    | `npx wrangler deploy` |
| `NODE_VERSION`    | `24`                  |

- `wrangler.jsonc` defines the worker (`pgbee-landing`), static assets and the self-reference binding.
- `open-next.config.ts` is required by the adapter and must stay committed.
- Use `npx wrangler deploy` (or `pnpm exec wrangler deploy`). **Do not** use `pnpm deploy`: pnpm reserves that command and fails with `ERR_PNPM_NOTHING_TO_DEPLOY`.
- The canonical host is `https://pgbee.co.in` — point that host (and `www`) at the deployed Worker so the canonical/sitemap/OG URLs resolve.
