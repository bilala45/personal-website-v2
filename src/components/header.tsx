import * as React from "react";
import { Link } from "gatsby";
import HeaderProps from "../interfaces/HeaderProps";

const Header: React.FC<HeaderProps> = ({
  fromHome,
  loadContent,
}: HeaderProps) => {
  const navStyle = () => {
    return "mx-4 text-md md:text-lg font-mono tracking-tight hover:text-indigo-500";
  };

  const headerStyle = (fromHome: boolean, loadContent: boolean) => {
    if (fromHome) {
      return `pt-20 transition-transform duration-[300ms] ease-in ${
        loadContent ? "translate-y-0" : "translate-y-[130%]"
      }`;
    } else {
      return "pt-20";
    }
  };

  return (
    <div className={headerStyle(fromHome, loadContent)}>
      <h1 className="text-5xl font-medium text-center tracking-wide">
        Bilal Ali
      </h1>

      <div className="flex justify-center mt-4 mx-auto">
        <div className={navStyle()}>
          <Link to="/" state={{ fromPage: true }}>
            home
          </Link>
        </div>
        <div className={navStyle()}>
          <Link to="/about" state={{ fromHome: false }}>
            about
          </Link>
        </div>
        <div className={navStyle()}>
          <Link to="/projects" state={{ fromHome: false }}>
            projects
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
