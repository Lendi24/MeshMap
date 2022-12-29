import * as icons from '@mdi/js' ;
import '@mdi/js';
//import {setPage} from '../../../views/Editor/Editor' ;
import React from 'react'
import { FunctionBody } from 'typescript';

import { setToolConfigState } from '../SideBar/ToolConfig'

let selectedTool
let selectedToolHtml:HTMLElement
let pageTools = [
    {
        title:  "freeCreatePage",
        icon:   icons.mdiCursorDefault,
    },

    {
        title:  "worldCreationPage",
        icon:   icons.mdiEarthPlus  ,
    },

    {
        title:  "userCreatePage",
        icon:   icons.mdiAccountPlus ,
    },

    {
        title:  "userLoginPage",
        icon:   icons.mdiAccountKey  ,
    },

    {
        title:  "Create",
        icon:   icons.mdiContentSave ,
    },

    {
        title: "Create",
        icon: icons.mdiShapeCirclePlus,
    },


/*
    { 
        title: "Connect (C)",
        icon: icons.mdiVectorLine,
    },*/
];
/*
let tools = {
    'S' : {
        title: "Select",
        icon: icons.mdiCursorDefault,
    },

    'D' : {
        title: "Draw",
        icon: icons.mdiShapeCirclePlus,
    },
};*/

// = tools[0];


function selectNewTool(toolID:any, elem:HTMLElement, setState:any) {
    
    setState(toolID)

    if (selectedToolHtml) { selectedToolHtml.style.backgroundColor = "";}
    elem.style.backgroundColor = "red";
    selectedTool = pageTools[toolID];
    selectedToolHtml = elem;

    setToolConfigState(toolID);

    //updatePageFunc(pageTools[toolID].title);
}


export default pageTools;
export {selectNewTool};