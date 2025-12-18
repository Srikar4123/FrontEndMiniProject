import { Routes } from '@angular/router';
import { Initial } from '../initial/initial';
import { AdminLogin } from './admin-login/admin-login';
import { UserLogin } from './user-login/user-login';

export const routes: Routes = [
  { path: '', component: Initial },
  { path: 'admin-login', component: AdminLogin },
  { path: 'user-login', component: UserLogin },
  { path: '**', redirectTo: '' }
];
