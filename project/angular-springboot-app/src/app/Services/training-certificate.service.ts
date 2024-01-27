import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { TrainingCertificate } from '../models/training-certificate';

const APIUrlTrainingCertificate = "http://localhost:8080/api/trainingcertificate";

@Injectable({
  providedIn: 'root'
})
export class TrainingCertificateService extends GenericService<TrainingCertificate> {
  constructor(http: HttpClient) {
    super(APIUrlTrainingCertificate, http);
  }
}
