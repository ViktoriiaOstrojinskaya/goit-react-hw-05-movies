import { Form, Input } from './SearchBox.styled';

export const SearchBox = () => {
  return (
    <Form>
      <Input type="text" placeholder="Search movie" />
      <button type="submit">Search</button>
    </Form>
  );
};
