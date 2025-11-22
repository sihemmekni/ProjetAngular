import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../models/reservations';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiURL = "http://localhost:3000/reservations";

  constructor(private http: HttpClient) {}

  addReservation(r: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiURL, r);
  }

  getByUser(idUser: string): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiURL}?utilisateurId=${idUser}`);
  }

  deleteReservation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`);
  }
}
