import * as React from "react";

const Project = (
  title: string,
  description: string,
  technologies: { name: string; icon: React.ReactElement }[]
) => {
  const TechIcon = (technology: string, Icon: React.ReactElement) => {
    return (
      <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300 sm:mt-0 mt-2">
        {React.cloneElement(Icon, { className: "mr-1" })}
        {technology}
      </span>
    );
  };

  return (
    <>
      <div className="text-lg font-semibold">
        {title}
        {technologies.map((technology, index) => (
          <span
            key={index}
            className="flex flex-wrap sm:pt-3 pt-1 text-black text-sm font-normal"
          >
            {TechIcon(technology.name, technology.icon)}
          </span>
        ))}
      </div>
      <div className="pt-3">{description}</div>
    </>
  );
};

export default Project;
