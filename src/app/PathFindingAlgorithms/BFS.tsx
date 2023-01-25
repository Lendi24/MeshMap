
export function PathFindingBFS(x1:number, y1:number,x2:number, y2:number, world:any) {
    for (let j = 0; j < world.cols; j++) {
        for (let i = 0; i < world.rows; i++) {
            world.grid[j][i].visited = false;
            world.grid[j][i].truePath = false;   
        }
    }

    if (!world.grid[x1][y1]) {
        console.log("Start does not exist");
        return;
    }

    if (!world.grid[x2][y2]) {
        console.log("Goal does not exist");
        return;
    }

    let root = world.grid[x1][y1];
    let end = world.grid[x2][y2];
    
    let queue =  [];
    let bestPath = [];
    root.visited = true;
    root.truePath = true;
    root.trace = true;

    let steps = 0;
    queue.push(root);

    while(queue.length>0){
        steps++                
        let current = queue.shift();
        if (current == end ) { 
            do{
                bestPath.push(current)
                current!.rgbText="rgb(170, 255, 0)";
                current!.trace = true;
                current=current!.parent;
                } 
            while(current != root);

            bestPath.push(root);
            bestPath.reverse();

            //console.log(world.grid);
            //console.log(bestPath);
            canvasUpdate();
            return bestPath;
        }

        current!.exits.forEach((element:any)=>{
            if (!element.visited && element.walkable) {
                element.visited = true;
                element.parent = current!;
                queue.push(element);
            }
        });
    }
}