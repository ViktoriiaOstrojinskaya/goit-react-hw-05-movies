import { toast } from 'react-toastify';
import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MovieDescription } from '../components/MovieDescription/MovieDescription';
import { Loader } from 'components/Loader/Loader';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
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
          toast.error('Sorry, we don`t have information of this movie 😓');
          return;
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
      {loading && <Loader />}
      <ButtonBack />
      <main>
        {movieDetails && <MovieDescription movieDetails={movieDetails} />}
      </main>
      <ul style={{ marginTop: '20px' }}>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li style={{ marginTop: '10px' }}>
          <Link to="reviews">Review</Link>
        </li>
      </ul>
      <Outlet />
      {error && <p>{error}</p>}
    </div>
  );
};
