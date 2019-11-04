import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BallHomeComponent } from './ballhome.component';

const routes: Routes = [{ path: '', component: BallHomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BallHomeRoutingModule {}
