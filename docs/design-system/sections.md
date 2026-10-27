# Sections and page recipes

Every page is a stack of ready-made sections. **Build new pages from these first.** Only design a new section when
none of them fits, and then build it from the pieces in [components.md](components.md).

Images: `screenshots/<name>-desktop.jpg` (1440px wide, scaled to 960) and `screenshots/<name>-phone.jpg` (390px).
Open them with the Read tool when you need to see a section.

## 1. Section catalogue

`CMS type` = the value of `type` in `src/content/services/*.json` / `custom-pages/*.json` (rendered by
`src/sections/ServiceBlock.astro`); those sections can be added by marketing in Pages CMS without code.

### Top of the page

| Section | Component | CMS type | Look | Screenshot |
|---|---|---|---|---|
| Homepage hero | `Hero.astro` | – | Dark; `{ }` purple braces around H1 with a mint phrase; intro; Mint "Book a Call"; dotted background images left/right | `hero-home` (desktop, phone) |
| Service hero | `ServiceHero.astro` | `hero` | Dark; breadcrumb; H1 inside `[ ]` blue brackets (`braces: service`) or `{ }` purple braces (`braces: curly`); mint or pink phrase; intro; Mint button ("Consult Our Experts"). `background: service` (three faint shapes) or `home` (homepage dots) | `service-hero-curly` (desktop, phone), `service-hero-brackets` (desktop) |
| Blog hero | `BlogHero.astro` | – | Dark; `[ ]` blue brackets; purple phrase | `blog-hero-and-list` |
| Portfolio hero | in `pages/portfolio/index.astro` | – | Dark; left-aligned text + photo | `portfolio-page` |
| Case study hero | in `pages/portfolio/[slug].astro` | – | Light; "Case Study" pill, H1 in `{ }`, details table (industry, duration, location, services) | `case-hero` |

### Content sections (light)

| Section | Component | CMS type | Look | Screenshot |
|---|---|---|---|---|
| Services We Provide | `Services.astro` | – | Text left; two columns of slash-links (Core / Additional), sub-links open on hover | `services-we-provide` (desktop, phone) |
| Intro (light) | `ServiceIntro.astro` `style: image` | `intro` | Tag + `[` heading + paragraphs (+ optional chips) left, 24px-rounded photo right | `intro-image` |
| Benefit cards | `Cards.astro` (light) | `cards` | Heading row + grid of outlined `why-card`s with icons; `grid`: 2 cols, 3 cols, `rows` (3+2) | `cards-light`, `cards-rows` |
| Why us cards | `WhyUs.astro` | – (`cards` on service pages) | `/` heading + purple pill; 2-column outlined cards with icons | `why-us-cards` (desktop, phone) |
| Card slider | `CardSlider.astro` | `slider` (`dark: false`) | `/` heading + optional text, pink arrows; sliding outlined cards | `slider-light` (desktop, phone) |
| Portfolio | `Portfolio.astro` | `cases` | `[` mint heading + intro + pill; 3 white case cards (scroll row on tablet/phone) | `portfolio-cards` (desktop, phone) |
| Industries (tiles) | `Industries.astro` | – | `{` heading + pill; industry tiles with icons left, photo right | `industries-tiles` |
| Industries (cards) | `IndustriesGrid.astro` | `industries` | `{` heading (mint phrase) + pill; 3-column grid of mint-bordered cards with text | `industries-grid` (desktop, phone) |
| Tech stack | `TechStack.astro` | `tech` | Centred `/` heading; row of white logo tiles | `tech-stack` |
| Testimonials | `Testimonials.astro` | `testimonials` | `/` heading + Clutch reviews widget (loads only on the real site) | – |
| FAQ | `Faq.astro` | `faq` (`wide` for a wider left column) | Pill + H2 left; numbered questions with `+` right | `faq` (desktop, phone), `faq-wide` (desktop) |
| Contact | `Contact.astro` | `contact` | White rounded block: `/` heading, text, form left; photo right | `contact-form` |

### Dark sections and call-to-action blocks

