import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
   private http = inject(HttpClient);
  apiURLUsers = 'http://localhost:3000/utilisateurs';

  private currentUser: any = null;

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(`${this.apiURLUsers}?username=${username}&password=${password}`)
      .pipe(
        map(users => {
          if(users.length > 0){
            this.currentUser = users[0];
            localStorage.setItem('user', JSON.stringify(this.currentUser));
            return true;
          }
          return false;
        })
      );
  }

register(username: string, email: string, password: string): Observable<any> {
   return this.http.get<any[]>(this.apiURLUsers).pipe(
    map(users => {
      const lastIdNum = users
        .map(u => parseInt(u.id.replace('u', ''), 10))
        .filter(n => !isNaN(n))
        .sort((a, b) => b - a)[0] || 0;

      const newUser = {
        id: 'u' + (lastIdNum + 1),  
        username,
        email,
        password,
        role: 'USER'
      };

      return newUser;
    }),
    switchMap(newUser => this.http.post(this.apiURLUsers, newUser))  
  );
}

  logout() {
    this.currentUser = null;
    localStorage.removeItem('user');
  }

  isLogged(): boolean {
    if(!this.currentUser){
      const stored = localStorage.getItem('user');
      if(stored){
        this.currentUser = JSON.parse(stored);
      }
    }
    return this.currentUser != null;
  }

  getUser() {
    if(!this.currentUser){
      const stored = localStorage.getItem('user');
      if(stored){
        this.currentUser = JSON.parse(stored);
      }
    }
    return this.currentUser;
  }

}
