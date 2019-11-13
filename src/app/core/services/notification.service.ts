import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

class Notification {
  constructor(
    public id: number,
    public message: string,
    public type: NotificationType,
    public action = 'dismiss',
    public timeout = 5000
  ) {}
}

enum NotificationType {
  success = 0,
  error = 1,
}

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private message$ = new Subject<Notification>();
  private idx = 0;
  constructor() {}

  showSuccess(message: string, action?: string, timeout?: number): void {
    const notification = new Notification(
      ++this.idx,
      message,
      NotificationType.success,
      action,
      timeout
    );
    this.message$.next(notification);
    console.log(notification);
  }

  showError(message: string, action?: string, timeout?: number): void {
    // The second parameter is the text in the button.
    // In the third, we send in the css class for the snack bar.
    const notification = new Notification(
      ++this.idx,
      message,
      NotificationType.success,
      action,
      timeout
    );
    this.message$.next(notification);
    console.log(notification);
  }

  getObservable(): Observable<Notification> {
    return this.message$.asObservable();
  }
}
