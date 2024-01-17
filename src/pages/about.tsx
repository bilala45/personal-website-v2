import * as React from "react";
import Header from "../components/header";
import PageProps from "../interfaces/PageProps";
import Me from "../images/Me.jpg";

const AboutPage: React.FC<PageProps> = ({ location }: PageProps) => {
  const [loadContent, setLoadContent] = React.useState(false);

  // Trigger header translation on page load
  React.useEffect(() => {
    setLoadContent(true);
  }, []);

  const opacityTransition = (loadContent: boolean) =>
    `transition-opacity duration-[300ms] ease-in ${
      loadContent ? "opacity-100" : "opacity-0"
    }`;

  const headerStyle = () => "font-mono font-medium text-lg";

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
        <div className={headerStyle()}>about</div>

        <div className="md:hidden pt-2">
          <img src={Me} width="180"></img>
          <div className="pt-2">
            Hey! I'm a Master's student studying computer science at the
            University of Pennsylvania, graduating May 2025.
          </div>
          <div className="pt-2">
            I'm curious about software systems and the challenges associated
            with building them at scale. In my free time, I enjoy cooking and
            lifting!
          </div>
        </div>

        <div className="hidden md:grid grid-cols-5 pt-2">
          <div className="col-span-3">
            <div>
              Hey! I'm a Master's student studying computer science at the
              University of Pennsylvania, graduating May 2025.
            </div>
            <div className="pt-2">
              I'm curious about software systems and the challenges associated
              with building them at scale. In my free time, I enjoy cooking and
              lifting!
            </div>
          </div>
          <img src={Me} width="180" className="col-span-2 ml-auto mr-0"></img>
        </div>

        <div className={"pt-8 " + headerStyle()}>interests</div>
        <div className="pt-2">
          <span className="pr-3">-</span>backend + infrastructure engineering
        </div>
        <div>
          <span className="pr-3">-</span>api development
        </div>
        <div>
          <span className="pr-3">-</span>distributed systems
        </div>

        <div className={"pt-8 " + headerStyle()}>logbook</div>
        <div className="grid grid-cols-10 gap-y-4 pt-2">
          <div className="col-span-2">summer 2024</div>
          <div className="col-span-1 text-right pr-3">-</div>
          <div className="col-span-7">???</div>

          <div className="col-span-2">nov 2023</div>
          <div className="col-span-1 text-right pr-3">-</div>
          <div className="col-span-7">ran my first half marathon!</div>

          <div className="col-span-2">fall 2023</div>
          <div className="col-span-1 text-right pr-3">-</div>
          <div className="col-span-7">
            TA'd an intro to software development course
          </div>

          <div className="col-span-2">summer 2023</div>
          <div className="col-span-1 text-right pr-3">-</div>
          <div className="col-span-7">
            interned as a swe at genesys, writing backend code for cloud-based
            microservices
          </div>

          <div className="col-span-2">sept 2022</div>
          <div className="col-span-1 text-right pr-3">
            <div>-</div>
            <div>-</div>
          </div>
          <div className="col-span-7">
            <div>left canada and moved to philly!</div>
            <div>started my master's degree at upenn</div>
          </div>

          <div className="col-span-2">spring 2022</div>
          <div className="col-span-1 text-right pr-3">-</div>
          <div className="col-span-7">
            helped develop a web app at normative (biotech startup)
          </div>

          <div className="col-span-2">june 2021</div>
          <div className="col-span-1 text-right pr-3">-</div>
          <div className="col-span-7">graduated from mcgill university</div>
        </div>
      </div>
    </div>
  );
};

export const Head = () => <title>About - Bilal Ali</title>;

export default AboutPage;
