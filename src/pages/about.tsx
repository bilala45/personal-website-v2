import * as React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  const [loadContent, setLoadContent] = React.useState(false);

  // Trigger header translation on page load
  React.useEffect(() => {
    setLoadContent(true);
  }, []);

  const navStyle = () => {
    return "mx-4 text-lg hover:text-yellow-500";
  };

  const Header = () => {
    return (
      <div
        className={`pt-20 transition-transform duration-[300ms] ease-in ${
          loadContent ? "translate-y-0" : "translate-y-[100%]"
        }`}
      >
        <h1 className="text-6xl text-center font-medium tracking-wide text-sky-700">
          Bilal Ali
        </h1>

        <div className="flex justify-center mt-4 mx-auto text-sky-700">
          <div className={navStyle()}>
            <Link to="/">home</Link>
          </div>
          <div className={navStyle()}>
            <Link to="/about">about</Link>
          </div>
          <div className={navStyle()}>
            <Link to="/projects">projects</Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-w-screen min-h-screen bg-zinc-100">
      {Header()}

      <div
        className={`max-w-xl mx-auto px-6 pt-10 text-md transition-opacity duration-[1000ms] ease-in ${
          loadContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="font-semibold text-lg">about</div>
        <div className="pt-2">
          Hi! I'm a Master's student studying computer science at Penn. I'm
          interested in backend engineering and large scale distributed systems.
        </div>

        <div className="pt-8 font-semibold text-lg">logbook</div>
        <div className="pt-2">??? (summer 24).</div>
        <div className="pt-2">
          Wrote backend code for cloud-based microservices at Genesys (summer
          23).
        </div>
        <div className="pt-2">
          Developed a web app for a small biotech startup called Normative
          (spring 22).
        </div>
        <div className="pt-2">
          Graduated from McGill University (spring 21).
        </div>
      </div>
    </div>
  );
};

export const Head = () => <title>About - Bilal Ali</title>;

export default AboutPage;
