import React, { useContext } from 'react';
import './login.scss';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default App;
