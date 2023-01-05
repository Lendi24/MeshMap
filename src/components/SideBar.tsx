import React from "react";

import tools from "../data/tools";

import ToolSelect   from './SideBar/ToolSelect';
import ConfigSelect from './SideBar/ConfigSelect';

function SideBar(props:any) {
    //const [selectedToolId, setToolId] = React.useState(() => {return 0;});      
    //const [Sidepage,Setpages] = React.useState(()=>pages[currentPage]);

    return (
        <div id="sidebar" className="flex flex-col bg-gray-600 z-20 bg-opacity-60 bg-blur-sm background-blur">
            <ToolSelect/>
            <ConfigSelect/>
        </div>
    )
}

export default SideBar;