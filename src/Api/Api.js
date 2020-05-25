// Api.js - books
import axios from 'axios';
import { keyQuery } from '../.key';

const api = axios.create({
  baseURL: '/api',
});

const getBooks = (apiName, categoryId) =>
  api
    .get(`${apiName}.api?${keyQuery}&categoryId=${categoryId}&output=json`)
    .then(r => r.data)
    .catch(e => {
      console.error(e);
    });

const bookApi = {
  getBestSeller: (categoryId = 100) => getBooks('bestSeller', categoryId),
  getRecommend: (categoryId = 100) => getBooks('recommend', categoryId),
  getNewBook: (categoryId = 100) => getBooks('newBook', categoryId),
  searchBook: (term, categoryId = 100) =>
    api
      .get(
        `search.api?${keyQuery}&query=${encodeURIComponent(
          term,
        )}&categoryId=${categoryId}&output=json`,
      )
      .then(r => r.data),
};

export default bookApi;
