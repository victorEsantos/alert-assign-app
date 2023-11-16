import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../service/task.service';
import { Frequency } from '../model/task.model';

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
  styleUrls: ['./task-create.component.css']
})
export class TaskCreateComponent implements OnInit {
  taskForm: FormGroup = this.fb.group({
      description: ['', Validators.required],
      alertFrequency: [Frequency.DAILY, Validators.required],
      rotationFrequency: [Frequency.DAILY, Validators.required]
    });
  frequencies = Object.values(Frequency);

  constructor(private fb: FormBuilder, private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskForm = this.fb.group({
      description: ['', Validators.required],
      alertFrequency: [Frequency.DAILY, Validators.required],
      rotationFrequency: [Frequency.DAILY, Validators.required]
    });
  }

  createTask(): void {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      this.taskService.createTask(taskData).subscribe(response => {
        console.log('Tarefa criada com sucesso:', response);
        this.taskForm.reset(); // Limpa o formulário após a criação da tarefa
      });
    }
  }
}
