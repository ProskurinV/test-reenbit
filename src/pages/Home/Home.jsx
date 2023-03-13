import { CharactersList } from '../../components/CharactersList/CharacterLists';
import { Loader } from '../../components/Loader/Loader';
import { Container, Header } from './Home.styled';
import { fetchFilterCharacters } from '../../api/rickAndMortyApi';
import { SearchBar } from '../../components/Searchbar/SearchBar';
import { Suspense, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        setIsLoading(true);

        const response = await fetchFilterCharacters(query);

        const characters = response.results;
        const sortedCharacters = characters.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        setCharacters(sortedCharacters);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchCharacter();
  }, [query]);
  return (
    <Container>
      <Header />
      <SearchBar query={query} setQuery={setQuery} />
      {isLoading && <Loader />}
      <CharactersList characters={characters} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default Home;
