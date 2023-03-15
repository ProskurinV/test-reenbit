import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header } from './Home.styled';
import { CharactersList } from '../../components/CharactersList/CharacterLists';
import { Loader } from '../../../src/components/Loader/Loader';
import SearchBar from '../../../src/components/Searchbar/SearchBar';
import { useAllCharacters } from '../../hooks/useAllCharacters';

const Home = () => {
  const [query, setQuery] = useState('');

  const { allCharacters, isLoading } = useAllCharacters(query);

  return (
    <Container>
      <Header />
      <SearchBar query={query} setQuery={setQuery} />
      {isLoading && <Loader />}
      <CharactersList characters={allCharacters} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Home;
