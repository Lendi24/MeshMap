import React     from "react";
import Sketch    from "react-p5";
import p5Types   from "p5"; 

import { Tile  }    from '../../app/tiles/Tile'; 
import { World }    from '../../app/worldClass/world'; 
import { getTool }  from '../../data/tools'
import { RoomTile } from "../../app/tiles/TileRoom";
import {dungeonGen} from '../../app/worldGenerator/dungeonWorld/dungeonGen'

interface ComponentProps {
  clickCallback : Function;
  moveCallback  : Function;

}

let x = 50;
const y = 50;

let w : number;
let columns : any;
let rows : any;
export let board : any;
let locked = true;

export function canvasSetPixel(x:number, y:number, pixel:Tile) {
    board.grid[x][y] = pixel; 
    board.grid[x][y].rgbText = "rgb(0,0,0)";
    board.generateExits();
  }
  
  export function canvasSetPixelColor(x:number, y:number, rgb:string) {
    board.grid[x][y].rgbText = rgb;
    board.generateExits();
  }
  
  export function canvasErasePixel(x:number,y:number){
    if (board.grid[x][y] instanceof RoomTile) {
        let room = board.grid[x][y];
  
        for ( let i = 0; i < columns;i++) {
            for ( let j = 0; j < rows;j++) {     
                if (board.grid[i][j] == room) {board.grid[i][j] = new Tile()}
            }
        } 
    }
    else{
      board.grid[x][y].rgbText = "rgb(255,255,255)";
      board.grid[x][y].walkable = false;
    }
  
    board.generateExits()
    //canvasUpdate()
  
  }
  
  export function canvasGetPixel(x:number, y:number) { return board.grid[x][y]; } 
  

/*////////////////////////
//Canvas component below//
////////////////////////*/
const p5Canvas: React.FC<ComponentProps> = (props: ComponentProps) => {
	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
      let canvas = p5.createCanvas(720, 720).parent("react-p5-canvas");

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
      canvas.elt.onmouseout  = () => {locked = true; props.moveCallback(-1,-1)}
    
      canvas.elt.onmousemove = (e:MouseEvent) => {
        if (!locked) {
          let target = e.target as HTMLElement;
          let x = Math.floor((e.x - target.offsetLeft) / w);
          let y = Math.floor((e.y - target.offsetTop ) / w);
          getTool().logic.call("oi",x,y,e);   
          //props.moveCallback(x,y);
        } else {props.moveCallback(-1,-1)}
      }

      canvas.elt.onmousedown = (e:MouseEvent) => {
        if (!locked) {
          let target = e.target as HTMLElement;
          let x = Math.floor((e.x - target.offsetLeft) / w);
          let y = Math.floor((e.y - target.offsetTop ) / w);
          console.log(y);
          getTool().logic.call("oi",x,y,e);
          props.clickCallback(x,y);
        }
      }
    canvasUpdate(p5);
	};

	const draw = (p5: p5Types) => {
        canvasUpdate(p5);
	};

    /*//////////////////////
    //CustomFunctionsBelow//
    //////////////////////*/

    function canvasUpdate(p5:p5Types) {
        p5.background(255);
        for ( let i = 0; i < columns;i++) {
            for ( let j = 0; j < rows;j++) {     
                let color = board.grid[i][j].color()
                p5.fill(color.rgbText)
                p5.stroke(0);
                p5.rect(i * w, j * w, w-1, w-1);
            }
        } 
    }  

	return (
        <div id="react-p5-canvas">
            <Sketch setup={setup} draw={draw} />
        </div>
    );
};

export default p5Canvas;
