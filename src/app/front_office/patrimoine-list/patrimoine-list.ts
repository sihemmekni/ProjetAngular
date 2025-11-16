// patrimoine-list.ts
import { Component, inject, OnInit } from '@angular/core';
import { PatrimoineService } from '../../services/patrimoine';
import { RouterLink } from '@angular/router';
import { SlicePipe } from '@angular/common';
import { SiteArcheologique } from '../../models/site-archeologique';

@Component({
  selector: 'app-patrimoine-list',
    imports: [RouterLink,SlicePipe],
  templateUrl: './patrimoine-list.html',
  styleUrls: ['./patrimoine-list.css'],
})
export class PatrimoineList implements OnInit {
   patrimoines: SiteArcheologique[] = [];

  readonly patrimoineService: PatrimoineService = inject(PatrimoineService);

  ngOnInit(): void {
    this.patrimoineService.getAll().subscribe({
      next: (data: SiteArcheologique[]) => {this.patrimoines = data.map(p => ({
        ...p,
         excerpt: p.description ? p.description.substring(0,1) : ''
      }));
      },
      error: err => console.error('Erreur récupération patrimoines', err)
    });
  }
 
}
