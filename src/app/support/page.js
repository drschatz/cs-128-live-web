import React from "react";

import StaffCard from "./StaffCard";
import Link from "next/link";

const SupportPage = () => {
  return (
    <div className="mb-20">
      <div className="mb-8 text-center relative w-full h-[24vh] bg-amber-400 ">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Support
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-amber/60 dark:bg-amber/40" />
      </div>

      <div className="container">

        <div className="flex flex-col justify-center items-center">
          <div className="mb-10 mx-8 mt-10 flex justify-center items-center">
            <Link
              href="https://queue.illinois.edu/q/cs128"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border-4 border-pink-500 rounded-lg shadow-sm w-80 h-30 mr-12 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col col-span-2 justify-center p-4">
                  <h3 className="text-xl font-semibold text-center">
                    Office Hours
                  </h3>
                  <hr className="border-gray/70 my-2" />
                  <h4 className="text-lg text-center mb-2">
                    Come by with any questions
                  </h4>
                </div>
              </div>
            </Link>

            <Link
              href="https://edstem.org/us/join/CDc7Ea"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border-4 border-blue-500 rounded-lg shadow-sm w-80 h-30 ml-12 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col col-span-2 justify-center p-4">
                  <h3 className="text-xl font-semibold text-center">
                    Discussion Board
                  </h3>
                  <hr className="border-gray/70 my-2" />
                  <h4 className="text-lg text-center mb-2">
                    A place to post your questions
                  </h4>
                </div>
              </div>
            </Link>
          </div>

          <br />
          <iframe
            src="https://calendar.google.com/calendar/embed?src=44815dd08de6091a40e8e218ace5da10b991d26ded639574aefc0ef9eab47964%40group.calendar.google.com&ctz=America%2FChicago"
            width="800"
            height="600"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      <div className="hidden sm:block w-1/12"></div>
    </div>
  );
};

export default SupportPage;
