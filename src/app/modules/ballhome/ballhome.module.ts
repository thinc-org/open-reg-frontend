import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import {
  NzInputModule,
  NzTypographyModule,
  NzButtonModule,
  NzFormModule,
  NzCheckboxModule,
  NzAlertModule,
  NzLayoutModule,
  NzIconModule,
} from 'ng-zorro-antd';
import { CoreModule } from 'src/app/core/core.module';
import { BallHomeComponent } from './ballhome.component';
import { BallHomeRoutingModule } from './ballhome-routing.module';

@NgModule({
  declarations: [BallHomeComponent],
  imports: [
    CommonModule,
    BallHomeRoutingModule,
    ReactiveFormsModule,
    NgxStronglyTypedFormsModule,
    NzInputModule,
    NzTypographyModule,
    NzButtonModule,
    NzFormModule,
    NzCheckboxModule,
    NzAlertModule,
    NzLayoutModule,
    CoreModule,
    NzIconModule,
  ],
})
export class BallHomeModule {}
