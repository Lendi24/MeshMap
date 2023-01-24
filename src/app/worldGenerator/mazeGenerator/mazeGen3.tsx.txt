

export function generateMaze3(world:any) {
  function find2DArray(target:any){
    for (let j = 0; j < world.cols; j++) {   
      for (let i = 0; i < world.rows; i++) {
        if ( world.grid[j][i] == target) {
          return [j,i]
        }
      }
    }
  }
  // Initialize all tiles as walls
  for (let j = 0; j < world.cols; j++) {
    for (let i = 0; i < world.rows; i++) {
        world.grid[j][i].wall = true;
        world.grid[j][i].rgbText = "rgb(0, 0, 0)";
    }
  }

  // Select a starting point for the maze generation
  let startCol = Math.floor(Math.random() * world.cols);
  let startRow = Math.floor(Math.random() * world.rows);
  let currentTile = world.grid[startCol][startRow];
  currentTile.wall = false;
  currentTile.visited = true;
  currentTile.rgbText = "rgb(255, 255, 255)";
  console.log(currentTile)

  // Use a stack to keep track of the tiles that have been visited
  let stack = [currentTile];
  // Use a depth-first search algorithm to generate the maze
  while (stack.length > 0) {
    // Get the current tile and its unvisited neighbors
    currentTile = stack[stack.length - 1];
    let neighbors = [];
    let coords:any = find2DArray(currentTile);
    let x = currentTile.id % world.cols;
    let y = Math.floor(currentTile.id / world.cols);
    if (coords[0] > 1 && !world.grid[coords[0] - 1][coords[1]].visited) {
      neighbors.push(world.grid[coords[0] - 1][coords[1]]);
    }
    if (coords[0] < world.cols - 2 && !world.grid[coords[0] + 1][coords[1]].visited) {
      neighbors.push(world.grid[coords[0] + 1][coords[1]]);
    }
    if (coords[1]> 1 && !world.grid[coords[0]][coords[1] - 1].visited) {
      neighbors.push(world.grid[coords[0]][coords[1] - 1]);
    }
    if (coords[1] < world.rows - 2 && !world.grid[coords[0]][coords[1] + 1].visited) {
      neighbors.push(world.grid[coords[0]][coords[1] + 1]);
    }

    // If the current tile has unvisited neighbors, choose a random one and
    // remove the wall between them
    if (neighbors.length > 1) {
      let nextTile = neighbors[Math.floor(Math.random() * neighbors.length)];
      nextTile.visited = true;
      nextTile.wall = false;
      nextTile.rgbText = "rgb(255, 255, 255)";
      stack.push(nextTile);
    }
    // If the current tile doesn't have any unvisited neighbors, remove it
    // from the stack
    else {
      stack.pop();
    }
  }
}