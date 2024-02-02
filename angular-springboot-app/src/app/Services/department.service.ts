import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Department } from '../models/department';

const APIUrlDepartment = "http://localhost:8080/api/department";

@Injectable({
  providedIn: 'root'
})
export class DepartmentService extends GenericService<Department> {
  constructor(http: HttpClient) {
    super(APIUrlDepartment, http);
  }
}
