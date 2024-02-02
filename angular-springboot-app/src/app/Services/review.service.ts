import { Injectable } from '@angular/core';
import { GenericService } from './generic.service';
import { HttpClient } from '@angular/common/http';
import { Review } from '../models/review';

const APIUrlReview = "http://localhost:8080/api/review";

@Injectable({
  providedIn: 'root'
})
export class ReviewService extends GenericService<Review> {
  constructor(http: HttpClient) {
    super(APIUrlReview, http);
  }
}
