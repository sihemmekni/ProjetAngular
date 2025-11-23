import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UtilisateurService } from '../../services/utilisateur-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-utilisateur-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './admin-utilisateur-edit.html',
  styleUrl: './admin-utilisateur-edit.css',
})
export class AdminUtilisateurEdit implements OnInit{
userForm: FormGroup;
  userId!: string;

  constructor(
    private fb: FormBuilder,
    private userService: UtilisateurService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['USER', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.userService.getById(this.userId).subscribe(user => {
      this.userForm.patchValue(user);
    });
  }

  submit() {
    if (this.userForm.valid) {
      this.userService.updateUser(this.userId, this.userForm.value).subscribe(() => {
        alert('Utilisateur mis à jour !');
        this.router.navigate(['/admin/utilisateur']);
      });
    }
  }
}
