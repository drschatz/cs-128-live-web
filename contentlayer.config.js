import { makeSource, defineDocumentType } from "@contentlayer/source-files";
import readingTime from "reading-time";

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
  },
}));

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Doc],
});
