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
} from 'ng-zorro-antd';
import { CoreModule } from 'src/app/core/core.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
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
  ],
})
export class HomeModule {}
