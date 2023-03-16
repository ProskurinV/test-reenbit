import { Suspense, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Header, Button } from './Home.styled';
import { CharactersList } from '../../components/CharactersList/CharacterLists';
import { Loader } from '../../../src/components/Loader/Loader';
import Search from '../../components/Searchbar/Search';
import { useAllCharacters } from '../../hooks/useAllCharacters';

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { Pagination } from '../../components/Pagination/Pagination';

const Home = () => {
  const [query, setQuery] = useState('');
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const [page, setPage] = useState(1);
  const { allCharacters, isLoading } = useAllCharacters(query, page);
  // console.log(page);
  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  return (
    <Suspense>
      <Container>
        <Header />
        <Button type="button" onClick={() => signUserOut()}>
          Sign Out
        </Button>
        <Search query={query} setQuery={setQuery} />
        {isLoading && <Loader />}
        <CharactersList characters={allCharacters} />
        <Pagination page={page} setPage={setPage} />
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Suspense>
  );
};
export default Home;
