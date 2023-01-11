import React, { Component } from 'react';

import { Outlet, Link } from "react-router-dom";
import './Editor.css'
import ComponentSideBar      from '../../components/SideBar';

import sketch from '../../app/p5'
import { ReactP5Wrapper } from "react-p5-wrapper";

export default function Editor() {
  return (
    <div className="flex flex-col h-screen m-0 z-1 overflow-y-hidden">
        <div className="flex flex-grow m-0 overflow-hidden bg-green-600 justify-between">
            <ComponentSideBar selectedTile={sketch}/>            
            <div className="w-full h-full m-0 flex justify-center items-center">
                <ReactP5Wrapper sketch={sketch} />
            </div>
        </div>
        <div id = "window-cont">
            <div id = "window-model"></div>
        </div>
    </div>
  );
}


