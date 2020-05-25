import React, { useContext } from 'react';
import { BookContext } from './Context/Context';
import './App.css';

function App() {
  const bookContext = useContext(BookContext);
  console.log(bookContext);
  return <div className="App">test</div>;
}

export default App;
