import { useReducer } from 'react';
import { initState, reducer } from '../Reducer/Reducer';
import bookApi from '../Api/Api';
// LOGIN, LOGOUT
// getBestSeller, getRecommend, getNewBook, searchBook

const UseFetch = () => {
  const [state, dispatch] = useReducer(reducer, initState);

  const login = userData => {
    dispatch({
      type: 'LOGIN',
      userData,
    });
  };

  const logout = () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  const setBestSeller = async () => {
    const data = await bookApi.getBestSeller();
    console.log(data);
    dispatch({ type: 'GETBOOK', books: data.item });
  };

  const setRecommend = async () => {
    const data = await bookApi.getRecommend();
    console.log(data);
    dispatch({ type: 'GETBOOK', books: data.item });
  };

  const setNew = async () => {
    const data = await bookApi.getNewBook();
    console.log(data);
    dispatch({ type: 'GETBOOK', books: data.item });
  };

  const searchBook = async value => {
    // window.location.href = '/search';

    const data = await bookApi.searchBook(value);
    // console.log(data);
    dispatch({ type: 'GETBOOK', books: data.item });
  };

  return {
    state,
    login,
    logout,
    setBestSeller,
    setRecommend,
    setNew,
    searchBook,
  };
};

export default UseFetch;
