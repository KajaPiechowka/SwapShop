import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const LinkButton = ({ text, link, size }) => (
  <Link className={`link-button button-${size}`} to={link}>
    {text}
  </Link>
);

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'big']).isRequired,
};

export default LinkButton;
