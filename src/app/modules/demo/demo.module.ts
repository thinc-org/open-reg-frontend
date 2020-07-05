import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModules } from 'app/core/core.module';
import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, DemoRoutingModule, CoreModules],
})
export class DemoModule {}
