import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import {
  NzButtonModule,
  NzTypographyModule,
  NzStepsModule
} from 'ng-zorro-antd';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    NzButtonModule,
    NzTypographyModule,
    NzStepsModule
  ]
})
export class RegisterModule {}
