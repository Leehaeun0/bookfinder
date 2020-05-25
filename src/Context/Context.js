import React from 'react';
import UseFetch from '../Hook/useFetch';

export const BookContext = React.createContext();

export function ContextProvider({ children }) {
  const contextValue = UseFetch();
  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
}
