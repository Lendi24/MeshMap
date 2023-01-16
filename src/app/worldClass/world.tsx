import React from "react";
import { P5CanvasInstance, ReactP5Wrapper } from "react-p5-wrapper";
import { Tile } from '../tiles/Tile'; 
import {RoomTile} from '../tiles/TileRoom'
//import { canvasUpdate } from '../../views/Editor/p5Canvas'; 

export class World {
    cols : number;
    rows :number;
    rooms:number;  
    grid: any[][];
    currentRooms: any[];
    constructor(cols:number, rows:number, nodesize:number){
        this.cols = cols;
        this.rows = rows;
        this.rooms =0;
        this.grid = [];
        this.currentRooms = [];

      
        this.grid = new Array(cols).fill(null).map( ()=> new Array(rows).fill(null));
        for (let j = 0; j < cols; j++) {
          
           for (let i = 0; i < rows; i++) {
                this.grid[j][i] = new Tile()
          }
        }
    
      }
    
      generateRoom(x1:any,y1:any,length:any,height:any){
        this.rooms++;
        let placeRoom:any = true;
        const roomNode = new RoomTile(this.rooms)
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
        if (cornerX-1>0 && cornerY-1>0 ) {
          for (let j = cornerX-1; j < length+cornerX +1 ; j++) {
    
            for (let i = cornerY-1; i < height+cornerY+1; i++) {//Idk how or why but if you take the three first condittions and add them to to the third if statment from here. You get cool dungeon
                 if (typeof this.grid[j] == 'undefined'||  typeof this.grid[j][i]== 'undefined' ||  typeof this.grid[j][i-1]== 'undefined' ||this.grid[j][i] instanceof RoomTile ) {
           //       console.log("HELLO")
                  placeRoom = false;
                  return;
                 }
             }
           }
          
        }
        
    
        if(placeRoom){
          this.currentRooms.push(roomNode)

          for (let j = cornerX; j < length+cornerX; j++) {    
            for (let i = cornerY; i < height+cornerY; i++) {
       
              if (j>0 && j<this.cols && i>0 && i<this.rows) {
                this.grid[j][i] = roomNode;
                this.grid[j][i].rgbText = "rgb(100,100,100)"


              }
           }
         }
        }
     
    
        
      }
        
      }


    generateExits(){
      for (let j = 0; j < this.cols; j++) {
        
        for (let i = 0; i < this.rows; i++) {
          this.grid[j][i].exits = []
        }
      }

      for (let j = 0; j < this.cols; j++) {          
        for (let i = 0; i < this.rows; i++) {

          if (this.grid[j][i] instanceof RoomTile) {


            let top, bottom, left, right;
            if ( this.grid[j] [i - 1] ) { top = this.grid[j]       [i - 1];  } 
            if ( this.grid[j + 1]     ) { right = this.grid[j + 1] [i];      } 
            if ( this.grid[j] [i + 1] ) { bottom = this.grid[j ]   [i + 1];  } 
            if ( this.grid[j - 1]     ) { left = this.grid[j - 1]  [i];      } 
            
            if (top     && !top.visited && !top.roomId)     {this.grid[j][i].exits.push(top);   }
            if (right   && !right.visited && !right.roomId)   {this.grid[j][i].exits.push(right);  }
            if (bottom  && !bottom.visited&& !bottom.roomId)  {this.grid[j][i].exits.push(bottom); }
            if (left    && !left.visited && !left.roomId)    {this.grid[j][i].exits.push(left);   }
            
            
          } else {
        
            let top, bottom, left, right;
            if ( this.grid[j] [i - 1] ) { top = this.grid[j]       [i - 1];  } 
            if ( this.grid[j + 1]     ) { right = this.grid[j + 1] [i];      } 
            if ( this.grid[j] [i + 1] ) { bottom = this.grid[j ]   [i + 1];  } 
            if ( this.grid[j - 1]     ) { left = this.grid[j - 1]  [i];      } 
            
            if (top     && !top.visited )     {this.grid[j][i].exits.push(top);   }
            if (right   && !right.visited )   {this.grid[j][i].exits.push(right);  }
            if (bottom  && !bottom.visited)  {this.grid[j][i].exits.push(bottom); }
            if (left    && !left.visited )    {this.grid[j][i].exits.push(left);   }
          
          
            
          }

          
        }
      } 
    }
  }

