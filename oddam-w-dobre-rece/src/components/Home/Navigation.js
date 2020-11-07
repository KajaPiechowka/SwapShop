import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navigation = () => {
  return (
    <ul className="menu">
      <li className="menu__start">
        <Link to="start">Start</Link>
      </li>
      <li>
        <Link to="what-about">O co hodzi?</Link>
      </li>
      <li>
        <Link to="about-us">O nas</Link>
      </li>
      <li>
        <Link to="partners">Fundacje i organizacje</Link>
      </li>
      <li>
        <Link to="contact">Kontakt</Link>
      </li>
    </ul>
  );
};

export default Navigation;
