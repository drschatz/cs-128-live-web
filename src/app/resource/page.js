import Link from "next/link";

const ResourcePage = () => {
  return (
    <div className="mb-20">
      <div className="mb-8 text-center relative w-full h-[24vh] bg-stone-400">
        <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
            Resource
          </h1>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-amber/60 dark:bg-amber/40" />
      </div>

      <div className="container mx-auto px-4">
        {/* Priarie Learn Section */}
        <h1 className="text-3xl font-bold mb-8 text-accent" id="faq">
          Priarie Learn
        </h1>

        <div className="mb-10 flex space-x-6 overflow-x-auto">
          <Link
            href="https://queue.illinois.edu/q/cs128"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-4 border-pink-500 rounded-lg shadow-sm w-80 h-30 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col justify-center p-6">
                <h3 className="text-xl font-semibold text-center">
                  Priarie Learn Workspaces
                </h3>
                <hr className="border-gray/70 my-2" />
                <h4 className="text-lg text-center mb-2">
                  Come by with any questions
                </h4>
              </div>
            </div>
          </Link>

          <Link
            href="https://queue.illinois.edu/q/cs128"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-4 border-green-500 rounded-lg shadow-sm w-80 h-30 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col justify-center p-6">
                <h3 className="text-xl font-semibold text-center">
                  Priarie Learn Autograders
                </h3>
                <hr className="border-gray/70 my-2" />
                <h4 className="text-lg text-center mb-2">
                  Priarie Learn Autograders
                </h4>
              </div>
            </div>
          </Link>
        </div>

        {/* Setting up Devices Section */}
        <h1 className="text-3xl font-bold mb-8 text-accent" id="faq">
          Setting-up Devices
        </h1>

        <div className="mb-10 flex space-x-6 overflow-x-auto">
          <Link
            href="https://queue.illinois.edu/q/cs128"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="border-4 border-pink-500 rounded-lg shadow-sm w-80 h-30 flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col justify-center p-6">
                <h3 className="text-xl font-semibold text-center">
                  Setting up your local environment
                </h3>
                <hr className="border-gray/70 my-2" />
                <h4 className="text-lg text-center mb-2">
                  Come by with any questions
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="hidden sm:block w-1/12"></div>
    </div>
  );
};

export default ResourcePage;
