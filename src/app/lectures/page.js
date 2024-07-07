"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Progress } from "@/components/ui/progress";
import { ongoings } from "@/src/constant/ongoings";

// import * as Progress from "@radix-ui/react-progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge, badgeVariants } from "@/components/ui/badge";

const variantStyles = {
  Quiz: "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  HW: "border-transparent bg-blue-500 text-slate-50 hover:bg-blue-500/80 focus:outline-none focus:ring-0 focus:ring-blue-500 dark:bg-blue-900 dark:text-slate-50 dark:hover:bg-blue-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  MP: "border-transparent bg-green-500 text-slate-50 hover:bg-green-500/80 focus:outline-none focus:ring-0 focus:ring-green-500 dark:bg-green-900 dark:text-slate-50 dark:hover:bg-green-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  Lab: "border-transparent bg-yellow-500 text-slate-50 hover:bg-yellow-500/80 focus:outline-none focus:ring-0 focus:ring-yellow-500 dark:bg-yellow-900 dark:text-slate-50 dark:hover:bg-yellow-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
};

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

const LecturesPage = () => {
  const calendar = require("@/public/schedules/calendar.json");

  console.log(calendar);

  return (
    <div>
      <div className="mb-8 text-center relative w-full h-[24vh] bg-indigo-500 ">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Lecture Schedules
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
      </div>
      {/* <h1 className="text-3xl mt-8 font-bold mb-4">Lecture S</div>chedules</h1> */}

      <div className="container flex">
        <div className="w-9/12">
          {/* Progress  */}
          <div className="flex flex-col w-full max-w-[920px] mb-8 ">
            <p className="font-bold mb-5 text-2xl">Semester Progress: </p>
            <Progress
              className="[&>*]:bg-blue-500 h-[15px] border-solid border border-black/80 rounded-full overflow-hidden"
              value={33}
              max={100}
            />
          </div>

          {/* Schedules */}
          <div className="w-full max-w-[920px] gap-2 mb-8">
            <p className="font-bold mb-5 text-2xl">Schedules: </p>
            <table className="table-fix w-full border-collapse ">
              <thead className="h-[50px]">
                <tr>
                  <th className="w-1/10 border border-b-2 border-x-gray/50 border-t-gray/50">
                    Date
                  </th>
                  <th className="w-3/10 border border-b-2 border-x-gray/50 border-t-gray/50">
                    Lecture Topic
                  </th>
                  <th className="w-3/10 border border-b-2 border-x-gray/50 border-t-gray/50">
                    Homework & Lab
                  </th>
                  <th className="w-2/10 border border-b-2 border-x-gray/50 border-t-gray/50">
                    MP & Quiz
                  </th>
                  <th className="w-1/10 border border-b-2 border-x-gray/50 border-t-gray/50">
                    Deadline
                  </th>
                </tr>
              </thead>

              {calendar.map((day, idx) => (
                <tbody key={idx}>
                  <tr className="h-[70px]">
                    {day.day_idx % 5 === 1 ? (
                      <>
                        <td
                          className={`${
                            day.day_idx % 5 === 0
                              ? "border border-x-gray/50  border-b-2"
                              : "border border-x-gray/50 border-b-gray/50"
                          }`}
                        >
                          <span className="z-20 float-left -translate-x-1/2 -translate-y-9 top-10 border border-blue-500 rounded-xl px-3 py-1 bg-blue-500 font-medium text-white">
                            Week {day.week_idx}
                          </span>
                          <span className="float-left -translate-x-1/2 mt-2">
                            {day.week_day}, {day.date}
                          </span>
                        </td>
                      </>
                    ) : (
                      <td
                        className={`${
                          day.day_idx % 5 === 0
                            ? "border border-x-gray/50  border-b-2"
                            : "border border-x-gray/50 border-b-gray/50"
                        }`}
                      >
                        <p className="ml-3">
                          {day.week_day}, {day.date}
                        </p>
                      </td>
                    )}
                    <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2"
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                    >
                      <Link href={day.lec_link} className="hover:text-accent">
                        <p className="ml-3">{day.lec_topic}</p>
                      </Link>
                    </td>
                    <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2"
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                    >
                      {day.hw_topic && (
                        <Link href={day.hw_link}>
                          <p
                            className={`p-4 mb-2 ml-3 ${
                              variantStyles["HW"] || "bg-gray-200"
                            }`}
                          >
                            {day.hw_topic}
                          </p>
                        </Link>
                      )}
                      {day.lab_topic && (
                        <Link href={day.lab_link}>
                          <p
                            className={`p-4 mb-2 ml-3 ${
                              variantStyles["Lab"] || "bg-gray-200"
                            }`}
                          >
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
                    ></td>
                    <td
                      className={`${
                        day.day_idx % 5 === 0
                          ? "border border-x-gray/50  border-b-2 "
                          : "border border-x-gray/50 border-b-gray/50"
                      }`}
                    >
                      {day.hw_due_topic && (
                        <Link href={day.hw_due_link}>
                          <p
                            className={`p-4 mb-2 ml-3 ${
                              variantStyles["HW"] || "bg-gray-200"
                            }`}
                          >
                            {day.hw_due_topic}
                          </p>
                        </Link>
                      )}
                      {day.lab_due_topic && (
                        <Link href={day.lab_due_link}>
                          <p
                            className={`p-4 mb-2 ml-3 ${
                              variantStyles["Lab"] || "bg-gray-200"
                            }`}
                          >
                            {day.lab_due_topic}
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
        <div className="flex w-3/12 mb-8 flex-col ">
          <p className="font-bold mb-5 text-2xl">Ongoing</p>
          <ul>
            {ongoings.map((ongoing) => (
              <li key={ongoing.key}>
                <p
                  className={`p-4 mb-2 ${
                    variantStyles[ongoing.type] || "bg-gray-200"
                  }`}
                >
                  {ongoing.title} - {ongoing.due}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LecturesPage;

/* <tbody>
                <tr className="h-[70px]">
                  <td className="border border-x-gray/50 border-b-gray/50">
                    Mon May 6
                  </td>
                  <td className="border border-x-gray/50 border-b-gray/50">
                    Introduction to C++
                  </td>
                  <td className="border border-x-gray/50 border-b-gray/50">
                    HW1: IEFHW
                  </td>
                  <td className="border border-x-gray/50 border-b-gray/50"></td>
                  <td className="border border-x-gray/50 border-b-gray/50"></td>
                </tr>
                <tr className="h-[70px]">
                  <td className="border border-gray/50">Tue May 7</td>
                  <td className="border border-gray/50"></td>
                  <td className="border border-gray/50"></td>
                  <td className="border border-gray/50"></td>
                  <td className="border border-gray/50"></td>
                </tr>
                <tr className="h-[70px]">
                  <td className="border border-gray/50">Wen May 8</td>
                  <td className="border border-gray/50">
                    Objects, Variables and Objects, Variables
                  </td>
                  <td className="border border-gray/50">HW2: sefwejfn</td>
                  <td className="border border-gray/50"></td>
                  <td className="border border-gray/50">HW1 9:00 am</td>
                </tr>
                <tr className="h-[70px]">
                  <td className="border border-x-gray/50 border-t-gray/50">
                    Fir May 10
                  </td>
                  <td className="border border-x-gray/50 border-t-gray/50">
                    {" "}
                    sdkfnwjebfnwdjln
                  </td>
                  <td className="border border-x-gray/50 border-t-gray/50">
                    HW3: dhfweond
                  </td>
                  <td className="border border-x-gray/50 border-t-gray/50"></td>
                  <td className="border border-x-gray/50 border-t-gray/50">
                    HW2 9:00 am
                  </td>
                </tr>
              </tbody> */
