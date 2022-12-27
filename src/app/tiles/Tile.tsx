export class Tile {

  rgbText: string = "rgb(255,255,255)";
  id : number;
  visited : boolean = false;
  trace : boolean = false;
  wall : boolean = false;
  truePath : boolean = false;
  parent : any;
  terrainType: any;

  
  f : number = 0;
  g : number = 0;
  h : number = 0;

  exits:any[];

  constructor(id:number) {
    this.id = id;
    
  }

   color(){
    return {rgbText: this.rgbText};
  }
  

}
  