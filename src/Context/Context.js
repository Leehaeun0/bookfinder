import React from 'react';
import UseFetch from '../Reducer/useFetch';

export const BookContext = React.createContext();

export function ContextProvider({ children }) {
  const [] = UseFetch();
  const contextValue = [];
  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
}
