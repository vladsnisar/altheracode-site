# Components: the building blocks

Small pieces that every section is made of, with the exact markup to copy. All classes exist in
`src/styles/webflow.css`; reuse them before writing anything new. Where a component already exists as an Astro
file, **use the component** instead of copying its markup.

Screenshots of these pieces in context: [sections.md](sections.md) and `screenshots/`.

---

## 1. Section shell

Every content section has the same three wrappers:

```astro
<section class="section">                                   <!-- add "dark-bg" for a full-width Deep Purple band -->
  <div class="padding-global padding-section-large">        <!-- side padding + vertical rhythm, see tokens.md §4 -->
    <div class="container-large">                           <!-- max 1312px, centred -->
      …heading row…
      <div class="section-space-64"></div>                  <!-- or section-space-96 -->
      …content…
    </div>
  </div>
</section>
```

- For CMS-driven sections use `class={pad(spacing, 'large')}` from `src/lib/spacing.ts` instead of hard-coding the padding.
- Dark sections: `section.dark-bg` (full width) **or** a rounded inset card `.dark-blue-section` inside a light
  section (homepage "Our Expertise"). Text inside becomes Off-white automatically.
- Two light sections in a row: give the second `padding-section-botton` (0 top) so the gap doesn't double.

## 2. Heading glyphs: the signature element

Every section heading (H2) has a **glyph image before it**, inside `.heading-box` (24px gap). Hero and CTA headings
are **wrapped** by a glyph pair. This is the most recognisable part of the design. Don't ship a heading without it.

```astro
<div class="heading-box">
  <img alt={alt} loading="lazy" src="/media/wf/67d66bce-slash.svg" />
  <h2 class="heading-style-h2">Why Choose AltheraCode</h2>
</div>
```

(`alt` is the site-wide constant `'ALT Althera Code – Innovative Custom Software Development Company. + SVG Image'`
used by every section, as on the live site.)

### Glyph catalogue (`public/media/wf/`)

| Glyph | File | Colour | Background | Used by |
|---|---|---|---|---|
| `/` | `67d66bce-slash.svg` | Deep Purple | **light only** | Why Us, Cards (light), CardSlider (light), TechStack, Contact, Testimonials, blog post |
| `/` | `67dd2e91-untitled.svg` | Purple | dark | CardSlider (dark), case pages |
| `/` small | `67d3f2be-untitled.svg` | Deep Purple | light | Bullet before service links (homepage Services) |
| `/` small | `67d66787-slash.svg` / `67d6679c-slash-2.svg` | Mint / Pink | dark | Bullets in the Expertise tag lists |
| `/` small | `67e0f3af-untitled.svg` | Off-white | dark | Footer |
| `[` | `67d4099c-image.svg` | Mint | any | Portfolio heading, Cards (dark) |
| `[` | `67d3f0a0-image.svg` | Purple | any | ServiceIntro, homepage Services, Process |
| `{` | `67d41741-image.svg` | Purple | any | Industries headings |
| `{` | `67d66740-image.svg` / `67d66740-2.svg` | Mint / Pink | dark | Expertise sub-headings |
| `{` | `67dd158f-image.svg` / `67dd1a5c-image.svg` | Mint / Pink | any | Case pages |
| `{ … }` pair | `67d3ea97-image.svg` + `67d3ea97-2.svg` | Purple | dark | Homepage hero, "curly" service hero/CTA, case hero, 404 |
| `[ … ]` pair | `67dab518-service-cta-heading-element.svg` + `…-2.svg` | Blue | dark | Service hero and service CTA (default "service" braces), portfolio hero |
| `[ … ]` pair | `67d41309-image.svg` + `67d41309-2.svg` | Mint | dark | Homepage CTA band |
| `[ … ]` pair | `67daa56c-heading-element.svg` + `…-2.svg` | Blue | dark | Blog hero |

Rules:

- **One glyph per heading.** Pick the glyph the neighbouring sections don't use, so a page alternates `/`, `[`, `{`.
- On light sections use the dark slash or a bright bracket/brace; on dark sections only bright glyphs.
- Pairs (`[ ]`, `{ }`) wrap **hero and CTA headings only**: `.hero-heading-box` with `.hero-heading-element` /
  `.hero-heading-element.right`, or `.cta-heading-box` with `.cta-heading-element` / `.right`.
- Never type the glyph as text (`[`, `/`) next to a heading: always the SVG, so its weight and colour match.

