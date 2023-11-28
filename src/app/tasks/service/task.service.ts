// task.service.ts
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  private apiUrl = environment.apiUrl + '/task';

  constructor(private http: HttpClient) { }

  createTask(task: Task): Observable<any> {
    return this.http.post<any>(this.apiUrl, task);
  }

  getTasks() {
    return this.http.get(this.apiUrl);
  }

  deleteTask(id: string) {
    return this.http.delete(this.apiUrl + '/' + id + '/delete');
  }

  insertUser(taskId: string, userId: string) : Observable<any> {
    return this.http.post<any>(this.apiUrl + '/insertUser', new TarefaInserirUsuario(taskId, userId), this.httpOptions);
  }

  getById(id: string) {
    return this.http.get(this.apiUrl + '/' + id);
  }

  ativarTarefa(taskId: string) {
    return this.http.post<any>(this.apiUrl + '/' + taskId + '/activate', null);
  }
}

export class TarefaInserirUsuario{
  taskId: string = "";
  userId: string = "";

  constructor(taskId: string, userId: string){
    this.taskId = taskId;
    this.userId = userId;
  }
}
