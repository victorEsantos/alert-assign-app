import { Component, OnInit } from '@angular/core';
import { UserListAllService } from '../user-list-all.service'; // Importe o serviço

@Component({
  selector: 'app-user-list-all',
  templateUrl: './user-list-all.component.html',
  styleUrls: ['./user-list-all.component.css']
})
export class UserListAllComponent implements OnInit {
  users: any[] = []; // Array para armazenar usuários

  constructor(private userService: UserListAllService,
              private userDeleteService: UserDeleteService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    // Chame o serviço para obter a lista de usuários do backend
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data; // Atualize o array de usuários com os dados recebidos
      },
      error => {
        console.error('Erro ao carregar usuários:', error);
      }
    );
  }

  viewDetails(user: any) {
    // Lógica para visualizar detalhes do usuário (implemente conforme necessário)
    console.log('Detalhes do usuário:', user);
  }

  editUser(user: any) {
    // Lógica para editar o usuário (implemente conforme necessário)
    console.log('Editar usuário:', user);
  }

  deleteUser(user: any) {
    // Lógica para excluir o usuário (implemente conforme necessário)
    console.log('Excluir usuário:', user);
  }
}
