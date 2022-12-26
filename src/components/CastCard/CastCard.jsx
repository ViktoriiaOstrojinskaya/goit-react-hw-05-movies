import { CastCardBox, CastCardItem } from './CastCard.styled';

export const CastCard = ({ cast }) => {
  console.log(cast);
  return (
    <CastCardBox>
      {cast &&
        cast.map(({ id, profile_path, original_name, character }) => {
          return (
            <CastCardItem key={id}>
              {profile_path && (
                <img
                  src={'https://image.tmdb.org/t/p/w400' + profile_path}
                  alt={original_name}
                  height="200"
                />
              )}
              <p>Name: {original_name}</p>
              <p>Character: {character}</p>
            </CastCardItem>
          );
        })}
    </CastCardBox>
  );
};
