import React from 'react';
import ClassNames from 'classnames';

interface PaginationProps {
  elementsPerPage: number;
  totalElements: number;
  activePage: number;
  paginate: (number: number) => void;
}

const Pagination = ({
  elementsPerPage,
  totalElements,
  paginate,
  activePage,
}: PaginationProps): JSX.Element => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="pagination__list">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination__list-item">
            <button
              onClick={() => paginate(number)}
              type="button"
              className={ClassNames('pagination__button', {
                active: number === activePage,
              })}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
