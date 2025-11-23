import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SiteArcheologique } from '../models/site-archeologique';
import { Commentaire } from '../models/commentaire';

@Injectable({
  providedIn: 'root'
})
export class PatrimoineService {

  apiURL = 'http://localhost:3000/sitesArcheologiques';
  apiURLCommentaires = 'http://localhost:3000/commentaires';



   private readonly http:HttpClient = inject(HttpClient);
  getAll(): Observable<SiteArcheologique[]> {
    return this.http.get<SiteArcheologique[]>(this.apiURL);
  }


  getById(id: string): Observable<SiteArcheologique> {
    return this.http.get<SiteArcheologique>(`${this.apiURL}/${id}`);
  }

  getByCategory(cat: string): Observable<any> {
    return this.http.get(`${this.apiURL}?category=${cat}`);
  }


  add(p: SiteArcheologique): Observable<SiteArcheologique> {
    return this.http.post<SiteArcheologique>(this.apiURL, p);
  }
  update(id: string, p: SiteArcheologique): Observable<SiteArcheologique> {
    return this.http.put<SiteArcheologique>(`${this.apiURL}/${id}`, p);
  }
   delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
  getCommentairesBySiteId(siteId: string) {
  return this.http.get<Commentaire[]>(`${this.apiURLCommentaires}?siteId=${siteId}`);
}
addComment(comment: Commentaire) {
  return this.http.post(this.apiURLCommentaires, comment);
}
search(term: string): Observable<SiteArcheologique[]> {
  return this.http.get<SiteArcheologique[]>(`${this.apiURL}`).pipe(
    map(sites =>
      sites.filter(site =>
        site.nom.toLowerCase().includes(term.toLowerCase()) ||
        site.prixEntree.toString().includes(term)
      )
    )
  );
}

deleteComment(commentId: string): Observable<void> {
  return this.http.delete<void>(`${this.apiURLCommentaires}/${commentId}`);
}

}


