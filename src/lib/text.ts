// Tiny helpers for text typed into Pages CMS fields.
// Blank line = new paragraph, single line break = <br>, **word** = bold. HTML is escaped.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const inline = (s: string) =>
  esc(s.trim()).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');

export const richText = (s: string) =>
  s.trim() ? s.trim().split(/\n{2,}/).map(p => `<p>${inline(p)}</p>`).join('') : '';

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// Escapes the text and wraps the first occurrence of `accent` in a highlight span (used in big headings).
export const highlight = (s: string, accent?: string) => {
  const safe = esc(s.trim());
  if (!accent) return safe;
  const a = esc(accent.trim());
  const i = safe.indexOf(a);
  return i < 0 ? safe : `${safe.slice(0, i)}<span class="hl">${a}</span>${safe.slice(i + a.length)}`;
};
