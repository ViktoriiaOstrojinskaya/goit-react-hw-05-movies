import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieDescription } from '../components/MovieDescription';
import { Loader } from 'components/Loader/Loader';
import * as API from '../components/services/api';

export const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const renderMovieDetail = async () => {
      setLoading(true);
      try {
        const results = await API.getMovieDetails(movieId);
        if (!results) {
          setError('Sorry, we don`t have information of this movie 😓');
        }
        setMovieDetails(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    renderMovieDetail();
  }, [movieId]);

  return (
    <div>
      <main>
        <MovieDescription movieDetails={movieDetails} />
      </main>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
      {error && <p>{error}</p>}
      {loading && <Loader />}
    </div>
  );
};
