"use client";

import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

// Update the progress bar
const startDate = new Date("2024-08-26");
const endDate = new Date("2024-12-16");
const today = new Date();

const msInDay = 24 * 60 * 60 * 1000; // Number of milliseconds in a day

const totalDays = Math.ceil((endDate - startDate) / msInDay);
const daysFromStart = Math.ceil((today - startDate) / msInDay);

let calculatedProgress = (daysFromStart / totalDays) * 100;
if (calculatedProgress > 100) {
  calculatedProgress = 100;
} else if (calculatedProgress < 0) {
  calculatedProgress = 0;
}

export default function Home() {
  const [squirrelStyle, setSquirrelStyle] = useState({
    width: "100px", // Initial width
  });
  const [squirrelImage, setSquirrelImage] = useState("empty.png"); // Default image

  useEffect(() => {
    const randomPositionAndRotation = () => {
      let randomX = Math.floor(Math.random() * 80); // Random position between 0% and 90% for X-axis
      let randomY = Math.floor(Math.random() * 18); // Random position between 0% and 90% for Y-axis
      let randomRotation = Math.floor(Math.random() * 11); // Random rotation between 0 and 360 degrees
      let widthSqur = "130px";

      if (randomX > 20 && randomX < 45) {
        randomX = randomX - 15;
      }
      if (randomX > 44 && randomX < 65) {
        randomX = randomX + 15;
      }

      if (randomRotation < 10) {
        randomRotation = 0;
      } else {
        randomRotation = 180;
      }

      let randIndex = Math.floor(Math.random() * 100); // Random rotation between 0 and 360 degrees
      if (randIndex > 30) {
        setSquirrelImage("squir.png");
      } else if (randIndex > 15) {
        setSquirrelImage("squir_cz.png");
      } else if (randIndex > 5) {
        setSquirrelImage("squir_bt.png");
        widthSqur = "230px";
      } else {
        setSquirrelImage("real_squir.jpg");
        widthSqur = "100px";
        randomY = 5;
        randomRotation = 0;
        randomX = 10;
      }

      setSquirrelStyle({
        position: "absolute",
        top: `${randomY}%`,
        left: `${randomX}%`,
        width: widthSqur,
        transform: `rotate(${randomRotation}deg)`,
        transition: "top 0.5s, left 0.5s, transform 0.5s", // Smooth transitions for fun effect
      });
    };

    randomPositionAndRotation();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main>
      <div className="mb-10 text-center relative w-full h-[24vh] bg-blue-500">
        <img src={squirrelImage} alt="Squirrel" style={squirrelStyle} />
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Welcome to CS 128 live
          </h1>
        </div>
        <div className="absolute top-0 left-10 right-10 bottom-0 h-full bg-amber/60 dark:bg-amber/40" />
      </div>
      <div className="container max-w-[1200px]">
        <div className="mb-16 mx-8 flex justify-center items-center">
          <h3 className="text-xl text-center">
            This course can be challenging but the course staff and myself are
            here to help! We offer second-chance exams, flexible grading
            policies, many office hours, and an online discussion forum. See the
            syllabus for more details!
          </h3>
        </div>
        <div className="flex flex-col w-full mb-8 mx-10">
          <p className="font-semibold mb-2 text-lg">Semester Progress: </p>
          <Progress
            className="[&>*]:bg-blue-500 h-[15px] border-solid border border-black/80 rounded-full overflow-hidden mb-2"
            value={calculatedProgress}
            max={100}
          />
          <div className="flex justify-between items-center">
            <span className="text-sm">Aug</span>
            <span className="text-sm">Dec</span>
          </div>
        </div>
        {/* <div className="mb-10 mx-8 flex justify-center items-center">
        <div className="border-4 border-green-500 rounded-lg w-80 h-30 mr-12">
          <div className="flex flex-col col-span-2 justify-center p-4">
            <h3 className="text-xl font-semibold text-center">Prairie Learn</h3>
            <hr className="border-gray/70 my-2" />
            <h4 className="text-lg text-center mb-2">
              Homeworks, labs, and MPs
            </h4>
          </div>
        </div>
        <div className="border-4 border-yellow-500 rounded-lg shadow-md w-80 h-30  ml-12">
          <div className="flex flex-col col-span-2 justify-center p-4">
            <h3 className="text-xl font-semibold text-center">
              Lecture Recordings
            </h3>
            <hr className="border-gray/70 my-2" />
            <h4 className="text-lg text-center mb-2">coming soon...</h4>
          </div>
        </div>
      </div>
      <div className="mb-10 mx-8 flex justify-center items-center">
        <div className="border-4 border-pink-500 rounded-lg shadow-md w-80 h-30  mr-12">
          <div className="flex flex-col col-span-2 justify-center p-4">
            <h3 className="text-xl font-semibold text-center">Office Hours</h3>
            <hr className="border-gray/70 my-2" />
            <h4 className="text-lg text-center mb-2">
              Come by with any questions
            </h4>
          </div>
        </div>
        <div className="border-4 border-blue-500 rounded-lg w-80 h-30 ml-12">
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
      </div> */}
      </div>
    </main>
  );
}
