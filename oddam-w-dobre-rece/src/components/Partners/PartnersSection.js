import React, { useState } from "react";
import DecorationImg from "../repetable/DecorationImg";
import { fundations, organisations, local } from "./PartnersData";
import PartnerWrappper from "./PartnerWrapper";

const PartnersSection = () => {
  const [currentPage, setCurrentPage] = useState(organisations);

  // const handleHangePage = (page) => {
  //   setCurrentPage(page);
  // };

  return (
    <section id="partners" className="container partners">
      <h3>Komu pomagamy?</h3>
      <DecorationImg />
      <div className="partners__buttons">
        <button
          className="partners__buttons-button"
          // onClick={handleHangePage(fundations)}
        >
          Fundacjom
        </button>
        <button
          className="partners__buttons-button"
          // onClick={handleHangePage(organisations)}
        >
          Organizacjom
          <br /> porządkowym
        </button>
        <button
          className="partners__buttons-button"
          // onClick={handleHangePage(local)}
        >
          Lokalnym
          <br /> zbiórkom
        </button>
      </div>
      <p className="partners__paragraph">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <PartnerWrappper className="partners__wrapper" data={currentPage} />
    </section>
  );
};

export default PartnersSection;
