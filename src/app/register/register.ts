import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
auth = inject(AuthService);
  router = inject(Router);

  register(username: string, email: string, password: string) {
    this.auth.register(username, email, password).subscribe(() => {
      alert("Compte créé !");
      this.router.navigate(['/login']);
    });
  }
}
