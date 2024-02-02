import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Manufacturer } from '../models/manufacturer';

const APIUrlManufacturer = "http://localhost:8080/api/manufacturer";

@Injectable({
  providedIn: 'root'
})
export class ManufacturerService extends GenericService<Manufacturer> {
  constructor(http: HttpClient) {
    super(APIUrlManufacturer, http);
  }
}
