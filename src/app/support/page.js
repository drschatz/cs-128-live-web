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
      <div className="flex mb-4">
      
        <div className="w-9/12 mt-8 p-4">
          <div className="mb-8 ">
            <h1 className="text-3xl font-bold mb-4 text-accent" id="faq">
              We are here to help!
            </h1>
            <div className="grid grid-cols-3 gap-4">
              <StaffCard />
              <StaffCard />
              <StaffCard />
            </div>
            <iframe
              src="https://calendar.google.com/calendar/embed?src=44815dd08de6091a40e8e218ace5da10b991d26ded639574aefc0ef9eab47964%40group.calendar.google.com&ctz=America%2FChicago"
              width="800"
              height="600"
              frameborder="0"
            ></iframe>

            <br />
            <br />
            <br />
        
          </div>
        </div>
      </div>
    </main>
  );
};

export default SupportPage;
