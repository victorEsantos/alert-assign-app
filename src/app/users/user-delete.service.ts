import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserDeleteService {

  private apiUrl = environment.apiUrl + '/users';

  constructor(private http: HttpClient) { }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<any>(url);
  }
}
