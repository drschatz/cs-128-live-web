import React from "react";

const AssignmentsPage = () => {
  return (
    <main>
      <div className="mb-8 text-center relative w-full h-[24vh] bg-blue-500 ">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Assignments
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-amber/60 dark:bg-amber/40" />
      </div>
    </main>
  );
};

export default AssignmentsPage;
