import React from 'react';
import { PropsPagination } from '../../types/types';

const Pagination: React.FC<PropsPagination> = ({
  page,
  lastVisiblePage,
  setPage,
}) => {
  return (
    <div className="pagination__wrapper">
      {page === 1 ? (
        <button
          disabled
          className="button__pagination"
          onClick={() => setPage(1)}
        >
          &lt;&lt;
        </button>
      ) : (
        <button className="button__pagination" onClick={() => setPage(1)}>
          &lt;&lt;
        </button>
      )}
      {page === 1 ? (
        <button
          disabled
          className="button__pagination"
          onClick={() => setPage(page - 1)}
        >
          &lt;
        </button>
      ) : (
        <button
          className="button__pagination"
          onClick={() => setPage(page - 1)}
        >
          &lt;
        </button>
      )}
      <button className="button__pagination-number">{page}</button>
      {page === lastVisiblePage ? (
        <button
          disabled
          className="button__pagination"
          onClick={() => setPage(page + 1)}
        >
          &gt;
        </button>
      ) : (
        <button
          className="button__pagination"
          onClick={() => setPage(page + 1)}
        >
          &gt;
        </button>
      )}
      {page === lastVisiblePage ? (
        <button
          disabled
          className="button__pagination"
          onClick={() => setPage(lastVisiblePage)}
        >
          &gt;&gt;
        </button>
      ) : (
        <button
          className="button__pagination"
          onClick={() => setPage(lastVisiblePage)}
        >
          &gt;&gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;
