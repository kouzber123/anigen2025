import { inject } from '@angular/core';
import { CartService } from './../services/cart.service';
import { CanActivateFn, Router } from '@angular/router';
import { SnackbarService } from '../services/snackbar.service';

export const emptyCardGuard: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  const router = inject(Router);
  const snackbar = inject(SnackbarService);

  if (!cartService.cart() || cartService.cart()?.items.length === 0) {
    snackbar.error('Basket empty');
    router.navigateByUrl('/cart');
  }

  return true;
};
