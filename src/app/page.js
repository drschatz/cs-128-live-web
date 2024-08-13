"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
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

const variantStyles = {
  Quiz: "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  HW: "border-transparent bg-blue-500 text-slate-50 hover:bg-blue-500/80 focus:outline-none focus:ring-0 focus:ring-blue-500 dark:bg-blue-900 dark:text-slate-50 dark:hover:bg-blue-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  MP: "border-transparent bg-green-500 text-slate-50 hover:bg-green-500/80 focus:outline-none focus:ring-0 focus:ring-green-500 dark:bg-green-900 dark:text-slate-50 dark:hover:bg-green-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  Lab: "border-transparent bg-orange-500 text-slate-50 hover:bg-orange-500/80 focus:outline-none focus:ring-0 focus:ring-orange-500 dark:bg-orange-900 dark:text-slate-50 dark:hover:bg-orange-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  Lecture:
    "border-transparent bg-orange-900 text-slate-50 hover:bg-orange-900/80 focus:outline-none focus:ring-0 focus:ring-orange-900 dark:bg-orange-900 dark:text-slate-50 dark:hover:bg-orange-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
};

function formatDate(dateString) {
  const options = { year: "2-digit", month: "short", day: "2-digit" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options).replace(",", "'");
}

const calendar = require("@/public/schedules/calendar24.json");
const hw = require("@/public/schedules/hw.json");
const lab = require("@/public/schedules/lab.json");
const mp = require("@/public/schedules/mp.json");
const quiz = require("@/public/schedules/quiz.json");

const isPastDate = (date) => new Date(date) <= new Date();
const isFutureDate = (date) => new Date(date) >= new Date();

