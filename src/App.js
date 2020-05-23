import React from "react";
import "./App.css";
import books from "./Api/Api";

function App() {
  try {
    const data = books.getBestSeller();
    console.log(data);
  } catch (e) {
    throw new Error(`${e}`);
  }
  return <div className="App"></div>;
}

export default App;
