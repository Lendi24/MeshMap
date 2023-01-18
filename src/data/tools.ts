import React, { Component, createContext } from 'react';
import * as icons from '@mdi/js' ;
import '@mdi/js';
import {canvasSetPixel, canvasSetPixelColor, canvasErasePixel, board} from '../views/Editor/p5Canvas'
import {dungeonGen} from '../app/worldGenerator/dungeonWorld/dungeonGen'
import {generateCircular} from '../app/worldGenerator/circularWorld/circularGen'
import {Carve} from '../app/PathFindingAlgorithms/AStarPathfinding'

//import {setSelectedTile} from '../components/SideBar'

let pageToolIndex = 0;

export function getTool() {return pageTools[pageToolIndex]};
export function setTool(index:number) {pageToolIndex = index;};

export const DataSelectedTileContext = React.createContext( {x:-1, y:-1} );
  
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
            title:  "Erase",
            icon:   icons.mdiEraser,    
        },

        conf : {
            SelectProp : {
                icon:   icons.mdiEraser,    
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
            if (e.target && e.buttons) canvasErasePixel(x,y)   }
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
            title:  "Create Room",
            icon:   icons.mdiShapePolygonPlus  ,    
        },

        conf : {
            height : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            length : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },
        },

        logic : (x:number,y:number,e:MouseEvent)=>{
            if (e.target && e.buttons) {
                let roomLength = (getTool() as any).conf.length.value;
                let roomHeight = (getTool() as any).conf.height.value;
                console.log(roomHeight)
                console.log(roomLength)
                
                board.generateRoom(x,y,parseInt(roomLength),parseInt(roomHeight))
            }
        }
    },

    {
        data : {
            title:  "Erase Map",
            icon:   icons.mdiDelete   ,    
        },

        conf : {
           
        },

        logic : (x:number,y:number,e:MouseEvent)=>{
            if (e.target && e.buttons) {
                board.clear();
            }
        }
    },

    {
        data : {
            title:  "Generate dungeon",
            icon:   icons.mdiApps    ,    
        },

        conf : {
            maxRooms : {
                type : "slider",
                value : 20,
                floor : 1,
                roof  : 40,
            },

            maxRoomLength : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },
            
            minRoomLength : {
                type : "slider",
                value : 3,
                floor : 1,
                roof  : 20,
            },
            maxRoomHeight : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },
            minRoomHeight : {
                type : "slider",
                value : 3,
                floor : 1,
                roof  : 20,
            },
        },

        logic : (x:number,y:number,e:MouseEvent)=>{
            if (e.target && e.buttons) {

                let maxRoomLength = (getTool() as any).conf.maxRoomLength.value;
                let minRoomLength = (getTool() as any).conf.minRoomLength.value;
                let maxRoomHeight = (getTool() as any).conf.maxRoomHeight.value;
                let minRoomHeight = (getTool() as any).conf.maxRoomLength.value;
                let maxRooms =  (getTool() as any).conf.maxRooms.value;
                
                board.clear();
                dungeonGen(parseInt(maxRoomLength),parseInt(minRoomLength),parseInt(maxRoomHeight),parseInt(minRoomHeight),parseInt(maxRooms),board)
            

               
            }
        }
    },

    {
        data : {
            title:  "Generate circular world",
            icon:   icons.mdiAutorenew    ,    
        },

        conf : {
            radius : {
                type : "slider",
                value : 10,
                floor : 1,
                roof  : 20,
            },

            rooms : {
                type : "slider",
                value : 4,
                floor : 1,
                roof  : 20,
            },
        },

        logic : (x:number,y:number,e:MouseEvent)=>{
            if (e.target && e.buttons) {

                let radius = (getTool() as any).conf.radius.value;
                let Rooms = (getTool() as any).conf.rooms.value;
                board.clear()
                generateCircular(x,y,parseInt(radius),board,parseInt(Rooms))
            }
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

export default pageTools;
