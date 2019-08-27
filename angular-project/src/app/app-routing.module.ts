import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthJWTGuard } from 'authentication-jwt';

import { LoginComponent } from './authentication/login/login.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { RegisterUserComponent } from './authentication/register-user/register-user.component';
import { RequestPasswordComponent } from './authentication/request-password/request-password.component';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
    canActivate: [AuthJWTGuard],
    canLoad: [AuthJWTGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'register-user',
    component: RegisterUserComponent
  },
  {
    path: 'request-password',
    component: RequestPasswordComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
