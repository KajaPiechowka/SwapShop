import React from "react";

import { Link } from "react-router-dom";
import DecorationImg from "../repetable/DecorationImg";

const HomeTitle = () => {
  return (
    <div className="home-page-title">
      <h1>
        Zacznij pomagać! <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <DecorationImg />
      <div>
        <Link className="home-page-title__link link-button" to="/login">
          Oddaj
          <br /> rzeczy
        </Link>
        <Link className="home-page-title__link link-button" to="/login">
          zorganizuj
          <br /> zbiórkę
        </Link>
      </div>
    </div>
  );
};

export default HomeTitle;
