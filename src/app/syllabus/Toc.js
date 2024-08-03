"use client";

import { useEffect, useState } from "react";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkToc from "remark-toc";
import { toHAST } from "mdast-util-to-hast";
import { toString } from "hast-util-to-string";
import { visit } from "unist-util-visit";

function Toc({ markdown }) {
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const processMarkdown = async () => {
      // Create a unified processor that can parse markdown
      const processor = remark().use(remarkParse).use(remarkToc, {
        heading: "Table of Contents",
        tight: true,
        maxDepth: 2,
      });

      // Parse the markdown and generate a table of contents
      const tree = processor.parse(markdown);
      const tocItems = [];

      visit(tree, "listItem", (node) => {
        const title = toString(toHAST(node));
        const linkNode = node.children.find((child) => child.type === "link");
        if (linkNode) {
          const slug = linkNode.url.slice(1); // remove the leading '#'
          tocItems.push({ title, slug });
        }
      });

      setToc(tocItems);
    };

    processMarkdown();
  }, [markdown]);

  return (
    <nav>
      <ul>
        {toc.map((item) => (
          <li key={item.slug}>
            <a href={`#${item.slug}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Toc;
