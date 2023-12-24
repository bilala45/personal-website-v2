import * as React from "react";
import TechIconProps from "../interfaces/TechIconProps";

const TechIcon: React.FC<TechIconProps> = ({ name, icon }: TechIconProps) => {
  return (
    <span className="flex items-center px-1.5 mr-1.5 w-fit rounded-md bg-slate-300 sm:mt-0 mt-2">
      {React.cloneElement(icon, { className: "mr-1" })}
      {name}
    </span>
  );
};

export default TechIcon;
