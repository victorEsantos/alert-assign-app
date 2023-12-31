import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserCreateService } from '../user-create.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder, private userService: UserCreateService, private router: Router) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const userData = this.userForm.value;
      this.userService.createUser(userData).subscribe(
        response => {
          console.log('Usuário criado com sucesso:', response);
          // Você pode adicionar lógica adicional aqui, como navegar para outra página ou mostrar uma mensagem de sucesso.
          this.router.navigate(['/users/list']).then(r => console.log('navigated'));
        },
        error => {
          console.error('Erro ao criar usuário:', error);
        }
      );
    }
  }
}
