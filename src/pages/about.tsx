import * as React from "react";

const AboutPage = () => {
  return (
    <div className="grid place-content-center min-w-screen min-h-screen bg-zinc-100">
      <div className="max-w-xl mx-6 text-md">
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
      </div>
    </div>
  );
};

export default AboutPage;
