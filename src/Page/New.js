import React, { useEffect, useContext } from 'react';
import BookList from '../Components/BookList';
import { BookContext } from '../Context/Context';

const New = () => {
  const { setNew } = useContext(BookContext);
  useEffect(() => {
    setNew();
  }, []);
  return (
    <>
      <div>new</div>
      <BookList />
    </>
  );
};

export default New;
