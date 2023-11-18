import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {
  private apiUrl = environment.apiUrl + '/users'; // Certifique-se de que o URL está correto

  constructor(private http: HttpClient) { }

  createUser(userData: any): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }
}
