import PropTypes from 'prop-types';
import { StyledLink } from './ButtonBack.styled';

const ButtonBack = ({ to }) => {
  return <StyledLink to={to}>Go Back</StyledLink>;
};

export default ButtonBack;

ButtonBack.propTypes = {
  to: PropTypes.object.isRequired,
};
