import * as React from "react";
import ProjectProps from "../interfaces/ProjectProps";

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  collaborators,
  technologies,
  link,
}: ProjectProps) => {
  return (
    <>
      <a
        className="text-md underline underline-offset-4 font-mono font-medium hover:text-indigo-500"
        href={link}
      >
        {title}
      </a>
      <div className="pt-2 text-sm italic">{technologies}</div>
      <div className="pt-1">{description}</div>
      {collaborators ? (
        <div className="pt-2 text-sm italic">
          Collaborators: {collaborators}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Project;
