import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { SensorMaintenance } from '../models/sensor-maintenance';

const APIUrlSensorMaintenance = "http://localhost:8080/api/sensormaintenance";

@Injectable({
  providedIn: 'root'
})
export class SensorMaintenanceService extends GenericService<SensorMaintenance> {
  constructor(http: HttpClient) {
    super(APIUrlSensorMaintenance, http);
  }
}
