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
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/lectures" className="hover:text-accent">
            {" "}
            Lectures{" "}
          </Link>
          {/* <Link href="/assignments" className="hover:text-accent">
            {" "}
            Assignments{" "}
          </Link> */}
          <Link href="/quizzes" className="hover:text-accent">
            {" "}
            Quizzes{" "}
          </Link>
          <Link href="/syllabus" className="hover:text-accent">
            {" "}
            Syllabus{" "}
          </Link>
          {/* <Link href="/course-book" className="hover:text-accent">
            {" "}
            Course Book{" "}
          </Link> */}
          <Link href="/support" className="hover:text-accent">
            {" "}
            Support{" "}
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          id="burger-btn"
          className={
            isOpen ? "open" : "block hamburger md:hidden focus:outline-none"
          }
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden w-full">
        <div
          id="burger-menu"
          className={
            isOpen
              ? "flex absolute flex-col items-center self-end py-8 space-y-6 bg-white sm:w-auto sm:self-center left-0 right-0 mt-2 drop-shadow-md"
              : "hidden"
          }
        >
          <Link href="/lectures" className="hover:text-accent">
            {" "}
            Lectures{" "}
          </Link>
          <Link href="/assignments" className="hover:text-accent">
            {" "}
            Assignments{" "}
          </Link>
          <Link href="/quizzes" className="hover:text-accent">
            {" "}
            Quizzes{" "}
          </Link>
          <Link href="/syllabus" className="hover:text-accent">
            {" "}
            Syllabus{" "}
          </Link>
          <Link href="/course-book" className="hover:text-accent">
            {" "}
            Course Book{" "}
          </Link>
          <Link href="/support" className="hover:text-accent">
            {" "}
            Support{" "}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
