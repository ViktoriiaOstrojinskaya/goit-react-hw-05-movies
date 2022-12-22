import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const KEY = '500d9ce9bd19caed28c8e80a6fa70303';

export const fetchMovies = () => {
  const response = axios.get(`3/trending/movie/day?api_key=${KEY}`);
  console.log(response);
  return response.data;
};

// export const fetchMovies = () => {
//   fetch(
//     'https://api.themoviedb.org/3/trending/movie/day?api_key=500d9ce9bd19caed28c8e80a6fa70303'
//   ).then(response => console.log(response));

// };
