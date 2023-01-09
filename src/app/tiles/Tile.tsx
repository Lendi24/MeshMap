export class Tile {

  rgbText: string = "rgb(255,255,255)";
  wall : boolean = false;
  walkable : boolean = false;
  path : boolean = false;
  //terrainType: any;

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
}