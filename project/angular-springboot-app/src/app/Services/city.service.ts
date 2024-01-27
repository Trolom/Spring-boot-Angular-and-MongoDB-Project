import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/city';

const APIUrlCity = "http://localhost:8080/api/city";

@Injectable({
  providedIn: 'root'
})
export class CityService extends GenericService<City> {
  constructor(http: HttpClient) {
    super(APIUrlCity, http);
  }
}
