import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Box } from './SharedLayout.styled';

const SharedLayout = () => {
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

export default SharedLayout;
