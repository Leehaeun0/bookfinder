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
    const data = await bookApi.searchBook(value);
    dispatch({ type: 'GETBOOK', books: data.item });
  };

  const inputState = value => {
    dispatch({ type: 'INPUT', value });
  };

  const getAllBooks = async () => {
    const data1 = await bookApi.getBestSeller();
    const data2 = await bookApi.getRecommend();
    const data3 = await bookApi.getNewBook();
    const allBook = [...data1.item, ...data2.item, ...data3.item];
    // console.log(data1.item, data2, data3);
    dispatch({ type: 'ALLBOOKS', allBook });
  };

  return {
    state,
    login,
    logout,
    setBestSeller,
    setRecommend,
    setNew,
    searchBook,
    inputState,
    getAllBooks,
  };
};

export default UseFetch;
