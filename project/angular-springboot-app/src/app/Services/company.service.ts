import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';

const APIUrlCompany = "http://localhost:8080/api/company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends GenericService<Company> {
  constructor(http: HttpClient) {
    super(APIUrlCompany, http);
  }
}
