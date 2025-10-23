import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'nosotros',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/auth/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./components/auth/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'frutas',
    loadComponent: () => import('./components/products/frutas/frutas').then(m => m.FrutasComponent)
  },
  {
    path: 'verduras',
    loadComponent: () => import('./components/products/verduras/verduras').then(m => m.VerdurasComponent)
  },

  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent,     canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'home' }
];
