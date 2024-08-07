"use client";
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const images = [
      'squir.jpg',
      'squir_cozy.png',
      'squir.jpg',
      'squir.jpg'
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    setSelectedImage(images[randomIndex]);
  }, []);

  return (
    <main>
      <div className="mb-10 text-center relative w-full h-[24vh] bg-blue-500">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Welcome to CS 128 Live 
          </h1>
        </div>
        <div className="absolute top-0 left-10 right-10 bottom-0 h-full bg-amber/60 dark:bg-amber/40" />
      </div>
      <div className="mb-10 mx-8 flex justify-center items-center">
        <h3 className="text-xl text-center">
          In this course, you will learn fundamental computing skills through the C++ language. 
        </h3>
      </div>
      <div className="mb-10 mx-8 flex justify-center items-center">
        <h3 className="text-xl text-center">
          This section has 5 main components: in-person lecture, homework assignments, weekly lab assignments, 3 MPs, and 3 exams.
        </h3>
      </div>
      <div className="mb-10 mx-8 flex justify-center items-center">
        <h3 className="text-xl text-center">
          This course can be challenging, but the course staff and I are here to help! We offer second-chance exams, flexible grading policies, many office hours, and an online discussion forum.
        </h3>
      </div>
      <div className="mb-10 mx-8 flex justify-center items-center">
        <img src={selectedImage} width="300px" alt="Squirrel" />
      </div>
    </main>
  );
}
