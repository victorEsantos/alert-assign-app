import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserListAllService {
  private apiUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUserById(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.get<any>(url);
  }

  createUser(userData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userData);
  }

  updateUser(userId: number, userData: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<any>(url, userData);
  }

}
