// import { useSearchParams } from 'react-router-dom';
// import { CharactersList } from '../../components/CharactersList/CharacterLists';
// import { Loader } from '../../components/Loader/Loader';
// import { useAllCharacters } from '../.././hooks/useAllCharacters';
// import { Container, Header } from './Home.styled';
// import { SearchBar } from '../../components/Searchbar/SearchBar';
// import { fetchFilterCharacters } from '../../api/rickAndMortyApi';
// import { Suspense, useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';

// export const Home = () => {
//   const { allCharacters, isLoading } = useAllCharacters();

//   return (
//     <Container>
//       <Header />

//       <SearchBar />

//       {isLoading && <Loader />}
//       <CharactersList characters={allCharacters} />

//       <Suspense fallback={<Loader />}>
//         <Outlet />
//       </Suspense>
//     </Container>
//   );
// };
// export default Home;
// ==============================
import { useSearchParams } from 'react-router-dom';
import { CharactersList } from '../../components/CharactersList/CharacterLists';
import { Loader } from '../../components/Loader/Loader';
import { useAllCharacters } from '../.././hooks/useAllCharacters';
import { Container, Header } from './Home.styled';
import axios from 'axios';

import { SearchBar } from '../../components/Searchbar/SearchBar';
import { fetchFilterCharacters } from '../../api/rickAndMortyApi';
import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Wrapper,
  Input,
  Icon,
} from '../../components/Searchbar/SearchBar.styled';

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        const characters = data.results;

        const sortedCharacters = characters.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setCharacters(sortedCharacters);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [query]);
  return (
    <Container>
      <Header />

      {/* <SearchBar /> */}
      <Wrapper>
        <Icon />
        <Input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Filter by name..."
        />
      </Wrapper>

      {/* {isLoading && <Loader />} */}
      <CharactersList characters={characters} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Home;
