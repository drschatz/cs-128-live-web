"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={
        isOpen
          ? "sticky mx-auto p-6 bg-white top-0 z-50"
          : "sticky mx-auto p-6 bg-white shadow-md top-0 z-50"
      }
    >
      <div className="flex items-center justify-between font-semibold">
        <Logo />
        {/* nav links */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link href="/schedules" className="hover:text-accent">
            {" "}
            Schedules{" "}
          </Link>
          {/* <Link href="/assignments" className="hover:text-accent">
            {" "}
            Assignments{" "}
          </Link> */}
          {/* <Link href="/quizzes" className="hover:text-accent">
            {" "}
            Quizzes{" "}
          </Link> */}
          <Link href="/syllabus" className="hover:text-accent">
            {" "}
            Syllabus{" "}
          </Link>
          {/* <Link href="/course-book" className="hover:text-accent">
            {" "}
            Course Book{" "}
          </Link> */}
          {/* <Link href="/support" className="hover:text-accent">
            {" "}
            Support{" "}
          </Link> */}
        </div>

        {/* Hamburger Icon */}
        <button
          id="burger-btn"
          className={`flex sm:hidden focus:outline-none ${
            isOpen ? "open" : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1">
            <span
              className={`block w-8 h-1 bg-black transform transition duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-black transition duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-black transform transition duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="sm:hidden w-full">
        <div
          id="burger-menu"
          className={
            isOpen
              ? "flex absolute flex-col items-center self-end py-8 space-y-6 bg-white sm:w-auto sm:self-center left-0 right-0 mt-2 drop-shadow-md"
              : "hidden"
          }
        >
          <Link href="/schedules" className="hover:text-accent">
            {" "}
            Schedules{" "}
          </Link>
          {/* <Link href="/assignments" className="hover:text-accent">
            {" "}
            Assignments{" "}
          </Link> */}
          {/* <Link href="/quizzes" className="hover:text-accent">
            {" "}
            Quizzes{" "}
          </Link> */}
          <Link href="/syllabus" className="hover:text-accent">
            {" "}
            Syllabus{" "}
          </Link>
          {/* <Link href="/course-book" className="hover:text-accent">
            {" "}
            Course Book{" "}
          </Link> */}
          {/* <Link href="/support" className="hover:text-accent">
            {" "}
            Support{" "}
          </Link> */}
        </div>
      </div>
    </nav>
  );
};

export default Header;
