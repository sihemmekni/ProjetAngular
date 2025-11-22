import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PatrimoineService } from '../../services/patrimoine';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patrimoine-add',
  imports: [ReactiveFormsModule],
  templateUrl: './patrimoine-add.html',
  styleUrl: './patrimoine-add.css',
})
export class PatrimoineAdd implements OnInit{
addForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: PatrimoineService,
    private router: Router
  ) {}

  ngOnInit(): void {
  this.addForm = this.fb.group({
    id: ['', Validators.required],
    nom: ['', Validators.required],
    localisation: ['', Validators.required],
    description: ['', Validators.required],
    dateDecouverte: ['', Validators.required],
    possedeMusee: [false],        
    prixEntree: [0, Validators.required],
    imageUrl: ['']
  });
}

  onSubmit() {
    if(this.addForm.valid) {
      this.service.add(this.addForm.value).subscribe(() => {
        alert('Patrimoine ajouté !');
        this.router.navigate(['/admin/patrimoine']); 
      });
    }
  }

}
