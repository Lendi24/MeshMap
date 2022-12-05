import React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "react-p5-wrapper";

let w : number;
let columns : any;
let rows : any;
let board : any;

export default function sketch(p5: P5CanvasInstance) {
  p5.setup = () => {
    p5.createCanvas(720, 400);
    w = 20;
    columns = Math.floor(p5.width / w);
    rows = Math.floor(p5.height / w);

    board = new Array(columns);
    for (let i = 0; i < columns; i++) {
      board[i] = new Array(rows);
    }

    board[0][1] = 1;
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

  p5.mouseClicked = (e:MouseEvent) => {
    console.log("oi!");

    if (e.target) {
      let target = e.target as HTMLElement;
      let x = Math.floor((e.x - target.offsetLeft) / w);
      let y = Math.floor((e.y - target.offsetTop ) / w);
      console.log(x+" "+y)
      board[x][y] = 1;
    }

    console.log(e);
  }
}

  