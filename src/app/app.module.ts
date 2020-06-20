/* eslint-disable @typescript-eslint/no-unused-vars */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ApiModule, BASE_PATH } from 'backend-client';
import { environment } from 'environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { MockApiService } from './core/services/mock-api.service';
import { CoreModules } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ApiModule,
    MatMenuModule,
    MatButtonModule,
    CoreModules,
  ],
  providers: [
    { provide: BASE_PATH, useValue: environment.basePath },
    // { provide: ApiService, useClass: MockApiService },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
