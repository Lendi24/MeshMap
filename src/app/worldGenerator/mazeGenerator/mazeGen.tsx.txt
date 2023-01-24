import { Tile } from '../../tiles/Tile'; 


export function generateMaze(x1:any,y1:any, world:any) {

   //function to find a specifit tile in a 2darray
 function find2DArray(target:any){
  for (let j = 0; j < world.cols; j++) {   
    for (let i = 0; i < world.rows; i++) {
      if ( world.grid[j][i] == target) {
        return [j,i]
      }
    }
  }
}
 
//Function to find generate neighbour
 
  // Re-Initialize the world with all walls
  for ( let i = 0; i < world.cols;i++) {
    for ( let j = 0; j < world.rows;j++) {     
     
      world.grid[i][j] = new Tile()
      world.grid[i][j].wall = true;
      world.grid[i][j].rgbText = "rgb(147,141,124)";

    }
  } 
  world.generateExits()  
  //Randomizes exits to get a more random maze

  
  //Neighbors for each tile
  // for ( let i = 0; i < world.cols;i++) {
  //   for ( let j = 0; j < world.rows;j++) {     
      
  //    getExits(world.grid[i][j])

  //   }
  // } 

  function direction(current:any,next:any){

    let currentCoords:any = find2DArray(current);
    let nextCoords:any = find2DArray(next)

    //Conditions
    //if Currentcoords[0]-nextCoords[0] = 1 then it goes upp
    //if Currentcoords[0]-nextCoords[0] = -1 then it goes down
    //if Currentcoords[1]-nextCoords[1] = negativ integer then it goes right
    //if Currentcoords[1]-nextCoords[1] = positiv integer then it goes left
    
    let upDown:any = currentCoords[0]-nextCoords[0]
    
    let rightLeft:any =  currentCoords[1]-nextCoords[1]

    
    if (upDown > 0) {
      return "up"
    }
    if (upDown < 0) {
      return "down"
    }
    if (rightLeft <0 ) {
      return "right"
    }
    if (rightLeft >0 ) {
      return "left"
    }




  }

  let start:any = world.grid[x1][y1];
  // Choose a random starting position

  let root = world.grid[x1][y1];
  let queue:any =  [];
  let bestPath = [];
  root.visited = true;
  root.truePath = true;
  root.trace = true;
  let steps = 0;
  

  queue.push(root);
  while(queue.length>0){
      steps++       
      let current = queue.pop();

      // if (current == root && steps > 1 ) { 
      //     do{

      //         bestPath.push(current)
      //         current!.rgbText="rgb(255, 255, 255)";
      //         current!.trace = true;
      //         current=current!.parent;
      //         } 
      //     while(current != root);

      //     bestPath.push(root);
      //     bestPath.reverse();

      //     //console.log(world.grid);
      //     //console.log(bestPath);
      //     return bestPath;
      // }

      // for (let i= 0; 3 <i; i++) {


      // let element:any = current.exits[i]
      
        
      // }


      current!.exits.forEach((element:any)=>{

        let CurrentCoords:any = find2DArray(current)
        // let topleft,top,topright,right,downright,down,downleft,left;
        // if (world.grid[CurrentCoords[0]-1][CurrentCoords[1]-1] ){topleft = world.grid[CurrentCoords[0]-1][CurrentCoords[1]-1]}
        // if (world.grid[CurrentCoords[0]][CurrentCoords[1]-1] ){top=world.grid[CurrentCoords[0]][CurrentCoords[1]-1]}
        // if ( world.grid[CurrentCoords[0]+1][CurrentCoords[1]-1] ){topright =world.grid[CurrentCoords[0]+1][CurrentCoords[1]-1] }
        // if (world.grid[CurrentCoords[0]+1][CurrentCoords[1]] ){right =world.grid[CurrentCoords[0]+1][CurrentCoords[1]] }
        // if (world.grid[CurrentCoords[0]+1][CurrentCoords[1]+1] ){ downright = world.grid[CurrentCoords[0]+1][CurrentCoords[1]]}
        // if (world.grid[CurrentCoords[0]+1][CurrentCoords[1]] ){down=world.grid[CurrentCoords[0]+1][CurrentCoords[1]] }
        // if (world.grid[CurrentCoords[0]-1][CurrentCoords[1]+1] ){downleft=world.grid[CurrentCoords[0]-1][CurrentCoords[1]+1]}
        // if (world.grid[CurrentCoords[0]-1][CurrentCoords[1]] ){left=world.grid[CurrentCoords[0]-1][CurrentCoords[1]]}

        let voidableRight = false
        if (world.grid[CurrentCoords[0]][CurrentCoords[1]-2]){voidableRight = true}
        let voidableDown = false
        if (world.grid[CurrentCoords[0]+2]){voidableDown = true}
        let voidableUp = false
        if (world.grid[CurrentCoords[0]-2]){voidableUp = true}
        let voidableLeft = false
        if (world.grid[CurrentCoords[0]][CurrentCoords[1]+2]){voidableLeft = true}

        if (
          // topleft && top && topright && right && downright && down && downleft && left &&
         
          !element.visited && element.wall 
         
         
          
          ) {

          switch (direction(current, element)) {
           case "down":
        

             if (
              voidableDown &&
               !world.grid[CurrentCoords[0]+1][CurrentCoords[1]].path &&
               !world.grid[CurrentCoords[0]][CurrentCoords[1]+1].path &&
               !world.grid[CurrentCoords[0]+1][CurrentCoords[1]+1].path &&
               !world.grid[CurrentCoords[0]-1][CurrentCoords[1]+1].path &&
               !world.grid[CurrentCoords[0]-1][CurrentCoords[1]].path 
             ) 
             {
               current.path = true;
               current.rgbText ="rgb(255,255,255)"
               element.visited = true;
               element.parent = current!;
               queue.push(element);

             }
             
             break;
           
           case "up":
         

             if (
              voidableUp &&
               !world.grid[CurrentCoords[0]-1][CurrentCoords[1]].path &&
               !world.grid[CurrentCoords[0]-1][CurrentCoords[1]-1].path &&
               !world.grid[CurrentCoords[0]][CurrentCoords[1]-1].path &&
               !world.grid[CurrentCoords[0]+1][CurrentCoords[1]-1].path &&
               !world.grid[CurrentCoords[0]+1][CurrentCoords[1]].path 
               ) 
               current.path = true;
               current.rgbText ="rgb(255,255,255)"
               element.visited = true;
               element.parent = current!;
               queue.push(element);

               {
               
             }
  
             
             break;
  
           case "left":
    

             if ( 
               voidableLeft &&
                !world.grid[CurrentCoords[0]][CurrentCoords[1]-1].path &&
                !world.grid[CurrentCoords[0]-1][CurrentCoords[1]-1].path &&
                !world.grid[CurrentCoords[0]-1][CurrentCoords[1]].path &&
                !world.grid[CurrentCoords[0]-1][CurrentCoords[1]+1].path &&
                !world.grid[CurrentCoords[0]][CurrentCoords[1]+1].path 
                
               ) 
               {
               current.path = true;
               current.rgbText ="rgb(255,255,255)"
               element.visited = true;
               element.parent = current!;
               queue.push(element);
               
             }
             
             break;
           
           case "right":
           


             if ( 
              voidableRight &&
               !world.grid[CurrentCoords[0]][CurrentCoords[1]-1].path &&
               !world.grid[CurrentCoords[0]+1][CurrentCoords[1]-1].path &&
               !world.grid[CurrentCoords[0]+1][CurrentCoords[1]].path &&
               !world.grid[CurrentCoords[0]+1][CurrentCoords[1]+1].path &&
               !world.grid[CurrentCoords[0]][CurrentCoords[1]+1].path 
               
              ) 
              {
              current.path = true;
              current.rgbText ="rgb(255,255,255)"
              element.visited = true;
              element.parent = current!;
              queue.push(element);
              
            }
             
             break;
         
          } 
  
            //console.log(queue)
  
         
       }
          
      });

  }


  // world.grid[x1][y1] = false;  // Set the starting position to be a path

  // Perform DFS to carve out the maze
  // const stack = [start];
  // while (stack.length > 0) 
  //   {



  //   } 

}
