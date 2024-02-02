import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Technician } from '../models/technician';

const APIUrlTechnician = "http://localhost:8080/api/technician";

@Injectable({
  providedIn: 'root'
})
export class TechnicianService extends GenericService<Technician> {
  constructor(http: HttpClient) {
    super(APIUrlTechnician, http);
  }
}
