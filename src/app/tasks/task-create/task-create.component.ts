import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../service/task.service';
import { Frequency } from '../model/task.model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskForm: FormGroup = this.fb.group({
      description: ['', Validators.required],
      alertFrequency: [Validators.required],
      rotationFrequency: [Validators.required]
    });
  frequencies = Object.values(Frequency);

  constructor(private fb: FormBuilder, private taskService: TaskService, private router: Router) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      description: ['', Validators.required],
      alertFrequency: [Validators.required],
      rotationFrequency: [Validators.required]
    });
  }

  createTask(): void {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      this.taskService.createTask(taskData).subscribe(response => {
        console.log('Tarefa criada com sucesso:', response);
        this.router.navigate(['/tasks/list']).then(r => console.log('navigated'));
      },
        error => {
          alert('Erro ao criar tarefa');
        });
    }
  }
}
