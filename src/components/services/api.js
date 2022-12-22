import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const fetchMovies = async () => {
  const response = await axios.get('', {
    params: {
      key: '500d9ce9bd19caed28c8e80a6fa70303',
      media_type:  'movie',
      time_window: 'day',
    },
  });
  return response;
};
