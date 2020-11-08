import React from "react";

const Partner = ({ name, description, needs }) => {
  return (
    <li className="partners__partner">
      <div className="partners__partner-left">
        <span>{name}</span>
        <p>{description}</p>
      </div>
      <span className="partners__partner-right">{needs}</span>
    </li>
  );
};

export default Partner;
