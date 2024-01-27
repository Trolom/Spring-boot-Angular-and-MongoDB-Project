import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { TimeActive } from '../models/time-active';

const APIUrlTimeActive = "http://localhost:8080/api/timeactive";

@Injectable({
  providedIn: 'root'
})
export class TimeActiveService extends GenericService<TimeActive> {
  constructor(http: HttpClient) {
    super(APIUrlTimeActive, http);
  }
}
