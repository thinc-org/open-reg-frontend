import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, BASE_PATH, DefaultService } from 'src/backend-client';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MockApiService } from './core/services/mock-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, HttpClientModule, ApiModule],
  providers: [
    { provide: BASE_PATH, useValue: environment.basePath },
    { provide: DefaultService, useClass: MockApiService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
