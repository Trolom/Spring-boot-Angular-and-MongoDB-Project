import { Sensor } from "./sensor";

export class TimeActive {
  timeActive_id: number;
  start_time: Date;
  end_time: Date;
  status: string;
  total_time: number;
  sensor: Sensor;

  constructor() {
    this.timeActive_id = 0;
    this.start_time = new Date();
    this.end_time = new Date();
    this.status = '';
    this.total_time = 0;
    this.sensor = new Sensor();
  }
}
