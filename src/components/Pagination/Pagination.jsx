import React from 'react';

export const Pagination = ({ page, setPage }) => {
  let prev = () => {
    if (page === 1) {
      return;
    }
    setPage(prevPage => prevPage - 1);
  };

  let next = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div>
      <button onClick={prev}>Prew</button>
      <button onClick={next}>Next</button>
    </div>
  );
};
