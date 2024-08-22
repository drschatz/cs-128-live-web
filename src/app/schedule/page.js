"use client";

import Link from "next/link";
import Image from "next/image";

import { Progress } from "@/components/ui/progress";
import video from "@/public/icons/video.svg";
import ppt from "@/public/icons/ppt.svg";

const variantStyles = {
  Quiz: "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  HW: "border-transparent bg-blue-500 text-slate-50 hover:bg-blue-500/80 focus:outline-none focus:ring-0 focus:ring-blue-500 dark:bg-blue-900 dark:text-slate-50 dark:hover:bg-blue-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  MP: "border-transparent bg-green-500 text-slate-50 hover:bg-green-500/80 focus:outline-none focus:ring-0 focus:ring-green-500 dark:bg-green-900 dark:text-slate-50 dark:hover:bg-green-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  Lab: "border-transparent bg-yellow-500 text-slate-50 hover:bg-yellow-500/80 focus:outline-none focus:ring-0 focus:ring-yellow-500 dark:bg-yellow-900 dark:text-slate-50 dark:hover:bg-yellow-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  Lecture:
    "border-transparent bg-slate-400 text-slate-50 hover:bg-slate-400/80 focus:outline-none focus:ring-0 focus:ring-slate-400 dark:bg-slate-400 dark:text-slate-50 dark:hover:bg-slate-400/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-400 cursor-pointer",
};

function formatDate(dateString) {
  // Parse the date components manually to avoid automatic timezone adjustments
  const [year, month, day] = dateString.split('-').map(Number);

  // Create a Date object in UTC time, equivalent to midnight CST
  const utcDate = new Date(Date.UTC(year, month - 1, day, 6, 0, 0)); // UTC midnight + 6 hours = CST midnight

  // Convert the UTC date to CST explicitly using the time zone option
  const options = { year: "2-digit", month: "short", day: "2-digit", timeZone: "America/Chicago" };
  return utcDate.toLocaleDateString("en-US", options).replace(",", "'");
}

