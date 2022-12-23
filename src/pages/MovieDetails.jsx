import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from '../components/services/api';
import { MovieDiscription } from '../components/MovieDiscription/MovieDiscription';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const renderMovieDetail = async () => {
      try {
        const movieDetails = await getMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      }
    };

    renderMovieDetail();
  }, [movieId]);

  return (
    <main>
      <MovieDiscription movieDetails={movieDetails} />
    </main>
  );
};
