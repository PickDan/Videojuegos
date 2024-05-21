import { CanActivateFn } from '@angular/router';

export const perfilGuard: CanActivateFn = (route, state) => {
  if(localStorage.getItem('token') == 'admin'){
    return true;
  }else{
    return false;
  }
};
