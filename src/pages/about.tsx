import * as React from "react";
import Header from "../components/header";
import type { PageProps } from "gatsby";

interface AboutProps {
  location: PageProps["location"];
}

const AboutPage = ({ location }: AboutProps) => {
  const [loadContent, setLoadContent] = React.useState(false);

  // Trigger header translation on page load
  React.useEffect(() => {
    setLoadContent(true);
  }, []);

  const opacityTransition = (loadContent: boolean) =>
    `transition-opacity duration-[1000ms] ease-in ${
      loadContent ? "opacity-100" : "opacity-0"
    }`;

  return (
    <div className="min-w-screen min-h-screen bg-zinc-100">
      <Header
        loadContent={loadContent}
        fromHome={location.state.fromHome}
      ></Header>

      <div
        className={
          "max-w-xl mx-auto px-6 pt-10 text-md" + opacityTransition(loadContent)
        }
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
