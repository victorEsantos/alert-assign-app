import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksListAllComponent } from './tasks-list-all.component';

describe('TasksListAllComponent', () => {
  let component: TasksListAllComponent;
  let fixture: ComponentFixture<TasksListAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TasksListAllComponent]
    });
    fixture = TestBed.createComponent(TasksListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
