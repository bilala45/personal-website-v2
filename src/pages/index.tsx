import * as React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const IndexPage = () => {
  const iconStyle = () => {
    return "text-3xl px-4 py-1 text-white rounded-full hover:text-black hover:bg-white";
  };

  return (
    <div className="grid place-content-center min-w-screen min-h-screen bg-sky-50">
      {/* <ScrollProgress /> */}

      <div className="mb-20">
        <div className="text-center">
          <h1 className="text-5xl font-semibold">Bilal Ali</h1>
          <h2 className="text-xl mt-5 tracking-wide font-light">
            computer science @ upenn
          </h2>
        </div>

        <div className="flex justify-center mt-6">
          <div className="flex p-1 px-1.5 rounded-full max-w-fit bg-sky-500">
            <a className={iconStyle()} href="https://github.com/bilala45">
              <FaGithub />
            </a>
            <a
              className={iconStyle()}
              href="https://www.linkedin.com/in/bilal-ali1/"
            >
              <FaLinkedinIn />
            </a>
            <a className={iconStyle()} href="mailto: bilalali@seas.upenn.edu">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <title>Bilal Ali</title>;

export default IndexPage;
