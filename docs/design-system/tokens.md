# Tokens: exact values

All values below were **measured on the built site** (Chromium, computed styles) at 1440, 900, 600 and 390px wide,
and checked against `src/styles/webflow.css`. If this file and the CSS ever disagree, the CSS wins: fix this file.

Never type raw hex values or invent sizes in new code: use the CSS variables and the existing classes listed here.

## 1. Breakpoints

Webflow's breakpoints, desktop-first (`max-width`). Use exactly these in new CSS:

| Name | Range | Media query | Check at |
|---|---|---|---|
| Desktop | 992px and up | (base styles) | 1440 |
| Tablet | 768–991px | `@media screen and (max-width: 991px)` | 900 (or 768) |
| Large phone | 480–767px | `@media screen and (max-width: 767px)` | 600 |
| Phone | up to 479px | `@media screen and (max-width: 479px)` | 390 |

`site.css` also has `.hide`, `.hide-tablet`, `.hide-mobile-landscape`, `.hide-mobile` helpers for these ranges.

## 2. Typography

Fonts: `"Funnel Display", sans-serif` (headings/UI) and `Roboto, sans-serif` (body). Base text colour is
Deep Purple `var(--base-color-brand--blue-dark)`.

### Headings (use the classes, not bare `h1`–`h6` sizes)

| Class | Font / weight | Desktop | Tablet ≤991 | Large phone ≤767 | Phone ≤479 | Line height | Typical use |
|---|---|---|---|---|---|---|---|
| `.heading-style-h1` | Funnel Display 500 | **54px** | 46px | 40px | 36.8px | 1.1 | Page hero headline (one per page, the only `<h1>`) |
| `.heading-style-h2` | Funnel Display **600** | **40px** | 36px | 32px | 28px | 1.2 | Section headings |
| `.heading-style-h3` | Funnel Display 500 | 32px | 28px | 24px | 24px | 1.2 | Smaller CTA headings, sub-sections |
| `.heading-style-h4` | Funnel Display 500 | 24px | 24px | 24px | 20px | 1.2 | Card titles, FAQ questions, portfolio/blog card titles |
| `.heading-style-h5` | Funnel Display 500 | 20px | 20px | 14px* | 20px | 1.2 | Footer column titles, small headings |
| `.heading-style-h6` | (body font) 700 | 16px | 16px | 12px | 12px | 1.5 | Rare |

\* Webflow quirk kept from the live site.

Pick the heading **tag** for the document outline (one `h1` per page, `h2` per section, `h3` for cards) and the
**class** for the look. Cards use `<h3 class="heading-style-h4">`.

### Body and UI text

| Role | Style | Where |
|---|---|---|
| Body | Roboto 400, **18px / 27px** (1.5) | Paragraphs everywhere; `<p>` has no margins: space with gap/wrappers |
| Hero intro | Roboto 18px, `.hero-subheading` max-width 846px (526px ≤991) | Under hero H1 |
| Small | 16px | Breadcrumbs, menu sub-links, tag pills |
| Extra small | 14px | Tech-stack items on case pages |
| Button | Funnel Display 500, 20px (header button 18px) | `.button-main` |
| Nav link | Funnel Display 500, 20px (28px in the phone menu) | `.nav_menu_link` |
| Tag pill | Funnel Display **600**, 16px | `.section-tag-box` |
| Category pill | Funnel Display 500, 16px | `.portfolio-tag`, `.categories-item`, `.category` |
| Big number | Funnel Display 500, 54px (46px ≤991) | `.percent-text` on case pages |
| Highlighted word | Same as heading, colour only | `<span class="mint">`, `<span class="pink">` (also `h-purple`, `h-pink`) |

Text utilities (webflow.css): `.text-size-small|regular|medium|large|tiny`, `.text-weight-*`, `.text-align-*`,
`.text-style-*` (incl. `.text-style-2lines` / `-3lines` clamp in site.css). Use them rather than new one-off rules.

## 3. Colours

| Token | Value | Variable |
|---|---|---|
| Deep Purple | `#180c2a` | `var(--base-color-brand--blue-dark)` |
| Off-white | `#f5f5f5` | `var(--base-color-brand--whitesmoke)` |
| White | `#ffffff` | `var(--base-color-neutral--white)` |
| Mint | `#4bd3b9` | `var(--base-color-brand--mint)` |
| Mint hover | `#62e8cd` | (only in `.button-main:hover`) |
| Purple (lilac) | `#a5a1f8` | `var(--base-color-brand--purple)` |
| Blue | `#9cdcfe` | `var(--base-color-brand--blue)` |
| Pink | `#ff96c8` | `var(--base-color-brand--pink)` |
| Yellow | `#f9ffc3` | `var(--base-color-brand--yellow)` |
| Mint tint 16% | `#4bd3b929` | `var(--base-color-brand--light-mint)` |
| Pink tint 22% | `#ff96c838` | `var(--base-color-brand--light-pink)` |
| Purple tint 22% | `#a5a1f838` | `var(--base-color-brand--light-purple)` |
| Blue tint 32% | `#9cdcfe52` | `var(--base-color-brand--light-blue)` |
| Muted grey (breadcrumb) | `#666` / `#ccc` on dark | `--base-color-neutral--neutral` / `--neutral-lighter` |

