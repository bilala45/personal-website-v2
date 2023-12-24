import * as React from "react";
import { Link } from "gatsby";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { navStyle, iconStyle } from "../styles/styles";

const IndexPage = () => {
  return (
    <div className="grid place-content-center min-w-screen min-h-screen bg-zinc-100">
      <div className="mb-20">
        <div className="text-center">
          <h1 className="text-6xl font-medium tracking-wide text-sky-700">
            Bilal Ali
          </h1>
          <h2 className="text-xl mt-5 tracking-wide font-light">
            computer science @ upenn
          </h2>
        </div>

        <div className="flex justify-center mt-6 mx-auto py-1 px-1.5">
          <a className={iconStyle()} href="https://github.com/bilala45">
            <FiGithub />
          </a>
          <a
            className={iconStyle()}
            href="https://www.linkedin.com/in/bilal-ali1/"
          >
            <FiLinkedin />
          </a>
          <a className={iconStyle()} href="mailto: bilalali@seas.upenn.edu">
            <FiMail />
          </a>
        </div>
        <hr className="mt-8 border-t-2"></hr>

        <div className="flex justify-center mt-4 mx-auto text-sky-700">
          <div className={navStyle()}>
            <Link to="/">home</Link>
          </div>
          <div className={navStyle()}>
            <Link to="/about" state={{ fromHome: true }}>
              about
            </Link>
          </div>
          <div className={navStyle()}>
            <Link to="/projects" state={{ fromHome: true }}>
              projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <title>Bilal Ali</title>;

export default IndexPage;
