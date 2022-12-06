import React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "react-p5-wrapper";

let gp5 : any;
let w : number;
let columns : any;
let rows : any;
let board : any;
let locked = true;


export function canvasSetPixel(x:number, y:number, pixel:Tile) { board[x][y] = pixel; canvasUpdate(); }
export function canvasGetPixel(x:number, y:number) { return board[x][y]; } 

export default function sketch(p5: P5CanvasInstance) {
  gp5 = p5;
  p5.setup = () => {
    let canvas = p5.createCanvas(720, 400);
    w = 20;
    columns = Math.floor(p5.width / w);
    rows = Math.floor(p5.height / w);

    board = new Array(columns);
    for (let i = 0; i < columns; i++) {
      board[i] = new Array(rows);
      for (let j = 0; j < rows; j++) {
        board[i][j] = new Tile(255,255,255);
      }
    }

    canvas.elt.onmouseover = () => {locked = false;}
    canvas.elt.onmouseout  = () => {locked = true;}

    canvas.elt.onmousemove = (e:MouseEvent) => {
      if (e.target && e.buttons == 1 && !locked) {
        let target = e.target as HTMLElement;
        let x = Math.floor((e.x - target.offsetLeft) / w);
        let y = Math.floor((e.y - target.offsetTop ) / w);
        canvasSetPixel(x,y,new Tile(0,0,0))
      }
    }

    canvasUpdate();
  }
}

export function canvasUpdate() {
  gp5.background(255);
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {
      gp5.fill(board[i][j].r, board[i][j].g, board[i][j].b)
      gp5.stroke(0);
      gp5.rect(i * w, j * w, w-1, w-1);
    }
  } 
}

class Tile {
  r : number;
  g : number;
  b : number;

  constructor(r:number, g:number, b:number) {
    this.r = r;
    this.g = g;
    this.b = b;
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