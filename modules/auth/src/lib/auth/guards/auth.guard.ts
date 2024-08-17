import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '@myngapp/shared';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const localStorageService = inject(LocalStorageService);
  const token = localStorageService.getToken('TOKEN');
  if (token) {
    return true;
  } else {
    router.navigate(['auth/login']);
    return false;
  }
};
