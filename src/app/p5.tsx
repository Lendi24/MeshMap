import React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "react-p5-wrapper";

let gp5 : any;
let w : number;
let columns : any;
let rows : any;
let board : any;
let locked = true;


export function canvasSetPixel(x:number, y:number) { board[x][y] = 1; canvasUpdate(); }
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
    }

    canvas.elt.onmouseover = () => {locked = false;}
    canvas.elt.onmouseout  = () => {locked = true;}

    canvas.elt.onmousemove = (e:MouseEvent) => {
      if (e.target && e.buttons == 1 && !locked) {
        let target = e.target as HTMLElement;
        let x = Math.floor((e.x - target.offsetLeft) / w);
        let y = Math.floor((e.y - target.offsetTop ) / w);
        canvasSetPixel(x,y)
      }
    }

    canvasUpdate();
  }
}

export function canvasUpdate() {
  gp5.background(255);
  for ( let i = 0; i < columns;i++) {
    for ( let j = 0; j < rows;j++) {
      if ((board[i][j] == 1)) gp5.fill(0);
      else gp5.fill(255);
      gp5.stroke(0);
      gp5.rect(i * w, j * w, w-1, w-1);
    }
  } 
}

class Utils {
  clamp = (num:number, min:number, max:number) => Math.min(Math.max(num, min), max);
}