import { DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Reservation } from '../../models/reservations';
import { ReservationService } from '../../services/reservation-service';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-component',
  imports: [DatePipe],
  templateUrl: './reservation-component.html',
  styleUrl: './reservation-component.css',
})
export class ReservationComponent implements OnInit {

 resService = inject(ReservationService);
  auth = inject(AuthService);
  router = inject(Router);

   reservations: Reservation[] = [];

  ngOnInit(): void {
     if (!this.auth.isLogged()) {
      this.router.navigate(['/login']);
      return;
    }
 
    this.loadReservations();
  }

  loadReservations() {
    const userId = this.auth.getUser()?.id;
    if (!userId) return;

    this.resService.getByUser(userId).subscribe({
      next: (data) => this.reservations = data,
      error: (err) => console.error("Erreur récupération réservations", err)
    });
  }

  cancel(id: string) {
    if (!confirm("Voulez-vous vraiment annuler cette réservation ?")) return;

    this.resService.deleteReservation(id).subscribe({
      next: () => {
        this.reservations = this.reservations.filter(r => r.id !== id);
        alert("Réservation annulée !");
      },
      error: (err) => console.error("Erreur suppression réservation", err)
    });
  }
  }

