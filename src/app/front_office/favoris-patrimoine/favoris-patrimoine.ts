import { Component, OnInit } from '@angular/core';
import { Favourites } from '../../services/favourites';
import { PatrimoineService } from '../../services/patrimoine';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-favoris-patrimoine',
   standalone: true,
  imports: [RouterLink],
  templateUrl: './favoris-patrimoine.html',
  styleUrl: './favoris-patrimoine.css',
})

export class FavorisPatrimoine implements OnInit {
 favoris: any[] = [];

  constructor(
    private favService: Favourites,
    private patrimoineService: PatrimoineService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.auth.isLogged()) {
      this.router.navigate(['/login']);
      return;
    }

    const userId = this.auth.getUser().id;

    this.favService.getFavoris().subscribe(favs => {
      this.patrimoineService.getAll().subscribe(data => {
        this.favoris = data.filter(p => favs.some(f => f.siteId === p.id && f.utilisateurId === userId));
      });
    });
  }

  remove(siteId: string) {
    const userId = this.auth.getUser().id;
    this.favService.getFavoris().subscribe(favs => {
      const fav = favs.find(f => f.siteId === siteId && f.utilisateurId === userId);
      if (fav) {
        this.favService.removeFavori(fav.id).subscribe(() => {
          this.favoris = this.favoris.filter(p => p.id !== siteId);
        });
      }
    });
  }


}
