import PropTypes from 'prop-types';
import defaultMovie from '../../images/defaultMovie.jpg';
import {
  MovieDescriptionBox,
  TextBox,
  TitleMovie,
  Text,
  TitleDescription,
} from './MovieDescription.styled';

const MovieDescription = ({ movieDetails }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;
  const movieYear = new Date(release_date).getFullYear();
  const userScore = 100 - Math.round(vote_average);
  const baseURL = 'https://image.tmdb.org/t/p/w400';

  return (
    <MovieDescriptionBox>
      <img
        src={poster_path ? `${baseURL}${poster_path}` : defaultMovie}
        alt={title}
        height="350"
      />
      <TextBox>
        <TitleMovie>
          {title}({movieYear})
        </TitleMovie>
        <Text>User score: {userScore}%</Text>
        <TitleDescription>Overview</TitleDescription>
        <Text>{overview}</Text>
        <TitleDescription>Genres</TitleDescription>
        <Text>{genres && genres.map(genre => genre.name).join(', ')}</Text>
      </TextBox>
    </MovieDescriptionBox>
  );
};

export default MovieDescription;

MovieDescription.propTypes = {
  movieDetails: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      overview: PropTypes.string.isRequired,
      genres: PropTypes.object.isRequired,
    })
  ).isRequired,
};
