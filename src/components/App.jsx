import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { routes } from '../routes';
import { Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));

const CharactersDetails = lazy(() =>
  import('../pages/CharactersDetails/CharacterDetails')
);

const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
        <Route index element={<Home />} />
        <Route
          path={`${routes.CHARACTERDETAILS}/:id`}
          element={<CharactersDetails />}
        ></Route>
        {/* <Route
          path="*"
          element={<Navigate to={routes.HOME} replace={<Home />} />}
        /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
