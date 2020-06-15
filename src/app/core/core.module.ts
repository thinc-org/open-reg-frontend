import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExampleComponent } from './components/example/example.component';
import { ThemeControllerComponent } from './components/theme-controller/theme-controller.component';
import { FullLogoComponent } from './components/full-logo/full-logo.component';

@NgModule({
  declarations: [NavbarComponent, ExampleComponent, ThemeControllerComponent, FullLogoComponent],
  imports: [MatToolbarModule],
  providers: [],
  bootstrap: [],
  exports: [NavbarComponent, ExampleComponent, ThemeControllerComponent],
})
export class CoreModules {}
