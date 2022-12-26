import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CastCard } from './CastCard';
import { Loader } from './Loader/Loader';
import * as API from '../components/services/api';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const renderMovieCast = async () => {
      setLoading(true);
      try {
        const results = await API.getMovieCredits(movieId);
        if (results.length === 0) {
          setError('Sorry, we don`t have information about cast 😓');
        }
        setCast(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    renderMovieCast();
  }, [movieId]);

  return (
    <ul>
      <CastCard cast={cast} />
      {error && <p>{error}</p>}
      {loading && <Loader />}
    </ul>
  );
};
