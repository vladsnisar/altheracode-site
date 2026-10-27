# Brand: the ideas behind the look

What AltheraCode looks and sounds like, and why. Exact values (px, hex, classes) are in
[tokens.md](tokens.md); building blocks are in [components.md](components.md) and [sections.md](sections.md).

Sources: the Figma **Brand Identity** page ("Althera Code. Guideline", ClickRoads, 2025), which the current
site is built on, and the parts of the **Brand Book v1.1 concept** (2026) that fit the current site
(see [brandbook-v1.1-concept.md](brandbook-v1.1-concept.md)).

## 1. Core idea: a programming console

> "Mimic the style of a programming console by **highlighting key words in bright colours**, creating a familiar
> and tech-oriented identity. The graphics **incorporate common coding elements** such as brackets, slashes and
> other syntax symbols." (Figma, *Identity Idea*, illustrated with `console.log("/ { [ Hello, World!] } /");`)

What this means on the page:

- **Dark "editor" surfaces and light "document" surfaces alternate.** Deep Purple (`#180c2a`) for the header,
  hero, process, call-to-action blocks and footer; off-white (`#f5f5f5`) for most content sections.
- **Key words light up** like syntax highlighting: one accent phrase per big heading in mint, pink or purple
  (`AltheraCode – Innovative…`, `…Forward – Meet AltheraCode.`). Never more than one highlighted phrase per heading.
