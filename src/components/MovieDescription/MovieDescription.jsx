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
  const userScore = Math.round(vote_average).toFixed(1);

  return (
    <MovieDescriptionBox>
      <img src={'https://image.tmdb.org/t/p/w300' + poster_path} alt={title} />
      <TextBox>
        <TitleMovie>
          {title}({movieYear})
        </TitleMovie>
        <Text>User score: {userScore}</Text>
        <TitleDescription>Overview</TitleDescription>
        <Text>{overview}</Text>
        <TitleDescription>Genres</TitleDescription>
        <Text>{genres && genres.map(genre => genre.name).join(', ')}</Text>
      </TextBox>
    </MovieDescriptionBox>
  );
};

export default MovieDescription;
