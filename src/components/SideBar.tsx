import React from "react";

import tools from "../data/tools";
import {setTool} from "../data/tools";

import ToolSelect   from './SideBar/ToolSelect';
import ConfigSelect from './SideBar/ConfigSelect';
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import { mdiDownloadBox } from '@mdi/js';




import {canvasGetPixel} from '../views/Editor/p5Canvas';

//export function setSelectedTile(str:string) {selectedTile = str; };
//import {context} from './';

interface SidebarTool {
    data : any
    conf : any
}

interface SideBarState {
    selectedToolId : any;
}
interface SideBarProps {
    selectedTile : {x:number, y:number};
}
class SideBar extends React.Component<SideBarProps, SideBarState> { 
    toolIdPrefix = "toolId-";

    constructor(props : SideBarProps) {
        super(props);    
        this.handleChange   = this.handleChange.bind(this);
        this.render         = this.render.bind(this);
        this.state = {
            selectedToolId: 0,//Remove?
            //selectedTile  : {x:-1,y:-1},
        };
    }

    
    handleUserSelectTile(x:number,y:number){
        if (x >= 0 && y >= 0) {
            console.log(canvasGetPixel(x,y))
            //console.log(canvasGetPixel(x,y).getData());            
            return (
                <ConfigSelect   
                    selectors={canvasGetPixel(x,y).data}
                    toolTitle={`Selected tile at: (x:${x} y:${y})`}
                    key={`(x:${x}y:${y})`}
                />    
            );
        } else {
            return (
                <div></div>
            );
        }
    }
    
    handleChange(e:MouseEvent) {
        //Gets old tool and removes highlighting
        let oldButton = document.getElementById(`${this.toolIdPrefix}${(this.state as SideBarState).selectedToolId}`);
        if (oldButton) oldButton.style.color = "";

        //Updates internal state for storing current tool id and adding highlighting for correct tool
        if (e.target) this.setState({selectedToolId: (e.target as HTMLSpanElement).id.replace(`${this.toolIdPrefix}`,'')});
        if (e.target) (e.target as HTMLSpanElement).style.color = "red";

        //Updates tools.ts script with correct index
        setTool( parseInt((e.target as HTMLSpanElement).id.replace(`${this.toolIdPrefix}`,'')) );
    }
    
    render() {
        return (
            <div id="sidebar" className="flex flex-col bg-gray-600 z-20 bg-opacity-60 bg-blur-sm background-blur">
                <ToolSelect     
                    tools={tools} 
                    toolsOnClick={this.handleChange}
                    toolsIdPrefix={this.toolIdPrefix}
                />
                <ConfigSelect   
                    selectors={(tools[ (this.state as SideBarState).selectedToolId ] as SidebarTool).conf}
                    toolTitle={`Tool: '${(tools[ (this.state as SideBarState).selectedToolId ].data.title)}'`}
                />
                {/* x : {this.props.selectedTile.x} ± y : {this.props.selectedTile.y} */}

       <div className="absolute inset-x-16 bottom-4 w-1/2 space-y-2">  

       <button className="flex flex-row w-full  space-x-2 items-center justify-center  drop-shadow-xl hover:scale-125 transition bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
       <Icon path={mdiDownloadBox} size={0.75} /> <h2 className="text-xl"> save</h2>
      </button>
     
     <a className="flex flex-row space-x-2 items-center justify-center  drop-shadow-xl hover:scale-125 transition bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" href="/">
     <Icon path={mdiArrowLeft} size={0.75} /> <h2 className="text-xl">back</h2>
    </a>
      </div>       

      </div>
                {this.handleUserSelectTile(this.props.selectedTile.x,this.props.selectedTile.y)}
                x : {this.props.selectedTile.x} ± y : {this.props.selectedTile.y}
            </div>
        );
    }    
}

//const returnComp = React.FC<SideBarProps> = (props: SideBarProps) => { }
export default SideBar;