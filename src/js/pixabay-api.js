import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '18770359-69995c75016210012c9ceb955';

axios.defaults.baseURL = BASE_URL;

export const getImagesByQuery = query => {
  return axios
    .get('/', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    });
};
