import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'register',
    loadChildren: './modules/register/register.module#RegisterModule'
  },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule' },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule'
  },
  {
    path: 'attend',
    loadChildren: './modules/attend/attend.module#AttendModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
