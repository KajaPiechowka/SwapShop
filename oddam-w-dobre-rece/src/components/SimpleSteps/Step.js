import React from "react";
import PropTypes from 'prop-types';

const Step = ({ image, altText, title, descriptin }) => (
    <div className="simple-steps__step">
      <img src={image} alt={altText} />
      <span>{title}</span>
      <p>{descriptin}</p>
    </div>
  );

Step.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string,
  title: PropTypes.string.isRequired,
  descriptin: PropTypes.string.isRequired
}

Step.defaultProps = {
  altText: 'image',
}

export default Step;
