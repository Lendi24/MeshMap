import React, { Component, createContext } from 'react';

import { Outlet, Link } from "react-router-dom";
import './Editor.css'
import ComponentSideBar      from '../../components/SideBar';

import sketch from '../../app/p5'
import { ReactP5Wrapper } from "react-p5-wrapper";

import { DataSelectedTileContext } from "../../data/tools";

import P5Canvas from "./p5Canvas";
/*
export default function Editor() {
  return (
    <div className="flex flex-col h-screen m-0 z-1 overflow-y-hidden">
        <div className="flex flex-grow m-0 overflow-hidden bg-green-600 justify-between">
            <ComponentSideBar selectedTile={{x:-1,y:-1}}/>            
            <div className="w-full h-full m-0 flex justify-center items-center">
                <ReactP5Wrapper sketch={sketch} />
            </div>
        </div>
        <div id = "window-cont">
            <div id = "window-model"></div>
        </div>
    </div>
  );
}*/

interface DataSelectedTileContextInt{
  x:number,
  y:number,
}
class Editor extends React.Component {
  constructor(props:any) {
    super(props);
    this.render              = this.render.bind(this);
    this.updateSelectedTile  = this.render.bind(this);
    this.state = {
      selectedTile: {x: -1, y:-1}
    };
  }

  updateSelectedTile(x:Number,y:Number) {
    this.setState({
      selectedTile: {x:x,y:y}
    });
  }

  render() {
    let context = this.context as DataSelectedTileContextInt;
    return (
      <div className="flex flex-col h-screen m-0 z-1 overflow-y-hidden">
          <div className="flex flex-grow m-0 overflow-hidden bg-green-600 justify-between">
              <ComponentSideBar selectedTile={{x:context.x,y:context.y}}/>            
              <div className="w-full h-full m-0 flex justify-center items-center">
                <P5Canvas/>
                {/*<ReactP5Wrapper sketch={sketch}>*/}
              </div>
          </div>
          <div id = "window-cont">
              <div id = "window-model"></div>
          </div>
      </div>
    );
  }
}

Editor.contextType = DataSelectedTileContext;
export default Editor;