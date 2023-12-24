import * as React from "react";
import { FaAws, FaJava, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiAmazonec2, SiExpress, SiGatsby } from "react-icons/si";
import Header from "../components/header";
import { contentLoadTransitionStyle } from "../styles/styles";
import type { PageProps } from "gatsby";
import Project from "../components/project";

interface ProjectsProps {
  location: PageProps["location"];
}

const ProjectsPage = ({ location }: ProjectsProps) => {
  const [loadContent, setLoadContent] = React.useState(false);

  // Trigger header translation on page load
  React.useEffect(() => {
    setLoadContent(true);
  }, []);

  return (
    <div className="min-w-screen min-h-screen bg-zinc-100">
      <Header
        loadContent={loadContent}
        fromHome={location.state.fromHome}
      ></Header>

      <div className={contentLoadTransitionStyle(loadContent)}>
        {Project(
          "SkySift - Mini Search Engine",
          "Web application that analyzes a user's top played songs to generate artist-specific song recommendations.",
          [
            { name: "Java", icon: <FaJava /> },
            { name: "EC2", icon: <SiAmazonec2 /> },
            { name: "S3", icon: <FaAws /> },
          ]
        )}

        <div className="pt-5">
          {Project(
            "Distributed Web Crawler",
            "Web application that analyzes a user's top played songs to generate artist-specific song recommendations.",
            [{ name: "Java", icon: <FaJava /> }]
          )}
        </div>

        <div className="pt-5">
          {Project(
            "TopSpin - Tennis Analytics App",
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
            "Amplify - Artist Recommendation Engine",
            "Web application that analyzes a user's top played songs to generate artist-specific song recommendations.",
            [
              { name: "Node.js", icon: <FaNodeJs /> },
              { name: "Express.js", icon: <SiExpress /> },
              { name: "React", icon: <FaReact /> },
            ]
          )}
        </div>
        <div className="pt-5">
          {Project("Personal Website", "What you're looking at right now!", [
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
