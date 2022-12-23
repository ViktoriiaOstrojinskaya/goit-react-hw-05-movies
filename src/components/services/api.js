import axios from 'axios';

export const KEY = '500d9ce9bd19caed28c8e80a6fa70303';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = KEY;
axios.defaults.params = {
  api_key: `${KEY}`,
};

export const getTrending = async () => {
  try {
    const { data } = await axios.get(`trending/movie/day`);
    return data;
  } catch (error) {
    console.error('Something went wrong. Try again!');
  }
};

export const getMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error('Something went wrong. Try again!');
  }
};
