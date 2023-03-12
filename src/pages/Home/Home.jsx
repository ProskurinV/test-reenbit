import { useSearchParams } from 'react-router-dom';
import { CharactersList } from '../../components/CharactersList/CharacterLists';
import { Loader } from '../../components/Loader/Loader';
import { useAllCharacters } from '../.././hooks/useAllCharacters';
import { Container, Header } from './Home.styled';
import { SearchBar } from '../../components/Searchbar/SearchBar';
import { fetchAllCharacters } from '../../api/rickAndMortyApi';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  // const [characters, setCharacters] = useState([]);
  // const [query, setQuery] = useState('');

  // const characters = fetchAllCharacters();

  const { allCharacters, isLoading } = useAllCharacters();

  return (
    <Container>
      <Header />

      <SearchBar />

      {/* {isLoading && <Loader />} */}
      <CharactersList characters={allCharacters} />
      {/* <MainSection>
        <CharactersList characters={allCharacters} />
      </MainSection> */}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Home;
