import React from "react";
import DecorationImg from "../repetable/DecorationImg";
import { Link } from "react-router-dom";

const SimpleSteps = () => {
  return (
    <section className="container simple-steps">
      <div className="simple-steps__header">
        <h4>Wystarczą 4 proste kroki</h4>
        <DecorationImg />
      </div>
      <div className="simple-steps__steps">tutaj będą kroki</div>
      <div className="simple-steps__link">
        <Link className="link-button">
          Oddaj
          <br /> Rzeczy
        </Link>
      </div>
    </section>
  );
};

export default SimpleSteps;
