import React from "react";
import PropTypes from 'prop-types';

import Partner from "./Partner";

const Partners = ({ partners }) => (
    <ul className="partners__list">
      {partners.map((partner) => (
        <Partner
          key={partner.id}
          name={partner.name}
          description={partner.description}
          needs={partner.needs}
        />
      ))}
    </ul>
  );

Partners.propTypes = {
  partners: PropTypes.array.isRequired,
}

export default Partners;
