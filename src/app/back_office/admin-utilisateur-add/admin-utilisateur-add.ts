import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilisateurService } from '../../services/utilisateur-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-utilisateur-add',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-utilisateur-add.html',
  styleUrl: './admin-utilisateur-add.css',
})
export class AdminUtilisateurAdd {
userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UtilisateurService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['USER', Validators.required]
    });
  }

  submit() {
    if (this.userForm.valid) {
      this.userService.addUser(this.userForm.value).subscribe(() => {
        alert('Utilisateur ajouté !');
        this.router.navigate(['/admin/utilisateur']);
      });
    }
  }
}
