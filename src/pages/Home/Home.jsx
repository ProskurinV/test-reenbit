import { Suspense, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Header, Button, BtnUp } from './Home.styled';
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

  const navigate = useNavigate();

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    });
  };

  const handelClick = () => {
    window.scroll({ top: 0, behavior: 'smooth' });
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
        <BtnUp onClick={handelClick}>Up</BtnUp>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </Suspense>
  );
};
export default Home;
