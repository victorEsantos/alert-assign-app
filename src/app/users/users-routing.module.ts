import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserListAllComponent} from "./user-list-all/user-list-all.component";
import {UserCreateComponent} from "./user-create/user-create.component";
import {RouterModule, Routes} from "@angular/router";



const routes: Routes = [
  { path: 'users/create', component: UserCreateComponent },
  { path: 'users/list', component: UserListAllComponent },
  // Outras rotas do módulo users podem ser adicionadas aqui, se necessário
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
