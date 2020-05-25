import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../Context/Context';

const SearchInput = ({ location }) => {
  const { state, searchBook, inputState } = useContext(BookContext);
  const inputRef = useRef();

  const onChange = e => {
    inputState(e.target.value);
  };

  const enterSearch = e => {
    // window.open('/search');
    if (!e.target.value.trim()) {
      // e.target.value = '';
      // e.preventDefault();
      return;
    }
    if (e.key !== 'Enter') {
      // e.preventDefault();
      return;
    }
    // window.location.href = '/search';
    searchBook(state.inputValue);
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
    <form action="/search" className="search-wrap">
      {console.log(state.inputValue)}
      <input
        type="text"
        onKeyPress={enterSearch}
        onChange={onChange}
        ref={inputRef}
        value={state.inputValue}
      />
      <a href="/search" onClick={clickSearch}>
        <i type="icon" className="fas fa-search" />
      </a>
    </form>
  );
};

export default SearchInput;
