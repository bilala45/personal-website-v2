import * as React from "react";
import { Link } from "gatsby";
import { navStyle, headerStyle } from "../styles/styles";

// TODO fix props type
const Header = (props: any) => {
  return (
    <div className={headerStyle(props.fromHome, props.loadContent)}>
      <h1 className="text-6xl text-center font-medium tracking-wide text-sky-700">
        Bilal Ali
      </h1>

      <div className="flex justify-center mt-4 mx-auto text-sky-700">
        <div className={navStyle()}>
          <Link to="/">home</Link>
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
