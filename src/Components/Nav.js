import React from 'react';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>베스트셀러</li>
        <li>추천도서</li>
        <li>신간도서</li>
      </ul>
      <input type="text" />
      <button type="button">
        <i className="fas fa-search" />
      </button>
    </nav>
  );
};

export default Nav;
