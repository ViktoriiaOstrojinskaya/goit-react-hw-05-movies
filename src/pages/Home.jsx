import { fetchMovies } from 'components/services/api';
//import { Link } from 'react-router-dom';

export const Home = () => {
  fetchMovies();

  return (
    <>
      <p>Home</p>

      {/* <ul>
        {results.map(result => (
          <li>{result}</li>
        ))}
      </ul> */}
    </>
  );
};
