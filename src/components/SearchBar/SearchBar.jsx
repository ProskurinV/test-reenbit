import React, { useEffect } from 'react';
import { Wrapper, Input, Icon } from './SearchBar.styled';

export const SearchBar = ({ query, setQuery }) => {
  useEffect(() => {
    const storedQuery = localStorage.getItem('query');
    if (storedQuery) {
      setQuery(storedQuery);
    }
  }, [setQuery]);

  const handleChange = event => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    localStorage.setItem('query', newQuery);
  };

  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Filter by name..."
      />
    </Wrapper>
  );
};
