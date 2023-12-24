import * as React from "react";
import { Link } from "gatsby";
import { navStyle } from "../styles/styles";

// TODO fix type of props
const Header = (props: any) => {
  return (
    <div
      className={`pt-20 transition-transform duration-[300ms] ease-in ${
        props.loadContent ? "translate-y-0" : "translate-y-[100%]"
      }`}
    >
      <h1 className="text-6xl text-center font-medium tracking-wide text-sky-700">
        Bilal Ali
      </h1>

      <div className="flex justify-center mt-4 mx-auto text-sky-700">
        <div className={navStyle()}>
          <Link to="/">home</Link>
        </div>
        <div className={navStyle()}>
          <Link to="/about">about</Link>
        </div>
        <div className={navStyle()}>
          <Link to="/projects">projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
