import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../Context/Context';

const SearchInput = ({ location }) => {
  const { searchBook } = useContext(BookContext);
  const inputRef = useRef();

  const enterSearch = e => {
    // window.open('/search');
    if (!e.target.value.trim()) {
      // e.target.value = '';
      return;
    }
    if (e.key !== 'Enter') return;
    // window.location.href = '/search';
    searchBook(e.target.value);
    // // e.target.value = '';
    // enterSearch();
  };

  const clickSearch = e => {
    if (!inputRef.current.value.trim()) {
      e.preventDefault();
      inputRef.current.value = '';
      return;
    }
    searchBook(inputRef.current.value);
    inputRef.current.value = '';
  };

  return (
    <div className="search-wrap">
      <input type="text" onKeyPress={enterSearch} ref={inputRef} />
      <a href="/search" onClick={clickSearch}>
        <i type="icon" className="fas fa-search" />
      </a>
    </div>
  );
};

export default SearchInput;
