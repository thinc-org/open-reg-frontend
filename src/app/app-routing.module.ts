import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.service';
import { AdminGuard } from './core/guards/admin-guard.service';
import { RegisterGuard } from './core/guards/register-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/ballhome/ballhome.module#BallHomeModule',
  },
  {
    path: 'register',
    canActivateChild: [AuthGuard, RegisterGuard],
    loadChildren: './modules/register/register.module#RegisterModule',
  },
  {
    path: 'profile',
    canActivateChild: [AuthGuard],
    loadChildren: './modules/profile/profile.module#ProfileModule',
  },
  {
    path: 'admin',
    canActivateChild: [AuthGuard, AdminGuard],
    loadChildren: './modules/admin/admin.module#AdminModule',
  },
  {
    path: 'success',
    loadChildren: './modules/success/success.module#SuccessModule',
  },
  {
    path: '**',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
