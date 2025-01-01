import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }
  userSignUp(data:any){
    return this.http.post('http://localhost:3000/users',data);
  }

  private apiUrl = 'http://localhost:3000/users'; // Adjust based on backend URL

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  updateProfile(id:string,profileData: any): Observable<any> {
    const url = `http://localhost:3000/users/${id}`
    return this.http.patch(url, profileData);
  }

  changePassword(id:string,passwordData:any): Observable<any> {
    const url = `http://localhost:3000/users/${id}`
    return this.http.patch(url, passwordData);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Delete a User
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // // Update User Detail
  // updateUser(id:string, userData: any): Observable<any> {
  //   return this.http.patch(`${this.apiUrl}/${id}`,userData);
  // }

  getPendingApprovals(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?isActive=false`);
  }

  approveUserRole(userId: string): Observable<void> {
    return this.http.patch<void>(`${this.apiUrl}/${userId}`, { isActive : true });
  }
}
