import * as icons from '@mdi/js' ;
import '@mdi/js';
import React from 'react'

let selectedTool
let selectedToolHtml:HTMLElement




 let pageTools = [
    {
        title: "freeCreatePage",
        icon: icons.mdiCursorDefault,
    },

    {
        title: "worldCreationPage",
        icon: icons.mdiEarthPlus  ,
    },

    {
        title: "userCreatePage",
        icon: icons.mdiAccountPlus ,
    },

    {
        title: "userLoginPage",
        icon: icons.mdiAccountKey  ,
    },

    {
        title: "Create",
        icon: icons.mdiContentSave ,
    },

    {
        title: "Create",
        icon: icons.mdiShapeCirclePlus,
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


function selectNewTool(toolID:any, elem:HTMLElement) {
    if (selectedToolHtml) { selectedToolHtml.style.backgroundColor = "";}
    elem.style.backgroundColor = "red";
    selectedTool = pageTools[toolID];
    selectedToolHtml = elem;
}


export default pageTools;
export {selectNewTool};