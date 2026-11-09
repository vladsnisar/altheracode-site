# AltheraCode design system

How the AltheraCode website looks, and the rules for keeping new pages and changes consistent with it.
Written for Claude (and any developer) working on this repo. **Read this file before any visual change**; open
the other files when the task touches them.

| File | What's in it |
|---|---|
| [brand.md](brand.md) | The idea behind the look: console style, logo, colour palette and combinations, fonts, glyphs, imagery, tone of voice, accessibility |
| [tokens.md](tokens.md) | Exact values: breakpoints, type scale per breakpoint, colours/CSS variables, spacing, radii, motion |
| [components.md](components.md) | Building blocks with markup: section shell, heading glyphs, highlighted words, tag pills, buttons, cards, pills, FAQ, forms, header/footer |
| [sections.md](sections.md) | Catalogue of every ready-made section (with screenshots), how to arrange them, page recipes, how to design a new section |
| [brandbook-v1.1-concept.md](brandbook-v1.1-concept.md) | The 2026 brand book concept: which rules apply now, which belong to a future redesign |
| `screenshots/` | Reference images of each section at 1440px (`*-desktop.jpg`) and 390px (`*-phone.jpg`) |
| `source/` | The brand book PDF |

## Sources of truth (in this order)

1. **The site's code**: `src/styles/webflow.css`, `src/styles/site.css` and `src/sections/*.astro`. The site is a
   1:1 copy of the live Webflow site and the team is happy with it. This is what "on brand" means.
2. **This guide**, written from (1) plus the Figma file below. If it contradicts the code, the code wins: fix the guide.
3. **Figma "Althera Code. Website For Approval"**: the *Brand Identity* page (ClickRoads guideline, 2025: console
   idea, palette, combinations, logo, fonts, graphics) and the *UI kit* (buttons, type styles). Page mock-ups there
   are pre-launch drafts; where they differ from the live site, the live site wins.
4. **Brand Book v1.1 (concept)**: tone, logo integrity, accessibility and facts apply now; its new visual system is
   for a future redesign only ([details](brandbook-v1.1-concept.md)).

## Golden rules

1. **Reuse before you create.** Build pages from the sections in [sections.md](sections.md) and the classes in
   `webflow.css`. A new section is the exception, assembled from existing components.
2. **Two fonts only**: Funnel Display (headings, buttons, nav, pills) and Roboto (body, 18px). Use the
   `.heading-style-h1…h6` classes; never set heading sizes by hand.
3. **Colours only from the CSS variables** (`var(--base-color-brand--…)`). Deep Purple + Off-white carry the page;
   Mint, Purple, Blue, Pink, Yellow are accents (highlighted words, buttons, borders, glyphs, pills), never
   body text. No orange, no royal blue.
4. **Every heading gets a code glyph**: `/`, `[` or `{` image before each H2 (`.heading-box`); `[ ]` or `{ }` pairs
   around hero and CTA headings. Alternate glyphs between neighbouring sections.
5. **One highlighted phrase** per big heading (`mint`/`pink`), via `highlight()` from `src/lib/text.ts`.
6. **Tag pill** (`.section-tag-box` + dot) opposite the heading on desktop, above it on phones.
7. **One primary button per block**: Mint `.button-main` ("Book a Call" → `/contact`); Blue in service CTA blocks.
8. **Section rhythm**: `section > .padding-global.padding-section-large > .container-large`; 112/96/80px vertical,
   32/20px sides, 1312px max width. Use the spacing steps in [tokens.md](tokens.md), no arbitrary numbers.
9. **Alternate light and dark** surfaces down the page; finish every page with the Contact section.
10. **Shapes**: radius 6px (buttons, outlined cards, fields), 12px (white cards), 24px (dark blocks, photos).
    No drop shadows. Hover = white fill or a 10px mint bottom edge.
11. **Responsive with CSS at 991 / 767 / 479px**, one set of markup. Check 1440 and 390.
12. **Copy**: English, calm and concrete; "AltheraCode" as one word; verb + object buttons; only confirmed numbers.

## Checklist for any visual change

Before:
- [ ] Which existing section/component is closest? (sections.md table + screenshots)
- [ ] Light or dark? Which glyph and pill colour do the neighbours use?

While building:
- [ ] Markup uses existing classes; new CSS (if any) is scoped or in `site.css`, uses variables and spacing steps
- [ ] Heading tag order is correct (one `h1`; `h2` per section; `h3` for cards) with the right `.heading-style-*`
- [ ] Copy lives in content JSON + `.pages.yml` (Ukrainian labels), per `CLAUDE.md`
- [ ] Images have `alt`; below-the-fold images `loading="lazy"`; photos rounded 24px

After:
- [ ] `npm run build` passes
- [ ] Screenshots at **1440px and 390px** (and a look at ~900px) next to the neighbouring sections: same type
      sizes, spacing, glyphs, pill and button styles
- [ ] Keyboard focus visible, text contrast OK, nothing relies on colour alone

## Figma reference

- Original file (the team's Figma account has no edit access, so the connector can't read it): `figma.com/design/72sm3lgD2oZuQrXlAb5O5C`
- Team copy (readable through the Figma connector): `figma.com/design/a2fZnP2YYqUjtV7T5Wco7M`
  - *Brand Identity* page: slides 01–36 (logo, safe zone, colours, combinations, fonts, graphics, competitor analysis)
  - *UI kit* page: Buttons (`269:3146`), Fonts (`271:2246`), Grid (`269:3245`)
  - *Main Page*: Services, Portfolio, Contact, Case, Privacy Policy, each at 1440 / 768 / 375 (pre-launch drafts)
- The team's Figma plan (Starter) caps how many times Claude can call the Figma connector. Read only the frames you
  need, or ask for PNG exports. Everything needed day to day is already in this guide.

## Keeping this guide current

When a change adds a new section type, component, colour or rule, update the matching file here (and add a
screenshot to `screenshots/` for a new section) **in the same pull request**.

---

**Для команди маркетингу.** Ця папка — інструкція з дизайну сайту для Claude. Вона описує, як виглядає сайт
(кольори, шрифти, дужки й скіси біля заголовків, кнопки, картки, відступи) і як додавати нові сторінки, щоб вони
виглядали так само. Нову сторінку з готових секцій можна зробити в Pages CMS («Нові сторінки (з секцій)») без коду.
Брендбук v1.1 збережено в `source/`; на сайті з нього застосовуються правила тону, логотипа й доступності, а нова
візуальна система (шрифти Poppins/Montserrat тощо) — лише якщо ви вирішите робити редизайн.
