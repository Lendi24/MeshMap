import React from "react";

import tools from "../data/tools";

import ToolSelect   from './SideBar/ToolSelect';
import ConfigSelect from './SideBar/ConfigSelect';

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
        if (e.target) this.setState({selectedToolId: (e.target as HTMLSpanElement).id.replace(`${this.toolIdPrefix}`,'')});
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
                    toolConf={tools[ (this.state as SideBarState).selectedToolId ]}
                />
            </div>
        );
    }    
}



export default SideBar;