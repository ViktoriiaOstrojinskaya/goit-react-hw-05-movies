import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const StyledLink = styled(NavLink)`
  display: flex;
  width: 70px;
  padding: 5px;

  justify-content: center;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #767573;
  margin-bottom: 10px;

  &:hover,
  &:focus {
    background-color: orange;
  }
`;
