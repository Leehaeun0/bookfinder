import React from 'react';
import './App.css';
import books from './Api/Api';

function App() {
  try {
    const data = books.getBestSeller();

    console.log(data);

    const data2 = books.getRecommend();
    console.log(data2);
  } catch (e) {
    throw new Error(`${e}`);
  }
  return <div className="App">test</div>;
}

export default App;
