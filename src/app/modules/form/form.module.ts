import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { MatSliderModule } from '@angular/material/slider';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [FormComponent, TestComponent],
  imports: [CommonModule, FormRoutingModule, MatSliderModule],
})
export class FormModule {}
