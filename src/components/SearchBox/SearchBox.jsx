import PropTypes from 'prop-types';
import { Form, Input, SearchButton } from './SearchBox.styled';

const SearchBox = ({ onSubmit, value, onChange }) => {
  return (
    <Form onSubmit={onSubmit}>
      <Input
        type="text"
        autoComplete="off"
        placeholder="Search movies"
        name="request"
        value={value}
        onChange={onChange}
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
