import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NzButtonModule, NzTypographyModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, NzButtonModule, NzTypographyModule]
})
export class HomeModule {}
