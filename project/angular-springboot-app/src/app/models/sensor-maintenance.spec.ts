import { Sensor } from "./sensor";

export class SensorMaintenance {
  m_id: number;
  installation_date: Date;
  calibration_date: Date;
  status: string;
  maintenance_by: string;
  sensor: Sensor;

  constructor() {
    this.m_id = 0;
    this.installation_date = new Date();
    this.calibration_date = new Date();
    this.status = '';
    this.maintenance_by = '';
    this.sensor = new Sensor;
  }
}