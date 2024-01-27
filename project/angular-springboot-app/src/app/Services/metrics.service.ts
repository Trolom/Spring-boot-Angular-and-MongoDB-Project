import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Metrics } from '../models/metrics';

const APIUrlMetrics = "http://localhost:8080/api/metrics";

@Injectable({
  providedIn: 'root'
})
export class MetricsService extends GenericService<Metrics> {
  constructor(http: HttpClient) {
    super(APIUrlMetrics, http);
  }
}
