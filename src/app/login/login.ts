import { Component, inject } from '@angular/core';
import { AuthService } from '../services/auth-service';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  auth = inject(AuthService);
  router = inject(Router);
  fb = inject(FormBuilder);

  loginForm: FormGroup;

  constructor() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;

    const { username, password } = this.loginForm.value;
    this.auth.login(username, password).subscribe(success => {
      if (success) {
        const user = this.auth.getUser();
        if (user.role === 'ADMIN') {
          this.router.navigate(['/admin/patrimoine']);
        } else {
          this.router.navigate(['/']);
        }
      } else {
        alert("Email ou mot de passe incorrect");
      }
    });
  }
}
