import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PatrimoineService } from '../../services/patrimoine';
import { SiteArcheologique } from '../../models/site-archeologique';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Favourites } from '../../services/favourites';

import { ReservationService } from '../../services/reservation-service';
import { AuthService } from '../../services/auth-service';
import { WeatherService } from '../../services/weather-service';

@Component({
  selector: 'app-patrimoine-detail',
  imports: [RouterLink, DatePipe, ReactiveFormsModule],
  templateUrl: './patrimoine-detail.html',
  styleUrls: ['./patrimoine-detail.css']
})
export class PatrimoineDetail implements OnInit {
 service = inject(PatrimoineService);
  auth = inject(AuthService);
  favService = inject(Favourites);
   weatherService = inject(WeatherService);
  resService = inject(ReservationService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  fb = inject(FormBuilder);

  patrimoine?: SiteArcheologique;
  commentaires: any[] = [];
  favoris: any[] = [];
  isFavori: boolean = false;
weather: any;
  commentForm = this.fb.group({
    contenu: ['']
  });

  reservationForm = this.fb.group({
    dateVisite: [''],
    nombreBillets: [1]
  });

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;

     this.service.getById(id).subscribe({
      next: (data: SiteArcheologique) => {
        this.patrimoine = data;
        this.loadFavoris();
        this.loadWeather();
      }
    });

    
    this.service.getCommentairesBySiteId(id).subscribe({
      next: (data) => this.commentaires = data,
      error: err => console.error('Erreur récupération commentaires', err)
    });
  }

  loadFavoris() {
    if (!this.auth.isLogged()) return;
    this.favService.getFavoris().subscribe(favs => {
      this.favoris = favs;
      if (this.patrimoine) {
        this.isFavori = favs.some(f => f.siteId === this.patrimoine?.id && f.utilisateurId === this.auth.getUser()?.id);
      }
    });
  }
 loadWeather() {
    if (!this.patrimoine) return;
    const city = this.patrimoine.localisation.split(',')[0]; 
    this.weatherService.getWeatherByCity(city).subscribe({
      next: (data) => this.weather = data 
    });
  }
  toggleFavori(): void {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/login']);
      return;
    }
    if (!this.patrimoine) return;

    const idPatrimoine = this.patrimoine.id;
    const userId = this.auth.getUser()?.id;

    if (this.isFavori) {
      const f = this.favoris.find(f => f.siteId === idPatrimoine && f.utilisateurId === userId);
      if (f) {
        this.favService.removeFavori(f.id).subscribe(() => {
          this.isFavori = false;
          this.loadFavoris();
        });
      }
    } else {
      this.favService.addFavori(idPatrimoine, userId).subscribe(() => {
  this.isFavori = true;
  this.loadFavoris();
});

    }
  }

  addComment() {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/login']);
      return;
    }
    if (!this.patrimoine) return;

    const newComment = {
      id: Date.now().toString(),
      utilisateurId: this.auth.getUser()?.id,
      siteId: this.patrimoine.id,
      contenu: this.commentForm.value.contenu || '',
      dateCreation: new Date()
    };

    this.service.addComment(newComment).subscribe(() => {
      this.commentaires.push(newComment);
      this.commentForm.reset();
    });
  }

  reserver() {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/login']);
      return;
    }
    if (!this.patrimoine) return;

    const reservation = {
      id: Date.now().toString(),
      utilisateurId: this.auth.getUser()?.id,
      siteId: this.patrimoine.id,
      dateVisite: this.reservationForm.value.dateVisite || '',
      nombreBillets: Number(this.reservationForm.value.nombreBillets)
    };

    this.resService.addReservation(reservation).subscribe(() => {
      alert("Réservation effectuée !");
      this.reservationForm.reset();
    });
  }
}
