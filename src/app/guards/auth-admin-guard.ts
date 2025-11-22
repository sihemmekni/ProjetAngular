import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';
import { inject } from '@angular/core';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isLogged() && auth.getUser()?.role === 'ADMIN') {
    return true; 
  }

  alert("Accès refusé : vous n'êtes pas admin");
  router.navigate(['/']); 
  return false;
};
