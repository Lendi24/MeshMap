import * as icons from '@mdi/js' ;
import '@mdi/js';

let selectedTool
let selectedToolHtml:HTMLElement

let tools = [
    {
        title: "Select",
        icon: icons.mdiCursorDefault,
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
    //console.log(toolID)
    elem.style.backgroundColor = "red";

    if (selectedToolHtml) {
        selectedToolHtml.style.backgroundColor = "unset";
    }
    
    selectedTool = tools[toolID];
    selectedToolHtml = elem;

    //selectedTool.
}

export default tools;
export {selectedTool, selectNewTool};