import React, { useEffect, useContext } from 'react';
import BookList from '../Components/BookList';
import { BookContext } from '../Context/Context';

const Search = () => {
  const { searchBook } = useContext(BookContext);
  useEffect(() => {
    searchBook('가');
  }, []);
  return (
    <>
      <BookList />
    </>
  );
};

export default Search;
