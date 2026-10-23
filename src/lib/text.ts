// Tiny helpers for text typed into Pages CMS fields.
// Blank line = new paragraph, single line break = <br>, **word** = bold, [text](link) = link. HTML is escaped.
// Lines starting with "- " or "1. " (with a blank line before and after) become lists.
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// [text](link) becomes a link (only web, mailto, tel and site-relative addresses).
const links = (s: string) =>
  s.replace(/\[([^\]]+)\]\(((?:https?:\/\/|mailto:|tel:|\/|#)[^)\s]*)\)/g, '<a href="$2">$1</a>');

export const inline = (s: string) =>
  links(esc(s.trim())).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');

// A block whose lines all start with "- " becomes a bulleted list; "1. ", "2. " … a numbered list.
const block = (p: string) => {
  const lines = p.split('\n').map(l => l.trim()).filter(Boolean);
  if (lines.length && lines.every(l => /^- /.test(l)))
    return `<ul role="list">${lines.map(l => `<li>${inline(l.slice(2))}</li>`).join('')}</ul>`;
  if (lines.length && lines.every(l => /^\d+\.\s/.test(l)))
    return `<ol role="list">${lines.map(l => `<li>${inline(l.replace(/^\d+\.\s+/, ''))}</li>`).join('')}</ol>`;
  return `<p>${inline(p)}</p>`;
};

export const richText = (s: string) =>
  s.trim() ? s.trim().split(/\n{2,}/).map(block).join('') : '';

export const slugify = (s: string) =>
  s.toLowerCase().replace(/&/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

// Escapes the text and wraps the first occurrence of `accent` in a highlight span (used in big headings).
// `cls` is the span's class: the live design uses "mint" or "pink" accents.
export const highlight = (s: string, accent?: string, cls = 'hl') => {
  const safe = esc(s.trim());
  if (!accent) return safe;
  const a = esc(accent.trim());
  const i = safe.indexOf(a);
  return i < 0 ? safe : `${safe.slice(0, i)}<span class="${cls}">${a}</span>${safe.slice(i + a.length)}`;
};