const ProgressBar = ({ progress }) => {
  return (
    <Progress.Root className="ProgressRoot" value={progress}>
      <Progress.Indicator
        className="ProgressIndicator"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
};

const calendar = require("@/public/schedule/calendar24.json");
const hw = require("@/public/schedule/hw.json");
const lab = require("@/public/schedule/lab.json");
const mp = require("@/public/schedule/mp.json");
const quiz = require("@/public/schedule/quiz.json");

const isPastDate = (date) => new Date(date) <= new Date("2024-08-30");
const isFutureDate = (date) => new Date(date) >= new Date("2024-08-30");

const LecturesPage = () => {
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

  // Update the calendar to only show data before a 2024-08-30
  const filteredCalendar = calendar.filter(
    (item) => new Date(item.date) <= new Date("2024-09-28")
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
  return (
    <div>
      <div className="mb-8 text-center relative w-full h-[24vh] bg-slate-400">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Schedule
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full " />
      </div>

      <div className="container flex sm:flex-row flex-col">
        <div className="w-full sm:w-10/12">
          {/* Ongoings mobile */}
          <div className="flex w-full sm:hidden mb-8 flex-col order-2">
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
                        {ongoing.topic} : {ongoing.due.substring(5)}
                      </p>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Schedule */}
          <div className="w-full max-w-[1000px] gap-2 mb-8">
            <table className="table-fix w-full border-collapse ">
              <thead className="h-[60px] sticky top-[75px] z-10 bg-white shadow-[0px_2px_0px_0px_rgba(0,0,0,1)]">
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
                    MP & Exams
                  </th>
                  <th className="w-[200px] border border-b-2 border-x-gray/50 border-t-gray/50">
                    Deadline
                  </th>
                </tr>
              </thead>

              {filteredCalendar.map((day, idx) => (
                <tbody key={idx} className="overflow-y-auto">
                  <tr className="h-[70px]">
                    {day.day_idx % 5 === 1 ? (
                      <>
                        <td
                          className={`${
                            day.day_idx % 5 === 0
                              ? "border border-x-gray/50  border-b-2"
                              : "border border-x-gray/50 border-b-gray/50"
                          }`}
                          style={
                            day.dayoff
                              ? {
                                  backgroundColor: "#a1a1a1",
                                }
                              : {}
                          }
                        >
                          <div className="relative flex flex-col items-start">
                            <span className="z-20 -translate-x-1/2 -translate-y-5 top-10 border border-blue-500 rounded-xl px-3 py-1 bg-blue-500 font-medium text-white">
                              Week {day.week_idx}
                            </span>
                            <span className="mt-2 translate-x-3 -translate-y-5">
                              {day.week_day}, {formatDate(day.date)}
                            </span>
                          </div>
                        </td>
                      </>
                    ) : (
                      <td
                        className={`${
                          day.day_idx % 5 === 0
                            ? "border border-x-gray/50  border-b-2"
                            : "border border-x-gray/50 border-b-gray/50"
                        }`}
                        style={
                          day.dayoff
                            ? {
                                backgroundColor: "#a1a1a1",
                              }
                            : {}
                        }
                      >
                        <p className="ml-3">
                          {day.week_day}, {formatDate(day.date)}
                        </p>
                      </td>
                    )}
                    {/* <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2"
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                      style={
                        day.dayoff
                          ? {
                              backgroundColor: "#a1a1a1",
                            }
                          : {}
                      }
                    ></td>
                    <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2"
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                      style={
                        day.dayoff
                          ? {
                              backgroundColor: "#a1a1a1",
                            }
                          : {}
                      }
                    ></td>
                    <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2"
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                      style={
                        day.dayoff
                          ? {
                              backgroundColor: "#a1a1a1",
                            }
                          : {}
                      }
                    ></td>
                    <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2"
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                      style={
                        day.dayoff
                          ? {
                              backgroundColor: "#a1a1a1",
                            }
                          : {}
                      }
                    ></td> */}
                    {/* dividing places */}
                    <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2"
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                      style={
                        day.dayoff
                          ? {
                              backgroundColor: "#a1a1a1",
                            }
                          : day.lecture_topic
                          ? {
                              backgroundColor: "rgb(148 163 184)",
                            }
                          : {}
                      }
                    >
                      {day.lecture_topic && (
                        <div className="flex flex-col justify-center pb-2">
                          <Link
                            href={day.lecture_link}
                            className="hover:text-accent"
                          >
                            <p className="p-4 mb-2 ml-3 text-white font-semibold">
                              {day.lecture_topic}
                            </p>
                          </Link>
                          <div className="flex justify-around content-center">
                            <Link href={day.lecture_link}>
                              <Image
                                src={ppt}
                                alt="ppt"
                                className="w-6 h-6 ml-3"
                              />
                            </Link>
                            <Link href={day.lecture_link}>
                              <Image
                                src={video}
                                alt="video"
                                className="w-6 h-6 ml-3"
                              />
                            </Link>
                          </div>
                        </div>
                      )}
                    </td>
                    <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2"
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                      style={
                        day.dayoff
                          ? {
                              backgroundColor: "#a1a1a1",
                            }
                          : day.hw_topic
                          ? {
                              backgroundColor: "rgb(59 130 246)",
                            }
                          : day.lab_topic
                          ? {
                              backgroundColor: "rgb(234 179 8)",
                            }
                          : {}
                      }
                    >
                      {day.hw_topic && (
                        <Link href={day.hw_link}>
                          <p className="p-4 mb-2 ml-3 text-white font-semibold">
                            {day.hw_topic}
                          </p>
                        </Link>
                      )}
                      {day.lab_topic && (
                        <Link href={day.lab_link}>
                          <p className="p-4 mb-2 ml-3 text-white font-semibold">
                            {day.lab_topic}
                          </p>
                        </Link>
                      )}
                    </td>
                    <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2"
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                      style={
                        day.dayoff
                          ? {
                              backgroundColor: "#a1a1a1",
                            }
                          : day.mp_topic
                          ? {
                              backgroundColor: "rgb(34 197 94)",
                            }
                          : day.quiz_topic
                          ? {
                              backgroundColor: "rgb(239 68 68)",
                            }
                          : {}
                      }
                    >
                      {day.mp_topic && (
                        <Link href={day.mp_link}>
                          <p className="p-4 mb-2 ml-3 text-white font-semibold">
                            {day.mp_topic}
                          </p>
                        </Link>
                      )}
                      {day.quiz_topic && (
                        <Link href={day.quiz_link}>
                          <p className="p-4 mb-2 ml-3 text-white font-semibold">
                            {day.quiz_topic}
                          </p>
                        </Link>
                      )}
                    </td>
                    <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2 "
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                      style={
                        day.dayoff
                          ? {
                              backgroundColor: "#a1a1a1",
                            }
                          : day.hw_due_topic
                          ? {
                              backgroundColor: "rgb(59 130 246)",
                            }
                          : day.lab_due_topic
                          ? {
                              backgroundColor: "rgb(234 179 8)",
                            }
                          : day.mp_due_topic
                          ? { backgroundColor: "rgb(34 197 94)" }
                          : day.quiz_due_topic
                          ? {
                              backgroundColor: "rgb(239 68 68)",
                            }
                          : {}
                      }
                    >
                      {day.hw_due_topic && (
                        <Link href={day.hw_due_link}>
                          <p className="p-4 mb-2 ml-3 text-white font-semibold">
                            {day.hw_due_topic} : 8:59 AM
                          </p>
                        </Link>
                      )}
                      {day.lab_due_topic && (
                        <Link href={day.lab_due_link}>
                          <p className="p-4 mb-2 ml-3 text-white font-semibold">
                            {day.lab_due_topic} : 23:59
                          </p>
                        </Link>
                      )}
                      {day.mp_due_topic && (
                        <Link href={day.mp_due_link}>
                          <p className="p-4 mb-2 ml-3 text-white font-semibold">
                            {day.mp_due_topic} : 23:59
                          </p>
                        </Link>
                      )}
                      {day.quiz_due_topic && (
                        <Link href={day.quiz_due_link}>
                          <p className="p-4 mb-2 ml-3 text-white font-semibold">
                            {day.quiz_due_topic} : 23:59
                          </p>
                        </Link>
                      )}
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
        </div>

        {/* Ongoings */}
        <div className="hidden sm:flex w-full sm:w-3/12 mb-8 flex-col ml-6">
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
                      {ongoing.topic} : {ongoing.due.substring(5)}
                    </p>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LecturesPage;
