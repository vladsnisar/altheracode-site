// Tiny helpers for text typed into Pages CMS fields.
// Blank line = new paragraph, single line break = <br>, **word** = bold. HTML is escaped.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

export const inline = (s: string) =>
  esc(s.trim()).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');

export const richText = (s: string) =>
  s.trim() ? s.trim().split(/\n{2,}/).map(p => `<p>${inline(p)}</p>`).join('') : '';

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