| Section | Component | CMS type | Look | Screenshot |
|---|---|---|---|---|
| Expertise (dark card) | `Expertise.astro` | – | Inset Deep Purple card (radius 24px): pink pill, H2, text, photo; two `{` sub-headings with slash chip lists | `expertise-dark` |
| Intro (dark) | `ServiceIntro.astro` `style: dark` | `intro` | Same dark inset card with pill, heading, text, photo | `intro-dark` |
| Dark cards | `Cards.astro` `dark: true` | `cards` | Full-width dark band; `[` mint heading (+ mint phrase); white `service-ai-card`s with mint bottom edge | `cards-dark` (desktop, phone) |
| Dark slider | `CardSlider.astro` `dark: true` | `slider` | Dark band; purple `/`; purple-tint cards | `slider-dark` |
| Process | `Process.astro` | `process` | Dark band; `[` heading + pill + intro; sticky 01–07 index left, one slide per step with blurred-in illustrations | `process` |
| Homepage CTA band | `CtaBand.astro` | – | Inset dark card: person photo left, H2 in mint `[ ]` with pink phrase, Mint button | `cta-band` |
| Service CTA | `ServiceCta.astro` | `cta` | Inset dark card with faint shapes: centred H2 (or smaller H3 for long sentences) in `[ ]` blue brackets or `{ }` braces, accent phrase, Blue (default) or Mint button | `cta-service-h2` (desktop, phone), `cta-service-curly-h3` (desktop) |
| Case highlights / results | in `pages/portfolio/[slug].astro` | – | Dark band with 3 soft stat cards (big %, check icon) / light band with results | `case-highlights` (desktop, phone), `case-results`, `case-challenges` |
| Footer | `Footer.astro` | – | Dark; logo, services list, locations, contacts, social, legal | `footer` (desktop, phone) |

Menus: `menu-open-desktop.jpg` (Services mega-menu), `menu-open-phone.jpg` (phone menu).

## 2. How sections are arranged on a page

- **Alternate light and dark.** Mostly light sections, broken up by a dark band or an inset dark card every
  2–3 sections. Two full-width dark bands may touch (one live service page does), never three. Inset dark cards
  (`dark-blue-section`, CTA blocks) sit on the light background, so they can follow a dark band.
- **Alternate glyphs** between neighbouring headings (`/` → `[` → `{` …) and tag pill colours (mint ↔ purple tints).
- **Spacing**: each section uses `padding-section-large` (112px). A section that continues the previous one uses
  `bottom` / `large-no-bottom` so the gap between them is 112px, not 224px.
- **CTA cadence**: a CTA block roughly every 3–4 sections, and the page always ends with Contact ("Drop Us a Line"
  or a page-specific title) before the footer.
- **Headings**: one H1 (in the hero); every section has exactly one H2.

## 3. Page recipes

### Homepage (`src/pages/index.astro`, text in `home.json`)

Hero → Services We Provide → Expertise (dark card) → Portfolio (6 newest cases) → CTA band → Industries →
Why Choose AltheraCode → Process (dark) → Tech Stack → FAQ → Contact → Footer.

### Service page (`src/content/services/<name>.json`, typical order)

```
hero → intro (dark or image) → cards (benefits, light) → cards (dark "types we build") → cta
→ cases → industries → testimonials → cta (second, h3 or curly) → slider ("why us")
→ process → tech → faq (wide) → contact
```

All 12 service pages follow this pattern with small reorderings. Copy the closest existing file as a starting point.

### New standalone page (no code)

Marketing creates it in Pages CMS → "Нові сторінки (з секцій)" (`src/content/custom-pages/<name>.json`,
published at `/<name>`). Same section types as service pages. Start with: `hero` → `intro` → `cards` → `cta` →
`contact`, then add `faq`, `cases`, `slider` as needed.

### New page that needs code (`src/pages/<url>.astro`)

```astro
---
import Base from '../layouts/Base.astro';
import ServiceHero from '../sections/ServiceHero.astro';
import Faq from '../sections/Faq.astro';
import Contact from '../sections/Contact.astro';
import page from '../content/<page>.json';          // all copy lives in content files + .pages.yml
---
<Base title={page.seo_title} description={page.seo_description}>
  <ServiceHero breadcrumb={page.breadcrumb} title={page.title} title_accent={page.accent} text={page.text} />
  …existing sections first, new section components only if needed…
  <Contact />
</Base>
```

### Case study and blog post

Content only: `src/content/portfolio/<slug>.json` and `src/content/blog/<slug>.md`. The page templates
(`pages/portfolio/[slug].astro`, `pages/blog/[slug].astro`) already apply the design. Don't hand-build these.

## 4. Designing a new section (when nothing above fits)

1. Look at the closest existing section and its screenshot; copy its structure.
2. Shell from [components.md §1](components.md#1-section-shell), heading row with a glyph (§2, §5), tag pill (§4).
3. Content from existing pieces: cards (§7), pills (§8), buttons (§6). One filled button at most.
4. Light or dark by its neighbours (§2 above).
5. Responsive: write one markup; adapt with CSS at 991/767/479px. Grids drop columns (3 → 2 → 1) or become
   horizontal scroll rows; heading rows stack with the pill on top; centred hero text turns left-aligned on phones.
6. New styles go in a scoped `<style>` in the component or in `site.css`, using the CSS variables and the spacing
   steps from [tokens.md](tokens.md). Don't edit `webflow.css`.
7. Text in a content JSON file + a Ukrainian-labelled field in `.pages.yml`; if it should be available to CMS pages,
   add it to `ServiceBlock.astro` and the `&page_sections` list.
8. Screenshot at 1440 and 390 and compare side by side with neighbouring sections: same type sizes, same
   spacing, same glyph and pill treatment.
