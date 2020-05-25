import React from 'react';
import UseFetch from '../Hook/useFetch';

export const BookContext = React.createContext();

export function ContextProvider({ children }) {
  const {
    state,
    login,
    logout,
    setBestSeller,
    setRecommend,
    setNew,
    searchBook,
    inputState,
    getAllBooks,
  } = UseFetch();
  const contextValue = {
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
  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
}
