import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.service';
import { AdminGuard } from './core/guards/admin-guard.service';
import { RegisterGuard } from './core/guards/register-guard.service';

export interface PageRouteProps {
  title?: string;
  navbar: boolean;
  footer: boolean;
}

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/ballhome/ballhome.module#BallHomeModule',
    data: { navbar: false, footer: false } as PageRouteProps,
  },
  {
    path: 'register',
    canActivateChild: [AuthGuard, RegisterGuard],
    loadChildren: './modules/register/register.module#RegisterModule',
    data: { navbar: true, footer: true } as PageRouteProps,
  },
  {
    path: 'profile',
    canActivateChild: [AuthGuard],
    loadChildren: './modules/profile/profile.module#ProfileModule',
    data: { navbar: true, footer: true } as PageRouteProps,
  },
  {
    path: 'admin',
    canActivateChild: [AuthGuard, AdminGuard],
    loadChildren: './modules/admin/admin.module#AdminModule',
    data: { navbar: true, footer: true } as PageRouteProps,
  },
  {
    path: 'success',
    loadChildren: './modules/success/success.module#SuccessModule',
    data: { navbar: true, footer: true } as PageRouteProps,
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
