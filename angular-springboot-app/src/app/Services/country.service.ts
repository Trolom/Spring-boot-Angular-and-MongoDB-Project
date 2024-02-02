import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country';

const APIUrlCountry = "http://localhost:8080/api/country";

@Injectable({
  providedIn: 'root'
})
export class CountryService extends GenericService<Country> {
  constructor(http: HttpClient) {
    super(APIUrlCountry, http);
  }
}
