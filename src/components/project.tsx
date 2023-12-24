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
        <div className="flex flex-wrap">
          {technologies.map((technology, index) => (
            <span key={index} className="pt-1">
              <TechIcon
                name={technology.name}
                icon={technology.icon}
              ></TechIcon>
            </span>
          ))}
        </div>
      </div>
      <div className="pt-3">{description}</div>
    </>
  );
};

export default Project;
