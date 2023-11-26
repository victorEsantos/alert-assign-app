import {Component, OnInit} from '@angular/core';
import {TaskService} from "../service/task.service";
import {UserListAllService} from "../../users/user-list-all.service";

@Component({
  selector: 'app-tasks-list-all',
  templateUrl: './tasks-list-all.component.html',
  styleUrls: ['./tasks-list-all.component.css']
})
export class TasksListAllComponent implements OnInit{

  tasks: any[] = [];
  usuarios: any;

  constructor(private  taskService: TaskService, private userService: UserListAllService) {}

  ngOnInit() {



    this.loadTasks();


    this.userService.getUsers().subscribe(
      (data: any) => {
        this.usuarios = data; // Atualize o array de usuários com os dados recebidos
      },
      error => {
        console.error('Erro ao carregar usuários:', error);
      }
    );
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(
      (data: any) => {
        this.tasks = data;
      },
      error => {
        console.error('Erro ao carregar tarefas:', error);
      }
    );
  }


  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(
      (data: any) => {
        console.log('Tarefa deletada com sucesso:', data);
        this.loadTasks();
      }
    );
  }

  getUsersName(users: any) {
    let stringNomes = '';

    users.forEach((user: any) => {
      if(stringNomes != '') {
        stringNomes += user.name + ', ';
      } else {
        stringNomes += user.name;
      }
    });

    return stringNomes;
  }
}
