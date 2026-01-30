import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { SignupComponent } from './signup/signup.component';
import { AuthorisedComponent } from './authorised/authorised.component';
import { UserformComponent } from './userform/userform.component';
export const routes: Routes = [
  {
    path: '',
    component: AuthorisedComponent,
    canActivate: [authGuard],
    children: [
      // { path: 'userform', component: UserformComponent },
      // { path: 'dashboard', component: DashboardComponent },
      {
        path: 'userform',
        loadComponent: () =>
          import('./userform/userform.component').then(
            (c) => c.UserformComponent,
          ),
      },
      { 
        path: 'dashboard',
        loadComponent: () =>
          import('./dashboard/dashboard.component').then(
            (c) => c.DashboardComponent,
          ),
      },
    ],
  },

  { path: 'login', component: LoginComponent, canActivate: [] },
  { path: 'signup', component: SignupComponent },

  { path: '**', redirectTo: 'login' },
];

//!Children routes define krne se parent route ka outlet call hota hai
