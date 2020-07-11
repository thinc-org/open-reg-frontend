import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'form',
    loadChildren: () => import('./modules/form/form.module').then((m) => m.FormModule),
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule),
    canActivate: [AuthenticatedGuard],
    data: { reverse: true },
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthenticatedGuard],
  },
  {
    path: 'demo',
    loadChildren: () => import('./modules/demo/demo.module').then((m) => m.DemoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
