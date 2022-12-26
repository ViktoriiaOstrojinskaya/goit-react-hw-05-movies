import styled from '@emotion/styled';

export const MovieDescriptionBox = styled.div`
  display: flex;
`;

export const TextBox = styled.div`
  display: block;
  padding: 20px;
`;

export const TitleMovie = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

export const TitleDescription = styled.h3`
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-style: italic;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
