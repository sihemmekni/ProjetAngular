import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Favori } from '../models/favori';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Favourites {
   
private apiUrl = 'http://localhost:3000/favoris';

  constructor(private http: HttpClient) {}

  getFavoris(): Observable<Favori[]> {
    return this.http.get<Favori[]>(this.apiUrl);
  }

addFavori(siteId: string, utilisateurId: string): Observable<Favori> {
  return this.http.post<Favori>(this.apiUrl, { siteId, utilisateurId });
}


  removeFavori(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
