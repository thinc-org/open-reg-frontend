import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExampleComponent } from './components/example/example.component';
import { ThemeControllerComponent } from './components/theme-controller/theme-controller.component';
import { FullLogoComponent } from './components/full-logo/full-logo.component';

@NgModule({
  declarations: [NavbarComponent, ExampleComponent, ThemeControllerComponent, FullLogoComponent],
  imports: [
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    CommonModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [NavbarComponent, ExampleComponent, ThemeControllerComponent],
})
export class CoreModules {}
