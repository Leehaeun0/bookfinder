import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookContext } from '../Context/Context';
import Nav from './Nav';

const Header = () => {
  const { state, logout } = useContext(BookContext);
  return (
    <>
      <header className="header">
        <Link to="/">
          <h1 className="header-tit">Book Finder</h1>
        </Link>
        {state.login ? (
          <>
            <span className="user-name">
              안녕하세요 &nbsp;&nbsp;<b>{state.user.name}</b> 님
            </span>
            <button
              type="button"
              className="header-loginBt header-btn"
              onClick={logout}
            >
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login" className="header-loginBt header-link">
            로그인
          </Link>
        )}
      </header>
      <Nav />
    </>
  );
};

export default Header;
