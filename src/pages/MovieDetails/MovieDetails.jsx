import { toast } from 'react-toastify';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieDescription from '../../components/MovieDescription/MovieDescription';
import Loader from 'components/Loader/Loader';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import { DetailList } from './MovieDetails.styled';
import * as API from '../../components/services/api';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const renderMovieDetail = async () => {
      setLoading(true);
      try {
        const results = await API.getMovieDetails(movieId);
        if (!results) {
          toast.error('Sorry, we don`t have information of this movie 😓');
          return;
        }
        setMovieDetails(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    renderMovieDetail();
  }, [movieId]);

  return (
    <div>
      {loading && <Loader />}
      <ButtonBack to={backLinkHref} />
      <main>
        {movieDetails && <MovieDescription movieDetails={movieDetails} />}
      </main>
      <DetailList>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Review
          </Link>
        </li>
      </DetailList>
      <Outlet />
      {error && <p>{error}</p>}
    </div>
  );
};

export default MovieDetails;
