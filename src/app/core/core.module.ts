import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExampleComponent } from './components/example/example.component';
import { ThemeControllerComponent } from './components/theme-controller/theme-controller.component';
import { FullLogoComponent } from './components/full-logo/full-logo.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventTagComponent } from './components/event-tag/event-tag.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ExampleComponent,
    ThemeControllerComponent,
    FullLogoComponent,
    PaginationComponent,
    EventCardComponent,
    EventTagComponent,
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
    EventTagComponent,
  ],
})
export class CoreModules {}
