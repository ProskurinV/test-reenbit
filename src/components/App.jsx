import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from '../pages/Home/Home';
import { routes } from '../routes';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={routes.HOME} element={<SharedLayout />} />
        <Route index element={<Home />} />
        {/* <Route path="/details" element={<DetailPage />} /> */}
        <Route path="*" element={<Navigate to="/" replace={<HomePage />} />} />
      </Routes>
    </div>
  );
};
