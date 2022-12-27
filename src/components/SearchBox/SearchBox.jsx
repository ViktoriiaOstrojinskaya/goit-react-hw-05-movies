import PropTypes from 'prop-types';
import { Form, Input, SearchButton } from './SearchBox.styled';

//import { toast } from 'react-toastify';

const SearchBox = ({ value, onSubmit }) => {
  const handleSubmit = event => {
    event.pteventDefault();

    // if (value.trim() === '') {
    //   toast.warn('Please, enter a request! 🕵️‍♀️');
    //   return;
    // }

    onSubmit(event.target.elements.query.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" defaultValue={value} name="query" />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};

export default SearchBox;

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
