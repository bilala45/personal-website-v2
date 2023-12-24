import * as React from "react";
import { FaAws, FaJava, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiAmazonec2, SiExpress, SiGatsby } from "react-icons/si";
import Header from "../components/header";
import Project from "../components/project";
import PageProps from "../interfaces/PageProps";

const ProjectsPage: React.FC<PageProps> = ({ location }: PageProps) => {
  const [loadContent, setLoadContent] = React.useState(false);

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
        fromHome={location.state?.fromHome ?? false}
      ></Header>

      <div
        className={
          "max-w-xl mx-auto px-6 pt-10 pb-24 text-md" +
          opacityTransition(loadContent)
        }
      >
        {Project(
          "SkySift - mini search engine",
          "Web application that analyzes a user's top played songs to generate artist-specific song recommendations.",
          [
            { name: "Java", icon: <FaJava /> },
            { name: "EC2", icon: <SiAmazonec2 /> },
            { name: "S3", icon: <FaAws /> },
          ]
        )}

        <div className="pt-5">
          {Project(
            "distributed web crawler",
            "Web application that analyzes a user's top played songs to generate artist-specific song recommendations.",
            [{ name: "Java", icon: <FaJava /> }]
          )}
        </div>

        <div className="pt-5">
          {Project(
            "TopSpin - advanced tennis analytics app",
            "Web application that analyzes a user's top played songs to generate artist-specific song recommendations.",
            [
              { name: "Node.js", icon: <FaNodeJs /> },
              { name: "Express.js", icon: <SiExpress /> },
              { name: "React", icon: <FaReact /> },
              { name: "MySQL", icon: <GrMysql /> },
              { name: "Python", icon: <FaPython /> },
            ]
          )}
        </div>

        <div className="pt-5">
          {Project(
            "Amplify - artist recommendation engine",
            "Web application that analyzes a user's top played songs to generate artist-specific song recommendations.",
            [
              { name: "Node.js", icon: <FaNodeJs /> },
              { name: "Express.js", icon: <SiExpress /> },
              { name: "React", icon: <FaReact /> },
            ]
          )}
        </div>
        <div className="pt-5">
          {Project("personal website", "What you're looking at right now!", [
            { name: "Gatsby", icon: <SiGatsby /> },
            { name: "React", icon: <FaReact /> },
          ])}
        </div>
      </div>
    </div>
  );
};

export const Head = () => <title>Projects - Bilal Ali</title>;

export default ProjectsPage;
