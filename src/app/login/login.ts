import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   auth = inject(AuthService);
  router = inject(Router);

  login(username: string, password: string) {
    this.auth.login(username, password).subscribe(success => {
      if (success) {
        const user = this.auth.getUser();
        if (user.role === 'ADMIN') {
          // Si c'est un admin, back-office
          this.router.navigate(['/admin/patrimoine']);
        } else {
          // Sinon front-office
          this.router.navigate(['/']);
        }
      } else {
        // Mot de passe incorrect ou utilisateur inexistant
        alert("Email ou mot de passe incorrect");
      }
    });
  }
}
