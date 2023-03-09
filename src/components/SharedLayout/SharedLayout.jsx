import { Outlet } from 'react-router-dom';
import { Container, Header } from '../SharedLayout/SharedLayout.styled';
import { Suspense } from 'react';
import { SearchBar } from '../SearchBar/SearchBar';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <h1>jdhsladlsakdla</h1>
      </Header>
      <SearchBar
      // value={ } onChange={ }
      />
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};