- **Syntax glyphs frame headings**: square brackets `[ ]`, curly braces `{ }` and the slash `/`.
  The glyphs come from the Funnel Display Light typeface and are used as SVG images (see [components.md#glyphs](components.md#2-heading-glyphs-the-signature-element)).
- **Code-window illustrations**: the process slides show small UI/code windows with coloured bars, not
  stock "AI brain" imagery.

The palette itself comes from code editors (Figma, *Colors*): "inspired by the classic colours of programming
consoles". Purple was chosen as the complement of **orange, the most common competitor colour**.

## 2. Logo

| Asset | File | Use |
|---|---|---|
| Logotype (sign + lowercase wordmark `altheracode`), all Off-white, for dark backgrounds | `/media/wf/67d3dda5-ac-logo.svg` (set in `site.json` → `logo`) | Header and footer (both on Deep Purple); 248×26px on desktop, ≈194×20px on phones |
| Favicon / webclip | `/media/wf/67e2ba4f-favicon.png`, `/media/wf/67e2ba67-webclip.png` | `<head>` in `Base.astro` |

The **sign** is a square bracket plus a slash ("bracket and slash" = structure + forward movement). On the site it
is always used from the official files. Never redraw or re-type the logo.

Rules (Figma *Safe Zone* + Brand Book v1.1):

- **Clear space** around the logotype is at least the width of the slash stroke ×3 on every side (Figma: `3x`
  margins, `2.5x` gap between sign and wordmark). Don't put text, borders or photo edges inside it.
- **Minimum size**: don't show the logotype smaller than in the phone header (≈194px wide); the sign alone not
  smaller than 24px high.
- **Colours**: the site uses the all-Off-white logo on Deep Purple. Other allowed versions (Figma *Logo Colors*):
  Purple sign + Off-white wordmark on Deep Purple; all-Deep-Purple logo on Mint, Pink, Blue, Purple, Yellow or White.
  Within one logo, the sign is never split into two colours.
- **Don't**: stretch or change the slash angle; colour the bracket and slash differently; use gradients, shadows,
  glow, outlines or 3D; place it on busy photos or on colours outside the palette.
- **Avoid blue (corporate royal blue) for the logo**: the most common competitor logo colour (Figma *Color Analysis*).

**The name** is written as one word, **AltheraCode** (capital A and C), in all visible text.
The legal name is **AltheraCode Inc.** (contracts, footer legal lines). The old name "Areascode" must not appear
in new text. (Some legacy strings still contain it: see the PR #10 notes; don't copy them.)

## 3. Colour

The palette has **one dark, one light and five bright "syntax" colours**:

| Name in this guide | Hex | CSS variable (webflow.css) | Figma name | Brand Book v1.1 name | Role on the site |
|---|---|---|---|---|---|
| **Deep Purple** | `#180c2a` | `--base-color-brand--blue-dark` | Deep Purple | Purple | Main text colour; dark surfaces (header, hero, process, CTA blocks, footer); button borders |
| **Off-white** | `#f5f5f5` | `--base-color-brand--whitesmoke` | Off-White | White | Page background; text on dark surfaces |
| **White** | `#ffffff` | `--base-color-neutral--white` | – | Paper | Cards (portfolio, blog, logo tiles), form fields, card hover state |
| **Mint** | `#4bd3b9` | `--base-color-brand--mint` | Mint | Azure | Primary button, hero accent words, card hover edge, industry tile borders, links on hover |
| **Purple** (lilac) | `#a5a1f8` | `--base-color-brand--purple` | Purple | Lilac | Header "Book a Call" outline, menu hover, form field borders, heading glyphs, braces in hero |
| **Blue** (light) | `#9cdcfe` | `--base-color-brand--blue` | Blue | Blue | Secondary CTA button (`blue-button`), square brackets in service hero/CTA, category pills |
| **Pink** | `#ff96c8` | `--base-color-brand--pink` | Pink | Pink | Accent words in CTA headings, slider arrows, some glyphs |
| **Yellow** | `#f9ffc3` | `--base-color-brand--yellow` | Yellow | Yellow | Small icon accents only |
| Dark Grey | `#1a191f` | – (not used on the site yet) | Dark Grey | Graphite | Reserved for code-window illustrations |

**Name trap:** the CSS variable called `blue-dark` is the Deep Purple, and the CSS/Figma "Purple" is the light lilac.
Always pick colours by the variable, not by the word.

Tints (transparent versions, used for tag pills and soft backgrounds):
`--base-color-brand--light-mint` (`#4bd3b929`), `--base-color-brand--light-pink` (`#ff96c838`),
`--base-color-brand--light-purple` (`#a5a1f838`), `--base-color-brand--light-blue` (`#9cdcfe52`).

### Allowed combinations (Figma *Colors. Combinations*)

**Text and graphics** (readable, use freely):

- Deep Purple text on Off-white, White, Purple, Mint, Blue, Pink or Yellow.
- Off-white, Purple, Mint, Blue, Pink or Yellow text on Deep Purple.

**Graphics only** (never for text: contrast too low): bright colour on bright colour, e.g. Off-white on Purple, Mint,
Blue or Pink; Purple on Yellow; Blue on Mint; Yellow on Purple; Pink on Blue; Yellow on Pink; Blue on Yellow.

Rules of thumb:

- **Body text is always Deep Purple on light, or Off-white on dark.** Bright colours are for accent words in big
  headings (40px+), pills, borders, icons and glyphs, never for paragraphs.
- Mint on Off-white/White is fine as a **fill** (button, border, tile edge) but not as small text (contrast ≈1.9:1).
- **Avoid orange and royal blue anywhere in the brand**: they are the competitors' colours (Figma *Color Analysis*).
- Rough share of a page: mostly Off-white/White and Deep Purple; bright colours stay small (a highlighted phrase,
  one button, borders, icons).

## 4. Typography

Two families (Figma *Fonts Pairing*), both from Google Fonts, loaded in `Base.astro`:

| Family | Role | Weights used |
|---|---|---|
| **Funnel Display** | Headings, buttons, navigation, tags/pills, FAQ questions, numbers, short UI labels | 500 (most), 600 (H2, tag pills) |
| **Roboto** | Body text, descriptions, form fields, footer text | 400 (500 for labels) |

- Headings are sentence-like Title Case as on the live site ("Why Choose AltheraCode"), not ALL CAPS.
- No third font. The site has no monospace style; don't add one for decoration.
- Ukrainian text never appears on the public site (client-facing copy is English). The CMS labels are Ukrainian,
  but that's the editor, not the site.

The full size scale per breakpoint is in [tokens.md#typography](tokens.md#2-typography).

## 5. Graphic elements

| Element | Meaning | Where |
|---|---|---|
| `[ ]` square brackets | Structure, order (arrays, lists) | Around service hero headlines and service CTA headings; before section headings (`[ Our Portfolio`) |
| `{ }` curly braces | A block of code, "inside the system" | Around the homepage hero and "curly" service heroes/CTAs; before section headings (`{ Industries We Work With`) |
| `/` slash | Path, forward movement | Before section headings (`/ Why Choose AltheraCode`); as the bullet of service links and tag lists |
| Tag pill with dot (`• Precision Built`) | A label above a heading, like a code comment | Top-right or above most section headings |
| Code-window illustrations | Showing the work: UIs, dashboards, data | Process slides (`/media/wf/*process*`) |
| Background shapes | Large faint bracket/slash shapes and dotted lines | Behind hero sections and CTA blocks (images in `/media/wf/`) |

Glyph colours follow the combinations above (any bright colour on Deep Purple or Off-white; the dark slash on light
backgrounds only).

## 6. Imagery

- **Photos**: real-looking people at work (teams, laptops, offices), bright and natural, never dark or moody.
  Always with rounded corners (24px for large photos, set by `.expertise-image` / `.industries-image`). Some
  photos (homepage "Our Expertise", "Industries", contact) have a thin mint or purple strip along the bottom edge
  that is **part of the image file**. A replacement photo for those spots should be prepared the same way.
- **Icons**: small flat geometric icons in the palette (circles, squares, half-shapes: `/media/wf/67d66caa-*.svg`),
  or simple line icons for industries. One style per section. No emoji, no 3D, no mixed filled + outline.
- **Don't** use: robot hands, glowing brains, binary-code rain, neon green "matrix", isometric 3D offices,
  orange/blue stock graphics (Brand Book v1.1 *Illustrations*, *Associations*).
- **Case studies under NDA**: abstract UI in brand colours instead of real screenshots.

## 7. Voice and copy

Calm, engineering tone (Brand Book v1.1 *Tone*). Client-facing text is **English**.

| Situation | Write | Don't write |
|---|---|---|
| Main message | Precision-built software. Startup-level speed. | We are the #1 revolutionary AI company. |
| AI positioning | We apply AI where it makes a measurable difference. | AI will transform everything you do. |
| Buttons | Verb + object: **Book a Call**, Consult Our Experts, Start Now, See our work | Click here, Submit!!!, Learn more!!! |
| Case results | Reduced manual intake work by 40% (only client-confirmed numbers) | Amazing results beyond expectations. |
| Errors | Couldn't send the form. Your text is saved. | Oops! Something went wrong :( |
| Process | Discovery → Design → Build → Launch → Support | Our magic process ensures success. |

- **One main action per block**: the main CTA across the site is **Book a Call** (to `/contact`).
- Numbers in case studies must be confirmed by the client; no client names under NDA.
- Keep the live site's established phrases ("Precision Built", "Drop Us a Line", "Questions & Answers").

## 8. Accessibility (applies to everything new)

- Text contrast at least 4.5:1 (3:1 for 24px+ headings). The allowed text combinations above meet this.
- Every image has `alt` text; decorative images and glyphs use the site's existing alt pattern or `alt=""`.
- Interactive elements are reachable by keyboard, keep a visible focus outline (`site.css` sets one), and are at
  least 44×44px on touch screens.
- Don't rely on colour alone (e.g. errors need text, open/closed states need the `+`/`×` icon).
- New animations should respect `prefers-reduced-motion: reduce`.
