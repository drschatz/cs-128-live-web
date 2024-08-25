import { makeSource, defineDocumentType } from "@contentlayer/source-files";

import GithubSlugger from "github-slugger";
import readingTime from "reading-time";

import rehypePrettyCode from "rehype-pretty-code";

const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: "**/**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    isPublished: {
      type: "boolean",
      required: true,
    },
    author: {
      type: "list",
      of: {
        type: "string",
      },
      required: true,
    },
    tags: {
      type: "list",
      of: {
        type: "string",
      },
    },
    chapterTitle: {
      type: "string",
      required: true,
    },
    chapterIdx: {
      type: "number",
      required: true,
    },
    sectionIdx: {
      type: "number",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/course-book/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw),
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regulrExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();
        const headings = Array.from(doc.body.raw.matchAll(regulrExp)).map(
          ({ groups }) => {
            const flag = groups?.flag;
            const content = groups?.content;

            return {
              level:
                flag?.length == 1 ? "one" : flag?.length == 2 ? "two" : "three",
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );

        return headings;
      },
    },
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
  mdx: {
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "github-dark",
        },
      ],
    ],
  },
});
