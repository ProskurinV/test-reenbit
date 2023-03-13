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
// =================
// import { useState } from 'react';
// import { Input } from './SearchBar.styled';

// export const SearchBar = ({ onSearch }) => {
//   const [value, setValue] = useState('');

//   const handleChange = event => {
//     setValue(event.target.value);
//   };

//   const handleKeyDown = event => {
//     if (event.key === 'Enter') {
//       onSearch(value);
//     }
//   };

//   return (
//     <Input
//       type="text"
//       placeholder="Search for a character..."
//       value={value}
//       onChange={handleChange}
//       onKeyDown={handleKeyDown}
//     />
//   );
// };
