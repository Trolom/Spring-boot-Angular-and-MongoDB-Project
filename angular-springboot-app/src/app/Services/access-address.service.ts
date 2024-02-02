import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { AccessAddress } from '../models/access-address';

const APIUrlAccessAddress = "http://localhost:8080/api/accessaddress";

@Injectable({
  providedIn: 'root'
})
export class AccessAddressService extends GenericService<AccessAddress> {
  constructor(http: HttpClient) {
    super(APIUrlAccessAddress, http);
  }
}
