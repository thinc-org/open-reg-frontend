import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

import { CoreModules } from 'src/app/core/core.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [HomeComponent, LogoComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModules, MatCardModule],
})
export class HomeModule {}
