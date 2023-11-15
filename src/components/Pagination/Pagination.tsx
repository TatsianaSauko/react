import React from 'react';
import { useAppSelector } from '../../hooks/redux';
import { useActions } from '../../hooks/actions';

const Pagination: React.FC = () => {
  const { page, lastVisiblePage } = useAppSelector((state) => state.anime);
  const { changePage } = useActions();

  return (
    <div className="pagination__wrapper">
      {page === 1 ? (
        <button
          disabled
          className="button__pagination"
          onClick={() => changePage(1)}
        >
          &lt;&lt;
        </button>
      ) : (
        <button className="button__pagination" onClick={() => changePage(1)}>
          &lt;&lt;
        </button>
      )}
      {page === 1 ? (
        <button
          disabled
          className="button__pagination"
          onClick={() => changePage(page - 1)}
        >
          &lt;
        </button>
      ) : (
        <button
          className="button__pagination"
          onClick={() => changePage(page - 1)}
        >
          &lt;
        </button>
      )}
      <button className="button__pagination-number">{page}</button>
      {page === lastVisiblePage ? (
        <button
          disabled
          className="button__pagination"
          onClick={() => changePage(page + 1)}
        >
          &gt;
        </button>
      ) : (
        <button
          className="button__pagination"
          onClick={() => changePage(page + 1)}
        >
          &gt;
        </button>
      )}
      {page === lastVisiblePage ? (
        <button
          disabled
          className="button__pagination"
          onClick={() => changePage(lastVisiblePage)}
        >
          &gt;&gt;
        </button>
      ) : (
        <button
          className="button__pagination"
          onClick={() => changePage(lastVisiblePage)}
        >
          &gt;&gt;
        </button>
      )}
    </div>
  );
};

export default Pagination;
