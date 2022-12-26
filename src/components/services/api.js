//import { toast } from 'react-toastify';
import axios from 'axios';

export const KEY = '500d9ce9bd19caed28c8e80a6fa70303';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = KEY;
axios.defaults.params = {
  api_key: `${KEY}`,
};
//const message = toast.error('Something went wrong. Try again!');

export const getTrending = async () => {
  try {
    const { data } = await axios.get(`trending/movie/day`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieCredits = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/credits`);
    return data.cast;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(`movie/${movieId}/reviews`);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const searchMovies = async query => {
  try {
    const query = 'batman';
    const { data } = await axios.get(`/search/movie/`, {
      params: {
        query: query,
        language: 'en-US',
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};
