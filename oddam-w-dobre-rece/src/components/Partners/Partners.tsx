import React from 'react';
import { PartnerData } from './models/PartnerData';

import Partner from './Partner';

interface PartnersProps {
  partners: PartnerData[];
}

const Partners = ({ partners }: PartnersProps): JSX.Element => (
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

export default Partners;
