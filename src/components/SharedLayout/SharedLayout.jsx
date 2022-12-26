import { Outlet } from 'react-router-dom';
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
      <Outlet />
    </Box>
  );
};
