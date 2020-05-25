import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../Context/Context';

const BookList = () => {
  const bookContextValue = useContext(BookContext);
  const { state } = bookContextValue;

  if (!state.book.length) return '';

  const addComma = num => `${num.slice(0, -3)},${num.slice(-3)}원`;

  return (
    <>
      <ul className="books">
        {state.book.map(v => (
          <li key={v.itemId}>
            <Link to={`detail/${v.itemId}`}>
              <img src={v.coverLargeUrl} alt={v.title} />
              <span className="books-title">{v.title}</span>
              <span className="books-price">{addComma(`${v.priceSales}`)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookList;
