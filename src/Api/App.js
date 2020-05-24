import React from 'react';
import './App.css';
import Header from './Components/Header';
// import books from './Api/Api';

function App() {
  // try {
  //   const data = books.getBestSeller();
  //   console.log(data);
  // } catch (e) {
  //   throw new Error(`${e}`);
  // }

  return (
    <main className="App">
      <Header />
    </main>
  );
}

export default App;
