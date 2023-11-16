import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TaskCreateComponent} from "./task-create/task-create.component";

const routes: Routes = [
  { path: 'tasks/create', component: TaskCreateComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
