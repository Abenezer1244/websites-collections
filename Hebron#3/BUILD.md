# Production CSS build (Tailwind)

The site currently uses Tailwind via CDN for development. For **production**, use the built CSS to avoid the console warning and reduce payload.

## One-time setup

```bash
npm install
```

## Build CSS

```bash
npm run build:css
```

This generates `css/tailwind.css` (minified) from all classes used in `*.html`.

## Use built CSS in production

1. Run `npm run build:css` before deploying.
2. In each HTML file, **replace** the Tailwind script line:
   - Remove: `<script src="https://cdn.tailwindcss.com"></script>`
   - Add: `<link href="css/tailwind.css" rel="stylesheet">`
3. Keep the existing `<style>` blocks in each page (custom keyframes, :root, etc.); they are not part of the Tailwind build.

The inline styles in each page remain; only Tailwind utility classes are moved to the built file.
