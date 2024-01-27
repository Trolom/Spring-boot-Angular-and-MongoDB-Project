import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenericService<T> {
	
   // Inject ApiUrl in constructor to Get it from another Service
   constructor(@Inject(String) private APIUrl: string, private http: HttpClient) { }

  // Get Method
  getAll(): Observable<T[]> {
    return this.http.get<T[]>(this.APIUrl);
  }

  // Get with id
  get(id: any): Observable<T> {
    return this.http.get<T>(`${this.APIUrl}/${id}`);
  }

  // Update Method
  update(data: T): Observable<T> {
    return this.http.put<T>(`${this.APIUrl}`, data);
  }

  // Create Method
  create(data: T): Observable<T> {
    return this.http.post<T>(this.APIUrl, data);
  }

  // Delete Method
  delete(id: any): Observable<any> {
    return this.http.delete(`${this.APIUrl}/${id}`);
  }
}