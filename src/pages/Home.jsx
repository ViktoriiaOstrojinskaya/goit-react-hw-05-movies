import { toast } from 'react-toastify';
import MoviesList from '../components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import * as API from '../components/services/api';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();

  useEffect(() => {
    renderTrending();
  }, []);

  const renderTrending = async () => {
    try {
      const { results } = await API.getTrending();
      setTrending(results);
    } catch (error) {
      toast.error('Oops, something went wrong 🫣 Try again!');
    }
  };

  return (
    <main>
      <h2>Trending Movie 🎥🍿</h2>
      <MoviesList movies={trending} location={location} />
    </main>
  );
};

export default Home;
