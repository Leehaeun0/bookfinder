import React, { useEffect, useContext } from 'react';
import { BookContext } from '../Context/Context';
import BookList from '../Components/BookList';

const BestSeller = () => {
  const context = useContext(BookContext);
  const { setBestSeller } = context;

  useEffect(() => {
    setBestSeller();
  }, []);

  return (
    <>
      <div>BestSeller</div>
      <BookList />
    </>
  );
};

export default BestSeller;
