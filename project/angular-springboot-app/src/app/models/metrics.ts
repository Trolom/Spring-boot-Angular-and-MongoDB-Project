import { Sensor } from "./sensor";


export class Metrics {
  metrics_id: number;
  measurement: number;
  unit_measurement: string;
  timestamp: Date;
  sensor: Sensor;

  constructor() {
    this.metrics_id = 0;
    this.measurement = 0;
    this.unit_measurement = '';
    this.timestamp = new Date();
    this.sensor = new Sensor();
  }
}