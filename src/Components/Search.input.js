import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../Context/Context';

const SearchInput = () => {
  const { searchBook } = useContext(BookContext);

  const inputRef = useRef();
  const submitRef = useRef();

  // const onChange = e => {
  //   inputState(e.target.value);
  // };

  const enterSearch = e => {
    if (!e.target.value.trim()) return;
    if (e.key !== 'Enter') return;
    submitRef.current.click();
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
      <input type="text" onKeyUp={enterSearch} ref={inputRef} />
      <Link to="/search" onClick={clickSearch} ref={submitRef}>
        <i type="icon" className="fas fa-search" />
      </Link>
    </div>
  );
};

export default SearchInput;
