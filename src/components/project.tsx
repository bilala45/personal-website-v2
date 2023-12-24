import * as React from "react";
import ProjectProps from "../interfaces/ProjectProps";
import TechIcon from "./techicon";

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
}: ProjectProps) => {
  return (
    <>
      <div className="text-lg font-semibold">
        {title}
        {technologies.map((technology, index) => (
          <span
            key={index}
            className="flex flex-wrap sm:pt-3 pt-1 text-black text-sm font-normal"
          >
            <TechIcon name={technology.name} icon={technology.icon}></TechIcon>
          </span>
        ))}
      </div>
      <div className="pt-3">{description}</div>
    </>
  );
};

export default Project;
