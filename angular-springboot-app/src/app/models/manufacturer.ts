import { Sensor } from "./sensor";

export class Manufacturer {
  manufacturer_id: number;
  quantity: number;
  sensor: Sensor;

  constructor() {
    this.manufacturer_id = 0;
    this.quantity = -1;
    this.sensor = new Sensor();
  }
}