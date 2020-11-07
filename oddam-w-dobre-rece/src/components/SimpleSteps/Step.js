import React from "react";

const Step = ({ image, altText, title, descriptin }) => {
  return (
    <div className="simple-steps__step">
      <img src={image} alt={altText} />
      <span>{title}</span>
      <p>{descriptin}</p>
    </div>
  );
};

export default Step;
