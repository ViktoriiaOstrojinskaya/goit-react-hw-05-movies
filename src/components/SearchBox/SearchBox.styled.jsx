import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  height: 25px;
  padding: 5px;
  border-radius: 4px;
  border: 1px solid black;
  font: inherit;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 55px;
  height: 38px;
  padding: 3px;
  margin-left: 3px;

  justify-content: center;
  border: none;
  border-radius: 4px;
  text-decoration: none;
  background-color: #d5d0c6;

  &:hover,
  &:focus {
    background-color: orange;
    color: white;
  }
`;
