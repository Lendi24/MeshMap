export function backtrackingMaze(world:any) {
    
  // Make them odd
 
  
  // Fill maze with 1's (walls)
  function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
};

  
  for (var i = 0; i < world.cols; i++) {
      for (var j = 0; j < world.rows; j++) {
          world.grid[i][j].wall = true;

        world.grid[i][j].exits = shuffle(world.grid[i][j].exits)

      }
  }

  //generate random exits
  
  
  // Opening at top - start of maze
  let start = world.grid[0][1];
  start.wall = false;
  

  
  // First open cell
  var openCells = [start];
  
  while (openCells.length) {
      
      let cell:any;
      
      // Add unnecessary element for elegance of code
      // Allows openCells.pop() at beginning of do while loop
      
      // Define current cell as last element in openCells
      // and get neighbors, discarding "locked" cells
      do {
          openCells.pop();
          if (openCells.length == 0)
              break;
          cell = openCells.pop()
          cell.rgbText = "rgb(141,141,141)"
          console.log("hello")
      } 
      while (world.exits.length == 0 && openCells.length > 0);
      
      // If we're done, don't bother continuing
      if (openCells.length == 0)
          break;
      
      // Choose random neighbor and add it to openCells
      cell!.exits.forEach((element:any)=>{
        if (!element.visited && !element.wall) {
            element.visited = true;
            element.parent = cell!;
            openCells.push(element);
        }
    });
      // Set neighbor to 0 (path, not wall)
      // Set connecting node between cell and choice to 0
      // // world.grid[ choice[0] ][ choice[1] ] = 0;
      // // world.grid[ (choice[0] + cell[0]) / 2 ][ (choice[1] + cell[1]) / 2 ] = 0;
  }
  
  // Opening at bottom - end of maze
  world.grid[world.cols - 1][world.grid[0].length - 2].wall = false;

  function mazeCarvin(){

  }

  
}




