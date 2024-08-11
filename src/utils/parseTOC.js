import { marked } from "marked";

export default function parseMarkdownHeadings(markdown) {
  const tokens = marked.lexer(markdown);
  const headingList = [];
  let lastH2 = null;
  let lastH3 = null;

  tokens.forEach((token) => {
    if (token.type === "heading") {
      const slug = token.text.toLowerCase().replace(/\s+/g, "-");
      const entry = {
        level: token.depth,
        text: token.text,
        slug: slug,
      };

      if (token.depth === 1) {
        headingList.push(entry);
        lastH2 = null;
        lastH3 = null;
      } else if (token.depth === 2) {
        if (!lastH2) {
          lastH2 = { ...entry, subheadings: [] };
          headingList.push(lastH2);
        } else {
          lastH2 = { ...entry, subheadings: [] };
          headingList.push(lastH2);
        }
        lastH3 = null;
      } else if (token.depth === 3) {
        if (lastH2) {
          lastH3 = entry;
          lastH2.subheadings.push(lastH3);
        }
      }
    }
  });

  return headingList;
}
