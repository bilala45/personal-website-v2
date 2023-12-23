import * as React from "react";
import { Link } from "gatsby";

const AboutPage = () => {
  const [translate, setTranslate] = React.useState(false);

  // Trigger header translation on page load
  React.useEffect(() => {
    setTranslate(true);
  }, []);

  const navStyle = () => {
    return "mx-4 text-lg hover:text-yellow-500";
  };

  const Header = () => {
    return (
      <div
        className={`transition-transform duration-1000 ease-in-out min-h-screen pt-10 ${
          translate ? "translate-y-0" : "translate-y-1/2"
        }`}
      >
        <h1 className="text-5xl text-center font-medium tracking-wide text-sky-700">
          Bilal Ali
        </h1>

        <div className="flex justify-center mt-2 mx-auto text-sky-700">
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

      {/* <div className="max-w-xl mx-6 text-md">
        <div className="font-semibold text-lg">about</div>
        <div className="pt-3">
          Hi! I'm a Master's student studying computer science at Penn. I'm
          interested in backend engineering and large scale distributed systems.
        </div>

        <div className="pt-8 font-semibold text-lg">what im up to</div>
        <div className="pt-3">??? (summer 24).</div>
        <div className="pt-3">
          Wrote backend code for cloud-based microservices at Genesys (summer
          23).
        </div>
        <div className="pt-3">
          Developed a web app for a small biotech startup called Normative
          (spring 22).
        </div>
        <div className="pt-3">
          Graduated from McGill University (spring 21).
        </div>
      </div> */}
    </div>
  );
};

export default AboutPage;
