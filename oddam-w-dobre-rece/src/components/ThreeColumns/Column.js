import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ number, title, text }) => (
  <div className="three-columns__column">
    <h2>{number}</h2>
    <span>{title}</span>
    <p>{text}</p>
  </div>
);

Column.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Column;
