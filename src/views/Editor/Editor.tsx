import React, { Component } from 'react';

import { Outlet, Link } from "react-router-dom";
import './Editor.css'

//Json data for components


import tools        from '../../components/old/Input/ToolButton/Toolbutton';
import ToolConf     from '../../components/old/Input/SideBar/ToolConfig';
import dropdowns    from '../../components/old/Input/TopBar/TopBar';


//p5 canvas
import sketch from '../../app/p5'
import { ReactP5Wrapper } from "react-p5-wrapper";

export default function Editor() {

  return (
    <div className="flex flex-col h-screen m-0 z-1 overflow-y-hidden">
    
        <nav className="flex flex-row space-x-1 z-30" id="top-bar">
            <span className="mdi mdi-brush ml-3"></span>
            <div id="dropdowns"> {dropdowns} </div>
            <span id="lock" className="mdi mdi-lock-open-variant absolute right-0"></span>
        </nav>

        <div className="flex flex-grow m-0 overflow-hidden bg-green-600 justify-between">
            <div className="bg-gray-600 z-20 bg-opacity-60 bg-blur-sm background-blur">{/*<!--Tools-->*/}
                <div className="space-y-3" id="tool-section">
                    { tools }
                </div>
            </div> 
            <div className="w-full h-full m-0 flex justify-center items-center">
                <ReactP5Wrapper sketch={sketch} />
                {/*<canvas id="drawing-area" className="z-10"></canvas>*/}
            </div>
            <div className="w-60 bg-gray-600 z-20 bg-opacity-60 bg-blur-sm background-blur" id="side-section">
                <div className="" id="side-section-color"> {/*<!--Colour picker-->*/}
                  <ToolConf />
                </div>
                
                <div className="min-w-5" > {/*<!--Tool settings-->*/}</div>

                <div className=""  id="side-section-layer"> {/*<!--Layers-->*/}
                
                </div>
            </div>
        </div>
        <div className="h-6 flex justify-between z-30">
            <b className="ml-1 mr-1">Pos: X: <b id="posX">0</b>, Y: <b id="posY">0</b></b>
            {/*<!--
            <b className="ml-1 mr-1">Layer Size: 0 x 0</b>
            -->*/}
            <b className="ml-1 mr-1">Zoom: <b id="zoom">100</b>%</b>
        </div>

        <div id = "window-cont">
            <div id = "window-model"></div>
        </div>
    </div>
  );
}


