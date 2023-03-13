import { Suspense } from 'react';
import React from 'react';

import { Wrapper, Input, Icon } from './SearchBar.styled';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { useSearchParams } from 'react-router-dom';

export const SearchBar = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
        placeholder="Filter by name..."
      />
    </Wrapper>
  );
};
