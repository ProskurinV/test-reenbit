import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { routes } from '../routes';
import { Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));

const CharactersDetails = lazy(() =>
  import('../pages/CharactersDetails/CharacterDetails')
);

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route index element={<Home />} />
        <Route
          path={`${routes.CHARACTERDETAILS}/:id`}
          element={<CharactersDetails />}
        ></Route>
        <Route
          path="*"
          element={<Navigate to={routes.HOME} replace={<Home />} />}
        />
      </Routes>
    </Suspense>
  );
};
