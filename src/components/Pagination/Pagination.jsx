import React from 'react';
import { PagContainer, PagBtn } from './Pagination.styled';

export const Pagination = ({ page, setPage }) => {
  const prev = () => {
    if (page === 1) {
      return;
    }
    setPage(prevPage => prevPage - 1);
  };

  const next = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <PagContainer>
      <PagBtn onClick={prev}>Prev</PagBtn>
      <PagBtn onClick={next}>Next</PagBtn>
    </PagContainer>
  );
};
