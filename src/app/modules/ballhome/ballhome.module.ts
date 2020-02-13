import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import { CoreModule } from 'src/app/core/core.module';
import { BallHomeComponent } from './ballhome.component';
import { BallHomeRoutingModule } from './ballhome-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [BallHomeComponent],
  imports: [
    CommonModule,
    BallHomeRoutingModule,
    ReactiveFormsModule,
    NgxStronglyTypedFormsModule,
    CoreModule,
    MatButtonModule,
  ],
})
export class BallHomeModule {}
