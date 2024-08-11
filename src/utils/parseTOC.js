import { marked } from "marked";

function parseMarkdownHeadings(markdown) {
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

// Example usage:
const markdownContent = `
# Contact Information
## Learning Objectives
### Lecture
### Lab
### Homework
### MPs
### Exams
## Grades
### Grade Distribution
### How To Get Points
# Extension Policies
# How to Get Help
### Office Hours
### Discuss Online Forum
### Meet with the Professor
# Collaboration/Academic Integrity Policy
### Limited Collaboration Allowed
### Collaboration NOT Allowed
`;

const headings = parseMarkdownHeadings(markdownContent);

function renderList(headings) {
  return (
    <ul className="ml-4 sticky top-32">
      {headings.map((heading, index) => (
        <li key={index} className="hover:text-accent mb-1.5">
          <a href={`#${heading.slug}`} className="ml-2">
            <strong>{heading.text}</strong>
          </a>
          {heading.subheadings && heading.subheadings.length > 0 && (
            <ul className="ml-4 text-sm">
              {heading.subheadings.map((subheading, subIndex) => (
                <li key={subIndex} className="hover:text-accent mb-1">
                  <a href={`#${subheading.slug}`} className="ml-2">
                    <strong>{subheading.text}</strong>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

// Render the list in your React component
