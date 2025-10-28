import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const paymentIntentGuard: CanActivateFn = (route, state) => {
  
  const paymentIntentId = route.paramMap.get('paymentIntentId');

  const router = inject(Router);

  if (!paymentIntentId) {
    alert('Missing required paymentIntentId!');
    router.navigate(['/']);
    return false;
  }

  return true;
};
