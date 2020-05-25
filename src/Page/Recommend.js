import React, { useEffect, useContext } from 'react';
import BookList from '../Components/BookList';
import { BookContext } from '../Context/Context';

const Recommend = () => {
  const { setRecommend } = useContext(BookContext);

  useEffect(() => {
    setRecommend();
  }, []);
  return (
    <>
      <BookList />
    </>
  );
};

export default Recommend;
