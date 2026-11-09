# Brand Book v1.1 (concept, 07.10.2026): what applies now and what doesn't

The PDF is in [source/AltheraCode-Brandbook-v1.1.pdf](source/AltheraCode-Brandbook-v1.1.pdf) (49 pages, Ukrainian).
It describes itself as a **concept** for the *next* iteration: "This book does not change the published site.
It sets the direction for the next iteration and all new materials" (p. 2, p. 45).

The team chose to **keep the current site's look**. So on the website:

- ✅ **Apply now**: the brand book rules that don't change the look (below).
- ⏸ **Don't apply** its new visual system (fonts, button/card shapes, mono labels…) to the website **unless the
  team explicitly asks for the redesign**. Mixing the two systems on one site would look inconsistent.
- Non-website materials (LinkedIn posts, decks, one-pagers) are outside this repo; the brand book is the
  reference for those.

## ✅ Applied now (already reflected in brand.md)

| Topic | Rule | Page |
|---|---|---|
| Name | One word **AltheraCode**; legal **AltheraCode Inc.**; AC21 Industrial Systems is a separate brand, never mixed in | 3, 6 |
| Positioning | "Precision-built software. Startup-level speed." Engineering accuracy + startup pace; AI where it gives measurable results | 4 |
| Logo | Use official files only; one colour; no stretching, no two colours, no gradients/shadows/glow, not on busy photos; clear space; min sizes | 7–11 |
| Colour meaning | Mint (Azure) = brand + main action; bright colours = accents/meaning, never body text; colour never carries meaning alone | 12–14 |
| Contrast | WCAG 2.2 AA: 4.5:1 text, 3:1 large text. Mint on white only as fill/large shapes | 14 |
| Main action | **Book a Call**; one primary action per block; verb + object labels; no "Click here" | 3, 27, 44 |
| Case studies | Result in numbers, only client-confirmed; no client names under NDA; abstract UI if screens are under NDA | 24, 47 |
| Tone | Calm engineering tone; concrete actions instead of promises of magic; English client copy | 44 |
| Imagery | No robots, neon brains, binary code, "matrix" green, isometric 3D offices | 4, 36 |
| Accessibility | Visible focus, touch targets ≥ 44px, `prefers-reduced-motion`, alt text, errors with text | 27, 33, 40, 47 |
| Empty states / errors | Short explanation + one action; calm tone, no jokes in errors | 31–32 |

## ⏸ Concept only: differs from the current site

| Topic | Brand book v1.1 | Current site (keep) |
|---|---|---|
| Fonts | Poppins (Latin) + Montserrat (Cyrillic) + JetBrains Mono | Funnel Display + Roboto |
| Overall look | Light pages; Azure only for logo and CTA; code colours only for meaning | Light pages alternating with Deep Purple hero/process/CTA/footer; bright accent words in headings |
| Section labels | Mono uppercase `[ SERVICES WE PROVIDE ]` in Green Ink brackets; no brackets around H1 | Tag pill with dot ("• Precision Built"); bracket/brace **images** around hero and CTA headings, glyph before every H2 |
| Type scale | Display 72/76, H1 48/56, H2 36/44, H3 24/32, body 16/26 | H1 54, H2 40, H3 32, H4 24, body 18/27 (see tokens.md) |
| New colours | Green Ink `#0A6E5C` (green text), Line `#E2DEE8`, Muted `#514A62`, Raised `#ECEAF0`, Danger `#C2333F`, Amber | Not used; text is Deep Purple / Off-white |
| Buttons | 48px tall, radius 8, primary Azure fill without border; secondary outline; ghost | ≈61px tall, radius 6, mint fill **with 1px Deep Purple border**; blue variant; purple outline in header |
| Cards | Radius 16, 3px coloured left or bottom edge by service line, `#F5F5F5` surface + `#E2DEE8` border | Outlined `why-card` (1px Deep Purple, radius 6); white cards radius 12 with 10px mint edge on hover |
| Service menu | 4 lines (AI Development / Product Engineering / Modernization & Ops / Teams & Consulting) with coloured mono labels; mobile accordion | Core Services / Additional Services lists |
| Grid | 12 columns, max content 1200px, gutter 24 | `container-large` 1312px, flex/grid per section |
| Spacing scale | 4/8 tokens: 4 … 128; mobile margins 20, 64 between sections | 112/96/80 section padding; 32/20 side padding (similar rhythm, different numbers) |
| Hero | Left-aligned text + code-window + sign visual, facts row in mono | Centred headline in braces, intro, one button, decorative side images |
| Process | Horizontal pipeline with numbered nodes | Sticky 01–07 index with blurred-in slides on a dark band |
| Forms | Label above field, 48px fields, radius 8, Azure focus halo | Placeholder labels, 60px fields with Purple border, radius 6 |
| Motion | cubic-bezier(.2,0,0,1); 120–320ms | Webflow timings (200–500ms ease/linear), see tokens.md §6 |
| Tokens | `--ac-*` semantic variables generated from tokens.json | Webflow `--base-color-*` variables in webflow.css |
| Logo lock-up | Wordmark "AltheraCode" in Poppins SemiBold (camel case) | Official lowercase `altheracode` logotype file |
| Icons | Custom 36-icon line set, 24px grid, 1.75 stroke | Webflow-era flat geometric icons and line icons per section |

If the team decides to adopt the brand book on the website, treat it as a **redesign project**: update the tokens
in one place (new CSS variables in `site.css`, fonts in `Base.astro`), migrate section by section, and update
this guide. Don't apply it piecemeal.
