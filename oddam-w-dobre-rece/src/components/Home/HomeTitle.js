import React from "react";
import Decoration from "../../assets/icons/Decoration.svg";
import { Link } from "react-router-dom";

const HomeTitle = () => {
  return (
    <div className="home-page-title">
      <h1>
        Zacznij pomagać! <br />
        Oddaj niechciane rzeczy w zaufane ręce
      </h1>
      <img src={Decoration} alt="decoration"></img>
      <div>
        <button>
          Oddaj
          <br /> rzeczy
        </button>
        <button>
          zorganizuj
          <br /> zbiórkę
        </button>
      </div>
    </div>
  );
};

export default HomeTitle;
