import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersRoutingModule} from "./users/users-routing.module";
import {TasksRoutingModule} from "./tasks/tasks-routing.module";
import {HomeRoutingModule} from "./homecomp/home-routing.module";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes), UsersRoutingModule, TasksRoutingModule, HomeRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
