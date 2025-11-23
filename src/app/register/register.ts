import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
auth = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);

  registerForm: FormGroup;

  constructor() {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  generateId(): string {
     const random = Math.floor(Math.random() * 1000);
    return `u${random}`;
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    const { username, email, password } = this.registerForm.value;
    const newUser = {
      id: this.generateId(),
      username,
      email,
      password,
      role: 'USER'
    };

     this.auth.register(newUser.username, newUser.email, newUser.password).subscribe({
      next: () => {
         this.auth.login(username, password).subscribe(success => {
          if (success) {
            const user = this.auth.getUser();
            alert('Compte créé et connecté avec succès !');

             if (user.role === 'ADMIN') {
              this.router.navigate(['/admin/patrimoine']);
            } else {
              this.router.navigate(['/']);
            }
          } else {
            alert('Inscription réussie mais impossible de se connecter automatiquement.');
            this.router.navigate(['/login']);
          }
        });
      },
      error: (err) => {
        console.error(err);
        alert('Erreur lors de la création du compte.');
      }
    });
  }
}
