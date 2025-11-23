import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PatrimoineService } from '../../services/patrimoine';
import { SiteArcheologique } from '../../models/site-archeologique';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
   standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnInit {
 query: string = '';
  results: SiteArcheologique[] = [];

  constructor(private route: ActivatedRoute, private patrimoineService: PatrimoineService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      if (this.query) this.search(this.query);
    });
  }

  search(term: string) {
    this.patrimoineService.search(term).subscribe(data => {
      this.results = data;
    });
  }
 trackById(index: number, item: SiteArcheologique) {
    return item.id;
  }
  }

