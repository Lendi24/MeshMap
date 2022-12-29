import React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "react-p5-wrapper";
import { Tile } from '../tiles/Tile'; 
import { canvasUpdate } from '../p5'; 

export class World {
    cols : number;
    rows :number;
    rooms:number;  
    grid: Tile[][];

    constructor(cols:number, rows:number, nodesize:number){
        this.cols = cols;
        this.rows = rows;
        this.rooms =0;
        this.grid = [];

        this.grid = new Array(cols).fill(null).map( ()=> new Array(rows).fill(null));
        for (let j = 0; j < cols; j++) {
          
           for (let i = 0; i < rows; i++) {
                this.grid[j][i] = new Tile(i+cols*j)
          }
        }
    
      }
    
    // generateMazeExits(){

      
    // }


    generateExits(){
      for (let j = 0; j < this.cols; j++) {
        
        for (let i = 0; i < this.rows; i++) {
          this.grid[j][i].exits = []
        }
      }

      for (let j = 0; j < this.cols; j++) {          
        for (let i = 0; i < this.rows; i++) {

          let top, bottom, left, right;
          if ( this.grid[j] [i - 1] ) { top = this.grid[j]       [i - 1];  } 
          if ( this.grid[j + 1]     ) { right = this.grid[j + 1] [i];      } 
          if ( this.grid[j] [i + 1] ) { bottom = this.grid[j ]   [i + 1];  } 
          if ( this.grid[j - 1]     ) { left = this.grid[j - 1]  [i];      } 
          
          if (top     && !top.visited)     {this.grid[j][i].exits.push(top);   }
          if (right   && !right.visited)   {this.grid[j][i].exits.push(right);  }
          if (bottom  && !bottom.visited)  {this.grid[j][i].exits.push(bottom); }
          if (left    && !left.visited)    {this.grid[j][i].exits.push(left);   }
        }
      } 
    }
  }