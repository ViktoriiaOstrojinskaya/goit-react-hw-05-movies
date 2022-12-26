import {
  MovieDescriptionBox,
  TextBox,
  TitleMovie,
  Text,
  TitleDescription,
} from './MovieDescription.styled';

export const MovieDescription = ({ movieDetails }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;
  const movieYear = new Date(release_date).getFullYear();
  const userScore = 100 - Math.round(vote_average);

  return (
    <MovieDescriptionBox>
      <img
        src={'https://image.tmdb.org/t/p/w400' + poster_path}
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
