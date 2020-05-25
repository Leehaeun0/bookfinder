/* eslint-disable react/prop-types */
import React from 'react';
// import UseFetch from '../Reducer/useFetch';

export const BookContext = React.createContext();

export function ContextProvider({ children }) {
  // const [] = UseFetch();
  const contextValue = ['test1'];
  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
}
