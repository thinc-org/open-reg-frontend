import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { ExampleComponent } from './components/example/example.component';
import { FullLogoComponent } from './components/full-logo/full-logo.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ThemeControllerComponent } from './components/theme-controller/theme-controller.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ExampleComponent,
    ThemeControllerComponent,
    FullLogoComponent,
    PaginationComponent,
    EventCardComponent,
    ButtonComponent,
  ],
  imports: [
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    CommonModule,
    RouterModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [],
  exports: [
    NavbarComponent,
    ExampleComponent,
    ThemeControllerComponent,
    FullLogoComponent,
    PaginationComponent,
    EventCardComponent,
    ButtonComponent,
  ],
})
export class CoreModules {}
