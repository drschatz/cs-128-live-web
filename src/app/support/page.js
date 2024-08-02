import Image from "next/image";
import React from "react";

import squ from "public/profile_img/squ.jpg";
import StaffCard from "./StaffCard";

const SupportPage = () => {
  return (
    <main>
      <div className="mb-8 text-center relative w-full h-[24vh] bg-amber-400 ">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Support
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-amber/60 dark:bg-amber/40" />
      </div>
      <div className="flex mb-8">
        <div className="w-4/12 hidden sm:block mt-8 ml-24 text-base text-gray ">
          <h3 className="mb-2 sticky top-24 font-semibold">Support Nav</h3>
          <ul className="ml-4 sticky top-32">
            <li className="hover:text-accent mb-2">
              <a href="#faq" className="ml-2 ">
                <strong>How to get support?</strong>
              </a>
            </li>
            <li className="hover:text-accent mb-2">
              <a href="#contact" className="ml-2">
                <strong>Meet Staffs</strong>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-7/12 mt-8 p-4">
          <div className="mb-8 ">
            <h1 className="text-3xl font-bold mb-4 text-accent" id="faq">
              How to get support?
            </h1>
            <p className="leading-9 mb-4 text-lg text-black/80 font-medium">
              This is the introduction of the book. Tailwind CSS uses a lot of
              custom CSS at-rules like @tailwind, @apply, and @config, and in
              many editors this can trigger warnings or errors where these rules
              aren’t recognized. The solution to this is almost always to
              install a plugin for your editor/IDE for PostCSS language support
              instead of regular CSS. If you are using VS Code, our official
              Tailwind CSS IntelliSense plugin includes a dedicated Tailwind CSS
              language mode that has support for all of the custom at-rules and
              functions Tailwind uses. In some cases, you may need to disable
              native CSS linting/validations if your editor is very strict about
              the syntax it expects in your CSS files.
              <br />
              <br />
              This is the introduction of the book. Tailwind CSS uses a lot of
              custom CSS at-rules like @tailwind, @apply, and @config, and in
              many editors this can trigger warnings or errors where these rules
              aren’t recognized. The solution to this is almost always to
              install a plugin for your editor/IDE for PostCSS language support
              instead of regular CSS. If you are using VS Code, our official
              Tailwind CSS IntelliSense plugin includes a dedicated Tailwind
            </p>
            <br />
            <iframe
              src="https://calendar.google.com/calendar/embed?src=44815dd08de6091a40e8e218ace5da10b991d26ded639574aefc0ef9eab47964%40group.calendar.google.com&ctz=America%2FChicago"
              width="800"
              height="600"
              frameborder="0"
            ></iframe>

            <br />
            <br />
            <br />
            <h1 className="text-3xl font-bold mb-4 text-accent" id="contact">
              Meet Staffs
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <StaffCard />
              <StaffCard />
              <StaffCard />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SupportPage;
