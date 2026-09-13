# arthurhenry.dev

Next.js portfolio deployed as a static export on Cloudflare Pages.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000 to preview the site.

## Validation

```sh
npm run lint
npm run typecheck
npm run build
```

## Deployment

Cloudflare Pages builds the site with `npm run build` and serves the `out` directory. The Next.js configuration uses `output: 'export'`.

In the Cloudflare dashboard, open this Pages project and go to **Settings → Build & deployments → Build configuration**. Set:

| Setting | Value |
| --- | --- |
| Framework preset | Next.js (Static HTML Export) |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | Repository root |

Save the settings and retry the failed deployment. These dashboard settings must be updated separately from this repository.

Do not use `npx @cloudflare/next-on-pages@1` for this static export. The failed September 10, 2026 deployment used that adapter and stopped during its installation with an `ERESOLVE` conflict between the `@cloudflare/workers-types` peer dependencies of `next-on-pages` and Wrangler, before building the site. Using the static export build command removes the unnecessary adapter installation; `--force` and `--legacy-peer-deps` are not needed.

See [Cloudflare's static Next.js deployment guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/).
