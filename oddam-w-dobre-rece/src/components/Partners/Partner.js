import React from "react";
import PropTypes from 'prop-types';

const Partner = ({ name, description, needs }) => (
    <li className="partners__partner">
      <div className="partners__partner-left">
        <span>{name}</span>
        <p>{description}</p>
      </div>
      <span className="partners__partner-right">{needs}</span>
    </li>
  );

Partner.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  needs: PropTypes.string.isRequired
}

export default Partner;
