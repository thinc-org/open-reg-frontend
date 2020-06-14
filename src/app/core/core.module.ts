import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExampleComponent } from './components/example/example.component';
import { ThemeControllerComponent } from './components/theme-controller/theme-controller.component';

@NgModule({
  declarations: [NavbarComponent, ExampleComponent, ThemeControllerComponent],
  imports: [],
  providers: [],
  bootstrap: [],
  exports: [NavbarComponent, ExampleComponent, ThemeControllerComponent],
})
export class CoreModules {}
