import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { routes } from '../routes';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
// const SharedLayout = lazy(() =>
//   import('../components/SharedLayout/SharedLayout')
// );
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path={routes.MOVIES} element={<Movies />} />
          <Route
            path={`${routes.MOVIES}/:movieId`}
            element={<MovieDetails />}
          ></Route>
          <Route path="*" element={<Navigate to="/" replace={<Home />} />} />
        </Route>
      </Routes>
    </div>
  );
};
