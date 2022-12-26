import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewsCard } from './ReviewsCard';
import { Loader } from './Loader/Loader';
import * as API from '../components/services/api';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const renderMovieReviews = async () => {
      setLoading(true);
      try {
        const results = await API.getMovieReviews(movieId);
        if (results.length === 0) {
          setError('Sorry, we don`t have reviews of this movie yet 😓');
        }
        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    renderMovieReviews();
  }, [movieId]);

  return (
    <ul>
      <ReviewsCard reviews={reviews} />
      {error && <p>{error}</p>}
      {loading && <Loader />}
    </ul>
  );
};
