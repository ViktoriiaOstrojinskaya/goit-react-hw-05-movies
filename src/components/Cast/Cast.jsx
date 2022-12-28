import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CastCard from '../CastCard/CastCard';
import Loader from '../Loader/Loader';
import { CastList } from './Cast.styled';
import * as API from '../services/api';

const Cast = () => {
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
          toast.warn('Sorry, we don`t have information about cast 😓');
          return;
        }
        setCast(results);
      } catch (error) {
        setError(error);
        toast.error('Oops, something went wrong 🫣 Try again!');
      } finally {
        setLoading(false);
      }
    };

    renderMovieCast();
  }, [movieId]);

  return (
    <CastList>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      <CastCard cast={cast} />
    </CastList>
  );
};

export default Cast;
