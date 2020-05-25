import React from 'react';
import './App.scss';
import Header from './Components/Header';
import MainRouter from './Router/MainRouter';

function App() {
  return (
    <>
      <div className="App">
        <Header />
      </div>
      <MainRouter />
    </>
  );
}

export default App;
