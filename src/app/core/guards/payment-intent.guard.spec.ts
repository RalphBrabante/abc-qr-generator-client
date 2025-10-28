import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { paymentIntentGuard } from './payment-intent.guard';

describe('paymentIntentGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => paymentIntentGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
