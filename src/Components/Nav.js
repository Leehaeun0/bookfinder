import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li className="active">베스트셀러</li>
        <li>추천도서</li>
        <li>신간도서</li>
      </ul>
      <div className="search-wrap">
        <input type="text" />
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </nav>
  );
};

export default Nav;
