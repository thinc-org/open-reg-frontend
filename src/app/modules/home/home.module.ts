import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LogoComponent } from './logo/logo.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [HomeComponent, LogoComponent],
  imports: [CommonModule, HomeRoutingModule, MatCardModule],
})
export class HomeModule {}
