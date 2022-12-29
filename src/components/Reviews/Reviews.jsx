import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReviewsCard from '../ReviewsCard/ReviewsCard';
import Loader from '../Loader/Loader';
import * as API from '../services/api';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
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
          toast.warn('Sorry, we don`t have reviews yet 😓');
          return;
        }
        setReviews(results);
      } catch (error) {
        setError(error);
        toast.error('Oops, something went wrong 🫣 Try again!');
      } finally {
        setLoading(false);
      }
    };

    renderMovieReviews();
  }, [movieId]);

  return (
    <ReviewsList>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      <ReviewsCard reviews={reviews} />
    </ReviewsList>
  );
};

export default Reviews;
