<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Verification commands

- Dev server: `npm run dev` (Next.js 16, Turbopack)
- Production build: `npm run build`
- Typecheck: `npx tsc --noEmit --incremental false`
- Lint: the `lint` script is obsolete — `next lint` was removed in Next.js 16. Do not rely on it.
