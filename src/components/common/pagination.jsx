import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  let pages = _.range(1, pagesCount + 1);
  pages = pages.map(page => {
    return (
      <li
        key={page}
        className={page === currentPage ? "page-item active" : "page-item"}
      >
        <a className="page-link" onClick={() => onPageChange(page)}>
          {page}
        </a>
      </li>
    );
  });
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">{pages}</ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
