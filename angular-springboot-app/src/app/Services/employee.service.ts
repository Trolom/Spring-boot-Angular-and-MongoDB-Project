import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee';

const APIUrlEmployee = "http://localhost:8080/api/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends GenericService<Employee> {
  constructor(http: HttpClient) {
    super(APIUrlEmployee, http);
  }
}
