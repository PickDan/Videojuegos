import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { regiterGuard } from './regiter.guard';

describe('regiterGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => regiterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
