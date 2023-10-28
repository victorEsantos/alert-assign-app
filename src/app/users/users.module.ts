import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListAllComponent } from './user-list-all/user-list-all.component';
import { UsersRoutingModule } from './users-routing.module';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    UserCreateComponent,
    UserListAllComponent
  ],
  exports: [
    UserCreateComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    HttpClientModule,
    AppRoutingModule
  ]
})
export class UsersModule { }
