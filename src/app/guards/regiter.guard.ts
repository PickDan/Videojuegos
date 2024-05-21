import { CanMatchFn } from '@angular/router';

export const regiterGuard: CanMatchFn = (route, segments) => {
  return true;
};
