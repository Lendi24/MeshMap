import React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "react-p5-wrapper";
import { Tile } from './tiles/Tile'; 
import { World } from './worldClass/world'; 
import { PathFindingDFS } from './PathFindingAlgorithms/DFS'; 
import { PathFindingBFS } from './PathFindingAlgorithms/BFS'; 
import {  AstarPath } from './PathFindingAlgorithms/AStarPathfinding'; 

let gp5 : any;
let w : number;
let columns : any;
let rows : any;
let board : any;
let locked = true;

export function canvasSetPixel(x:number, y:number, pixel:Tile) {
  
  board.grid[x][y] = pixel; 
  board.grid[x][y].rgbText = "rgb(0,0,0)";
  console.log( board.grid[x][y])
  board.generateExits();//Hittade inget bättre sätt att uppdatera pixlarna än att köra en ny generateExits För allt. Däremot måste det ändras beroende på vad vil vill generera

  canvasUpdate(); 
  console.log("put pixel") 
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
        board.grid[i][j] = new Tile(board.grid[i][j].id);
      }
    }
    board.generateExits();
    console.log(board.grid)

    canvas.elt.onmouseover = () => {locked = false;}
    canvas.elt.onmouseout  = () => {locked = true;}

    canvas.elt.onmousemove = (e:MouseEvent) => {
      if (e.target && e.buttons == 1 && !locked) {
        let target = e.target as HTMLElement;
        let x = Math.floor((e.x - target.offsetLeft) / w);
        let y = Math.floor((e.y - target.offsetTop ) / w);
        canvasSetPixel(x,y,new Tile(board.grid[x][y].id))//obeserver att ett fel kan inträffa i fall det är j +i*cols eller vice versa
      }
    }
    AstarPath(1,1,20,20,board)
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