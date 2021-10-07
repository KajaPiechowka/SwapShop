import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import { PartnerData } from './models/PartnerData';

import Partner from './Partner';

interface PartnersProps {
  partners: PartnerData[];
}

const Partners = ({ partners }: PartnersProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [partnersPerPage, setPostsPerPage] = useState(3);

  const indexOfLastPartner = currentPage * partnersPerPage;
  const indexOfFirstPartner = indexOfLastPartner - partnersPerPage;
  const currentPartners = partners.slice(
    indexOfFirstPartner,
    indexOfLastPartner,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [partners]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <ul className="partners__list">
        {currentPartners.map((partner) => (
          <Partner
            key={partner.id}
            name={partner.name}
            description={partner.description}
            needs={partner.needs}
          />
        ))}
      </ul>
      {partners.length > 3 ? (
        <Pagination
          elementsPerPage={partnersPerPage}
          totalElements={partners.length}
          paginate={paginate}
          activePage={currentPage}
        />
      ) : null}
    </>
  );
};

export default Partners;
