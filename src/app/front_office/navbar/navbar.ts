import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 auth = inject(AuthService);
  router = inject(Router);
searchForm = new FormGroup({
    query: new FormControl('')
  });
  

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  searchPatrimoine() {
    const term = this.searchForm.value.query?.trim();
    if (term) {
      this.router.navigate(['/search'], { queryParams: { q: term } });
      this.searchForm.reset(); 
    }
  }
}