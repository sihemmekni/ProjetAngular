import { Component, OnInit } from '@angular/core';
import { PatrimoineService } from '../../services/patrimoine';
import { Router } from '@angular/router';
import { SiteArcheologique } from '../../models/site-archeologique';

@Component({
  selector: 'app-admin-list',
  imports: [],
  templateUrl: './admin-list.html',
  styleUrl: './admin-list.css',
})
export class AdminList implements OnInit{
    patrimoines: SiteArcheologique[] = [];
constructor(
    private service: PatrimoineService,
    private router: Router   ) {}

  ngOnInit(): void {
    this.loadPatrimoines();
  }

  loadPatrimoines() {
    this.service.getAll().subscribe(data => this.patrimoines = data);
  }

  add() {
    this.router.navigate(['/admin/patrimoine/add']);
  }

  edit(id: string) {
    this.router.navigate(['/admin/patrimoine/edit', id]);
  }

  delete(id: string) {
    if(confirm("Voulez-vous vraiment supprimer ce patrimoine ?")) {
      this.service.delete(id).subscribe(() => this.loadPatrimoines());
    }
  }
openComments(patrimoineId: number) {
  this.router.navigate(['/admin/commentaires', patrimoineId]);
}
}
