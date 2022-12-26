import { useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchBox } from '../components/SearchBox/SearchBox';
import { toast } from 'react-toastify';
//import { MoviesList } from '../components/MoviesList';
import * as API from '../components/services/api';

export const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    console.log(searchMovies);
    console.log(error);
    console.log(setSearchParams);
    console.log(location);

    if (!searchQuery) {
      setSearchMovies([]);
      return;
    }

    if (searchQuery.trim() === '' || searchQuery === '') {
      toast.error('Please, enter a request! 🕵️‍♀️');
      return;
    }

    const renderSearchMovies = async () => {
      try {
        const { results } = await API.searchMovies(searchQuery);
        setSearchMovies(results);

        if (results.length === 0) {
          toast.error('Sorry, we can`t find anything you request. Try again!');
          return;
        }

        setError(null);
      } catch (error) {
        setError(error);
        setSearchMovies([]);
      }
      renderSearchMovies();
    };
  }, [searchQuery]);

  // const onSubmit = value => {
  //   setSearchParams(value !== '' ? { query: value } : {});
  // };

  return (
    <main>
      <SearchBox />
    </main>
  );
};
