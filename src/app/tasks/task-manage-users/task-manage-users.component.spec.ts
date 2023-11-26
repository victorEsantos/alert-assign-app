import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManageUsersComponent } from './task-manage-users.component';

describe('TaskManageUsersComponent', () => {
  let component: TaskManageUsersComponent;
  let fixture: ComponentFixture<TaskManageUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskManageUsersComponent]
    });
    fixture = TestBed.createComponent(TaskManageUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
