export class Tile {

  rgbText: string = "rgb(255,255,255)";
  visited : boolean = false;
  trace : boolean = false;
  room : boolean = false;
  wall : boolean = false;
  truePath : boolean = false;
  parent : any;
  terrainType: any;
  path : boolean = false;
  
  f : number = 0;
  g : number = 0;
  h : number = 0;

  exits:any[];

  constructor() {
   
  }

   color(){
    return {rgbText: this.rgbText};
  }

}
  

