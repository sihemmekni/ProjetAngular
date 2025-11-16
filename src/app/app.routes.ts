import { Routes } from '@angular/router';
import { Home } from './front_office/home/home';
import { PatrimoineDetail } from './front_office/patrimoine-detail/patrimoine-detail';
import { PatrimoineList } from './front_office/patrimoine-list/patrimoine-list';
import { Search } from './front_office/search/search';
import { About } from './front_office/about/about';

export const routes: Routes = [
     { path: '', component: Home },
  { path: 'patrimoine/:id', component: PatrimoineDetail },
  { path: 'categories', component: PatrimoineList },
  { path: 'search', component: Search },
  { path: 'contact', component: About},
  { path: '**', redirectTo: '' }

];
