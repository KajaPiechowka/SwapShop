import React from "react";
import { Link } from "react-router-dom";

const LoginNav = () => {
  return (
    <ul className="loginWrapper">
      <li>
        <Link className="loginWrapper__link" to="/login">
          Zaloguj
        </Link>
      </li>
      <li>
        <Link className="loginWrapper__link" to="/register">
          Załóż konto
        </Link>
      </li>
    </ul>
  );
};

const HomeHeader = () => {
  return <LoginNav />;
};

export default HomeHeader;
