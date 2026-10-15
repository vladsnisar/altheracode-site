# Rules for Claude working on the AltheraCode website

This repo is the AltheraCode marketing site. **There is no developer.** The marketing team asks Claude for changes in plain language. Claude writes the code, and marketing reviews a preview link before anything goes live. Every change has to be safe for someone who doesn't read code to review and merge.

## Stack
- Astro (static output) builds to `dist/` and is hosted on Cloudflare Pages.
- Plain CSS in `src/styles/global.css`. Brand colors and sizes are variables in `:root`. No Tailwind and no UI frameworks.
- Content is edited by marketing in Pages CMS (`.pages.yml`), which writes:
  - `src/content/site.json`: header, footer, contacts, SEO defaults, GTM ID. Used on every page.
  - `src/content/home.json`: homepage text.
  - `src/content/blog/*.md`: blog posts (frontmatter: title, description, date, cover, draft).
  - `public/media/`: uploaded images, served at `/media/...`.

## Where things live
| You want to… | Edit |
|---|---|
| Change the order of homepage sections, or add/remove one | `src/pages/index.astro` |
| Change how a section looks or is built | `src/sections/<Name>.astro` plus classes in `global.css` |
| Add a new page | `src/pages/<url>.astro` (or `src/pages/<folder>/<url>.astro`), wrapped in `<Base title description>` |
| Change header, footer or `<head>` | `src/sections/Header.astro`, `Footer.astro`, `src/layouts/Base.astro` |
| Colors, fonts, spacing | `:root` variables in `src/styles/global.css` |

## Rules
1. **Never push to `main` or `staging`.** Always work on a new branch (`claude/<short-topic>`) and open a pull request against `main`. In the PR description, say in plain words what changed and which pages to check on the preview link.
2. **Text marketing might edit goes in the content files, not the markup.** When you add a section with real copy, add its fields to the right JSON file (or a new `src/content/<page>.json`) **and** to `.pages.yml` with a clear Ukrainian label, following the existing style. Fixed UI words like "Learn more →" can stay in the markup.
3. **Responsive by default.** Write one set of HTML per section and adapt it with CSS media queries at the existing breakpoints: `max-width: 960px` (tablet) and `max-width: 680px` (phone). Don't duplicate markup per breakpoint unless the layout truly can't be done with CSS.
4. **Reuse what exists.** Use the existing classes before writing new ones: `.section`, `.container`, `.eyebrow`, `.section-title`, `.lead`, `.grid.cols-3`, `.card`, `.btn.btn-primary` / `.btn-ghost`, `.reveal`, `SectionHeading.astro`. New styles go in `global.css` or in a scoped `<style>` block inside the section.
5. **Keep existing URLs.** The site replaces altheracode.com on Webflow. If a page moves or is renamed, add a 301 redirect line to `public/_redirects` (format: `/old-path /new-path 301`).
6. **Every page gets a unique `title` and `description`** passed to `<Base>`.
7. **Images:** marketing uploads them to `public/media/`. Always set `alt` text. Use `loading="lazy"` for images below the fold.
8. **Interactivity:** put a `<script>` inside the section component (Astro bundles it). No external JS libraries unless they're clearly needed.
9. **Before opening the PR, run `npm run build` and fix all errors.** Check the changed pages at 1440px and 390px widths, for example by taking Playwright screenshots of `npm run preview`.
10. Don't change `.pages.yml` field names that already hold content. Renaming a field silently empties it in the CMS. If you have to rename one, move the data in the JSON file in the same PR.

## Commands
- `npm install` installs dependencies (Node 22+).
- `npm run dev` starts a local dev server at http://localhost:4321.
- `npm run build` does a production build into `dist/`.
- `npm run preview` serves the built `dist/`.
