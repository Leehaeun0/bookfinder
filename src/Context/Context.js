import React from 'react';
import UseFetch from '../Hook/useFetch';

export const BookContext = React.createContext();

export function ContextProvider({ children }) {
  // const {
  //   state,
  //   loginId,
  //   loginPw,
  //   loginSubmit,
  //   loginInputEv,
  //   loginBtEv,
  //   setBestSeller,
  //   setRecommend,
  //   setNew,
  //   searchBook,
  // } = UseFetch();
  // const contextValue = {
  //   state,
  //   loginId,
  //   loginPw,
  //   loginSubmit,
  //   loginInputEv,
  //   loginBtEv,
  //   setBestSeller,
  //   setRecommend,
  //   setNew,
  //   searchBook,
  // };
  const contextValue = UseFetch();
  return (
    <BookContext.Provider value={contextValue}>{children}</BookContext.Provider>
  );
}
