import React from "react";

import tools from "../data/tools";

import ToolSelect   from './SideBar/ToolSelect';
import ConfigSelect from './SideBar/ConfigSelect';

interface SidebarTool {
    data : any
    conf : any
}

interface SideBarState {
    selectedToolId : number;
}
  
class SideBar extends React.Component { 
    toolIdPrefix = "toolId-";

    constructor(props : any) {
        super(props);
        this.handleChange   = this.handleChange.bind(this);
        this.render         = this.render.bind(this);
        this.state = {selectedToolId: 0};
    }
    
    handleChange(e:MouseEvent) {
        //Gets old tool and removes highlighting
        let oldButton = document.getElementById(`${this.toolIdPrefix}${(this.state as SideBarState).selectedToolId}`);
        if (oldButton) oldButton.style.color = "";

        //Updates internal state for storing current tool id and adding highlighting for correct tool
        if (e.target) this.setState({selectedToolId: (e.target as HTMLSpanElement).id.replace(`${this.toolIdPrefix}`,'')});
        if (e.target) (e.target as HTMLSpanElement).style.color = "red";
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
                />
            </div>
        );
    }    
}

export default SideBar;