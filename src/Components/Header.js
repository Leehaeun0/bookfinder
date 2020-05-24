import React from 'react';
import Nav from './Nav';

const Header = () => {
  return (
    <>
      <header className="header">
        <h1 className="header-tit">Book Finder</h1>
        <button type="button" className="header-btn">
          로그인
        </button>
      </header>
      <Nav />
    </>
  );
};

export default Header;
