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
