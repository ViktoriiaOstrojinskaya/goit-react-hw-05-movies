export const MovieDescription = ({ movieDetails }) => {
  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;
  const movieYear = new Date(release_date).getFullYear();
  const userScore = 100 - Math.round(vote_average);

  return (
    <>
      <img
        src={'https://image.tmdb.org/t/p/w400' + poster_path}
        alt={title}
        height="150"
      />
      <h2>
        {title}({movieYear})
      </h2>
      <p>User score: {userScore}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres && genres.map(genre => genre.name).join(', ')}</p>
    </>
  );
};
