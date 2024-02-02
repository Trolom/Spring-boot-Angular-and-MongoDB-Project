import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { ProjectAdmin } from '../models/project-admin';

const APIUrlProjectAdmin = "http://localhost:8080/api/projectadmin";

@Injectable({
  providedIn: 'root'
})
export class ProjectAdminService extends GenericService<ProjectAdmin> {
  constructor(http: HttpClient) {
    super(APIUrlProjectAdmin, http);
  }
}
