import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PatrimoineService } from '../../services/patrimoine';
import { SiteArcheologique } from '../../models/site-archeologique';

@Component({
  selector: 'app-patrimoine-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './patrimoine-edit.html',
  styleUrl: './patrimoine-edit.css',
})
export class PatrimoineEdit implements OnInit {
editForm!: FormGroup;
  patrimoineId!: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: PatrimoineService,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.patrimoineId = this.route.snapshot.paramMap.get('id') || '';

    
    this.editForm = this.fb.group({
      id: [{value: '', disabled: true}], 
      nom: ['', Validators.required],
      localisation: ['', Validators.required],
      description: ['', Validators.required],
      dateDecouverte: ['', Validators.required],
      possedeMusee: this.fb.nonNullable.control(false),

  prixEntree: [0, Validators.required],
      imageUrl: ['']
    });

    
    this.service.getById(this.patrimoineId).subscribe((data: SiteArcheologique) => {
      this.editForm.patchValue({
        id: data.id,
        nom: data.nom,
        localisation: data.localisation,
        description: data.description,
         dateDecouverte: new Date(data.dateDecouverte).toISOString().split('T')[0],  
        possedeMusee: data.possedeMusee === true ,

        prixEntree: data.prixEntree,
        imageUrl: data.imageUrl
      });
    });
  }

  onSubmit() {
    if (this.editForm.valid) {
      
      const updatedData = {
        ...this.editForm.getRawValue(), 
        dateDecouverte: new Date(this.editForm.value.dateDecouverte)
      };

      this.service.update(this.patrimoineId, updatedData).subscribe(() => {
        alert('Patrimoine modifié avec succès !');
        this.router.navigate(['/admin/patrimoine']);
      });
    }
  }


goBack() {
  this.router.navigate(['/admin/patrimoine']);
}

}
