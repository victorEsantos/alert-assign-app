import {Component, OnInit} from '@angular/core';
import {UserListAllService} from "../../users/user-list-all.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TaskService} from "../service/task.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-task-manage-users',
  templateUrl: './task-manage-users.component.html',
  styleUrls: ['./task-manage-users.component.css']
})
export class TaskManageUsersComponent implements OnInit {

  taskId: string = "";

  form: FormGroup = this.fb.group({
    user: ['Selecione um usuário', Validators.required],
  })

  usersOnTask: any[] = [];
  allUsers: any[] = [];

  constructor(private router: Router,
              private fb: FormBuilder,
              private userService: UserListAllService,
              private taskService: TaskService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.taskId = params['id'];
    })

    this.form = this.fb.group({
      user: [Validators.required],
    })

    this.refreshUsersList();
    this.refreshTaskUsersList();
  }


  private refreshTaskUsersList() {
    this.taskService.getById(this.taskId).subscribe(
      (data: any) => {
        this.usersOnTask = data.users;
      })
  }

  private refreshUsersList() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.allUsers = data; // Atualize o array de usuários com os dados recebidos
      })
  }

  insertUser() {
    console.log(this.taskId)
    console.log(this.form.get('user'));
    this.taskService.insertUser(this.taskId, this.form.value.user).subscribe(response => {
        console.log('Usuario incluido na Tarefa com sucesso:', response);
        this.refreshTaskUsersList();
      },
      error => {
        alert('Erro ao incluir usuario na tarefa');
      });
  }

  deleteUser() {
    alert('deletar usuario da tarefa será implementado em breve');
  }

  ativarTarefa() {
    this.taskService.getById(this.taskId).subscribe(
      (data: any) => {
        //lista de usuarios é vazia
        if (data.users == null || data.users.length == 0) {
          alert('ERRO!!! \n   Não é possível ativar uma tarefa sem usuários');
        } else if (data.status == 'ACTIVE') {
          alert('Tarefa já está ativa');
          //return and stop metod
        } else {
          this.taskService.ativarTarefa(this.taskId).subscribe(response => {
              console.log('Tarefa ativada com sucesso:', response);
              alert('Tarefa ativada com sucesso!');
            },
            error => {
              alert('ERRO!!! \n  Erro ao ativar tarefa');
            });
        }
      }
    );
  }
}
