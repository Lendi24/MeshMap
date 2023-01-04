function randomIntFromInterval(min:any, max:any) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
export function generateCircular(Xc:any, Yc:any, r:any, world:any,rooms:any)

{
 
  function lineNoDiag(x0:any,y0:any,x1:any, y1:any) {
    let xDist =  Math.abs(x1 - x0);
    let yDist = -Math.abs(y1 - y0);
    let xStep = (x0 < x1 ? +1 : -1);
    let yStep = (y0 < y1 ? +1 : -1);
    let error = xDist + yDist;

    

    while (x0 != x1 || y0 != y1) {
        if (2*error - yDist > xDist - 2*error) {
            // horizontal step
            error += yDist;
            x0 += xStep;
        } else {
            // vertical step
            error += xDist;
            y0 += yStep;
        }

        world.grid[x0][y0].rgbText="rgb(0,0,255)";
        world.grid[x0][y0].walkable = true;

    }
}

    let pointofchange = (2 * 3.141592) / 32;

    for (let i = 0; i < 32; i++) {
      let x1 = Math.round(Xc + r * Math.sin(pointofchange * i));
      let y1 = Math.round(Yc + r * Math.cos(pointofchange * i));
      let x2 = Math.round(Xc + r * Math.sin(pointofchange * (i + 1)));
      let y2 = Math.round(Yc + r * Math.cos(pointofchange * (i + 1)));
      
      
      lineNoDiag(x1,y1,x2,y2)

    }


    
    let roomPlacment = (2 * 3.141592) / rooms;
    let Offset =  randomIntFromInterval(0,360)* (3.141592 / 180);

    let xRoom,yRoom

    for (let y = 0; y < rooms; y++) {

        let d = Math.random();
        if (d<0.5) {
             xRoom = Math.ceil(Xc + r * Math.sin(roomPlacment * y + Offset));
             yRoom = Math.ceil(Yc + r * Math.cos(roomPlacment * y + Offset));

        } 
        else {
             xRoom = Math.floor(Xc+ r * Math.sin(roomPlacment * y + Offset));
             yRoom = Math.floor(Yc + r * Math.cos(roomPlacment * y+ Offset));
        }

        console.log( "coordx: "+ xRoom + " coordy: " + yRoom)
        world.generateRoom(xRoom,yRoom,4,4)
        


    }

    




}