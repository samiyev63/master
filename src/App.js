import React, { useState, useEffect } from "react";
import logo from "./imgs/logo1.png";
import "./App.css";

function App() {
  const [lines, setLines] = useState([]);
  const width = window.innerWidth;
  const height = window.innerHeight;
  const diagonal = Math.floor(Math.sqrt(width * width + height * height));

  useEffect(() => {
    const array = [];
    for (let i = 0; i < diagonal / 10; i++) {
      array.push(i);
    }
    setLines(array);
    console.log(lines);
  }, []);

  return (
    <div className="App">
      <div className="lines">
        {lines.map((key) => {
          return (
            <hr key={key} className="line" style={{ width: `${diagonal}px` }} />
          );
        })}
      </div>
      <header className="App-section">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="master-title">
          <h1 className="master-h1">
            Assalomu alaykum va rahmatullahi va barakatuhu ! Front-end
            dasturchilar uchun kodli maydochaga xush kelibsiz!
          </h1>
          <div className="master-href">
            <a href="#">Azo bolish</a>
            <a href="#">Maydoncha</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
