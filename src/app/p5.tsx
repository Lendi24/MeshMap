import React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "react-p5-wrapper";

let w : number;
let columns : any;
let rows : any;
let board : any;
let locked = true;


function updateCanvas(x:number, y:number) {

}

export default function sketch(p5: P5CanvasInstance) {
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
  }

  p5.draw = () => {
    p5.background(255);
    for ( let i = 0; i < columns;i++) {
      for ( let j = 0; j < rows;j++) {
        if ((board[i][j] == 1)) p5.fill(0);
        else p5.fill(255);
        p5.stroke(0);
        p5.rect(i * w, j * w, w-1, w-1);
      }
    }  
  };


  p5.mouseDragged = (e:MouseEvent) => {
    if (e.target && !locked) {
      let target = e.target as HTMLElement;
      let x = Math.floor((e.x - target.offsetLeft) / w);
      let y = Math.floor((e.y - target.offsetTop ) / w);
      board[x][y] = 1;
    }
  }

  p5.mouseClicked = (e:MouseEvent) => {
    if (e.target && !locked) {
      let target = e.target as HTMLElement;
      let x = Math.floor((e.x - target.offsetLeft) / w);
      let y = Math.floor((e.y - target.offsetTop ) / w);
      board[x][y] = 1;
    }
  }
}

class Utils {
  clamp = (num:number, min:number, max:number) => Math.min(Math.max(num, min), max);
}