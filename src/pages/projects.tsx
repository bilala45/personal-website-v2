import * as React from "react";
import Header from "../components/header";
import Project from "../components/project";
import PageProps from "../interfaces/PageProps";

const ProjectsPage: React.FC<PageProps> = ({ location }: PageProps) => {
  const [loadContent, setLoadContent] = React.useState(false);

  React.useEffect(() => {
    setLoadContent(true);
  }, []);

  const opacityTransition = (loadContent: boolean) =>
    `transition-opacity duration-[300ms] ease-in ${
      loadContent ? "opacity-100" : "opacity-0"
    }`;

  return (
    <div className="min-w-screen min-h-screen bg-sky-100">
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
        {/* <div className="">
          <Project
            title="PennCloud"
            description="Fault-tolerant cloud application with custom web server, key-value store, and email client."
            technologies="C++"
          ></Project>
        </div> */}

        <div className="">
          <Project
            title="SkySift"
            description="Scalable, fault-tolerant search engine with distributed web crawler, web server, key-value store, and analytics engine."
            technologies="Java, AWS (EC2, S3)"
          ></Project>
        </div>

        <div className="pt-8">
          <Project
            title="TopSpin"
            description="Advanced tennis analytics app."
            technologies="Node.js, Express, MySQL, Python, React"
          ></Project>
        </div>

        <div className="pt-8">
          <Project
            title="Amplify"
            description="Artist-specific music recommendation engine powered by Spotify."
            technologies="Node.js, Express, React"
          ></Project>
        </div>

        <div className="pt-8">
          <Project
            title="Personal website"
            description="What you're looking at right now!"
            technologies="Gatsby, TypeScript, React"
          ></Project>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <title>Projects - Bilal Ali</title>;

export default ProjectsPage;
