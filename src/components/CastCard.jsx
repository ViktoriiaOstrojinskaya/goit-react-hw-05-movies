export const CastCard = ({ cast }) => {
  return (
    <>
      {cast &&
        cast.map(({ id, profile_path, original_name, character }) => {
          return (
            <li key={id}>
              {profile_path && (
                <img
                  src={'https://image.tmdb.org/t/p/w400' + profile_path}
                  alt={original_name}
                  height="150"
                />
              )}
              <p>Name: {original_name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </>
  );
};
