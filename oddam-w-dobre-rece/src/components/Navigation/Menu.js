import React from 'react';
import { Link } from 'react-scroll';

const Menu = () => (
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

export default Menu;
