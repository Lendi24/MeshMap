import * as icons from '@mdi/js' ;
import '@mdi/js';
import {canvasSetPixel, canvasSetPixelColor} from '../app//p5'
import {Carve} from '../app/PathFindingAlgorithms/AStarPathfinding'

let pageToolIndex = 0;

export function getTool() {return pageTools[pageToolIndex]};
export function setTool(index:number) {pageToolIndex = index;};

let storage = {
    x : -1,
    y : -1,
}

let pageTools = [
    {
        data : {
            title:  "Select",
            icon:   icons.mdiCursorDefault,    
        },

        conf : {
            SelectProp : {
                icon:   icons.mdiCursorDefault,    
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            testböx : {
                type : "box",
                value : 0,
            },
        },

        logic : (x:number,y:number,e:MouseEvent)=>{
            console.log("select");
        }
    },

    {
        data : {
            title:  "Draw",
            icon:   icons.mdiPen  ,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },

        logic : (x:number,y:number,e:MouseEvent)=>{
            if (e.target && e.buttons) canvasSetPixelColor(x,y,"rgb(255,0,0)")
        }
    },

    {
        data : {
            title:  "Create Room",
            icon:   icons.mdiShapePolygonPlus  ,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },

        logic : (x:number,y:number,e:MouseEvent)=>{
            if (e.target && e.buttons) {
                if (storage.x<0||storage.y<0) {
                    Carve(x,y,storage.x,storage.y,"world")
                    storage.x=-1
                    storage.y=-1
                } else {
                    storage.x=x
                    storage.y=y
                }
            }
        }
    },

    {
        data : {
            title:  "Create Path",
            icon:   icons.mdiVectorLine  ,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },

        logic : (x:number,y:number)=>{
            console.log("Send help")
        }
    },



    /*
    {
        data : {
            title:  "userCreatePage",
            icon:   icons.mdiAccountPlus ,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },
    },

    {
        data : {
            title:  "userLoginPage",
            icon:   icons.mdiAccountKey  ,
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },

    },

    {
        data : {
            title:  "Create",
            icon:   icons.mdiContentSave ,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },
    },

    {
        data : {
            title: "Create",
            icon: icons.mdiShapeCirclePlus,    
        },

        conf : {
            testslid : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            testbox : {
                type : "box",
                value : 1,
            },
        },
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

export default pageTools;
