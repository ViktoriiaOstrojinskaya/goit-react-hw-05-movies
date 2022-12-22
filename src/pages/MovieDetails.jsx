import { useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  return <p>Now showing movie with id - {movieId}</p>;
};
