import * as React from "react";

const AboutPage = () => {
  return (
    <div className="grid place-content-center min-w-screen min-h-screen bg-zinc-100 text-md">
      <div>
        Hi! I'm a Master's student at the University of Pennsylvania studying
        computer science. I'm interested in backend engineering and large scale
        distributed systems.
      </div>

      <div className="pt-5 font-semibold text-lg">previously</div>
      <div className="pt-3">
        Spent Summer 2023 writing backend code for cloud-based microservices at
        Genesys.
      </div>
      <div className="pt-2">
        Helped develop a web app for a small biotech startup called Normative.
      </div>
      <div className="pt-2">Graduated from McGill University in 2021.</div>

      <div className="pt-5 font-semibold text-lg">interests</div>
      <div className="pt-3">
        backend engineering, software system design, distributed systems
      </div>
    </div>
  );
};

export default AboutPage;
