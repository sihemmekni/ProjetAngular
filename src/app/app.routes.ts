import { Routes } from '@angular/router';
import { Home } from './front_office/home/home';
import { PatrimoineDetail } from './front_office/patrimoine-detail/patrimoine-detail';
import { PatrimoineList } from './front_office/patrimoine-list/patrimoine-list';
import { Search } from './front_office/search/search';
import { About } from './front_office/about/about';
import { AdminList } from './back_office/admin-list/admin-list';
import { PatrimoineAdd } from './back_office/patrimoine-add/patrimoine-add';
import { PatrimoineEdit } from './back_office/patrimoine-edit/patrimoine-edit';
import { FavorisPatrimoine } from './front_office/favoris-patrimoine/favoris-patrimoine';
import { ReservationComponent } from './front_office/reservation-component/reservation-component';
import { Login } from './login/login';
import { Register } from './register/register';
import { authGuard } from './guards/auth-guard';
import { authAdminGuard } from './guards/auth-admin-guard';

export const routes: Routes = [
     
 { path: '', component: Home },
  { path: 'patrimoine/:id', component: PatrimoineDetail },
  { path: 'categories', component: PatrimoineList },
  { path: 'search', component: Search },
  { path: 'contact', component: About },

  { path: 'admin/patrimoine', component: AdminList, canActivate: [authAdminGuard] },
  { path: 'admin/patrimoine/add', component: PatrimoineAdd, canActivate: [authAdminGuard] },
  { path: 'admin/patrimoine/edit/:id', component: PatrimoineEdit, canActivate: [authAdminGuard] },

  
  { path: 'favoris', component: FavorisPatrimoine, canActivate: [authGuard] },
  { path: "reservation", component: ReservationComponent, canActivate: [authGuard] },

  
  { path: 'login', component: Login },
  { path: 'register', component: Register },

  { path: '**', redirectTo: '' }

  

];
