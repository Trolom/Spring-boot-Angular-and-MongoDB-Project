import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Address } from '../models/address';

const APIUrlAddress = "http://localhost:8080/api/address";

@Injectable({
  providedIn: 'root'
})
export class AddressService extends GenericService<Address> {
  constructor(http: HttpClient) {
    super(APIUrlAddress, http);
  }
}
