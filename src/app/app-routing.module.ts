import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.service';
import { AdminGuard } from './core/guards/admin-guard.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule',
  },
  {
    path: 'ballhome',
    canActivateChild: [AuthGuard],
    loadChildren: './modules/ballhome/ballhome.module#BallHomeModule',
  },
  {
    path: 'register',
    canActivateChild: [AuthGuard],
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
