import { TestBed } from '@angular/core/testing';

import { UserListAllService } from './user-list-all.service';

describe('UserListAllService', () => {
  let service: UserListAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserListAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
