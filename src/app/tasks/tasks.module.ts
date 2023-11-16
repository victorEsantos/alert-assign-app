import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksRoutingModule } from './tasks-routing.module';
import { TaskCreateComponent } from './task-create/task-create.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    TaskCreateComponent
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