## 3. Highlighted words

One phrase of a big heading lights up in a bright colour, like syntax highlighting.

```astro
import { highlight } from '../lib/text';
<h2 class="heading-style-h2" set:html={highlight(title, accent, 'pink')} />
```

- Colours: `mint` (default for heroes and most headings), `pink` (CTA bands), `h-purple` (blog hero), `h-pink`
  (portfolio hero). In the CMS: `accent` / `title_accent` + `accent_color: mint | pink`.
- Only on dark backgrounds or on 40px+ headings. Never in body text.

## 4. Tag pill ("eyebrow")

A small rounded label with a dot, placed **opposite the heading** (top-right) on desktop and **above it** on
tablet/phone.

```astro
<div class="section-tag-box light-purple first">   <!-- variants below; "first" = goes above the heading when stacked -->
  <div class="tag-bullet"></div>                    <!-- "tag-bullet white" on dark backgrounds -->
  <div>Expert Development & AI Solutions</div>
</div>
```

| Variant | Background | Use on |
|---|---|---|
| `section-tag-box` | Mint tint | Light sections (default) |
| `section-tag-box light-purple` | Purple tint | Light sections (alternate with mint) |
| `section-tag-box light-pink` + `tag-bullet white` | Pink tint, Off-white text | Dark sections/cards |

Text is 2–4 words (e.g. "Precision Built", "Innovation through technology", "Graphic text elements").
Ordering helpers: `first` puts the pill above the heading on small screens; `last` keeps it after.

## 5. Heading row

Heading (with glyph) and optional intro on the left, tag pill on the right. Used by most sections:

```astro
<div class="why-heading-wrap">                       <!-- or portfolio-heading-wrap / industries-heading-wrap -->
  <div class="heading-text-wrap max-width-800">      <!-- max-w-80 = 80% wide, max-width-800 = 850px -->
    <div class="heading-box">…glyph + h2…</div>
    <p>Optional intro, one or two sentences.</p>
  </div>
  <div class="section-tag-box light-purple first">…</div>
</div>
```

Stacks vertically at ≤991px (48–64px gap) with the pill on top.

## 6. Buttons

All buttons are `.button-main` (+ `w-button`): Funnel Display 20px/500, padding 16px 24px, radius 6px,
1px Deep Purple border, `transition: all .35s`. Height ≈ 61px.

| Variant | Classes | Look | Use |
|---|---|---|---|
| **Primary** | `button-main w-button` | Mint fill, Deep Purple text; hover lighter mint `#62e8cd` | The main action of a hero/section: **Book a Call**, Consult Our Experts |
| Blue | `button-main blue-button w-button` | Blue fill; hover 80% opacity | Service CTA blocks (`button_style: blue`, the default there) |
| Header | `button-main nav-button w-button` | Purple outline + text on dark, 18px, padding 12px 16px; hover fills Purple | Only the header "Book a Call" |
| Dark | `button-main form-button w-button` | Deep Purple fill, Off-white text; hover inverts | Form submit on light backgrounds |
| On dark, outline | `button-main slider-button` | Off-white outline; hover fills Off-white | Secondary action on dark |
| Text link | `portfolio-link w-inline-block` | Funnel Display 500, 1px Deep Purple underline, no fill | "Learn More" on cards |

Rules: **one filled button per block**, verb + object labels, link to `/contact` for Book a Call.
Size modifiers exist (`is-small`, `is-large`) but the live site uses the default size everywhere.

## 7. Cards

| Card | Classes | Look | Hover | Use |
|---|---|---|---|---|
| **Outlined card** | `why-card` (+ icon `img`, `h3.heading-style-h4`, text) | Transparent, 1px Deep Purple border, radius 6px, padding 32px (20px ≤767), min-height 278px | Fills White | Benefits, "Why choose", services lists, slider cards (`LightCard.astro`) |
| Outlined card on dark | `why-card dark-card` | Purple-tint fill and border | Border turns Purple | Dark sliders |
| **White card with edge** | `service-ai-card` | White, radius 12px, padding 24px, **10px Mint bottom border** | Edge turns Purple | Dark "types we build" grids (`DarkCard.astro`) |
| **Portfolio card** | `portfolio-card` (`PortfolioCard.astro`) | White, radius 12px, padding 24px, category pills top-right, H4 title, text, "Learn More" | 10px Mint bottom border appears | Case studies (homepage, service pages, /portfolio) |
| Blog card | `blog-card` (`BlogCard.astro`) | White, radius 12px, image on top (zooms 1.1 on hover) | 10px Mint bottom border | Blog lists |
| Industry tile | `industries-item` | 1px Mint border, radius 6px, icon + name (Funnel 20px) | – | Homepage Industries |
| Industry card | `industries-item-copy` | 2px Mint border, radius 6px, icon + name + text | Fills White | Service page industries grid |
| Soft stat card | `highlights-card`, `results-card` | Off-white fill, radius 12px, big number + check icon + text | – | Case study highlights/results |
| Logo tile | `logo-item` | White, radius 12px | – | Tech stack |

