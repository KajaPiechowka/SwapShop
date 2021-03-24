import React, { useState } from 'react';
import DecorationImg from '../repetable/DecorationImg';
import partnersData from './PartnersData';
import PartnerWrappper from './PartnerWrapper';

const PartnersSection = () => {
  const [currentPage, setCurrentPage] = useState('fundations');

  // const handleHangePage = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <section id="partners" className="container partners">
      <h3>Komu pomagamy?</h3>
      <DecorationImg />
      <div className="partners__buttons">
        <button
          type="button"
          className="partners__buttons-button"
          // onClick={handleHangePage('fundations')}
        >
          Fundacjom
        </button>
        <button
          type="button"
          className="partners__buttons-button"
          // onClick={handleHangePage('organisations')}
        >
          Organizacjom porządkowym
        </button>
        <button
          type="button"
          className="partners__buttons-button"
          // onClick={handleHangePage('local')}
        >
          Lokalnym zbiórkom
        </button>
      </div>
      <p className="partners__paragraph">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <PartnerWrappper
        className="partners__wrapper"
        data={partnersData[currentPage]}
      />
    </section>
  );
};

export default PartnersSection;
