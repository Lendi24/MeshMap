import React     from "react";
import Sketch    from "react-p5";
import p5Types   from "p5"; 

import { Tile  }    from '../../app/tiles/Tile'; 
import { World }    from '../../app/worldClass/world'; 
import {getTool}    from '../../data/tools'
import {dungeonGen} from '../../app/worldGenerator/dungeonWorld/dungeonGen'

interface ComponentProps {
	//Your component props
}

let x = 50;
const y = 50;

let gp5 : any;
let w : number;
let columns : any;
let rows : any;
export let board : any;
let locked = true;


const p5Canvas: React.FC<ComponentProps> = (props: ComponentProps) => {
	//See annotations in JS for more information
	const setup = (p5: p5Types, canvasParentRef: Element) => {
		//p5.createCanvas(500, 500).parent(canvasParentRef); <--- Old!

        let canvas = p5.createCanvas(720, 720);

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
        canvas.elt.onmouseout  = () => {locked = true;}
    
        canvas.elt.onmousemove = (e:MouseEvent) => {
            if (!locked) {
                let target = e.target as HTMLElement;
                let x = Math.floor((e.x - target.offsetLeft) / w);
                let y = Math.floor((e.y - target.offsetTop ) / w);
            
                getTool().logic.call("oi",x,y,e);
            
            //canvasSetPixel(x,y,new Tile());
    
            //obeserver att ett fel kan inträffa i fall det är j +i*cols eller vice versa, Va fan menade jag -Enok
          }
        }

        canvas.elt.onmousedown = (e:MouseEvent) => {
            if (!locked) {
                let target = e.target as HTMLElement;
                let x = Math.floor((e.x - target.offsetLeft) / w);
                let y = Math.floor((e.y - target.offsetTop ) / w);
              
                getTool().logic.call("oi",x,y,e);
              
              //canvasSetPixel(x,y,new Tile());
      
              //obeserver att ett fel kan inträffa i fall det är j +i*cols eller vice versa, Va fan menade jag -Enok
            }
        }
      
        /*
        // generateCircular(20,20,10,board,4) -- Needs to be here! 
        dungeonGen(10,3,10,3,20,board);
        board.generateExits();
        
        //console.log(board.grid)*/
        canvasUpdate(p5);
	};

	const draw = (p5: p5Types) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		x++;
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
    

	return <Sketch setup={setup} draw={draw} />;
};

export default p5Canvas;