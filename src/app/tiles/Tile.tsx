export class Tile {

  rgbText: string = "rgb(255,255,255)";

  walkable : boolean = false;

  parent : any;

  visited : boolean = false;
  trace : boolean = false;
  truePath : boolean = false;

  f : number = 0;
  g : number = 0;
  h : number = 0;

  exits:any[];
  
  color(){
    return {rgbText: this.rgbText};
  }

  setData(key:string,data:any) {
    switch (key) {
      case "gScore":
        this.g = data;
        break;

      case "Walkable":
        this.walkable = data;
        break;  
    
      default:
        console.error(`Error! No key in tile will match"${key}"`)
        break;
    }
  }

  getData() {
    let data = {
      gScore : {
          type : "slider",
          value : 10,
          floor : 1,
          roof  : 200,
      },

      Walkable : {
          type : "box",
          value : this.walkable,
      },
    }

    return data;
  }
}