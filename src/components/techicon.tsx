import * as React from "react";
import TechIconProps from "../interfaces/TechIconProps";

const TechIcon: React.FC<TechIconProps> = ({ name, icon }: TechIconProps) => {
  return (
    <span className="flex items-center text-sm font-normal px-1.5 mr-2 w-fit rounded-sm bg-slate-300">
      {React.cloneElement(icon, { className: "mr-1" })}
      {name}
    </span>
  );
};

export default TechIcon;
