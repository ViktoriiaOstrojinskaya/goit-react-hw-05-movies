import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
//import Loader from 'components/Loader/Loader';
import { StyledLink, Header, Box } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Box>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};
