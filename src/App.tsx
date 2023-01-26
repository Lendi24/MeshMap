import React from 'react';
import * as icons from '@mdi/js' ;
import '@mdi/js';
//import sketch from './app/p5'
import { ReactP5Wrapper } from "react-p5-wrapper";
import CompiledDungeons from './views/cardDesign/savedCards'

import './App.css';

function App() {
  return (
    <div className=" space-y-12 bg-green-600 flex flex-col flex-nowrap w-screen h-screen justify-center align-middle text-center">
      
      <div className="flex flex-col flex-shrink items-center	">

        <div className="flex flex-row flex-shrink">
          <h1 className=" text-5xl font-extrabold text-white">MeshMap</h1>   
          <span className="bg-blue-100 text-blue-800 text-2xl font-bold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">PRO</span>
        </div>

        <div className=" flex flex-col w-1/2">
          <a className="drop-shadow-xl hover:scale-125 transition bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center" href="/editor">
            <h2 className="text-4xl p-2">Enter Editor</h2>
          </a>
        </div>

      </div>
    
      <div className="flex flex-row flex-shrink">
        <div className="flex flex-row space-x-6 overflow-x-scroll">
          <CompiledDungeons/>
        </div>
      </div>
    </div>
  );
}

export default App;
