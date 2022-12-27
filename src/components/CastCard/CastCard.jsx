import PropTypes from 'prop-types';
import defaultActor from '../../images/defaultActor.jpg';
import { CastCardBox, CastCardItem } from './CastCard.styled';

const CastCard = ({ cast }) => {
  const baseURL = 'https://image.tmdb.org/t/p/w200';
  return (
    <CastCardBox>
      {cast &&
        cast.map(({ id, profile_path, original_name, character }) => {
          return (
            <CastCardItem key={id}>
              <img
                src={profile_path ? `${baseURL}${profile_path}` : defaultActor}
                alt={original_name}
                height="200"
              />

              <p>Name: {original_name}</p>
              <p>Character: {character}</p>
            </CastCardItem>
          );
        })}
    </CastCardBox>
  );
};

export default CastCard;

CastCard.propTypes = {
  cast: PropTypes.object.isRequired,
};
