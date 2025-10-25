import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { emptyCardGuard } from './empty-card-guard';

describe('emptyCardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => emptyCardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
