import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { routes } from '../routes';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));

const CharactersDetails = lazy(() =>
  import('../pages/CharactersDetails/CharacterDetails')
);

export const App = () => {
  return (
    <Routes>
      <Route path={routes.HOME} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path={`${routes.CHARACTERDETAILS}/:name`}
          element={<CharactersDetails />}
        ></Route>
        <Route path="*" element={<Navigate to="/" replace={<Home />} />} />
      </Route>
    </Routes>
  );
};
