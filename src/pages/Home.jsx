import { getTrending } from 'components/services/api';
import { MoviesList } from '../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';

export const Home = () => {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    renderTrending();
  }, []);

  const renderTrending = async () => {
    try {
      const { results } = await getTrending();
      setTrending(results);
    } catch (error) {
      console.log(error);
    }
  };
  getTrending();

  return (
    <main>
      <MoviesList movies={trending} />
    </main>
  );
};
