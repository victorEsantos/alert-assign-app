// task.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = environment.apiUrl + '/task';

  constructor(private http: HttpClient) { }

  createTask(task: Task): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  insertUser(taskId: string, userId: string): Observable<any> {
    const url = `${this.apiUrl}/insertUser`;
    const body = { taskId, userId };
    return this.http.post<any>(url, body);
  }
}

