export const MovieDiscription = ({ movieDetails }) => {
  console.log(movieDetails);
  const { poster_path, title, release_date, popularity, overview, genres } =
    movieDetails;
  return (
    <>
      <button type="button">Go back</button>
      <div>
        <img src={poster_path} alt={title} />
        <h2>
          {title}({release_date})
        </h2>
        <p>User score: {popularity}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        {genres.map(genre => genre.name)}
      </div>
      <h3>Additional information</h3>
    </>
  );
};
