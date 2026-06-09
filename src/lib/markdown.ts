// Minimal, safe-enough markdown renderer for trusted, author-written content.
// Handles: headings, paragraphs, bold/italic, links, inline code, blockquotes,
// unordered/ordered lists, horizontal rules. Content is authored by the site
// owner (not user input), so this is a deliberate lightweight choice.

function inline(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" rel="noopener">$1</a>'
    );
}

export function renderMarkdown(md: string): string {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (/^\s*$/.test(line)) { i++; continue; }

    if (/^---\s*$/.test(line)) { html.push("<hr/>"); i++; continue; }

    const h = line.match(/^(#{2,4})\s+(.*)$/);
    if (h) { const l = h[1].length; html.push(`<h${l}>${inline(h[2])}</h${l}>`); i++; continue; }

    if (/^>\s?/.test(line)) {
      const buf: string[] = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) { buf.push(lines[i].replace(/^>\s?/, "")); i++; }
      html.push(`<blockquote>${inline(buf.join(" "))}</blockquote>`);
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s+/.test(lines[i])) { items.push(`<li>${inline(lines[i].replace(/^[-*]\s+/, ""))}</li>`); i++; }
      html.push(`<ul>${items.join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) { items.push(`<li>${inline(lines[i].replace(/^\d+\.\s+/, ""))}</li>`); i++; }
      html.push(`<ol>${items.join("")}</ol>`);
      continue;
    }

    const buf: string[] = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{2,4}\s|>|[-*]\s|\d+\.\s|---)/.test(lines[i])) {
      buf.push(lines[i]); i++;
    }
    html.push(`<p>${inline(buf.join(" "))}</p>`);
  }

  return html.join("\n");
}
