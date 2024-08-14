import StaffCard from "../support/StaffCard";

const PeoplePage = () => {
  return (
    <div>
      <div className="mb-8 text-center relative w-full h-[24vh] bg-pink-600 ">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            People
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
      </div>
      <div className="container">
        <h1 className="text-3xl font-bold mb-4 text-accent" id="contact">
          Instructor
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StaffCard />
        </div>
      </div>
      <div className="container">
        <h1 className="text-3xl font-bold mb-4 text-accent" id="contact">
          Staff
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StaffCard />
          <StaffCard />
          <StaffCard />
        </div>
      </div>
    </div>
  );
};

export default PeoplePage;
