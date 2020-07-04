import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticateService } from '../services/authenticate.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authenticateService: AuthenticateService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const result = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authenticateService.getToken()}`,
      },
    });
    return next.handle(result);
  }
}
