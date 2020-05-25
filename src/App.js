import React, { useContext } from 'react';
import { BookContext } from './Context/Context';
import './login.scss';
import { Link } from 'react-router-dom';

function App() {
  const bookContext = useContext(BookContext);
  return (
    <div className="App">
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default App;
