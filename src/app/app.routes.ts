import { Routes } from '@angular/router';
import { Initial } from '../initial/initial';
import { AdminReg } from './pages/admin-reg/admin-reg';
import { Register } from './pages/register/register';

export const routes: Routes = [
  { path: '', component: Initial },
  { path: 'admin-reg', component: AdminReg },
  { path: 'register', component: Register },
  { path: '**', redirectTo: '' },
];
