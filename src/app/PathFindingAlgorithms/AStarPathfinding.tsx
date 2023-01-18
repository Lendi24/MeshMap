import { RoomTile } from "../tiles/TileRoom";
import {board} from '../../views/Editor/p5Canvas'
import animate from './pathFindingAnime'

function randomIntFromInterval(min:any, max:any) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
export function AstarPath(x1:any,y1:any,x2:any,y2:any,world:any,showPath:boolean){
  
   
  let openSet =[];
  let bestPath = [];
  let closedSet =[];

  let start:any = world.grid[x1][y1];
  let end:any = world.grid[x2][y2];

  start.walkable = true;
 
  end.walkable = true;



  openSet.push(start);


  for (let j = 0; j < world.cols; j++) {
    for (let i = 0; i < world.rows; i++) {

      board.grid[j][i].g = 0;
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
  
  function heuristic(start:any,end:any){

    let currentCoordsStart = find2DArray(start);
    let currentCoordsEnd = find2DArray(end);

  
    let totalD= Math.abs(currentCoordsStart![0] - currentCoordsEnd![0]) + Math.abs(currentCoordsStart![1] - currentCoordsEnd![1]);
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
        
        bestPath.push(current)
          
          current=current.parent;
          } 
      while(current != start);


      bestPath.push(start);
      bestPath.reverse();
      //console.log(bestPath)
      if (showPath==true) {
        animate(world,bestPath)

      }
          
      return true;
      }
  }

    removeFromArray(openSet, current)
    closedSet.push(current);   
     let exits:any = current.exits;

     for (let i = 0; i < exits.length; i++) {
      let exit = exits[i];

      if (!closedSet.includes(exit) && exit.walkable) {

        let tempG = current.g + heuristic(exit,current);
        if (!openSet.includes(exit)) {
          openSet.push(exit);
      } else if (tempG >= exit.g) {
          // No, it's not a better path
          continue;
      }
    
     
        exit.h = heuristic(exit,current)
        exit.f = exit.g + exit.h;
        exit.parent = current;
      
  

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

      board.grid[j][i].g = randomIntFromInterval(1,100)
      
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
  function heuristic(start:any,end:any){

    let currentCoordsStart = find2DArray(start);
    let currentCoordsEnd = find2DArray(end);

  
    let totalD= Math.abs(currentCoordsStart![0] - currentCoordsEnd![0]) + Math.abs(currentCoordsStart![1] - currentCoordsEnd![1]);
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

      if (!closedSet.includes(exit) ) {

        let tempG = current.g + heuristic(exit,current);
        if (!openSet.includes(exit)) {
          openSet.push(exit);
      } else if (tempG >= exit.g) {
          // No, it's not a better path
          continue;
      }
    
     
        exit.h = heuristic(exit,current)
        exit.f = exit.g + exit.h;
        exit.parent = current;
      
  

      }

      
    }


    if (openSet.length === 0) {
      //return console.log("no solution")
    }


  }
 


}

