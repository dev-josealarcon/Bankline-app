import { TestBed } from '@angular/core/testing';

import { AccountHolderService } from './accountHolder.service';

describe('AccountHolderService', () => {
  let service: AccountHolderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountHolderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
