import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SiteArcheologique } from '../models/site-archeologique';

@Injectable({
  providedIn: 'root'
})
export class PatrimoineService {

  apiURL = 'http://localhost:3000/sitesArcheologiques';


   private readonly http:HttpClient = inject(HttpClient);

  // Récupérer tous les sites
  getAll(): Observable<SiteArcheologique[]> {
    return this.http.get<SiteArcheologique[]>(this.apiURL);
  }

  // Récupérer un site par ID
  getById(id: string): Observable<SiteArcheologique> {
    return this.http.get<SiteArcheologique>(`${this.apiURL}/${id}`);
  }

  // Récupérer par catégorie (si tu ajoutes "category" dans ton JSON)
  getByCategory(cat: string): Observable<any> {
    return this.http.get(`${this.apiURL}?category=${cat}`);
  }

  // Recherche par nom
  search(term: string): Observable<any> {
    return this.http.get(`${this.apiURL}?q=${term}`);
  }
}
