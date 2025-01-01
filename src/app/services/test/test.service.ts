import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private baseUrl = 'http://localhost:3000/tests';

  constructor(private http: HttpClient) {}

  //Fetch all tests
  getAllTests(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Fetch a test by ID
  getTestById(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // Update a test by ID
  updateTest(id: string, testData: any): Observable<any> {
    return this.http.patch(`${this.baseUrl}/${id}`, testData);
  }

  // Create a new test
  createTest(testData: any): Observable<any> {
    return this.http.post(this.baseUrl, testData);
  }
}