Case-study industry pill colours are content, not tokens: `src/content/case-categories.json` (editable in the CMS).

Surfaces:

| Surface | Background | Text | Classes |
|---|---|---|---|
| Page | Off-white | Deep Purple | `body` |
| Dark band, full width | Deep Purple | Off-white | `section.dark-bg`, `.section_hero`, `.footer`, `.nav_component` |
| Dark card, inset | Deep Purple, radius 24px (10px ≤479) | Off-white | `.dark-blue-section`, `.service-cta-block` |
| Card | White, radius 12px | Deep Purple | `.portfolio-card`, `.blog-card`, `.logo-item` |
| Soft card (on white sections) | Off-white, radius 12px | Deep Purple | `.highlights-card`, `.results-card` |

## 4. Spacing

### Page frame

| What | Value | Class |
|---|---|---|
| Side padding | **32px** (≥768) → **20px** (≤767) | `.padding-global` |
| Content width | max **1312px**, centred | `.container-large` |
| Narrower content | 1024px / 768px (blog post 920px) | `.container-medium`, `.container-small` |
| Header inner width | max 1280px | `.nav_container` |
| Full-bleed on phones | removes side padding ≤479 | add `.phone-non` to `.padding-global` |

### Section rhythm (vertical)

Always combine with `.padding-global` (the combined selectors carry the responsive values):

| Class combo | Desktop | ≤991 | ≤767 | ≤479 | Use |
|---|---|---|---|---|---|
| `padding-global padding-section-large` | **112px** top+bottom | 96px | 80px | 80px | Default for every content section |
| `… padding-section-large no-bottom` | 112px top, 0 bottom | 96 / 0 | 80 / 0 | 80 / 0 | Section followed by a related one |
| `padding-global padding-section-botton` (sic) | 0 top, 112px bottom | 96px | 96px | 80px | Section directly under another |
| `padding-global padding-section-medium` | 96px | 96px | 96px | 80px | Rare |
| `padding-global padding-section-small` | 64px | 64px | 64px | 64px | Inside dark cards |

In CMS-built pages these are chosen with `spacing: large | bottom | large-no-bottom | none`
(`src/lib/spacing.ts`). Spacer blocks: `.section-space-64` (64 → 64), `.section-space-96` (96 → 64 ≤991),
`.section-space-112` (112 → 96 ≤991 → 80 ≤479).

### Inside sections

| Gap | Value | Where |
|---|---|---|
| Heading glyph ↔ heading text | 24px | `.heading-box` |
| Heading ↔ intro paragraph | 24px | `.heading-text-wrap` (16px with `.gap-16`) |
| Heading block ↔ content | 64px or 96px | `.section-space-64`, `.section-space-96` |
| Card grid gap | 20px | `.why-grid`, `.why-grid-3-col` |
| Inside a card | 24px between items, padding 32px (20px ≤767) | `.why-card` |
| Portfolio/blog card | padding 24px, gap 32px | `.portfolio-card` |
| Tag pill | padding 6px 12px, dot gap 8px | `.section-tag-box` |
| Hero stack (title, text, button) | 48px (32px ≤479) | `.hero-wrap` |

Stick to these steps (8, 12, 16, 20, 24, 32, 48, 64, 96, 112). No odd numbers like 37px.

## 5. Shape

| Element | Radius | Border |
|---|---|---|
| Buttons, outlined cards, form fields, industry tiles | **6px** | 1px Deep Purple (buttons, `why-card`), 1px Purple (fields), 1–2px Mint (industry tiles) |
| White cards (portfolio, blog, logos), soft cards | **12px** | none; hover adds a **10px Mint bottom border** |
| Dark inset blocks, large photos | **24px** (10px on phone for dark blocks) | none |
| Pills (tags, categories, solution items) | 16–32px (fully round) | none |
| Slider arrow buttons | 50px (circle) | 1px pink tint |
| Tag bullet dot | 12×12px circle | none |

**No drop shadows** on cards or buttons. Depth comes from colour (dark vs light surfaces) and borders.

## 6. Motion

Timings used on the site. Reuse them for new interactions; keep everything subtle.

| Interaction | Timing | Where |
|---|---|---|
| Button hover (colour) | `transition: all .35s` | `.button-main` |
| Card hover (white fill / mint bottom edge) | `.2s` | `.why-card`, `.portfolio-card`, `.blog-card`, `.industries-item-copy` |
| Menu link/background hover | `.2s`–`.35s` | nav and services links |
| FAQ open/close | height `0.4s ease`, `+` icon rotates | `Faq.astro` |
| Services sub-list (homepage) | height `0.4s ease` | `Services.astro` |
| Header Services dropdown | height `500ms linear` | `Header.astro` |
| Phone menu | slides down `400ms ease`; burger → cross `500ms` | `Header.astro` |
| Card slider | Swiper, 800ms, loop, 30px gap | `CardSlider.astro` |
| Process steps | sticky 01–07 index; slides sharpen (scale .9→1, blur 5→0) during the first 20% of scroll | `Process.astro` |
| Blog image hover | `transform: scale(1.1)` over `.7s` | `.blog-image` |

New animations: opacity/transform only, ≤ 400ms, no bouncing or looping decoration, and honour
`prefers-reduced-motion: reduce`.
