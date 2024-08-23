"use client";

import { useParams } from "next/navigation";
import { allDocs } from "@/.contentlayer/generated";
import RenderMdx from "@/src/components/Doc/RenderMdx";

const DocPage = () => {
  const params = useParams();

  const doc = allDocs.find(
    (doc) => doc._raw.flattenedPath === `${params.chapter}/${params.section}`
  );

  if (!doc) {
    return null;
  }

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[30vh] bg-blue-500 ">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            {doc.title}
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
      </div>

      <div className="flex justify-center mt-8 px-5 md:px-10">
      <div className="w-full lg:w-8/12 pb-40">
        <RenderMdx doc={doc} />
      </div>
    </div>
    </article>
  );
};

export default DocPage;
