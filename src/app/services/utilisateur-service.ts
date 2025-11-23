import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, switchMap } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  private apiURL = "http://localhost:3000/utilisateurs";

  constructor(private http: HttpClient) {}

  getAll(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.apiURL);
  }
  getById(id: string): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.apiURL}/${id}`);
  }

  addUser(user: any): Observable<any> {
    // On récupère tous les utilisateurs pour trouver le dernier ID
    return this.getAll().pipe(
      map(users => {
        const lastIdNum = users
          .map(u => parseInt(u.id.replace('u', ''), 10))
          .filter(n => !isNaN(n))
          .sort((a, b) => b - a)[0] || 0;

        return { ...user, id: 'u' + (lastIdNum + 1) }; // génère u4, u5, etc.
      }),
      switchMap(newUser => this.http.post(this.apiURL, newUser))
    );
  }

  updateUser(id: string, user: Utilisateur): Observable<Utilisateur> {
    return this.http.put<Utilisateur>(`${this.apiURL}/${id}`, user);
  }

  deleteUser(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
