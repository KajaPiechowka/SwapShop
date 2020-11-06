import React from "react";

const Column = ({ number, title, text }) => {
  return (
    <div className="three-columns__column">
      <h2>{number}</h2>
      <span>{title}</span>
      <p>{text}</p>
    </div>
  );
};
export default Column;
