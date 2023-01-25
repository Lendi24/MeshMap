import React from 'react';
import * as icons from '@mdi/js' ;
import '@mdi/js';
//import sketch from './app/p5'
import { ReactP5Wrapper } from "react-p5-wrapper";

import './App.css';

function App() {
  return (
    <div className=" flex flex-col  space-y-10 h-screen w-full justify-center items-center bg-green-600  ">
<h1 className="flex items-center text-5xl font-extrabold text-black  text-opacity-80">Tilemap Creator<span className="bg-blue-100 text-blue-800 text-2xl font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">PRO</span></h1>      <div className=" flex flex-col space-y-16">
      <a className=" drop-shadow-xl hover:scale-125 transition bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/editor">
       <h2 className="text-4xl p-2">Enter Editor</h2>
      </a>

      <button className=" drop-shadow-xl hover:scale-125 transition bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
       <h2 className="text-4xl p-2">Load saved</h2>
      </button>
      </div>
    </div>
  );
}

export default App;
