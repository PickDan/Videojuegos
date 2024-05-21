import { CanActivateFn } from '@angular/router';

export const carritoGuard: CanActivateFn = (route, state) => {
  if (localStorage.getItem('token') == 'true') {
    return true;
  } else {
    return false;
  }
};
