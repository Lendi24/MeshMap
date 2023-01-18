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

  data = {
    gScore : {
        type : "slider",
        value : this.g,
        floor : 1,
        roof  : 100,
    },

    Walkable : {
        type : "box",
        value : this.walkable,
    },
  }


  /*

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
    return {
      gScore : {
          type : "slider",
          value : this.g,
          floor : 1,
          roof  : 100,
      },

      Walkable : {
          type : "box",
          value : this.walkable,
      },
    }
  }*/
}