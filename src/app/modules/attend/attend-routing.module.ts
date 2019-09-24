import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendComponent } from './attend.component';
import { AttendSuccessComponent } from './attend-success/attend-success.component';

const routes: Routes = [
  {
    path: '',
    component: AttendComponent,
  },
  {
    path: 'success',
    component: AttendSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendRoutingModule {}
