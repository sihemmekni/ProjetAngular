import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation-service';
import { PatrimoineService } from '../../services/patrimoine';

import { RouterLink } from '@angular/router';
import { UtilisateurService } from '../../services/utilisateur-service';

@Component({
  selector: 'app-admin-reservation',
  imports: [RouterLink],
  templateUrl: './admin-reservation.html',
  styleUrl: './admin-reservation.css',
})
export class AdminReservation {
reservations:any[] = [];
  utilisateur:any[] = [];
  SiteArcheologique :any[] = [];

  constructor(
    private reservationService: ReservationService,
    private utilisateurService: UtilisateurService,
    private patrimoineService: PatrimoineService
  ) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations() {
    this.reservationService.getAll().subscribe(reservations => {
      this.reservations = reservations;

      
      this.utilisateurService.getAll().subscribe(users => {
        this.utilisateur= users;

        
        this.patrimoineService.getAll().subscribe(sites => {
          this.SiteArcheologique = sites;

          this.reservations = this.reservations.map(r => {
            return {
              ...r,
              utilisateur: this.utilisateur.find(u => u.id === r.utilisateurId)?.username,
              site: this.SiteArcheologique.find(s => s.id === r.siteId)?.nom
            };
          });
        });
      });
    });
  }

  deleteReservation(id: string) {
    if (confirm('Voulez-vous vraiment supprimer cette réservation ?')) {
      this.reservationService.deleteReservation(id).subscribe(() => this.loadReservations());
    }
  }
}
