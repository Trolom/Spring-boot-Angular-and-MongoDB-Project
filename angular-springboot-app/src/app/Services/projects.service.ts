import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Projects } from '../models/projects';

const APIUrlProjects = "http://localhost:8080/api/projects";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService extends GenericService<Projects> {
  constructor(http: HttpClient) {
    super(APIUrlProjects, http);
  }
}
