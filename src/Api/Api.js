// Api.js - books
import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

const keyQuery =
  'key=F3EA7BA70F328D77E8F27E38274D1E6A72E88EEBC1ADAB4369E3AAC90C0B8A5C';

const BookApi = (apiName, categoryId) =>
  api
    .get(`${apiName}.api?${keyQuery}&categoryId=${categoryId}&output=json`)
    .then(r => r.data)
    .catch(e => {
      console.error(e);
    });

const books = {
  getBestSeller: (categoryId = 100) => BookApi('bestSeller', categoryId),
  getRecommend: (categoryId = 100) => BookApi('recommend', categoryId),
  getNewBook: (categoryId = 100) => BookApi('newBook', categoryId),
  searchBook: (term, categoryId = 100) =>
    api
      .get(
        `search.api?${keyQuery}&query=${encodeURIComponent(
          term,
        )}&categoryId=${categoryId}&output=json`,
      )
      .then(r => r.data),
};

export default books;
