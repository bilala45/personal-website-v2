import * as React from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const IndexPage = () => {
  const iconStyle = () => {
    return "text-3xl px-4 py-1 text-white rounded-full hover:text-black hover:bg-white";
  };

  const navStyle = () => {
    return "text-lg px-4 hover:text-sky-500 cursor-pointer";
  };

  return (
    <div className="grid place-content-center min-w-screen min-h-screen bg-sky-50">
      {/* <ScrollProgress /> */}
      <div className="mb-20">
        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-wide">Bilal Ali</h1>
          <h2 className="text-xl mt-5 tracking-wide font-light">
            computer science @ upenn
          </h2>
        </div>

        <div className="flex justify-center mt-6 mx-auto py-1 px-1.5 rounded-full max-w-fit bg-sky-500">
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

        <hr className="mt-10 border-t-2 font-bold"></hr>

        <div className="flex justify-center mt-6 mx-auto max-w-fit">
          <div className={navStyle()}>home</div>
          <div className={navStyle()}>about</div>
          <div className={navStyle()}>projects</div>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <title>Bilal Ali</title>;

export default IndexPage;
