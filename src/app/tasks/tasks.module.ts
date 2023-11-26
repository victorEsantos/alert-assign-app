import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskCreateComponent } from './task-create/task-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";
import { TasksListAllComponent } from './tasks-list-all/tasks-list-all.component';
import { TaskManageUsersComponent } from './task-manage-users/task-manage-users.component';



@NgModule({
  declarations: [
    TaskCreateComponent,
    TasksListAllComponent,
    TaskManageUsersComponent
  ],
  exports: [
    TaskCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TasksRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class TasksModule { }
