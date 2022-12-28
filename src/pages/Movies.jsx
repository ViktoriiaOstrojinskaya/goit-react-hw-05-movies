import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox/SearchBox';
import { toast } from 'react-toastify';
import Loader from 'components/Loader/Loader';
import MoviesList from '../components/MoviesList/MoviesList';
import * as API from '../components/services/api';

const Movies = () => {
  const [request, setRequest] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const movieName = searchParams.get('query') ?? '';

  const nextParams = request !== '' ? { query: request } : {};

  const searchName = event => {
    setRequest(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (request.trim() === '') {
      toast.warn('Please, enter a request! 🕵️‍♀️');
      return;
    }
    setMovies([]);
    setSearchParams(nextParams);
    setRequest('');
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }

    const renderSearchMovies = async () => {
      setLoading(true);
      try {
        const results = await API.searchMovies(movieName);
        if (results.length === 0) {
          toast.warn('Sorry, we can`t find information by your request 😓');
          return;
        }
        setMovies(results);
        setError(null);
      } catch (error) {
        setError(error);
        toast.error('Oops, something went wrong 🫣 Try again!');
      } finally {
        setLoading(false);
      }
    };
    renderSearchMovies();
  }, [movieName]);

  return (
    <main>
      <SearchBox
        onSubmit={handleSubmit}
        value={request}
        onChange={searchName}
      />
      {loading && <Loader />}
      {!!movies.length && <MoviesList movies={movies} location={location} />}
      {error && <p>{error.message}</p>}
    </main>
  );
};

export default Movies;
