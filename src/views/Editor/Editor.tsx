import React, { Component } from 'react';

import { Outlet, Link } from "react-router-dom";
import './Editor.css'

//Json data for components
import tools        from '../../components/Input/ToolButton/Toolbutton';
import dropdowns    from '../../components/Input/TopBar/TopBar';

//p5 canvas
import sketch from '../../app/p5'
import { ReactP5Wrapper } from "react-p5-wrapper";
import freeCreate from '../../components/freeCreation/freeCreatePage'
import worldCreate from '../../components/worldCreation/worldCreationRender'
import userCreate from '../../components/userCreateLogin/userCreate/userCreaterender'
import userLogin from '../../components/userCreateLogin/userLogin/userLoginRender'
import data from "../../../src/components/Input/ToolButton/data";
import {selectNewTool} from "../../../src/components/Input/ToolButton/data";
import Icon from '@mdi/react';

export default function Editor() {
   
  const pages:any = {
    freeCreatePage: freeCreate,
    worldCreationPage: worldCreate,
    userCreatePage: userCreate,
    userLoginPage: userLogin,
  };
      
  const [currentPage,setCurrentPage] = React.useState("userCreatePage");      
  const [Sidepage,Setpages] = React.useState(()=>pages[currentPage]);
   
  /*
  function MenuLoader() {  
    function ToolButton(props:any) { return (
      <span
        title={props.title}
        className="text-white border-2 rounded hover:bg-green-700 hover:scale-110 transform transition-all w-10"
        onClick={(e) => {
          selectNewTool(props.index, e.currentTarget);
          setCurrentPage(props.title);
        }}
      >
        <Icon path={props.icon} />
      </span>
    );}
          
    let toolsButtons = data.map((item, index) => { return (
      <ToolButton
        key     =  {index+item.title}
        index   =  {index}
        title   =  {item.title}
        icon    =  {item.icon}
      />
    )});        
        // let CurrentPage = pages[currentPage]; 

    React.useEffect(() => {
      Setpages(pages[currentPage])
    }, [currentPage]);
      
    return (<>{toolsButtons}</>);
  }*/
      
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
                    {/*MenuLoader()*/}
                </div>
            </div> 
            <div className="w-full h-full m-0 flex justify-center items-center">
                <ReactP5Wrapper sketch={sketch} />
                {/*<canvas id="drawing-area" className="z-10"></canvas>*/}
            </div>
            <div className="w-70 bg-gray-600 z-20 bg-opacity-60 bg-blur-sm background-blur" id="side-section">
                <div className="" id="side-section-color"> {/*<!--Colour picker-->*/}

                {Sidepage}

                {
                
                /*
                    
                    <label for="red">Red</label>
                    <input id="red-range" className="color-input w-full" name="red" type="range" min="0" max="255" placeholder="0" value="255">
                    <label for="green">Green</label>
                    <input id="green-range" className="color-input w-full" name="green" type="range" min="0" max="255" placeholder="0" value="255">
                    <label for="blue">Blue</label>
                    <input id="blue-range" className="color-input w-full" name="blue" type="range" min="0" max="255" placeholder="0" value="255">
                    <label for="alpha">Alpha</label>
                    <input id="alph-rRange" className="color-input w-full" name="alpha" type="range" min="0" max="255" placeholder="0" value="255">
                    <div id="color-display-container"><div id="color-display" className="w-full h-10"></div></div>
                */}

                
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


