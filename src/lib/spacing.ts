// Vertical spacing of a section, as used on the live site. Marketing picks one of these names in the CMS
// ("Відступи секції"); each maps to the padding classes from webflow.css.
export const SPACING = {
  large: 'padding-global padding-section-large',
  bottom: 'padding-global padding-section-botton',
  'large-no-bottom': 'padding-global padding-section-large no-bottom',
  none: 'padding-global',
} as const;
export type Spacing = keyof typeof SPACING;
export const spacing = (s: string | undefined, fallback: Spacing) =>
  SPACING[(s && s in SPACING ? s : fallback) as Spacing];
