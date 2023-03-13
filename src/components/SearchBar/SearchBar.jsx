import React from 'react';

import { Wrapper, Input, Icon } from './SearchBar.styled';

export const SearchBar = ({ query, setQuery }) => {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        placeholder="Filter by name..."
      />
    </Wrapper>
  );
};
