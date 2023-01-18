import React, { Component, createContext } from 'react';

import { Outlet, Link } from "react-router-dom";
import './Editor.css'
import ComponentSideBar      from '../../components/SideBar';

//import sketch from '../../app/p5'
import { ReactP5Wrapper } from "react-p5-wrapper";

import { DataSelectedTileContext } from "../../data/tools";

import P5Canvas from "./p5Canvas";
import { stat } from 'fs';
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

interface EditorState {
  x:number,
  y:number,
}

interface EditorProps {
}


interface DataSelectedTileContextInt{
  x:number,
  y:number,
}
class Editor extends React.Component<EditorProps,EditorState>  {
  constructor(props:any) {
    super(props);
    this.render              = this.render.bind(this);
    this.state = {x:-1, y:-1};
  }

  render() {
    return (
      <div className="flex flex-col h-screen m-0 z-1 overflow-y-hidden">
          <div className="flex flex-grow m-0 overflow-hidden bg-green-600 justify-between">
              <ComponentSideBar selectedTile={{x:this.state.x,y:this.state.y}}/>            
              <div className="w-full h-full m-0 flex justify-center items-center">
                <P5Canvas clickCallback={(x:number,y:number)=>{
                  this.setState({x:x,y:y});
                }}/>
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