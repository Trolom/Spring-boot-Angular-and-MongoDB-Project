import { Sensor } from "./sensor";


export class AccessAddress {
  accessAddress_id: number;
  host: string;
  port: number;
  ap: string;
  sensor: Sensor;

  constructor() {
	this.accessAddress_id = 0;
    this.host = "";
    this.port = 0;
    this.ap = "";
    this.sensor = new Sensor();
  }
}
