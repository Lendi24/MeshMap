import React from 'react';
import logo from './assets/svg/logo.svg';

import sketch from './app/p5'
import { ReactP5Wrapper } from "react-p5-wrapper";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold underline">
          Hello world!
          <ReactP5Wrapper sketch={sketch} />
        </h1>
      </header>
    </div>
  );
}

export default App;
