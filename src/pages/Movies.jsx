import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import * as API from '../components/services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (!movieName) {
      setMovies([]);
      return;
    }

    const renderSearchMovies = async () => {
      if (movieName.trim() === '') {
        toast.warn('Please, enter a request! 🕵️‍♀️');
        setMovies([]);
        return;
      }

      setLoading(true);
      try {
        const results = await API.searchMovies(movieName);

        if (results.length === 0) {
          toast.warn('Sorry, we can`t find information your request 😓');
          return;
        }
        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    renderSearchMovies();
  }, [movieName]);

  const onSubmit = value => {
    setSearchParams(value !== '' ? { value } : {});
  };

  return (
    <main>
      <SearchBox value={movieName} onSubmit={onSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} location={location} />}
      {loading && <Loader />}
      {error && error.message}
    </main>
  );
};

export default Movies;
