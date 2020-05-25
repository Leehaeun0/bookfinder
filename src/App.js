<<<<<<< HEAD
import React from 'react';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
=======
import React, { useContext } from 'react';
import { BookContext } from './Context/Context';
import './App.css';

function App() {
  const bookContext = useContext(BookContext);
  console.log(bookContext);
  return <div className="App">test</div>;
>>>>>>> 41f4d221b5b91dcac5f65de8eb92071ac6c4a7ae
}

export default App;
