import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PatrimoineService } from '../../services/patrimoine';
import { SiteArcheologique } from '../../models/site-archeologique';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patrimoine-detail',
  imports: [RouterLink,DatePipe],
  templateUrl: './patrimoine-detail.html',
  styleUrls: ['./patrimoine-detail.css']
})
export class PatrimoineDetail implements OnInit { 
  
      patrimoineService = inject(PatrimoineService);
  route = inject(ActivatedRoute);

  patrimoine?: SiteArcheologique;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.patrimoineService.getById(id).subscribe({
        next: (data: SiteArcheologique) => this.patrimoine = data,
        error: err => console.error('Erreur récupération patrimoine', err)
      });
    }
  }
}
