import { Routes, Route, Navigate } from 'react-router-dom';
import React, { lazy, useState } from 'react';
import { routes } from '../routes';
import { Suspense } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const CharactersDetails = lazy(() =>
  import('../pages/CharactersDetails/CharacterDetails')
);
const Login = lazy(() => import('../pages/Login/Login'));

export const App = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  if (!isAuth) {
    return <Login setIsAuth={setIsAuth} />;
  }
  return (
    <Suspense>
      <Routes>
        <Route path={routes.LOGIN} element={<Login setIsAuth={setIsAuth} />} />
        <Route path={routes.HOME} element={<Home setIsAuth={setIsAuth} />} />
        <Route index element={<Home />} />
        <Route
          path={`${routes.CHARACTERDETAILS}/:id`}
          element={<CharactersDetails setIsAuth={setIsAuth} />}
        ></Route>
        <Route
          path="*"
          element={<Navigate to={routes.HOME} replace={<Home />} />}
        />
      </Routes>
    </Suspense>
  );
};
