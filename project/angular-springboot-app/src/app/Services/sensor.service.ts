import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Sensor } from '../models/sensor';

const APIUrlSensor = "http://localhost:8080/api/sensor";

@Injectable({
  providedIn: 'root'
})
export class SensorService extends GenericService<Sensor> {
  constructor(http: HttpClient) {
    super(APIUrlSensor, http);
  }
}
