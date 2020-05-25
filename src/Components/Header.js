import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Header = () => (
  <>
    <header className="header">
      <Link to="/">
        <h1 className="header-tit">Book Finder</h1>
      </Link>
      <button type="button" className="header-btn">
        로그인
      </button>
    </header>
    <Nav />
  </>
);

export default Header;
