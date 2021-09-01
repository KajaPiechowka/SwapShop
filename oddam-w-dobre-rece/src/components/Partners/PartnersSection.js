import React, { useState } from 'react';
import DecorationImg from '../atoms/DecorationImg';
import partnersData from './data/PartnersData';

import PartnerWrappper from './PartnerWrapper.tsx';

const PartnersSection = () => {
  const [currentPage, setCurrentPage] = useState(partnersData.fundations);

  return (
    <section id="partners" className="container partners">
      <h3>Komu pomagamy?</h3>
      <DecorationImg />
      <div className="partners__buttons">
        <button
          type="button"
          className="partners__buttons-button"
          onClick={() => setCurrentPage(partnersData.fundations)}
        >
          Fundacjom
        </button>
        <button
          type="button"
          className="partners__buttons-button"
          onClick={() => setCurrentPage(partnersData.organisations)}
        >
          Organizacjom porządkowym
        </button>
        <button
          type="button"
          className="partners__buttons-button"
          onClick={() => setCurrentPage(partnersData.local)}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <p className="partners__paragraph">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.
      </p>
      <PartnerWrappper currentPartners={currentPage} />
    </section>
  );
};

export default PartnersSection;
