export default function Home() {
  return (
    <main>
      <div className="mb-10 text-center relative w-full h-[24vh] bg-blue-500">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Welcome to CS 128 live 
          </h1>
        </div>
        <div className="absolute top-0 left-10 right-10 bottom-0 h-full bg-amber/60 dark:bg-amber/40" />
      </div>
      <div className="mb-10 mx-8 flex justify-center items-center">
        <h3 className="text-xl text-center">
        This section has 5 main components, in-person lecture, homework assignments, weekly lab assignments, 3 MPs, and 3 exams. This course
         can be challenging but the course staff and myself are here to help! We offer second-chance exams, flexible grading policies, 
         many office hours, and an online discussion forum. 
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
    </main>
  );
}
