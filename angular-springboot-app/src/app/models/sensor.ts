import { Type } from "./type";

export class Sensor {
  sensor_id: number;
  value: number;
  version: string;
  type: Type;

  constructor() {
    this.sensor_id = 0;
    this.value = 0;
    this.version = '';
    this.type = new Type(); 
  }
}