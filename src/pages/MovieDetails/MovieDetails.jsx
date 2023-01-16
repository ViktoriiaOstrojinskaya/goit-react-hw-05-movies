import { toast } from 'react-toastify';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import MovieDescription from '../../components/MovieDescription/MovieDescription';
import ButtonBack from 'components/ButtonBack/ButtonBack';
import { DetailList } from './MovieDetails.styled';
import * as API from '../../components/services/api';

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    if (!movieId) {
      return;
    }

    const renderMovieDetail = async () => {
      try {
        const results = await API.getMovieDetails(movieId);
        if (!results) {
          toast.error('Sorry, we don`t have information of this movie 😓');
          return;
        }
        setMovieDetails(results);
      } catch (error) {
        setError(error);
        toast.error('Oops, something went wrong 🫣 Try again!');
      }
    };

    renderMovieDetail();
  }, [movieId]);

  return (
    <div>
      <main>
        <ButtonBack to={backLinkHref} />
        {movieDetails && <MovieDescription movieDetails={movieDetails} />}
      </main>
      <div>
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
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default MovieDetails;
