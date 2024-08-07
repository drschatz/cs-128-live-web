"use client";

import { useParams } from "next/navigation";

import { allDocs } from "@/.contentlayer/generated";
import RenderMdx from "@/src/components/Doc/RenderMdx";
// import DocDetails from "@/src/components/Doc/DocDetails";

const DocPage = () => {
  const params = useParams();

  const doc = allDocs.find(
    (doc) => doc._raw.flattenedPath === `${params.chapter}/${params.section}`
  );

  const slug = `${params.chapter}/${params.section}`;

  if (!doc) {
    return;
  }

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[30vh] bg-dark ">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            {doc.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
      </div>

      <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
        <div className="col-span-12  lg:col-span-4">
          <details
            className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-24 max-h-[80vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table Of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {doc.toc.map((heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                     data-[level=two]:border-t border-solid border-dark/40
                                     data-[level=three]:pl-4
                                     sm:data-[level=three]:pl-6
                                     flex items-center justify-start
                                     "
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                          &nbsp;
                        </span>
                      ) : null}

                      <span className="hover:underline">{heading.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderMdx doc={doc} />
      </div>
    </article>
  );
};

export default DocPage;