Card icons: 48–56px flat geometric icons from `/media/wf/67d66caa-*.svg` (light cards) or line icons; same icon
set within one grid.

### Card grids

| Grid | Desktop | ≤991 | ≤767 | ≤479 |
|---|---|---|---|---|
| `why-grid` | 2 columns, gap 20px | 2 | 2 | 1 |
| `why-grid _3-columns` | 3 | 2 | 2 | 1 |
| `why-grid-3-col` | 3 | 2 | horizontal scroll row | 1 |
| `portfolio-grid` | 3 | horizontal scroll row (cards min 416px) | scroll | scroll (cards min 340px) |

## 8. Pills and tags (inside content)

| Pill | Classes | Look |
|---|---|---|
| Case category | `portfolio-tag light-blue` (colour from `case-categories.json`) | Radius 32px, padding 4px 12px, Funnel 16/500 |
| Case "industry" | `categories-item` | Blue fill, radius 32px |
| Blog category | `category` | Mint fill; hover Off-white |
| Service/solution chip | `solution-item` | Purple tint, radius 32px, padding 5px 21px, Funnel 20/500 |
| Link chip with slash | `services-link-title` (homepage Services), Expertise lists | Slash glyph + label; hover Purple fill (light) or Purple text (dark) |

## 9. FAQ accordion

Use `Faq.astro`. Questions are numbered automatically ("1. …"), each row is `h3.heading-style-h4` with a `+`
icon (`67d91e2c-fi-sr-plus.svg`) on the right that rotates when open; the answer slides open (height .4s).
Left column: tag pill + H2 (233px wide, 390px with `wide`). Stacks at ≤991.

## 10. Forms

Use `ContactForm.astro` (sends through Formspree). Field style for anything new:

- `.text-field w-input`: White fill, 1px **Purple** border, radius 6px, min-height 60px, padding 10px 16px,
  Roboto 18px; focus border Deep Purple. Message box adds `.message` (min-height 134px).
- Placeholder as the label ("Full Name", "Business Email", "Phone Number (optional)"), as on the live site.
- Submit: `button-main form-button` (dark). Consent checkbox text 16–18px.
- Errors: the existing error box with text and the e-mail address. Never colour-only.

## 11. Header and footer

Both are fixed components (`Header.astro`, `Footer.astro`); change their text in `site.json`, not the markup.

- **Header**: Deep Purple bar, logo left; links "Services ▾ · Case Studies · Contact Us · Blog" (Funnel 20/500,
  hover Purple-tint background) and the outlined Purple "Book a Call" right. The Services mega-menu opens on hover
  (two columns: Core / Additional services, sub-lists open on hover). At ≤991 a burger opens a full-width menu that
  slides down, one link per line (28px), with phone/WhatsApp/e-mail and social icons; the burger turns into ×.
- **Footer**: Deep Purple with a large faint brand-shape background; logo, service link list, Locations (flags),
  Contacts, social icons, legal links. Links hover to Mint.

## 12. Breadcrumbs

`nav.breadcrums-wrapp` (sic) with `a.breadcrumb.light` ("Home"), `>` separators and the current page; 16px,
grey `#ccc` on dark (hover Purple). Used at the top of service and case heroes.

## 13. Slider controls

`CardSlider.astro` (Swiper 11): two **Pink circular arrow buttons** (48px, hover Purple) aligned with the heading on
the right; cards 30px apart, looping, 800ms. Don't add other carousel libraries.

## 14. Images

- Large photos: `border-radius: 24px` (`.expertise-image`, `.industries-image`), `object-fit: cover`.
- Always `alt` text; `loading="lazy"` below the fold, `loading="eager"` only in the hero.
- Prefer `.avif`/`.webp` for photos; keep SVG for icons and glyphs.
- New uploads go to `public/media/` (marketing) and are referenced as `/media/<file>`.
