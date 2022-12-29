import { ReactP5Wrapper } from 'react-p5-wrapper';
import {Tile} from './Tile'

export class RoomTile extends Tile {

  roomId:Number;
  constructor(roomId:any) {
   super()
   this.room = true;
   this.roomId =roomId;
  }
  icon : Text;
}
  