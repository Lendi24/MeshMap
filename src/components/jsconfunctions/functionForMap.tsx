import { json } from 'stream/consumers';
import { World }    from '../../app/worldClass/world'; 


export function loadURLMap(board:World){

    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
    //board.grid = JSON.parse(this.responseText)
        let data = JSON.parse(this.responseText);
        console.log(JSON.parse(this.responseText));
        console.log(board.grid);

        for (let i = 0; i < data.length; i++) {
            for (let j = 0; j < data[0].length; j++) {
                board.grid[i][j].f = data[i][j].f;
                board.grid[i][j].g = data[i][j].g;
                board.grid[i][j].h = data[i][j].h;

                board.grid[i][j].rgbText = data[i][j].rgbText;

                board.grid[i][j].walkable = data[i][j].walkable;
            }            
        }
    }

    xhttp.open("GET", "http://localhost:3001/data.json");
    xhttp.send();
}



export function loadMap(map:string){
    

    let savedMap = JSON.parse(map);

    return savedMap;




}

export function saveMap(map:any){


    for (let j = 0; j < map.cols; j++) {
      
        for (let i = 0; i < map.rows; i++) {
          
            map.grid[j][i].exits = [];
            map.grid[j][i].parent = null;
            
        }
      }
      

    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(map.grid));
    console.log(dataStr)
    var a = document.createElement('a');
    a.setAttribute("href",     dataStr     );
    a.setAttribute("download", "map.txt");
    a.click();
    a.remove();

    return dataStr


}