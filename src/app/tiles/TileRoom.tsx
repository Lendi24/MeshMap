import { ReactP5Wrapper } from 'react-p5-wrapper';
import { arrayBuffer } from 'stream/consumers';
import {Tile} from './Tile'

export class RoomTile extends Tile {
  roomId:number;
  cornerX:number;
  cornerY:number;
  length:number;
  height:number;
  priorityEntrance: any[];
  door1:Array<number>
  // door2:Array<number>

  // door3:Array<number>
  // door4:Array<number>


  
  constructor(roomId:any,cornerX:number,cornerY:number,length:number,height:number) {
   super()

   this.roomId =roomId;
   this.cornerX = cornerX;
   this.height = height;
   this.length = length;
   this.cornerY = cornerY;
   this.door1 = new Array;

   
    this.door1.push((Math.floor(this.cornerX+length)/2));
    this.door1.push( (Math.floor(this.cornerY+height)/2));
  //  this.door1[0] = this.cornerX+(this.length/2);
  //  this.door1[1] = this.cornerY;
   
  //  this.door2[0] = this.cornerX+this.length-1;
  //  this.door2[1] = this.cornerY;

  }

  //   let topEntrance = this.grid[cornerX+(length/2)][cornerY-1];  
  //  let  rightEntrance = this.grid[cornerX+length][cornerY+(height/2)];      
  // let botEntrance = this.grid[cornerX+(length/2)][cornerY+height];  
  //  let  = this.grid[cornerX-1][cornerY+(height/2)];      
}
  //is group