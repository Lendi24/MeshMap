import React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "react-p5-wrapper";
import { Tile } from './tiles/Tile'; 
import { World } from './worldClass/world'; 
import { PathFindingDFS } from './PathFindingAlgorithms/DFS'; 
import { PathFindingBFS } from './PathFindingAlgorithms/BFS'; 
import {  AstarPath } from './PathFindingAlgorithms/AStarPathfinding'; 
import { generateMaze } from './worldGenerator/mazeGenerator/mazeGen';
import { generateMaze3 } from './worldGenerator/mazeGenerator/mazeGen3';
import { generateCircular } from './worldGenerator/circularWorld/circularGen'
import {dungeonGen} from './worldGenerator/dungeonWorld/dungeonGen'
import { backtrackingMaze } from './worldGenerator/mazeGenerator/mazeGen2';

import {getTool} from '../data/tools'
import { RoomTile } from "./tiles/TileRoom";

let gp5 : any;
let w : number;
let columns : any;
let rows : any;
export let board : any;
let locked = true;

export function canvasSetPixel(x:number, y:number, pixel:Tile) {
  board.grid[x][y] = pixel; 
  board.grid[x][y].rgbText = "rgb(0,0,0)";
  //console.log( board.grid[x][y])
  board.generateExits();//Hittade inget bättre sätt att uppdatera pixlarna än att köra en ny generateExits För allt. Däremot måste det ändras beroende på vad vil vill generera

  canvasUpdate(); 
  //console.log("put pixel") 
}


export function generateRoom(x1:any,y1:any,length:any,height:any){
  board.rooms++;
  let placeRoom:any = true;
  const roomNode = new RoomTile(board.rooms)
  roomNode.walkable = true;
  let cornerX =  Math.round(x1-(length/2));
  let cornerY = Math.round(y1-(height/2));
  let validRange = true;

  if (cornerX < 0) {
   // console.log("outOfBounds for room in X")
    validRange = false;
  }

  if (cornerY< 0) {
   // console.log("outOfBounds for room in Y")
    validRange = false;
  }

if (validRange) {

    for (let j = cornerX-1; j < length+cornerX +1 ; j++) {
      for (let i = cornerY-1; i < height+cornerY+1; i++) {//Idk how or why but if you take the three first condittions and add them to to the third if statment from here. You get cool dungeon
        if (board.grid[j][i] instanceof RoomTile ) {
          console.log("HOLA")

            placeRoom = false;

            return;
           }
       }
     }
  
  if(placeRoom){

    for (let j = cornerX; j < length+cornerX; j++) {    
      for (let i = cornerY; i < height+cornerY; i++) {
 
        if (j>0 && j<board.cols && i>0 && i<board.rows) {
          board.grid[j][i] = roomNode;
          board.grid[j][i].rgbText = "rgb(100,100,100)"
        }
     }
   }
  } 
}
canvasUpdate();

board.generateExits();
console.log(length+cornerX)

}

export function canvaseClean(){
  board.currentRooms = []
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {  
      board.grid[i][j] = new Tile;;

      board.grid[i][j].rgbText = "rgb(255,255,255)";
      board.generateExits();
  
    }
  } 

}

export function canvasSetPixelColor(x:number, y:number, rgb:string) {
  
  //board.grid[x][y] = pixel; 
  board.grid[x][y].rgbText = rgb;
  //console.log( board.grid[x][y])
  board.generateExits();//Hittade inget bättre sätt att uppdatera pixlarna än att köra en ny generateExits För allt. Däremot måste det ändras beroende på vad vil vill generera

  canvasUpdate(); 
  //console.log("put pixel") 
}

export function returnBoard(){

return board;

}

export function canvasErasePixel(x:number,y:number){

  if (board.grid[x][y] instanceof RoomTile) {
    let room = board.grid[x][y];

    for ( let i = 0; i < columns;i++) {
      for ( let j = 0; j < rows;j++) {     
      if (board.grid[i][j] == room) {
        board.grid[i][j] = new Tile()
      }
      }
    } 
  }
  else{
    board.grid[x][y].rgbText = "rgb(255,255,255)";
    board.grid[x][y].walkable = false;
  }

  board.generateExits()
  canvasUpdate()

}

export function canvasGetPixel(x:number, y:number) { return board[x][y]; } 

export default function sketch(p5: P5CanvasInstance) {
  gp5 = p5;
  p5.setup = () => {
    let canvas = p5.createCanvas(720, 720);
    w = 15;
    columns = Math.floor(p5.width / w);
    rows = Math.floor(p5.height / w);

    board = new World(columns,rows,w);
    
    for (let i = 0; i < columns; i++) {
      board[i] = new Array(rows);
      for (let j = 0; j < rows; j++) {
        board.grid[i][j] = new Tile();
      }
    }

    canvas.elt.onmouseover = () => {locked = false;}
    canvas.elt.onmouseout  = () => {locked = true;}

    canvas.elt.onmousemove = (e:MouseEvent) => {
      if (!locked) {
        let target = e.target as HTMLElement;
        let x = Math.floor((e.x - target.offsetLeft) / w);
        let y = Math.floor((e.y - target.offsetTop ) / w);
        
        getTool().logic.call("oi",x,y,e);
        
        //canvasSetPixel(x,y,new Tile());

        //obeserver att ett fel kan inträffa i fall det är j +i*cols eller vice versa, Va fan menade jag -Enok
      }
    }

    canvas.elt.onmousedown = (e:MouseEvent) => {
      if (!locked) {
        let target = e.target as HTMLElement;
        let x = Math.floor((e.x - target.offsetLeft) / w);
        let y = Math.floor((e.y - target.offsetTop ) / w);
        
        getTool().logic.call("oi",x,y,e);
        
        //canvasSetPixel(x,y,new Tile());

        //obeserver att ett fel kan inträffa i fall det är j +i*cols eller vice versa, Va fan menade jag -Enok
      }
    }

    // generateCircular(20,20,10,board,4)
    dungeonGen(10,3,10,3,20,board)
    board.generateExits()
  
    //console.log(board.grid)
    canvasUpdate();
  }
}

export function canvasUpdate() {
  gp5.background(255);
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {   

      let color = board.grid[i][j].color()
      gp5.fill(color.rgbText)
      gp5.stroke(0);
      gp5.rect(i * w, j * w, w-1, w-1);
    }
  } 
}


class Utils {
  clamp = (num:number, min:number, max:number) => Math.min(Math.max(num, min), max);
}



/*


  Color(rgb)
  Type(num)
  ObjectRef
*/