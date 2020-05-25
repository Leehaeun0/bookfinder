import React from 'react';
import { NavLink } from 'react-router-dom';
// import MainRouter from '../Router/MainRouter';
import SearchInput from './Search.input';

const Nav = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              베스트셀러
            </NavLink>
          </li>
          <li>
            <NavLink to="/recommend" activeClassName="active">
              추천도서
            </NavLink>
          </li>
          <li>
            <NavLink to="/new" activeClassName="active">
              신간도서
            </NavLink>
          </li>
        </ul>
        <SearchInput />
      </nav>
      {/* <MainRouter /> */}
    </>
  );
};

export default Nav;
