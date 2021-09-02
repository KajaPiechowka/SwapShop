import React, { useState } from 'react';
import DecorationImg from '../shared/DecorationImg';
import partnersData from './data/PartnersData';
import Partners from './Partners';

const PartnersSection = () => {
  const [currentPartners, setCurrentPartners] = useState(
    partnersData.fundations,
  );

  return (
    <section id="partners" className="container partners">
      <h3>Komu pomagamy?</h3>
      <DecorationImg />
      <div className="partners__buttons">
        <button
          type="button"
          className="partners__buttons-button"
          onClick={() => setCurrentPartners(partnersData.fundations)}
        >
          Fundacjom
        </button>
        <button
          type="button"
          className="partners__buttons-button"
          onClick={() => setCurrentPartners(partnersData.organisations)}
        >
          Organizacjom porządkowym
        </button>
        <button
          type="button"
          className="partners__buttons-button"
          onClick={() => setCurrentPartners(partnersData.local)}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <p className="partners__paragraph">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <div className="partners__wrapper">
        <Partners partners={currentPartners} />
      </div>
    </section>
  );
};

export default PartnersSection;
