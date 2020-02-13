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
    loadChildren: () =>
      import('./modules/ballhome/ballhome.module').then(m => m.BallHomeModule),
    data: { navbar: false, footer: false } as PageRouteProps,
  },
  {
    path: 'register',
    canActivateChild: [AuthGuard, RegisterGuard],
    loadChildren: () =>
      import('./modules/register/register.module').then(m => m.RegisterModule),
    data: { navbar: true, footer: true } as PageRouteProps,
  },
  {
    path: 'profile',
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./modules/profile/profile.module').then(m => m.ProfileModule),
    data: { navbar: true, footer: true } as PageRouteProps,
  },
  {
    path: 'admin',
    canActivateChild: [AuthGuard, AdminGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then(m => m.AdminModule),
    data: { navbar: true, footer: true } as PageRouteProps,
  },
  {
    path: 'success',
    loadChildren: () =>
      import('./modules/success/success.module').then(m => m.SuccessModule),
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
