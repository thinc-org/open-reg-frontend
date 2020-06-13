import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [NavbarComponent, ExampleComponent],
  imports: [],
  providers: [],
  bootstrap: [],
  exports: [NavbarComponent, ExampleComponent],
})
export class CoreModules {}
