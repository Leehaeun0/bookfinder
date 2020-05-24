import React from 'react';
import './App.scss';
import Header from './Components/Header';
// import bookApi from './Api/Api';

function App() {
  // try {
  //   const data = bookApi.getBestSeller();
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
