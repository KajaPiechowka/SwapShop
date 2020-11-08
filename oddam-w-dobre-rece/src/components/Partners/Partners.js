import React from "react";
import Partner from "./Partner";

const Partners = ({ partners }) => {
  return (
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
};

export default Partners;
