import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, forwardRef } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { NgxStronglyTypedFormsModule } from 'ngx-strongly-typed-forms';
import localeTh from '@angular/common/locales/th';
// Localization
import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {
  HttpClient,
  HttpClientModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { GlobalErrorHandler } from './core/global-error-handler.service';
import { ServerErrorInterceptor } from './core/services/server-error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ApiModule } from './api/api.module';
import { environment } from 'src/environments/environment';
import { ApiInterceptor } from './core/services/api.interceptor';
import { MatSnackBarModule } from '@angular/material/snack-bar';

registerLocaleData(localeTh, 'th');

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    CoreModule,
    BrowserAnimationsModule,
    NgxStronglyTypedFormsModule,
    ApiModule.forRoot({ rootUrl: environment.apiUrl }),
    MatSnackBarModule,
  ],
  exports: [TranslateModule],
  providers: [
    TranslateService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: forwardRef(() => ApiInterceptor),
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: forwardRef(() => ServerErrorInterceptor),
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
