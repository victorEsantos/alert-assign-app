import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TaskCreateComponent} from "./task-create/task-create.component";
import {TasksListAllComponent} from "./tasks-list-all/tasks-list-all.component";
import {TaskManageUsersComponent} from "./task-manage-users/task-manage-users.component";

const routes: Routes = [
  { path: 'tasks/create', component: TaskCreateComponent },
  { path: 'tasks/list', component: TasksListAllComponent },
  { path: 'tasks/:id/usuarios', component: TaskManageUsersComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
