"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { Progress } from "@/components/ui/progress";

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

const Lectures = () => {
  const variantStyles = {
    Quiz: "border-transparent bg-red-500 text-slate-50 hover:bg-red-500/80 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
    HW: "border-transparent bg-blue-500 text-slate-50 hover:bg-blue-500/80 focus:outline-none focus:ring-0 focus:ring-blue-500 dark:bg-blue-900 dark:text-slate-50 dark:hover:bg-blue-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
    MP: "border-transparent bg-green-500 text-slate-50 hover:bg-green-500/80 focus:outline-none focus:ring-0 focus:ring-green-500 dark:bg-green-900 dark:text-slate-50 dark:hover:bg-green-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
    Lab: "border-transparent bg-yellow-500 text-slate-50 hover:bg-yellow-500/80 focus:outline-none focus:ring-0 focus:ring-yellow-500 dark:bg-yellow-900 dark:text-slate-50 dark:hover:bg-yellow-900/80 rounded-full px-2.5 py-0.5 text-xs font-semibold inline-flex items-center focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 cursor-pointer",
  };

  return (
    <div className="w-full px-4 mx-auto flex flex-col items-center justify-center">
      <h1 className="text-3xl mt-8 font-bold mb-4">Lecture Schedules</h1>

      <div className="flex flex-col w-full max-w-[900px] mb-4 gap-2">
        <p className="font-bold">Semester Progress: </p>
        <Progress
          className="[&>*]:bg-blue-500 h-[15px] border-solid border border-black/80 rounded-full overflow-hidden"
          value={33}
          max={100}
        />
        {/* <ProgressBar progress={33} /> */}
      </div>

      {/* <div className="mb-8 flex flex-col w-full max-w-[800px]">
        <p className="mt-8 font-bold mb-2 ">Ongoing</p>
        <ul>
          {ongoings.map((ongoing) => (
            <li key={ongoing.key}>
              <p
                className={`p-4 m-2 ${
                  variantStyles[ongoing.type] || "bg-gray-200"
                }`}
              >
                {ongoing.title} - {ongoing.due}
              </p>
            </li>
          ))}
        </ul>
      </div> */}

      {/* WEEK 16 || WEEK 16 */}
      <div className="flex flex-col w-full max-w-[900px] gap-2 mb-4 font-medium">
        <h5 className="font-bold">Week 16</h5>
        <div className="flex flex-col md:flex-row w-full items-stretch">
          <Card className="w-1/3">
            <CardHeader>
              <CardTitle>
                <Link href="/" className="navbar-link">
                  DFS & BFS
                </Link>
              </CardTitle>
              <CardDescription>Mon, 04 Dec</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-2">
              <div>
                <p>Opening Today:</p>
                <Link href="/" className="hover:text-accent">
                  HW: Homework Homework
                </Link>
              </div>

              <div>
                <p>Due Today:</p>
                <Link href="/" className={badgeVariants({ variant: "MP" })}>
                  MP: Mountain Path
                </Link>
              </div>

              <div>
                <p>Due Tuesday:</p>
                <Link href="/" className={badgeVariants({ variant: "Lab" })}>
                  Lab: Interesting
                </Link>
              </div>

              <div>
                <p>Quiz Registration Start:</p>
                <Link href="/" className={badgeVariants({ variant: "Quiz" })}>
                  Quiz: Quiz 4
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader>
              <CardTitle>Lecture Title</CardTitle>
              <CardDescription>Wed, 06 Dec</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card className="w-1/3">
            <CardHeader>
              <CardTitle>Lecture Title</CardTitle>
              <CardDescription>Fri, 08 Dec</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* WEEK 15 || WEEK 15 */}
      <div className="flex flex-col w-full max-w-[900px] gap-2 mb-4 font-medium">
        <h5 className="font-bold">Week 15</h5>
        <div className="flex flex-col md:flex-row w-full items-stretch">
          <Card className="w-1/3">
            <CardHeader>
              <CardTitle>
                <Link href="/" className="navbar-link">
                  DFS & BFS
                </Link>
              </CardTitle>
              <CardDescription>Mon, 04 Dec</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-2">
              <div>
                <p>Opening Today:</p>
                <Link href="/" className={badgeVariants({ variant: "blue" })}>
                  HW: Homework Homework
                </Link>
              </div>

              <div>
                <p>Due Today:</p>
                <Link href="/" className={badgeVariants({ variant: "green" })}>
                  MP: Mountain Path
                </Link>
              </div>

              <div>
                <p>Due Tuesday:</p>
                <Link href="/" className={badgeVariants({ variant: "orange" })}>
                  Lab: Interesting
                </Link>
              </div>
            </CardContent>
          </Card>
          <Card className="w-1/3">
            <CardHeader>
              <CardTitle>Lecture Title</CardTitle>
              <CardDescription>Wed, 06 Dec</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card className="w-1/3">
            <CardHeader>
              <CardTitle>Lecture Title</CardTitle>
              <CardDescription>CFri, 08 Dec</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Lectures;
