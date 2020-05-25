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
  } = UseFetch();
  const contextValue = {
    state,
    login,
    logout,
    setBestSeller,
    setRecommend,
    setNew,
    searchBook,
  };
  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
}
