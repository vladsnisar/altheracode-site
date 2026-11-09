# Rules for Claude working on the AltheraCode website

This repo is the AltheraCode marketing site. **There is no developer.** The marketing team asks Claude for changes in plain language. Claude writes the code, and marketing reviews a preview link before anything goes live. Every change has to be safe for someone who doesn't read code to review and merge.

## Stack
- Astro (static output) builds to `dist/` and is hosted on Cloudflare Pages.
- The design is a 1:1 copy of the former Webflow site. Its stylesheet is `src/styles/webflow.css` (exported from Webflow; brand colors are the `--base-color-*` variables in `:root`), plus `src/styles/site.css` (Webflow's site-wide custom CSS). Sections use the Webflow class names (`section`, `padding-global`, `container-large`, `heading-box`, `section-tag-box`, `button-main` …). No Tailwind and no UI frameworks.
- Layout classes that Webflow attached to single elements (`#w-node-…` ids) are classes named `wn-…` in `webflow.css`. Content files carry them in technical fields (`layout`, `tail_wrap`, `heading_class`, `title_class`); keep them as they are.
- Images from the old site live in `public/media/wf/`.
- Content is edited by marketing in Pages CMS (`.pages.yml`), which writes:
  - `src/content/site.json`: header, footer, contacts, SEO defaults, GTM ID. Used on every page.
  - `src/content/home.json`: homepage text.
  - `src/content/blog/*.md`: blog posts (frontmatter: title, description, date, category, cover, draft).
  - `src/content/portfolio/*.json`: one file per case study (drafts are not built). Rendered by `src/pages/portfolio/[slug].astro`; the list (15 shown, then "load more") is `src/pages/portfolio/index.astro`. Industry pill colours: `src/content/case-categories.json`.
  - `src/content/blog-categories.json`: blog categories, in the order of the tabs on `/blog`.
  - `src/content/legal/privacy-policy.md`: the privacy policy (rendered into the live page structure by `src/pages/privacy-policy.astro`).
  - `src/content/services/*.json`: one file per service page (`/services/<name>`): SEO title/description plus a list of `sections` (hero, intro, cards, slider, process, industries, testimonials, tech, cases, cta, faq, contact, spacer). Rendered by `src/pages/services/[slug].astro` through `src/sections/ServiceBlock.astro`. Many sections have small layout options (spacing, heading width, grid) that reproduce the live pages exactly. To add a new kind of section, add it to `ServiceBlock.astro` and to the `blocks:` list in `.pages.yml`.
  - `src/content/custom-pages/*.json`: standalone pages marketing creates in the CMS ("Нові сторінки (з секцій)"), published at `/<file-name>` (e.g. `about-us.json` → `/about-us`). Same fields and `sections` as service pages, plus `name` (the CMS list label; new files are named after it) and an optional social `image`. Rendered by `src/pages/[slug].astro` through `ServiceBlock.astro`. A file whose name matches an existing page (`contact`, `blog`, `portfolio`, `services`, `privacy-policy`, …) is skipped with a build warning. The section list in `.pages.yml` is shared with service pages through the YAML anchor `&page_sections`, so a new section type added there appears in both.
  - `src/content/pages.json`: headings and SEO text of `/portfolio`, `/blog` and `/contact`.
  - `src/content/tech.json`: technology names and logos, matched by name on case-study pages.
  - `public/media/`: uploaded images, served at `/media/...`.

## Design system (read before any visual change)
The site's look is documented in **`docs/design-system/`**. Before adding a page or section, or changing how anything looks, read `docs/design-system/README.md` (golden rules + checklist), then the file the task needs: `brand.md` (logo, colours, fonts, glyphs, tone), `tokens.md` (exact sizes, colours, spacing, breakpoints, motion), `components.md` (markup for headings, pills, buttons, cards, forms), `sections.md` (every existing section with screenshots in `screenshots/`, page recipes). The current site is the source of truth. The Brand Book v1.1 in `docs/design-system/source/` is a concept for a future redesign: apply its tone, logo and accessibility rules, but not its fonts or visual system unless the team asks for a redesign. If a change adds a new section type, component or rule, update the guide in the same PR.

## Where things live
| You want to… | Edit |
|---|---|
| Change the order of homepage sections, or add/remove one | `src/pages/index.astro` |
| Change how a section looks or is built | `src/sections/<Name>.astro` plus classes in `webflow.css` (or new styles in `site.css`) |
| Add a new page | If it can be built from the existing sections, marketing can make it in the CMS ("Нові сторінки (з секцій)"), no code needed. Otherwise `src/pages/<url>.astro` (or `src/pages/<folder>/<url>.astro`), wrapped in `<Base title description>` |
| Change header, footer or `<head>` | `src/sections/Header.astro`, `Footer.astro`, `src/layouts/Base.astro` |
| Colors, fonts, spacing | `:root` variables in `src/styles/webflow.css` (values and rules: `docs/design-system/tokens.md`) |
| Check how something should look | `docs/design-system/` (start with `README.md`) |

## Rules
1. **Never push to `main` or `staging`.** Always work on a new branch (`claude/<short-topic>`) and open a pull request against `main`. In the PR description, say in plain words what changed and which pages to check on the preview link.
2. **Text marketing might edit goes in the content files, not the markup.** When you add a section with real copy, add its fields to the right JSON file (or a new `src/content/<page>.json`) **and** to `.pages.yml` with a clear Ukrainian label, following the existing style. Fixed UI words like "Learn more →" can stay in the markup.
3. **Responsive by default.** Write one set of HTML per section and adapt it with CSS media queries at Webflow's breakpoints: `max-width: 991px` (tablet), `max-width: 767px` (large phone) and `max-width: 479px` (phone). Don't duplicate markup per breakpoint unless the layout truly can't be done with CSS.
4. **Reuse what exists.** Use the existing sections and Webflow classes before writing new ones (e.g. `.section` + `.padding-global` + `.padding-section-large`, `.container-large`, `.heading-box`, `.heading-style-h2`, `.section-tag-box`, `.button-main`, `.why-card`). Don't edit `webflow.css` by hand; new styles go in `site.css` or in a scoped `<style>` block inside the section.
5. **Keep existing URLs.** The site replaces altheracode.com on Webflow. If a page moves or is renamed, add a 301 redirect line to `public/_redirects` (format: `/old-path /new-path 301`).
6. **Every page gets a unique `title` and `description`** passed to `<Base>`.
7. **Text in CMS fields** is plain text: a blank line starts a new paragraph and `**word**` is bold (see `src/lib/text.ts`). Don't put HTML in content files.
7b. **Images:** marketing uploads them to `public/media/`. Always set `alt` text. Use `loading="lazy"` for images below the fold.
8. **Interactivity:** put a `<script>` inside the section component (Astro bundles it). Webflow's own script is not used; its behaviours (menu, dropdown, FAQ, sliders, scroll effects) are rebuilt in the sections. The only library is Swiper (card sliders). No other external JS libraries unless they're clearly needed.
9. **Before opening the PR, run `npm run build` and fix all errors.** Check the changed pages at 1440px and 390px widths, for example by taking Playwright screenshots of `npm run preview`.
10. Don't change `.pages.yml` field names that already hold content. Renaming a field silently empties it in the CMS. If you have to rename one, move the data in the JSON file in the same PR.

## Commands
- `npm install` installs dependencies (Node 22+).
- `npm run dev` starts a local dev server at http://localhost:4321.
- `npm run build` does a production build into `dist/`.
- `npm run preview` serves the built `dist/`.
