import { RoomTile } from "../tiles/TileRoom";
import {board} from '../p5'

export function AstarPath(x1:any,y1:any,x2:any,y2:any,world:any){
  
   
  let openSet =[];
  let bestPath = [];
  let closedSet =[];

  let start:any = world.grid[x1][y1];
  let end:any = world.grid[x2][y2];

  start.walkable = true;
  start.rgbText = "rgb(0,255,0)"
  end.rgbText = "rgb(255,0,0)"
  end.walkable = true;



  openSet.push(start);


  for (let j = 0; j < world.cols; j++) {
    for (let i = 0; i < world.rows; i++) {

      world.grid[j][i].visited = false;
      world.grid[j][i].truePath = false;   
    }

 }

    function removeFromArray(arr:any, elt:any) {
      for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == elt) {
          arr.splice(i, 1);
        }
      }
    }

  function find2DArray(target:any){

    for (let j = 0; j < world.cols; j++) {
      
      for (let i = 0; i < world.rows; i++) {
          if ( world.grid[j][i] == target) {
           return [j,i]
          }
      }
   }


  }
  
  function heuristic(start:any){

    let currentCoords = find2DArray(start);
    let totalX = Math.abs(currentCoords![0]-x2)
    let totalY = Math.abs(currentCoords![1]-y2)

    let totalD = totalX + totalY
    return totalD;
  }

  while(openSet.length>0){

    let winner = 0;

    for (let i = 0; i < openSet.length; i++) {
        if (openSet[i].f < openSet[winner].f) {

          winner = i; 
        }    
    }

    let current:any = openSet[winner];
    //console.log(current)
    if (openSet[winner] == end) {
      
      if (current == end ) 
      { 
      do{
        
        current.rgbText="rgb(170, 255, 0)";
        bestPath.push(current)
          
          current=current.parent;
          } 
      while(current != start);


      bestPath.push(start);
      bestPath.reverse();
     // console.log(bestPath)

      return bestPath;
      }
  }

    removeFromArray(openSet, current)
    closedSet.push(current);   
     let exits:any = current.exits;

    for (let i = 0; i < exits.length; i++) {
      let exit = exits[i];

      if (!closedSet.includes(exit) && exit.walkable ) {

        let tempG = current.g + 1;

        if(openSet.includes(exit)){
          if (tempG<exit.g) {
            exit.g = tempG;
          }

        }  else{
        exit.g = tempG;
        openSet.push(exit)
      }

    
      exit.h = heuristic(exit)
      exit.f = exit.g + exit.h;
      exit.parent = current;
      //console.log(exit)

      }

      
    }


    if (openSet.length === 0) {
      //return console.log("no solution")
    }


  }
 


}


//_____________________________________________________________________________ASTART CARVING PATHS____________________________________________________//
export function Carve(x1:any,y1:any,x2:any,y2:any,world:any){
  
   
  let openSet =[];
  let bestPath = [];
  let closedSet =[];

  let start:any = board.grid[x1][y1];
  let end:any = board.grid[x2][y2];




  openSet.push(start);


  for (let j = 0; j < board.cols; j++) {
    for (let i = 0; i < board.rows; i++) {

      board.grid[j][i].visited = false;
      board.grid[j][i].truePath = false;   
    }

 }

    function removeFromArray(arr:any, elt:any) {
      for (var i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == elt) {
          arr.splice(i, 1);
        }
      }
    }

  function find2DArray(target:any){

    for (let j = 0; j < world.cols; j++) {
      
      for (let i = 0; i < world.rows; i++) {
          if ( world.grid[j][i] == target) {
           return [j,i]
          }
      }
   }


  }
  function heuristic(start:any){

    let currentCoords = find2DArray(start);
    let totalX = Math.abs(currentCoords![0]-x2)
    let totalY = Math.abs(currentCoords![1]-y2)

    let totalD = totalX + totalY
    return totalD;
  }

  while(openSet.length>0){

    let winner = 0;

    for (let i = 0; i < openSet.length; i++) {
        if (openSet[i].f < openSet[winner].f) {

          winner = i; 
        }    
    }

    let current:any = openSet[winner];
    if (openSet[winner] == end) {
      
      if (current == end ) 
      { 
      do{
        

        if (current instanceof RoomTile) {
        }
        else{

          current.rgbText="rgb(64,51, 53)";

        }
        current.walkable = true;
        bestPath.push(current)
          
          current=current.parent;
          } 
      while(current != start);


      bestPath.push(start);
      bestPath.reverse();
      //console.log(bestPath)

      return bestPath;
      }
  }

    removeFromArray(openSet, current)
    closedSet.push(current);   
     let exits:any = current.exits;

    for (let i = 0; i < exits.length; i++) {
      let exit = exits[i];

      if (!closedSet.includes(exit)) {

        let tempG = current.g + 1;

        if(openSet.includes(exit)){
          if (tempG<exit.g) {
            exit.g = tempG;
          }

        }  else{
        exit.g = tempG;
        openSet.push(exit)
      }

    
      exit.h = heuristic(exit)
      exit.f = exit.g + exit.h;
      exit.parent = current;

      }

      
    }


    if (openSet.length === 0) {
      //return console.log("no solution")
    }


  }
 


}
