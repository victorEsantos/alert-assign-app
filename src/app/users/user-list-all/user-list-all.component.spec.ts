import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListAllComponent } from './user-list-all.component';

describe('UserListAllComponent', () => {
  let component: UserListAllComponent;
  let fixture: ComponentFixture<UserListAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListAllComponent]
    });
    fixture = TestBed.createComponent(UserListAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
