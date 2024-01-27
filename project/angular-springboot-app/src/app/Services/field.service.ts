import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Field } from '../models/field';

const APIUrlField = "http://localhost:8080/api/field";

@Injectable({
  providedIn: 'root'
})
export class FieldService extends GenericService<Field> {
  constructor(http: HttpClient) {
    super(APIUrlField, http);
  }
}
