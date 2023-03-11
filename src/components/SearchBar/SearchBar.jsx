import { Suspense } from 'react';
import React from 'react';

import { Wrapper, Input, Icon } from './SearchBar.styled';
import { Outlet } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { useSearchParams } from 'react-router-dom';
// import { IconSearch } from '../../images/IconSearch.png';

// const SearchBar = ({ onSubmit }) => {
//   const [searchParams] = useSearchParams();

//   const handleSubmit = async (values, actions) => {
//     await onSubmit(values);

//     actions.setSubmitting(false);
//   };
//   return (
//     <Search as="main">
//       <Formik
//         initialValues={{ query: searchParams.get('query') || '' }}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <FormEl>
//             <BtnSearch type="submit" disabled={isSubmitting}>
//               <AiOutlineSearch size={20} />
//             </BtnSearch>

//             <Input
//               name="query"
//               type="text"
//               autoComplete="off"
//               autoFocus
//               placeholder="Search movies"
//             />
//           </FormEl>
//         )}
//       </Formik>
//       <Suspense fallback={<Loader />}>
//         <Outlet />
//       </Suspense>
//     </Search>
//   );
// };
// export default SearchBar;

// ============
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
