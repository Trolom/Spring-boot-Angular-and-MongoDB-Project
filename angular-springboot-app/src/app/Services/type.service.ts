import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Type } from '../models/type';

const APIUrlType = "http://localhost:8080/api/type";

@Injectable({
  providedIn: 'root'
})
export class TypeService extends GenericService<Type> {
  constructor(http: HttpClient) {
    super(APIUrlType, http);
  }
}