export default function Home() {
  const [squirrelStyle, setSquirrelStyle] = useState({
    width: "100px", // Initial width
  });
  const [squirrelImage, setSquirrelImage] = useState("empty.png"); // Default image

  const currentWeekIdx = Math.max(
    ...calendar.filter((day) => isPastDate(day.date)).map((day) => day.week_idx)
  );

  const currentWeek = calendar.filter((day) => day.week_idx === currentWeekIdx);

  const filteredHw = hw.filter(
    (item) => isPastDate(item.date) && isFutureDate(item.due_date)
  );
  const filteredLab = lab.filter(
    (item) => isPastDate(item.date) && isFutureDate(item.due_date)
  );
  const filteredMp = mp.filter(
    (item) => isPastDate(item.date) && isFutureDate(item.due_date)
  );
  const filteredQuiz = quiz.filter(
    (item) => isPastDate(item.date) && isFutureDate(item.due_date)
  );

  // Update the ongoing object with the filtered homework data
  const ongoings = [
    ...filteredHw.map((item) => ({
      key: `HW-${item.id}`,
      topic: item.topic,
      due: item.due_date,
      link: item.link,
      type: "HW", // Adjust the type as needed
    })),
    ...filteredLab.map((item) => ({
      key: `Lab-${item.id}`,
      topic: item.topic,
      due: item.due_date,
      link: item.link,
      type: "Lab", // Adjust the type as needed
    })),
    ...filteredMp.map((item) => ({
      key: `MP-${item.id}`,
      topic: item.topic,
      due: item.due_date,
      link: item.link,
      type: "MP", // Adjust the type as needed
    })),
    ...filteredQuiz.map((item) => ({
      key: `Quiz-${item.id}`,
      topic: item.topic,
      due: item.due_date,
      link: item.link,
      type: "Quiz", // Adjust the type as needed
    })),
  ];

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
      <div className="container max-w-[1200px] flex flex-col">
        <div className="mb-16 mx-8 flex justify-center items-center">
          <h3 className="text-xl text-center">
            This course can be challenging but the course staff and myself are
            here to help! We offer second-chance exams, flexible grading
            policies, many office hours, and an online discussion forum. See the
            syllabus for more details!
          </h3>
        </div>
        <div className="flex flex-col w-full mb-8">
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

        {/* Mobile Ongoing */}
        <div className="flex w-full sm:hidden mb-8 flex-col">
          <p className="font-bold mb-5 text-2xl">Ongoing</p>
          <ul>
            {ongoings.length === 0 ? (
              <p className="mb-2">No ongoing tasks</p>
            ) : (
              ongoings.map((ongoing) => (
                <li key={ongoing.key}>
                  <Link href={ongoing.link}>
                    <p
                      className={`p-4 mb-2 ${
                        variantStyles[ongoing.type] || "bg-gray-200"
                      }`}
                    >
                      {ongoing.topic} - {ongoing.due}
                    </p>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>

        <div className="w-full flex justify-around">
          {/* Current Week Calendar */}
          <div className="w-full gap-2 mb-8">
            <p className="font-semibold mb-5 text-lg">This Week Agenda:</p>
            {today < startDate ? (
              <p>The course has not started yet. Please check back later.</p>
            ) : (
              <table className="table-fix w-full border-collapse">
                <thead className="h-[60px]">
                  <tr>
                    <th className="w-[200px] border border-b-2 border-x-gray/50 border-t-gray/50">
                      Date
                    </th>
                    <th className="w-[200px] border border-b-2 border-x-gray/50 border-t-gray/50">
                      Lecture Topic
                    </th>
                    <th className="w-[200px] border border-b-2 border-x-gray/50 border-t-gray/50">
                      Homework & Lab
                    </th>
                    <th className="w-[200px] border border-b-2 border-x-gray/50 border-t-gray/50">
                      MP & Quiz
                    </th>
                    <th className="w-[200px] border border-b-2 border-x-gray/50 border-t-gray/50">
                      Deadline
                    </th>
                  </tr>
                </thead>
                {currentWeek.map((day, idx) => (
                  <tbody key={idx}>
                    <tr className="h-[70px]">
                      <td className="border border-x-gray/50 border-b-gray/50">
                        {day.week_day}, {formatDate(day.date)}
                      </td>
                      <td className="border border-x-gray/50 border-b-gray/50">
                        {day.lec_topic && (
                          <Link href={day.lec_link}>
                            <p className="p-4 mb-2 text-orange-900 font-semibold">
                              {day.lec_topic}
                            </p>
                          </Link>
                        )}
                      </td>
                      <td className="border border-x-gray/50 border-b-gray/50">
                        {day.hw_topic && (
                          <Link href={day.hw_link}>
                            <p className="p-4 mb-2 text-blue-500 font-semibold">
                              {day.hw_topic}
                            </p>
                          </Link>
                        )}
                        {day.lab_topic && (
                          <Link href={day.lab_link}>
                            <p className="p-4 mb-2 text-orange-500 font-semibold">
                              {day.lab_topic}
                            </p>
                          </Link>
                        )}
                      </td>
                      <td className="border border-x-gray/50 border-b-gray/50">
                        {day.mp_topic && (
                          <Link href={day.mp_link}>
                            <p className="p-4 mb-2 text-green-500 font-semibold">
                              {day.mp_topic}
                            </p>
                          </Link>
                        )}
                        {day.quiz_topic && (
                          <Link href={day.quiz_link}>
                            <p className="p-4 mb-2 text-red-500 font-semibold">
                              {day.quiz_topic}
                            </p>
                          </Link>
                        )}
                      </td>
                      <td className="border border-x-gray/50 border-b-gray/50">
                        {day.hw_due_topic && (
                          <Link href={day.hw_due_link}>
                            <p className="p-4 mb-2 text-blue-500 font-semibold">
                              {day.hw_due_topic} : 8:30 AM
                            </p>
                          </Link>
                        )}
                        {day.lab_due_topic && (
                          <Link href={day.lab_due_link}>
                            <p className="p-4 mb-2 text-orange-500 font-semibold">
                              {day.lab_due_topic} : 23:59
                            </p>
                          </Link>
                        )}
                        {day.mp_due_topic && (
                          <Link href={day.mp_due_link}>
                            <p className="p-4 mb-2 text-green-500 font-semibold">
                              {day.mp_due_topic} : 23:59
                            </p>
                          </Link>
                        )}
                        {day.quiz_due_topic && (
                          <Link href={day.quiz_due_link}>
                            <p className="p-4 mb-2 text-red-500 font-semibold">
                              {day.quiz_due_topic} : 23:59
                            </p>
                          </Link>
                        )}
                      </td>
                    </tr>
                  </tbody>
                ))}
              </table>
            )}
          </div>

          {/* Ongoing Assignments */}
          <div className="hidden sm:flex w-full sm:w-3/12 mb-8 flex-col ml-32">
            <p className="font-semibold mb-5 text-lg">Ongoing</p>
            <ul>
              {ongoings.length === 0 ? (
                <p className="mb-2">No ongoing tasks</p>
              ) : (
                ongoings.map((ongoing) => (
                  <li key={ongoing.key}>
                    <Link href={ongoing.link}>
                      <p
                        className={`p-4 mb-2 ${
                          variantStyles[ongoing.type] || "bg-gray-200"
                        }`}
                      >
                        {ongoing.topic} - {ongoing.due}
                      </p>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
