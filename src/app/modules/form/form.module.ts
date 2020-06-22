import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSliderModule } from '@angular/material/slider';
import { CoreModules } from 'app/core/core.module';
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [FormComponent, TestComponent],
  imports: [CommonModule, FormRoutingModule, CoreModules, MatSliderModule],
})
export class FormModule {}
