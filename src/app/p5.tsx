import React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "react-p5-wrapper";

/*
let tileMap = [
  [true,  true,  false, false],
  [true,  true,  false, false],
  [false, false, false, false],
]
*/

let w : number;
let columns : any;
let rows : any;
let board : any;
let next;

export default function sketch(p5: P5CanvasInstance) {
  p5.setup = () => {
    //p5.createCanvas(600, 400, p5.WEBGL);
    /*
    let i = 1;
    let j = 1;
    let w = 5;
    p5.rect(i * w, j * w, w-1, w-1)*/
    p5.createCanvas(720, 400);
    w = 20;
    // Calculate columns and rows
    columns = Math.floor(p5.width / w);
    rows = Math.floor(p5.height / w);
    // Wacky way to make a 2D array is JS
    board = new Array(columns);
    for (let i = 0; i < columns; i++) {
      board[i] = new Array(rows);
    }
    // Going to use multiple 2D arrays and swap them
    next = new Array(columns);
    for (let i = 0; i < columns; i++) {
      next[i] = new Array(rows);
    }

    board[0][1] = 1;
    //init();
  
  }

  p5.draw = () => {
    p5.background(255);
    //p5.generate();
    for ( let i = 0; i < columns;i++) {
      for ( let j = 0; j < rows;j++) {
        if ((board[i][j] == 1)) p5.fill(0);
        else p5.fill(255);
        p5.stroke(0);
        p5.rect(i * w, j * w, w-1, w-1);
      }
    }
  
    /*
    p5.background(250);
    p5.normalMaterial();
    p5.push();
    p5.rotateZ(p5.frameCount * 0.01);
    p5.rotateX(p5.frameCount * 0.01);
    p5.rotateY(p5.frameCount * 0.01);
    p5.plane(100);
    p5.pop();*/
  };
}

  