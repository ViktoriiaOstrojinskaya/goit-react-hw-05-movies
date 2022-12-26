import { MoviesList } from '../components/MoviesList';
import { useState, useEffect } from 'react';
import * as API from '../components/services/api';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    renderTrending();
  }, []);

  const renderTrending = async () => {
    try {
      const { results } = await API.getTrending();
      setTrending(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <MoviesList movies={trending} />
    </main>
  );
};
