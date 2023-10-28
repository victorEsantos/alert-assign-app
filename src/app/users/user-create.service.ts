import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {
  private apiUrl = 'http://localhost:8080/users'; // Certifique-se de que o URL está correto

  constructor(private http: HttpClient) { }

  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
