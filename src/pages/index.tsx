import * as React from "react";
import { Link } from "gatsby";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const IndexPage: React.FC = () => {
  const [loadContent, setLoadContent] = React.useState(false);

  const iconStyle = () => {
    return "text-3xl mx-4 hover:text-indigo-500";
  };

  const navStyle = () => {
    return "mx-4 text-md md:text-lg font-mono tracking-tight hover:text-indigo-500";
  };

  const opacityTransition = (loadContent: boolean) =>
    `transition-opacity duration-[500ms] ease-in ${
      loadContent ? "opacity-100" : "opacity-0"
    }`;

  // Trigger header translation on page load
  React.useEffect(() => {
    setLoadContent(true);
  }, []);

  return (
    <div className="grid place-content-center min-w-screen min-h-screen bg-sky-100 pb-20">
      <div className={opacityTransition(loadContent)}>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-medium tracking-wide">
            Hi, I'm Bilal! 👋🏽
          </h1>
          <h2 className="text-lg md:text-xl mt-6 font-mono">
            computer science @ upenn
          </h2>
        </div>

        <div className="flex justify-center mt-8 mx-auto py-1 px-1.5">
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
        <hr className="mt-8 border-t-2 border-slate-500"></hr>

        <div className="flex justify-center mt-4 mx-auto">
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
