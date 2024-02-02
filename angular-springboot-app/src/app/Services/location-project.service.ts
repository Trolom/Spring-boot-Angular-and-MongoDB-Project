import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { LocationProject } from '../models/location-project';

const APIUrlLocationProject = "http://localhost:8080/api/locationproject";

@Injectable({
  providedIn: 'root'
})
export class LocationProjectService extends GenericService<LocationProject> {
  constructor(http: HttpClient) {
    super(APIUrlLocationProject, http);
  }
}
