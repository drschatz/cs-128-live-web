"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [squirrelStyle, setSquirrelStyle] = useState({
    width: '100px', // Initial width
  });
  const [squirrelImage, setSquirrelImage] = useState("empty.png"); // Default image

  useEffect(() => {
    const randomPositionAndRotation = () => {
      let randomX = Math.floor(Math.random() * 80); // Random position between 0% and 90% for X-axis
      let randomY = Math.floor(Math.random() * 18); // Random position between 0% and 90% for Y-axis
      let randomRotation = Math.floor(Math.random() * 11); // Random rotation between 0 and 360 degrees
      let widthSqur = "130px";

      if(randomRotation < 10){ randomRotation = 0;}
      else{
        randomRotation = 180;
      }

       let randIndex = Math.floor(Math.random() * 100); // Random rotation between 0 and 360 degrees
       if(randIndex > 30){
         setSquirrelImage("squir.png");
       }
       else if(randIndex > 15){
         setSquirrelImage("squir_cz.png");

       }
       else if( randIndex > 5) {
         setSquirrelImage("squir_bt.png");
         widthSqur = "230px";
       }
       else{
        setSquirrelImage("real_squir.jpg");
        widthSqur = "100px";
        randomY = 5;
        randomRotation = 0;
        randomX = 10;
       }

      setSquirrelStyle({
        position: 'absolute',
        top: `${randomY}%`,
        left: `${randomX}%`,
        width: widthSqur,
        transform: `rotate(${randomRotation}deg)`,
        transition: 'top 0.5s, left 0.5s, transform 0.5s', // Smooth transitions for fun effect
      });
          
    };

    randomPositionAndRotation();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <main>
      <div className="mb-10 text-center relative w-full h-[24vh] bg-blue-500">
      <img 
        src={squirrelImage} 
        alt="Squirrel" 
        style={squirrelStyle} 
      />
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Welcome to CS 128 live 
          </h1>
        </div>
        <div className="absolute top-0 left-10 right-10 bottom-0 h-full bg-amber/60 dark:bg-amber/40" />
      </div>
      <div className="mb-10 mx-8 flex justify-center items-center">
        <h3 className="text-xl text-center">
        This course
         can be challenging but the course staff and myself are here to help! We offer second-chance exams, flexible grading policies, 
         many office hours, and an online discussion forum. See the syllabus for more details!
        </h3>
      </div>
      <div className="mb-10 mx-8 flex justify-center items-center">
        
        <div className="border-4 border-green-500 rounded-lg w-80 h-30 mr-12">
          <div className="flex flex-col col-span-2 justify-center p-4">
            <h3 className="text-xl font-semibold text-center">Prairie Learn</h3>
            <hr className="border-gray/70 my-2" />
            <h4 className="text-lg text-center mb-2">Homeworks, labs, and MPs</h4>
          </div>
        </div>
        <div className="border-4 border-yellow-500 rounded-lg shadow-md w-80 h-30  ml-12">
          <div className="flex flex-col col-span-2 justify-center p-4">
            <h3 className="text-xl font-semibold text-center">Lecture Recordings</h3>
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
            <h4 className="text-lg text-center mb-2">Come by with any questions</h4>
          </div>
        </div>
        <div className="border-4 border-blue-500 rounded-lg w-80 h-30 ml-12">
          <div className="flex flex-col col-span-2 justify-center p-4">
            <h3 className="text-xl font-semibold text-center">Discussion Board</h3>
            <hr className="border-gray/70 my-2" />
            <h4 className="text-lg text-center mb-2">A place to post your questions</h4>
          </div>
        </div>
      </div>
    </main>
  );
}
