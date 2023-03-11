import { useSearchParams } from 'react-router-dom';
import { CharactersList } from '../../components/CharactersList/CharacterLists';
import { Loader } from '../../components/Loader/Loader';
import { useAllCharacters } from '../.././hooks/useAllCharacters';
// import { MainSection } from './Home.styled';
import { SearchBar } from '../../components/Searchbar/SearchBar';
import { fetchAllCharacters } from '../../api/rickAndMortyApi';

export const Home = () => {
  // const [characters, setCharacters] = useState([]);
  // const [query, setQuery] = useState('');

  // const characters = fetchAllCharacters();

  const { allCharacters, isLoading } = useAllCharacters();

  return (
    <>
      <SearchBar />

      {/* {isLoading && <Loader />} */}
      <CharactersList characters={allCharacters} />
      {/* <MainSection>
        <CharactersList characters={allCharacters} />
      </MainSection> */}
    </>
  );
};
export default Home;
