import * as React from "react";
// import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const IndexPage = () => {
  return (
    // wrapper inherits parent height (screen height)
    <div className="max-w-screen min-h-screen bg-sky-50">
      {/* <ScrollProgress /> */}
      <div className="max-w-screen-md mx-auto">
        <div className="py-28">
          <div className="px-5 pb-20 text-center">
            <h1 className="text-5xl font-semibold">Bilal Ali</h1>
            <h2 className="text-xl mt-5 tracking-wide font-light ">
              computer science @ upenn
            </h2>
            <div className="flex justify-center mt-6">
              <div className="flex p-1 px-1.5 rounded-full max-w-fit bg-sky-500">
                <a
                  className="text-3xl px-4 py-1 text-white rounded-full hover:text-black hover:bg-white"
                  href="https://github.com/bilala45"
                >
                  {/* <FaGithub /> */}
                </a>
                <a
                  className="text-3xl px-4 py-1 text-white rounded-full hover:text-black hover:bg-white"
                  href="https://www.linkedin.com/in/bilal-ali1/"
                >
                  {/* <FaLinkedinIn /> */}
                </a>
                <a
                  className="text-3xl px-4 py-1 text-white rounded-full hover:text-black hover:bg-white"
                  href="mailto: bilalali@seas.upenn.edu"
                >
                  {/* <FaEnvelope /> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
