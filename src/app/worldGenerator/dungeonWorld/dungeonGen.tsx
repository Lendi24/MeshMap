import { AstarPath, Carve } from "../../PathFindingAlgorithms/AStarPathfinding"

export function dungeonGen (maxRoomLength:any,minRoomLength:any, maxRoomHeight:any, minRoomHeight:any, maxRoooms:any, world:any){
  
  function find2DArray(target:any){

    for (let j = 0; j < world.cols; j++) {
      
      for (let i = 0; i < world.rows; i++) {
          if ( world.grid[j][i] == target) {
           return [j,i]
          }
      }
   }


  }
  

  function randomIntFromInterval(min:any, max:any) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  for (let i = 0; i < maxRoooms; i++) {
    let x  = randomIntFromInterval(10,world.cols)
    let y  = randomIntFromInterval(10,world.rows)
    console.log ("x: " + x)
    console.log ("y: " + y)

    let roomLength = randomIntFromInterval(minRoomLength,maxRoomLength)
    let roomHeight = randomIntFromInterval(minRoomHeight,maxRoomHeight)


    world.generateRoom(x,y,roomLength,roomHeight)

    
  }


world.generateExits();

console.log( world.currentRooms)
for (let i = 0; i < world.currentRooms.length-1; i++) {


let firstRoom:any = find2DArray(world.currentRooms[i])
let secondRoom:any = find2DArray(world.currentRooms[i+1])

  Carve(firstRoom[0],firstRoom[1],secondRoom[0],secondRoom[1],world)



  
}


// let firstRoom:any = find2DArray(world.currentRooms[0])
// let secondRoom:any = find2DArray(world.currentRooms[4])
// AstarPath(firstRoom[0],firstRoom[1],secondRoom[0],secondRoom[1],world)









}
