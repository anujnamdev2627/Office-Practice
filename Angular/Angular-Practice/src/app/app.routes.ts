import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { UserComponent } from './user/user.component';
import { FurtherDetailsComponent } from './further-details/further-details.component';
import { FormComponent } from './form/form.component';
import { AdminComponent } from './admin/admin.component';

// export const routes: Routes = [
//   // {
//   //   path: '',
//   //   component: HomeComponent,
//   // },
//   // {
//   //   path:'',
//   //   component:FormComponent,
//   // },
//   // {
//   //   path: 'home',
//   //   redirectTo: '',
//   // },

//   // {
//   //   path: 'about',
//   //   component: AboutComponent,
//   //   data: { Greetings: 'Hi' },
//   // },
//   // {
//   //   path: 'contactus',
//   //   component: ContactusComponent,
//   // },
//   // {
//   //   path: 'login',
//   //   component: LoginComponent,
//   // },
//   // {
//   //   path: 'profile',
//   //   component: ProfileComponent,
//   // },
//   // {
//   //   path: 'user/:id/:name',
//   //   component: UserComponent,
//   // },
//   {
//     path: 'admin',
//     component: AdminComponent,
//   },
//   // {
//   //   path: 'further',
//   //   component: FurtherDetailsComponent,
//   // },
//   // {
//   //   path: '**',
//   //   component: PageNotfoundComponent,
//   // },
// ];
//!Lazy Loading Example

export const routes: Routes = [
  // {
  //   path: 'admin',
  //   loadComponent: () =>
  //     import('./admin/admin.component').then((c) => c.AdminComponent),
  // },
];
